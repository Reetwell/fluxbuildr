import Link from 'next/link';

export default function RestaurantAbout() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            A Labour of Love
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            What began as a dream became a place where food, fire, and friendship come together.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-stone-800 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-stone-600">
                Chef Photo
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Meet the Chef
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                Chef Marcus Webb spent over a decade honing his craft in kitchens across London,
                Paris, and Copenhagen before opening Ember & Oak in 2019. His philosophy is simple:
                let quality ingredients shine.
              </p>
              <p className="text-stone-400 leading-relaxed mb-6">
                &ldquo;Cooking over fire is the oldest technique we have,&rdquo; Marcus explains.
                &ldquo;There&apos;s something primal about it. The smoke, the char, the way heat transforms
                simple ingredients into something extraordinary.&rdquo;
              </p>
              <p className="text-stone-400 leading-relaxed">
                After years of fine dining, Marcus wanted to create a space that felt welcoming
                rather than intimidating — where exceptional food meets genuine hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">What We Believe</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Seasonal First',
                desc: 'We build our menu around what\'s in season, not the other way around. This means our dishes change throughout the year, always showcasing ingredients at their peak.',
              },
              {
                title: 'Know Your Farmer',
                desc: 'We work directly with small producers and farmers across Britain. Every ingredient has a story, and we love sharing those stories with our guests.',
              },
              {
                title: 'Zero Waste',
                desc: 'From root to leaf, we use every part of our produce. Vegetable trimmings become stocks, stale bread becomes croutons. Nothing goes to waste.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 border border-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-amber-500 text-2xl font-serif">{i + 1}</span>
                </div>
                <h3 className="text-white font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                The Space
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                Housed in a converted Victorian warehouse, Ember & Oak celebrates the building&apos;s
                industrial heritage while adding warmth and intimacy.
              </p>
              <p className="text-stone-400 leading-relaxed mb-6">
                Exposed brick walls, reclaimed timber tables, and soft candlelight create
                an atmosphere that&apos;s romantic yet relaxed. The open kitchen sits at the
                heart of the room, where you can watch flames dance and dishes come to life.
              </p>
              <p className="text-stone-400 leading-relaxed">
                Whether you&apos;re at a cosy table for two or our chef&apos;s counter overlooking
                the kitchen, every seat offers a unique perspective on the Ember & Oak experience.
              </p>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-stone-800 rounded-lg flex items-center justify-center text-stone-600 text-sm">
                Interior
              </div>
              <div className="aspect-square bg-stone-800 rounded-lg flex items-center justify-center text-stone-600 text-sm">
                Kitchen
              </div>
              <div className="aspect-square bg-stone-800 rounded-lg flex items-center justify-center text-stone-600 text-sm">
                Bar
              </div>
              <div className="aspect-square bg-stone-800 rounded-lg flex items-center justify-center text-stone-600 text-sm">
                Terrace
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-12">Awards & Press</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Michelin Bib Gourmand', year: '2023' },
              { title: 'Time Out Love Local', year: '2022' },
              { title: 'Observer Food Monthly', year: '2021' },
              { title: 'Harden\'s Top 100', year: '2023' },
            ].map((award, i) => (
              <div key={i}>
                <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{award.title}</h3>
                <p className="text-stone-500 text-sm">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-white mb-4">The Team</h2>
            <p className="text-stone-400">The people who make the magic happen</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Marcus Webb', role: 'Head Chef & Owner' },
              { name: 'Elena Costa', role: 'Sous Chef' },
              { name: 'James Thornton', role: 'Restaurant Manager' },
              { name: 'Sophie Laurent', role: 'Sommelier' },
            ].map((person, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square bg-stone-800 rounded-lg mb-4 flex items-center justify-center text-stone-600 text-sm">
                  Photo
                </div>
                <h3 className="text-white font-medium">{person.name}</h3>
                <p className="text-stone-500 text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Come Visit Us</h2>
          <p className="text-stone-400 mb-8">
            We&apos;d love to welcome you to Ember & Oak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demos/restaurant/reservations"
              className="bg-amber-600 text-white px-8 py-4 text-sm tracking-wide uppercase hover:bg-amber-700 transition-colors"
            >
              Book a Table
            </Link>
            <Link
              href="/demos/restaurant/menu"
              className="border border-white/30 text-white px-8 py-4 text-sm tracking-wide uppercase hover:bg-white/10 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
