import Link from 'next/link';

export default function RestaurantHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-6">Modern British Bistro</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Where Fire Meets<br />
            <span className="text-amber-500">Flavour</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Seasonal ingredients, open-flame cooking, and a passion for craft.
            Join us for an unforgettable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demos/restaurant/reservations"
              className="bg-amber-600 text-white px-8 py-4 text-sm tracking-wide uppercase hover:bg-amber-700 transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              href="/demos/restaurant/menu"
              className="border border-white/30 text-white px-8 py-4 text-sm tracking-wide uppercase hover:bg-white/10 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: '🔥',
                title: 'Open Fire Cooking',
                desc: 'Our dishes are crafted over open flames, bringing out rich, smoky flavours in every bite.',
              },
              {
                icon: '🌿',
                title: 'Seasonal & Local',
                desc: 'We work with local farmers and producers to bring you the freshest seasonal ingredients.',
              },
              {
                icon: '🍷',
                title: 'Curated Wine List',
                desc: 'Hand-selected wines from boutique vineyards, perfectly paired with our menu.',
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-white font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-stone-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">From Our Kitchen</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Signature Dishes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Flame-Grilled Ribeye',
                desc: '28-day aged British beef, bone marrow butter, charred shallots',
                price: '£38',
              },
              {
                name: 'Pan-Roasted Sea Bass',
                desc: 'Wild caught, samphire, brown butter, crushed new potatoes',
                price: '£32',
              },
              {
                name: 'Ember-Baked Cauliflower',
                desc: 'Whole roasted, tahini, pomegranate, toasted almonds (V)',
                price: '£18',
              },
            ].map((dish, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] bg-stone-800 rounded-lg mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-stone-600 text-sm">Dish Photo</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-serif text-xl">{dish.name}</h3>
                  <span className="text-amber-500 font-medium">{dish.price}</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/demos/restaurant/menu"
              className="inline-block border border-amber-600 text-amber-500 px-8 py-4 text-sm tracking-wide uppercase hover:bg-amber-600 hover:text-white transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">The Experience</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                More Than a Meal
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                Step into a space where rustic charm meets contemporary elegance.
                Exposed brick, warm lighting, and an open kitchen create an atmosphere
                that&apos;s intimate yet vibrant.
              </p>
              <p className="text-stone-400 leading-relaxed mb-8">
                Whether you&apos;re celebrating a special occasion or enjoying a quiet
                dinner for two, every visit to Ember & Oak is designed to be memorable.
              </p>
              <Link
                href="/demos/restaurant/about"
                className="text-amber-500 text-sm tracking-wide uppercase hover:text-amber-400 transition-colors inline-flex items-center gap-2"
              >
                Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-stone-800 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-stone-600 text-sm">
                  Interior Photo
                </div>
              </div>
              <div className="aspect-[3/4] bg-stone-800 rounded-lg overflow-hidden mt-8">
                <div className="w-full h-full flex items-center justify-center text-stone-600 text-sm">
                  Bar Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <svg className="w-12 h-12 text-amber-500/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-8">
            &ldquo;An absolute gem. The ribeye was cooked to perfection and the atmosphere
            was wonderfully intimate. Already planning our next visit.&rdquo;
          </blockquote>
          <cite className="text-stone-400 not-italic">
            <span className="text-white">Sarah M.</span> — The Guardian Food Review
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-stone-950 to-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Join Us Tonight
          </h2>
          <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
            Experience the warmth of Ember & Oak. Book your table now and
            let us create something special for you.
          </p>
          <Link
            href="/demos/restaurant/reservations"
            className="inline-block bg-amber-600 text-white px-10 py-5 text-sm tracking-wide uppercase hover:bg-amber-700 transition-colors"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </>
  );
}
