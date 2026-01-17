import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Fluxbuildr',
  description: 'Get in touch with Fluxbuildr. Tell us about your project and we\'ll get back to you within 24 hours.',
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Tell us about your project. We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                    What are you looking for?
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white appearance-none cursor-pointer text-gray-900"
                      required
                    >
                      <option value="" className="text-gray-500">Select a service</option>
                      <option value="landing">Landing Page (£150)</option>
                      <option value="multipage">Multi-Page Site (£300)</option>
                      <option value="custom">Custom Project</option>
                      <option value="other">Something else</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="What does your business do? What kind of website do you need?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We&apos;ll never share your information with anyone else.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Other ways to reach us
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:hello@fluxbuildr.co.uk"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      hello@fluxbuildr.co.uk
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter / X
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-8 border border-gray-200 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                    <span>We&apos;ll review your message and get back to you</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                    <span>We&apos;ll have a quick chat to understand your needs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                    <span>If we&apos;re a good fit, we&apos;ll get started on your project</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
