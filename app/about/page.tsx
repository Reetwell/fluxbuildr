import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Fluxbuildr',
  description: 'Learn about Fluxbuildr - modern web design for businesses that want to stand out.',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Fluxbuildr
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              We believe every business deserves a website that works. Not just looks good—actually helps you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why we exist
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Too many businesses are stuck with outdated websites that don&apos;t represent the quality of their work. Or worse—no website at all.
                </p>
                <p>
                  We started Fluxbuildr to change that. Modern, professional websites shouldn&apos;t cost thousands of pounds or take months to build.
                </p>
                <p>
                  Our mission is simple: help businesses look as good online as they are in real life. Quality design, fair prices, no nonsense.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
              <blockquote className="text-2xl font-medium text-gray-900">
                &ldquo;Your website should work as hard as you do.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What we believe in
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We don&apos;t cut corners. Every website we build is crafted with attention to detail, clean code, and modern design principles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                Great websites shouldn&apos;t break the bank. We keep our prices honest and our process efficient so you get more value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clear Communication</h3>
              <p className="text-gray-600">
                No jargon, no confusion. We explain things clearly and keep you informed every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What makes us different
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">We focus on results</h3>
                  <p className="text-gray-600">
                    A pretty website means nothing if it doesn&apos;t help your business. We design with purpose—to convert visitors into customers.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">We keep it simple</h3>
                  <p className="text-gray-600">
                    No complicated processes or endless meetings. Tell us what you need, we build it, you approve it, it goes live.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">We actually care</h3>
                  <p className="text-gray-600">
                    Your success is our success. We&apos;re not here to take your money and disappear—we want to build something you&apos;re proud of.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Ready to give your business the website it deserves?
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
