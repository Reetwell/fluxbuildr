export default function PlumberAbout() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Family-run plumbing business serving the local community for over 15 years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Swift Plumbing was founded in 2009 with a simple mission: to provide honest, reliable plumbing services at fair prices. What started as a one-man operation has grown into a trusted local business with a team of skilled engineers.
                </p>
                <p>
                  We believe in doing things the right way — no cutting corners, no hidden costs, just quality workmanship you can rely on. Every job, big or small, gets the same attention to detail.
                </p>
                <p>
                  Over the years, we&apos;ve built our reputation on word-of-mouth recommendations from satisfied customers. That trust means everything to us, and we work hard to maintain it with every job we complete.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 rounded-2xl h-80 flex items-center justify-center">
              <span className="text-white/50 text-lg">Team Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '5,000+', label: 'Jobs Completed' },
              { number: '4.9', label: 'Average Rating' },
              { number: '24/7', label: 'Emergency Service' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-sky-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Credentials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Gas Safe Registered', desc: 'All our engineers are Gas Safe registered for boiler and heating work.' },
              { title: 'Fully Insured', desc: '£2 million public liability insurance for your complete peace of mind.' },
              { title: 'Checkatrade Approved', desc: 'Vetted and reviewed on Checkatrade with 9.8/10 rating.' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Areas We Cover</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We provide plumbing services across the local area and surrounding towns within a 15-mile radius.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Town Centre', 'Northside', 'Southside', 'Eastborough', 'Westfield', 'Greendale', 'Riverside', 'Hillcrest'].map((area, i) => (
              <span key={i} className="bg-gray-800 px-4 py-2 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
