export default function Home() {
  return (
    <div className="w-full">
      <div
        id="main"
        data-framer-hydrate-v2='{"routeId":"augiA20Il","localeId":"default","breakpoints":[{"hash":"72rtr7","mediaQuery":"(min-width: 1200px)"},{"hash":"1f90353","mediaQuery":"(min-width: 810px) and (max-width: 1199px)"},{"hash":"7ol1az","mediaQuery":"(max-width: 809px)"}]}'
      >
        <style>{`
          html,body,#main{margin:0;padding:0;box-sizing:border-box}
          :root{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          *{box-sizing:border-box;-webkit-font-smoothing:inherit}
          h1,h2,h3,h4,h5,h6,p,figure{margin:0}
          body,input,textarea,select,button{font-size:12px;font-family:sans-serif}
          html body { background: #ffffff; }
        `}</style>
        <div className="text-center p-8 min-h-screen flex items-center justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Welcome to Klever Books</h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering Small Businesses with Expert Bookkeeping Solutions
            </p>
            <p className="text-gray-700 mb-8">
              At KleverBooks.com, we make bookkeeping effortless, accurate, and cost-effective. 
              Our expert solutions help small businesses stay financially organized, so they can focus on growth and success.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 bg-purple-600 text-white rounded">Get Started</button>
              <button className="px-6 py-2 border border-gray-300 rounded">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
