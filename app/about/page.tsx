export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 z-50 px-4 py-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold hover:text-purple-400 transition">
            Klever Books
          </a>
          <div className="flex gap-8">
            <a href="/" className="hover:text-purple-400 transition">Home</a>
            <a href="/about" className="text-purple-400">About</a>
            <a href="/writing" className="hover:text-purple-400 transition">Writing</a>
            <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-16 px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-400">
            Expert accountants committed to empowering small businesses with reliable bookkeeping solutions
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mohammed Usman */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Mohammed Usman</h2>
                <p className="text-purple-400 text-lg font-semibold">Managing Partner</p>
              </div>

              <div>
                <p className="text-gray-300 italic mb-4">
                  Empowering Small Businesses with Expert Bookkeeping Solutions
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Education & Professional Qualifications</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Bachelor of Commerce (BCom) – SLIATE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>MAAT – Member of the Association of Accounting Technicians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>ACPM – Associate Chartered Professional Manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>CMA Sri Lanka – Finalist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>CA Sri Lanka – Corporate Level (Reading)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Professional Background</h3>
                <p className="text-gray-400 leading-relaxed">
                  Mohammed Usman brings over 6 years of professional experience in accounting, auditing, and bookkeeping, including experience with Ernst & Young (EY), Sri Lanka. His expertise covers bookkeeping, financial reporting, compliance, and strategic financial support for small and growing businesses.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">About the Managing Partner</h3>
                <p className="text-gray-400 leading-relaxed">
                  As the Managing Partner of Klever Books, Mohammed Usman leads with a commitment to accuracy, reliability, and ethical financial practices. With a strong academic foundation and hands-on experience, he focuses on delivering practical bookkeeping solutions that help small businesses operate efficiently and grow sustainably.
                </p>
              </div>
            </div>

            {/* Akeel */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Akeel</h2>
                <p className="text-purple-400 text-lg font-semibold">Founder & Senior Accountant</p>
              </div>

              <div>
                <p className="text-gray-300 italic mb-4">
                  Simplifying bookkeeping for small businesses through clarity, compliance, and convenience
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Education & Professional Qualifications</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Chartered Accountant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>QuickBooks Certified Online Accountant</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Professional Background</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Akeel brings over 3 years of auditing experience at prestigious firms including Ernst & Young (EY) and KPMG. As a Freelance Bookkeeper and specialist in QuickBooks Online, he combines deep audit expertise with practical bookkeeping solutions tailored for businesses with low-frequency transactions.
                </p>
                <div className="space-y-2 text-gray-400">
                  <p className="font-semibold text-white">Experience:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Freelance Bookkeeper (2022 – Present)</li>
                    <li>• KPMG - Audit Associate (2023 – Present)</li>
                    <li>• Ernst & Young (EY) - Audit Trainee (2022 – 2023)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">About the Founder</h3>
                <p className="text-gray-400 leading-relaxed">
                  Akeel launched KleverBooks with one mission: to simplify bookkeeping for small businesses. His approach is all about clarity, compliance, and convenience, ensuring accurate transaction recording, clear financial reports, and valuable insights—so your business can make informed decisions with confidence and focus on growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-12 px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Klever Books © 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
