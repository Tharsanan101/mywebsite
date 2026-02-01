import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 z-50 px-4 py-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-purple-400 transition">
            Klever Books
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <Link href="/about" className="hover:text-purple-400 transition">About</Link>
            <Link href="/writing" className="hover:text-purple-400 transition">Writing</Link>
            <Link href="/contact" className="hover:text-purple-400 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Small Businesses with Expert Bookkeeping Solutions
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            At KleverBooks.com, we make bookkeeping effortless, accurate, and cost-effective. Our expert solutions help small businesses stay financially organized, so they can focus on growth and success.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition">
              Learn About Us
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-gray-400 hover:border-purple-400 rounded text-white font-semibold transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="px-4 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded">
              <h4 className="text-xl font-semibold mb-2">Bookkeeping</h4>
              <p className="text-gray-400">Accurate transaction recording and financial organization tailored for your business.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded">
              <h4 className="text-xl font-semibold mb-2">Financial Reporting</h4>
              <p className="text-gray-400">Clear, comprehensive reports that help you understand your business finances.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded">
              <h4 className="text-xl font-semibold mb-2">Compliance</h4>
              <p className="text-gray-400">Stay compliant with all financial regulations and requirements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-20 border-t border-gray-800 bg-gray-900 bg-opacity-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Simplify Your Bookkeeping?</h3>
          <p className="text-gray-300 mb-8">Join small businesses that trust Klever Books for their accounting needs.</p>
          <Link href="/about" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition">
            Meet Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
