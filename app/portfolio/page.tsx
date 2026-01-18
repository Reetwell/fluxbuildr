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
              <div className="h-56 relative overflow-hidden bg-gray-100">
                <div className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50">
                  <iframe
                    src="/demos/plumber"
                    className="w-full h-[900px] pointer-events-none"
                    title="Swift Plumbing Demo Preview"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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

            {/* Restaurant Demo */}
            <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-56 relative overflow-hidden bg-stone-900">
                <div className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50">
                  <iframe
                    src="/demos/restaurant"
                    className="w-full h-[900px] pointer-events-none"
                    title="Ember & Oak Restaurant Demo Preview"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">Demo Template</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Restaurant</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Restaurant Website</h3>
                <p className="text-gray-600 mb-4">
                  Elegant restaurant website with menu showcase, reservation system, and atmospheric design. Perfect for bistros and fine dining.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    href="/demos/restaurant"
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
