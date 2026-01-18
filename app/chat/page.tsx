'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { processChat, ChatResponse } from '@/lib/chatEngine';
import { Template } from '@/data/templates';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<ChatResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial query from sessionStorage
    const initialQuery = sessionStorage.getItem('initialQuery');
    if (initialQuery) {
      sessionStorage.removeItem('initialQuery');
      handleInitialQuery(initialQuery);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleInitialQuery = (query: string) => {
    setMessages([{ role: 'user', content: query }]);

    // Simulate thinking delay
    setTimeout(() => {
      const result = processChat(query);
      setResponse(result);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: result.message },
      ]);
      setIsLoading(false);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);

    // Process new query
    setTimeout(() => {
      const result = processChat(userMessage);
      setResponse(result);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: result.message },
      ]);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="min-h-screen py-8"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Your Website Preview</h1>
          <div className="w-16" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chat Section */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col h-[600px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {isLoading ? (
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <span>Analyzing your request...</span>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a follow-up question..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="bg-primary-600 text-white px-5 py-3 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {response && (
              <>
                {/* Template Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">Recommended Template</h2>
                  </div>
                  <TemplatePreview template={response.template} />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-1">{response.template.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{response.template.description}</p>
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {response.template.style}
                    </span>
                    {response.template.hasDemo && response.template.demoUrl && (
                      <Link
                        href={response.template.demoUrl}
                        target="_blank"
                        className="mt-4 flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Live Demo
                      </Link>
                    )}
                  </div>
                </motion.div>

                {/* Price Estimate */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6"
                >
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Price Estimate</h2>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900">{response.priceEstimate}</span>
                    {response.priceValue && <span className="text-gray-500">one-time</span>}
                  </div>
                  <div className="space-y-2 mb-6">
                    {response.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full bg-primary-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </>
            )}

            {!response && !isLoading && (
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <p className="text-gray-500">
                  Describe your website idea to see template recommendations and pricing.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Template Preview Component
function TemplatePreview({ template }: { template: Template }) {
  return (
    <div
      className="h-48 flex items-center justify-center"
      style={{ backgroundColor: template.color + '15' }}
    >
      <div className="text-center">
        <div
          className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center"
          style={{ backgroundColor: template.color }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-sm font-medium" style={{ color: template.color }}>
          Preview
        </p>
      </div>
    </div>
  );
}
