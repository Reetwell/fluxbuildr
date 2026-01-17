import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Fluxbuildr',
  description: 'Web design services for businesses. Landing pages, multi-page sites, and custom projects at affordable prices.',
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Services & Pricing
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Clear pricing. No surprises. Quality websites built to help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Landing Page */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Landing Page</h3>
              <p className="text-gray-600 mb-6">Perfect for promoting a product, service, or event.</p>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                £150
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Single page design</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Mobile responsive</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Contact form</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">SEO basics</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Multi-Page Site */}
            <div className="bg-white p-8 rounded-2xl border-2 border-primary-500 relative">
              <div className="absolute -top-3 left-6 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Multi-Page Site</h3>
              <p className="text-gray-600 mb-6">Full website for established businesses.</p>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                £300
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">3-5 custom pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Mobile responsive</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Contact form</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">SEO optimised</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Google Maps integration</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Custom Project */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Project</h3>
              <p className="text-gray-600 mb-6">For bigger or more complex requirements.</p>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                Get a Quote
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">E-commerce / online shops</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Booking systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Website redesigns</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From idea to launch in four simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '1',
                title: 'Describe',
                desc: 'Tell us about your business, your goals, and what you need from your website. We\'ll listen and ask the right questions.',
              },
              {
                num: '2',
                title: 'Design',
                desc: 'We create a custom design tailored specifically to your business. Modern, clean, and built to convert visitors.',
              },
              {
                num: '3',
                title: 'Review',
                desc: 'You review the design and give feedback. We refine and adjust until you\'re completely happy with the result.',
              },
              {
                num: '4',
                title: 'Launch',
                desc: 'Your new website goes live. We handle the technical setup and make sure everything works perfectly.',
              },
            ].map((step) => (
              <div key={step.num} className="bg-white p-6 rounded-xl">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does it take to build a website?',
                a: 'Most projects are completed within 1-2 weeks, depending on the complexity and how quickly you can provide content and feedback.',
              },
              {
                q: 'Do I need to provide content?',
                a: 'You\'ll need to provide the core information about your business (services, contact details, etc.). We can help with writing and refining the copy if needed.',
              },
              {
                q: 'What about hosting and domain?',
                a: 'We can help you set up hosting and purchase a domain. These are typically paid separately on a yearly basis.',
              },
              {
                q: 'Can I update the website myself?',
                a: 'Yes! We can set up your site with an easy-to-use content management system, or provide training on how to make basic updates.',
              },
              {
                q: 'What if I need changes after launch?',
                a: 'Minor tweaks are included. For larger changes or ongoing updates, we can discuss a maintenance arrangement.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
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
            Tell us about your project and we&apos;ll get back to you within 24 hours.
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
