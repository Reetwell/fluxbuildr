'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AISearchInput() {
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSubmitting(true);

    // Store query in sessionStorage for the chat page
    sessionStorage.setItem('initialQuery', query);

    // Navigate to chat page
    setTimeout(() => {
      router.push('/chat');
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit}>
        <div className={`relative transition-all duration-300 ${isSubmitting ? 'scale-105 opacity-0' : ''}`}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe your dream website..."
            className="w-full px-6 py-5 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all shadow-sm hover:shadow-md"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={!query.trim() || isSubmitting}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary-600 text-white p-3 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-gray-500 text-sm">
        Try: &quot;I need a website for my plumbing business&quot; or &quot;Restaurant with online menu&quot;
      </p>
    </motion.div>
  );
}
