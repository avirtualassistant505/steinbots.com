import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import AddOns from './components/AddOns';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAgentWidget from './components/ChatAgentWidget';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="#" className="flex items-center" aria-label="Steinbots">
                <img
                  src="/brand/steinbots-logo.png"
                  alt="Steinbots"
                  className="h-12 sm:h-14 w-auto shrink-0"
                  decoding="async"
                />
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
              <a href="#addons" className="text-gray-700 hover:text-blue-600 transition">Add-Ons</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 sm:px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <Pricing />
      <AddOns />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <ChatAgentWidget />
    </div>
  );
}

export default App;
