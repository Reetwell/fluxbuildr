import Link from 'next/link';

export default function PlumberServices() {
  const services = [
    {
      icon: '🚿',
      title: 'Bathroom Installation',
      desc: 'Complete bathroom fitting and refurbishment. From design to completion, we handle everything.',
      features: ['Full bathroom design', 'Tiling and flooring', 'All plumbing work', 'Electrical work (Part P)'],
      price: 'From £2,500',
    },
    {
      icon: '🔥',
      title: 'Boiler Services',
      desc: 'Gas Safe registered engineers for all boiler work. Installation, repairs and annual servicing.',
      features: ['New boiler installation', 'Boiler repairs', 'Annual servicing', 'Landlord certificates'],
      price: 'From £75',
    },
    {
      icon: '🚰',
      title: 'Emergency Repairs',
      desc: '24/7 emergency call-outs for burst pipes, leaks and blockages. Fast response guaranteed.',
      features: ['Burst pipes', 'Water leaks', 'Blocked drains', 'No hot water'],
      price: 'Call for quote',
    },
    {
      icon: '🛁',
      title: 'Tap & Toilet Repairs',
      desc: 'Quick fixes for everyday plumbing problems. Dripping taps, running toilets and more.',
      features: ['Tap repairs & replacement', 'Toilet repairs', 'Cistern issues', 'Washer replacement'],
      price: 'From £45',
    },
    {
      icon: '🏠',
      title: 'Central Heating',
      desc: 'Keep your home warm and efficient. Radiator installation, repairs and power flushing.',
      features: ['Radiator installation', 'Power flushing', 'Heating repairs', 'Thermostat fitting'],
      price: 'From £150',
    },
    {
      icon: '🔧',
      title: 'General Plumbing',
      desc: 'All domestic plumbing work covered. No job too small — we&apos;re here to help.',
      features: ['Pipe repairs', 'Washing machine install', 'Dishwasher install', 'Outside taps'],
      price: 'From £45',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Professional plumbing services for every need. All work guaranteed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-sky-600">{service.price}</span>
                  <Link
                    href="/demos/plumber/contact"
                    className="text-sky-600 font-medium hover:text-sky-700"
                  >
                    Get a quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-sky-100 mb-8">Give us a call and we&apos;ll help diagnose the problem</p>
          <a
            href="tel:01234567890"
            className="inline-block bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-50 transition-colors"
          >
            Call 01234 567 890
          </a>
        </div>
      </section>
    </>
  );
}
