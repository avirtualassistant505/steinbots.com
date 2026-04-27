import { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import BookkeepingAutomation from './components/BookkeepingAutomation';
import WebsiteRevamp from './components/WebsiteRevamp';
import Pricing from './components/Pricing';
import AddOns from './components/AddOns';
import Portfolio from './components/Portfolio';
import SteinbachAiSeo from './components/SteinbachAiSeo';
import ServiceAreaSeo from './components/ServiceAreaSeo';
import SeoLandingPage from './components/SeoLandingPage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAgentWidget from './components/ChatAgentWidget';
import { seoPages } from './data/seoPages';

const navItems = [
  { href: '/#features', label: 'Systems' },
  { href: '/#bookkeeping', label: 'Bookkeeping' },
  { href: '/#website-revamp', label: 'Revamp' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#portfolio', label: 'Work' },
  { href: '/#steinbach-ai', label: 'Steinbach AI' },
  { href: '/#service-areas', label: 'Areas' },
  { href: '/#contact', label: 'Contact' },
];

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const seoPage = seoPages.find((page) => page.path === path);

  useEffect(() => {
    if (!seoPage) return;

    document.title = seoPage.metaTitle;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = seoPage.metaDescription;

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = seoPage.metaTitle;

    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = seoPage.metaDescription;

    const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = seoPage.metaTitle;

    const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.content = seoPage.metaDescription;
  }, [seoPage]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f9fc] text-[#07111f] antialiased">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-6">
            <a href="/" className="flex min-w-0 items-center" aria-label="Steinbots">
              <img
                src="/brand/steinbots-logo-gpt2-v1-cropped.png"
                alt="Steinbots"
                className="h-8 w-auto shrink-0 sm:h-9"
                decoding="async"
              />
            </a>

            <div className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-sm font-semibold text-slate-600 transition hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="/#contact"
              className="inline-flex h-11 shrink-0 items-center justify-center bg-[#07111f] px-5 text-sm font-semibold text-white transition hover:bg-[#0b79d0]"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {seoPage ? (
        <SeoLandingPage page={seoPage} />
      ) : (
        <main>
          <Hero />
          <Features />
          <BookkeepingAutomation />
          <WebsiteRevamp />
          <Pricing />
          <AddOns />
          <Portfolio />
          <SteinbachAiSeo />
          <ServiceAreaSeo />
          <About />
          <Contact />
        </main>
      )}

      <Footer />
      <ChatAgentWidget />
    </div>
  );
}

export default App;
