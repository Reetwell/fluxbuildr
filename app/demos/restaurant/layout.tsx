import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ember & Oak | Modern British Bistro',
  description: 'Experience modern British cuisine in a warm, intimate setting. Fresh, seasonal ingredients crafted with passion.',
};

export default function RestaurantDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-950">
      {/* Demo Banner */}
      <div className="bg-primary-600 text-white text-center py-2 text-sm">
        <span className="opacity-75">This is a demo website built by</span>{' '}
        <Link href="/" className="underline font-medium hover:opacity-90">
          Fluxbuildr
        </Link>
      </div>

      {/* Header */}
      <header className="absolute top-8 left-0 right-0 z-50">
        <nav className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/demos/restaurant" className="text-2xl font-serif text-white tracking-wide">
              Ember <span className="text-amber-500">&</span> Oak
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/demos/restaurant" className="text-white/80 hover:text-white transition-colors text-sm tracking-wide uppercase">
                Home
              </Link>
              <Link href="/demos/restaurant/menu" className="text-white/80 hover:text-white transition-colors text-sm tracking-wide uppercase">
                Menu
              </Link>
              <Link href="/demos/restaurant/about" className="text-white/80 hover:text-white transition-colors text-sm tracking-wide uppercase">
                About
              </Link>
              <Link href="/demos/restaurant/reservations" className="bg-amber-600 text-white px-5 py-2.5 rounded text-sm tracking-wide uppercase hover:bg-amber-700 transition-colors">
                Reserve a Table
              </Link>
            </div>

            <Link href="/demos/restaurant/reservations" className="md:hidden bg-amber-600 text-white px-4 py-2 rounded text-sm">
              Book
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif text-white mb-4">
                Ember <span className="text-amber-500">&</span> Oak
              </h3>
              <p className="text-stone-400 max-w-md leading-relaxed">
                Modern British cuisine crafted with passion. Seasonal ingredients, timeless flavours, unforgettable moments.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 text-sm tracking-wide uppercase">Hours</h4>
              <div className="space-y-2 text-stone-400 text-sm">
                <p>Tuesday - Thursday</p>
                <p className="text-white">5:30pm - 10:00pm</p>
                <p className="mt-3">Friday - Saturday</p>
                <p className="text-white">5:30pm - 11:00pm</p>
                <p className="mt-3">Sunday</p>
                <p className="text-white">12:00pm - 8:00pm</p>
                <p className="mt-3 text-amber-500">Closed Mondays</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 text-sm tracking-wide uppercase">Contact</h4>
              <div className="space-y-2 text-stone-400 text-sm">
                <p>12 High Street</p>
                <p>London, W1K 4AB</p>
                <p className="mt-3">
                  <a href="tel:02071234567" className="text-white hover:text-amber-500 transition-colors">
                    020 7123 4567
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@emberandoak.co.uk" className="text-white hover:text-amber-500 transition-colors">
                    hello@emberandoak.co.uk
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
            <p>&copy; 2025 Ember & Oak. All rights reserved.</p>
            <p className="mt-2">
              Website by{' '}
              <Link href="/" className="text-amber-500 hover:underline">
                Fluxbuildr
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
