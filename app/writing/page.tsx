export default function WritingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 z-50 px-4 py-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold hover:text-purple-400 transition">
            Klever Books
          </a>
          <div className="flex gap-8">
            <a href="/" className="hover:text-purple-400 transition">Home</a>
            <a href="/about" className="hover:text-purple-400 transition">About</a>
            <a href="/writing" className="text-purple-400">Writing</a>
            <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-16 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Writing</h1>
          <p className="text-xl text-gray-400">
            Insights and articles on bookkeeping and small business finance
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
