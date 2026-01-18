export default function RestaurantReservations() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Reservations</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Book Your Table
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            We recommend booking in advance, especially for weekends.
            For parties of 8 or more, please call us directly.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-stone-950 rounded-xl p-8">
              <h2 className="text-2xl font-serif text-white mb-6">Make a Reservation</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">Date</label>
                    <input
                      type="date"
                      className="w-full bg-stone-900 border border-stone-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">Time</label>
                    <select className="w-full bg-stone-900 border border-stone-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600 transition-colors appearance-none">
                      <option value="">Select time</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-400 text-sm mb-2">Number of Guests</label>
                  <select className="w-full bg-stone-900 border border-stone-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600 transition-colors appearance-none">
                    <option value="">Select guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8+ Guests (Please call)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-stone-900 border border-stone-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-stone-900 border border-stone-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-stone-900 border border-stone-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-stone-400 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-stone-900 border border-stone-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                    placeholder="07123 456789"
                  />
                </div>

                <div>
                  <label className="block text-stone-400 text-sm mb-2">Special Requests (Optional)</label>
                  <textarea
                    rows={3}
                    className="w-full bg-stone-900 border border-stone-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600 transition-colors resize-none"
                    placeholder="Dietary requirements, celebrations, seating preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-4 rounded-lg text-sm tracking-wide uppercase hover:bg-amber-700 transition-colors"
                >
                  Request Reservation
                </button>

                <p className="text-stone-500 text-xs text-center">
                  You will receive a confirmation email within 24 hours
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-10">
              {/* Contact */}
              <div>
                <h3 className="text-xl font-serif text-white mb-6">Contact Us Directly</h3>
                <div className="space-y-4">
                  <a
                    href="tel:02071234567"
                    className="flex items-center gap-4 text-stone-400 hover:text-amber-500 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center group-hover:bg-stone-700 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">020 7123 4567</p>
                      <p className="text-sm">Available during opening hours</p>
                    </div>
                  </a>

                  <a
                    href="mailto:reservations@emberandoak.co.uk"
                    className="flex items-center gap-4 text-stone-400 hover:text-amber-500 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center group-hover:bg-stone-700 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">reservations@emberandoak.co.uk</p>
                      <p className="text-sm">We respond within 24 hours</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="text-xl font-serif text-white mb-6">Opening Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-stone-400">
                    <span>Monday</span>
                    <span className="text-amber-500">Closed</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Tuesday - Thursday</span>
                    <span className="text-white">5:30pm - 10:00pm</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Friday - Saturday</span>
                    <span className="text-white">5:30pm - 11:00pm</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Sunday</span>
                    <span className="text-white">12:00pm - 8:00pm</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xl font-serif text-white mb-6">Find Us</h3>
                <div className="bg-stone-800 rounded-lg h-48 flex items-center justify-center mb-4">
                  <span className="text-stone-600 text-sm">Google Map</span>
                </div>
                <address className="not-italic text-stone-400 text-sm">
                  <p className="text-white font-medium mb-1">Ember & Oak</p>
                  <p>12 High Street</p>
                  <p>London, W1K 4AB</p>
                  <p className="mt-2 text-amber-500">Nearest tube: Bond Street</p>
                </address>
              </div>

              {/* Policy */}
              <div className="bg-stone-800/50 rounded-lg p-6">
                <h3 className="text-white font-medium mb-3">Cancellation Policy</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  We kindly ask for 24 hours notice for cancellations or changes to your booking.
                  For groups of 6 or more, we require a card on file and a 48-hour cancellation notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-4xl mb-6 block">🥂</span>
          <h2 className="text-3xl font-serif text-white mb-4">Private Dining</h2>
          <p className="text-stone-400 max-w-2xl mx-auto mb-6">
            Our private dining room seats up to 16 guests, perfect for special occasions,
            business dinners, or intimate celebrations. Custom menus available.
          </p>
          <a
            href="mailto:events@emberandoak.co.uk"
            className="inline-block border border-amber-600 text-amber-500 px-8 py-4 text-sm tracking-wide uppercase hover:bg-amber-600 hover:text-white transition-colors"
          >
            Enquire About Private Dining
          </a>
        </div>
      </section>
    </>
  );
}
