import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Swift Plumbing | Professional Plumbing Services',
  description: 'Reliable plumbing services for your home. Emergency repairs, boiler installation, bathroom fitting. Available 24/7.',
};

export default function PlumberDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="bg-primary-600 text-white text-center py-2 text-sm">
        <span className="opacity-75">This is a demo website built by</span>{' '}
        <Link href="/" className="underline font-medium hover:opacity-90">
          Fluxbuildr
        </Link>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/demos/plumber" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Swift Plumbing</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/demos/plumber" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/demos/plumber/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="/demos/plumber/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/demos/plumber/contact" className="bg-sky-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-sky-600 transition-colors">
                Get a Quote
              </Link>
            </div>

            <a href="tel:01onal234567" className="md:hidden bg-sky-500 text-white px-4 py-2 rounded-lg font-medium text-sm">
              Call Now
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Swift Plumbing</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Professional plumbing services you can trust. Available 24/7 for emergencies. Serving the local area for over 15 years.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2 text-gray-400">
                <Link href="/demos/plumber/services" className="hover:text-white transition-colors">Services</Link>
                <Link href="/demos/plumber/about" className="hover:text-white transition-colors">About Us</Link>
                <Link href="/demos/plumber/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex flex-col gap-2 text-gray-400">
                <p>01onal 234 567</p>
                <p>info@swiftplumbing.co.uk</p>
                <p>Mon-Sat: 8am - 6pm</p>
                <p className="text-sky-400">24/7 Emergency</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Swift Plumbing. All rights reserved.</p>
            <p className="mt-2">
              Website by{' '}
              <Link href="/" className="text-sky-400 hover:underline">
                Fluxbuildr
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
