import Link from 'next/link';

export default function PlumberHome() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                24/7 Emergency Call-Outs
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Professional Plumbing Services You Can Trust
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From leaky taps to full bathroom installations. Fast, reliable service with no hidden costs. Serving the local area for over 15 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01234567890"
                  className="bg-sky-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-600 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01onal 234 567
                </a>
                <Link
                  href="/demos/plumber/contact"
                  className="border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-colors text-center"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-sky-500 rounded-2xl h-80 flex items-center justify-center">
                <svg className="w-32 h-32 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              {/* Trust Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Gas Safe Registered</p>
                  <p className="text-sm text-gray-500">Fully Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">No Hidden Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">Local & Reliable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Whatever your plumbing needs, we&apos;ve got you covered</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🚿', title: 'Bathroom Installation', desc: 'Complete bathroom fitting and refurbishment services.' },
              { icon: '🔥', title: 'Boiler Services', desc: 'Installation, repairs and annual servicing. Gas Safe registered.' },
              { icon: '🚰', title: 'Emergency Repairs', desc: 'Burst pipes, leaks and blockages. 24/7 call-outs available.' },
              { icon: '🛁', title: 'Tap & Toilet Repairs', desc: 'Dripping taps, running toilets and general repairs.' },
              { icon: '🏠', title: 'Central Heating', desc: 'Radiator installation, power flushing and heating repairs.' },
              { icon: '🔧', title: 'General Plumbing', desc: 'All domestic plumbing work. No job too small.' },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-sky-200 transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/demos/plumber/services"
              className="text-sky-600 font-semibold hover:text-sky-700 inline-flex items-center gap-2"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Swift Plumbing?</h2>
              <div className="space-y-6">
                {[
                  { title: '15+ Years Experience', desc: 'Trusted by hundreds of local homeowners' },
                  { title: 'Fixed Price Quotes', desc: 'No surprises — you know the cost upfront' },
                  { title: 'Fully Guaranteed Work', desc: '12-month guarantee on all our work' },
                  { title: 'Clean & Tidy', desc: 'We always leave your home spotless' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sky-500 rounded-2xl h-80 flex items-center justify-center">
              <span className="text-white/50 text-lg">Team Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'Brilliant service! Fixed our boiler the same day we called. Very professional and reasonably priced.', rating: 5 },
              { name: 'James T.', text: 'Used Swift for our bathroom renovation. Excellent work, finished on time and on budget. Highly recommend!', rating: 5 },
              { name: 'Emma L.', text: 'Emergency call-out for a burst pipe at 10pm. They were here within an hour. Lifesavers!', rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;{review.text}&rdquo;</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sky-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Plumber?</h2>
          <p className="text-xl text-sky-100 mb-8">Get in touch for a free, no-obligation quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01234567890"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <Link
              href="/demos/plumber/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-700 transition-colors border-2 border-sky-400"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
