import Link from 'next/link';

export default function RestaurantMenu() {
  const menuSections = [
    {
      name: 'Small Plates',
      description: 'Perfect for sharing or as a light start',
      items: [
        { name: 'Burrata', desc: 'Heritage tomatoes, basil oil, sourdough crisps', price: '£14', dietary: 'V' },
        { name: 'Beef Tartare', desc: 'Hand-cut fillet, egg yolk, capers, cornichons', price: '£16', dietary: null },
        { name: 'Grilled Octopus', desc: 'Chorizo, chickpeas, smoked paprika aioli', price: '£18', dietary: null },
        { name: 'Roasted Bone Marrow', desc: 'Parsley salad, capers, toasted sourdough', price: '£15', dietary: null },
        { name: 'Soup of the Day', desc: 'Ask your server for today\'s selection', price: '£9', dietary: 'V' },
      ],
    },
    {
      name: 'From the Grill',
      description: 'Cooked over oak and charcoal',
      items: [
        { name: '28-Day Aged Ribeye', desc: '350g, bone marrow butter, charred shallots', price: '£38', dietary: null },
        { name: 'Fillet Steak', desc: '250g, peppercorn sauce, triple-cooked chips', price: '£42', dietary: null },
        { name: 'Lamb Cutlets', desc: 'Herb crust, mint salsa verde, roasted garlic', price: '£34', dietary: null },
        { name: 'Whole Spatchcock Chicken', desc: 'Lemon, thyme, garlic butter (for two)', price: '£45', dietary: null },
        { name: 'Pork Tomahawk', desc: '500g, apple compote, crackling', price: '£32', dietary: null },
      ],
    },
    {
      name: 'Fish & Seafood',
      description: 'Daily catches from sustainable sources',
      items: [
        { name: 'Pan-Roasted Sea Bass', desc: 'Samphire, brown butter, crushed potatoes', price: '£32', dietary: null },
        { name: 'Whole Grilled Lobster', desc: 'Garlic butter, fries, mixed leaves', price: '£55', dietary: null },
        { name: 'Halibut', desc: 'Mussel velouté, leeks, crispy capers', price: '£36', dietary: null },
        { name: 'Seared Scallops', desc: 'Cauliflower purée, pancetta, hazelnut', price: '£28', dietary: null },
      ],
    },
    {
      name: 'Vegetarian',
      description: 'Plant-forward plates',
      items: [
        { name: 'Ember-Baked Cauliflower', desc: 'Whole roasted, tahini, pomegranate, almonds', price: '£18', dietary: 'VG' },
        { name: 'Wild Mushroom Risotto', desc: 'Porcini, truffle oil, parmesan crisp', price: '£22', dietary: 'V' },
        { name: 'Beetroot Wellington', desc: 'Goat\'s cheese, spinach, red wine jus', price: '£24', dietary: 'V' },
        { name: 'Grilled Aubergine', desc: 'Miso glaze, sesame, pickled ginger', price: '£19', dietary: 'VG' },
      ],
    },
    {
      name: 'Sides',
      description: 'The perfect accompaniments',
      items: [
        { name: 'Triple-Cooked Chips', desc: null, price: '£6', dietary: 'V' },
        { name: 'Truffle Mash', desc: null, price: '£7', dietary: 'V' },
        { name: 'Charred Tenderstem', desc: 'Garlic, chilli flakes', price: '£7', dietary: 'VG' },
        { name: 'House Salad', desc: 'Mixed leaves, herb dressing', price: '£5', dietary: 'VG' },
        { name: 'Creamed Spinach', desc: null, price: '£6', dietary: 'V' },
      ],
    },
    {
      name: 'Desserts',
      description: 'A sweet finale',
      items: [
        { name: 'Sticky Toffee Pudding', desc: 'Butterscotch sauce, clotted cream', price: '£10', dietary: 'V' },
        { name: 'Dark Chocolate Torte', desc: '70% Valrhona, raspberry coulis', price: '£11', dietary: 'V' },
        { name: 'Crème Brûlée', desc: 'Madagascan vanilla', price: '£9', dietary: 'V' },
        { name: 'Selection of British Cheeses', desc: 'Quince, crackers, grapes', price: '£14', dietary: 'V' },
        { name: 'Affogato', desc: 'Vanilla gelato, espresso, amaretto', price: '£8', dietary: 'V' },
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Our Menu</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Seasonal Flavours
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Our menu changes with the seasons, showcasing the best British produce
            cooked over open flames.
          </p>
        </div>
      </section>

      {/* Dietary Key */}
      <section className="bg-stone-900 py-6 border-y border-stone-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-900 text-green-400 flex items-center justify-center text-xs font-medium">V</span>
              <span className="text-stone-400">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-900 text-green-400 flex items-center justify-center text-xs font-medium">VG</span>
              <span className="text-stone-400">Vegan</span>
            </div>
            <div className="text-stone-500">
              Please inform us of any allergies or dietary requirements
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          {menuSections.map((section, i) => (
            <div key={i} className="mb-20 last:mb-0">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif text-white mb-2">{section.name}</h2>
                <p className="text-stone-500 text-sm">{section.description}</p>
              </div>

              <div className="space-y-6">
                {section.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-start gap-4 pb-6 border-b border-stone-800 last:border-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-medium">{item.name}</h3>
                        {item.dietary && (
                          <span className="w-5 h-5 rounded-full bg-green-900 text-green-400 flex items-center justify-center text-[10px] font-medium">
                            {item.dietary}
                          </span>
                        )}
                      </div>
                      {item.desc && (
                        <p className="text-stone-500 text-sm">{item.desc}</p>
                      )}
                    </div>
                    <span className="text-amber-500 font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wine Note */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-4xl mb-6 block">🍷</span>
          <h2 className="text-2xl font-serif text-white mb-4">Wine Pairings</h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-6">
            Our sommelier has curated a selection of wines to complement each dish.
            Ask your server about our wine pairing options.
          </p>
          <p className="text-amber-500 text-sm">
            5-course tasting menu with wine pairing: £95 per person
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Ready to Dine?</h2>
          <p className="text-stone-400 mb-8">
            Book your table and experience these flavours for yourself.
          </p>
          <Link
            href="/demos/restaurant/reservations"
            className="inline-block bg-amber-600 text-white px-8 py-4 text-sm tracking-wide uppercase hover:bg-amber-700 transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </>
  );
}
