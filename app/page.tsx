import Link from 'next/link';
import AISearchInput from '@/components/AISearchInput';

export default function Home() {
  return (
    <>
      {/* Hero Section with AI Search */}
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Websites that work.
            <span className="text-primary-600"> Built for you.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Tell us about your business and get an instant preview of your perfect website.
          </p>
          <AISearchInput />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What we build
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple pricing. Quality results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Landing Page */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary-200 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Landing Page</h3>
              <p className="text-gray-600 mb-4">Single page website perfect for promoting a product, service, or event.</p>
              <p className="text-2xl font-bold text-gray-900">£150</p>
            </div>

            {/* Multi-Page Site */}
            <div className="bg-white p-8 rounded-2xl border-2 border-primary-500 relative">
              <div className="absolute -top-3 left-6 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Page Site</h3>
              <p className="text-gray-600 mb-4">Full business website with 3-5 pages. Perfect for local businesses.</p>
              <p className="text-2xl font-bold text-gray-900">£300</p>
            </div>

            {/* Custom Project */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary-200 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Project</h3>
              <p className="text-gray-600 mb-4">Need something bigger? E-commerce, booking systems, or complex builds.</p>
              <p className="text-2xl font-bold text-gray-900">Get a Quote</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
            >
              Learn more about our services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple process. No hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Describe', desc: 'Tell us what you need. Your vision, your goals.' },
              { num: '02', title: 'Design', desc: 'We create a custom design tailored to your business.' },
              { num: '03', title: 'Review', desc: 'You review it. We refine until it\'s perfect.' },
              { num: '04', title: 'Launch', desc: 'Your new website goes live. Ready for business.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-5xl font-bold text-primary-100 mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let&apos;s build something great together.
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
