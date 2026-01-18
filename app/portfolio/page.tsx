import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Fluxbuildr',
  description: 'View our web design portfolio - examples of websites we\'ve built for businesses.',
};

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Work
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Real projects. Real results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Plumber Demo */}
            <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-56 bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-lg">Swift Plumbing</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">Demo Template</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Trades</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plumber Website</h3>
                <p className="text-gray-600 mb-4">
                  Professional plumbing website with emergency call-outs, service listings, trust badges, and contact forms. Built to generate leads.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    href="/demos/plumber"
                    target="_blank"
                    className="flex-1 bg-gray-900 text-white text-center py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    View Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 border-2 border-gray-200 text-gray-900 text-center py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Get This Style
                  </Link>
                </div>
              </div>
            </div>

            {/* More Coming Soon */}
            <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">More Coming Soon</h3>
                <p className="text-gray-500 text-sm">New templates added regularly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What you can expect
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here&apos;s what we deliver on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Design</h3>
              <p className="text-gray-600">Clean, professional layouts that look great on any device.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Performance</h3>
              <p className="text-gray-600">Optimised for speed so your visitors don&apos;t wait around.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Ready</h3>
              <p className="text-gray-600">Built with search engines in mind so customers can find you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be one of our first clients
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Get a website that sets you apart from the competition.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
