import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { seoPages } from '../data/seoPages';

const services = [
  ['Steinbach AI', '/steinbach-ai'],
  ['AI Automation Steinbach', '/ai-automation-steinbach'],
  ['AI Chatbots Steinbach', '/ai-chatbots-steinbach'],
  ['Bookkeeping Automation', '/bookkeeping-automation-steinbach'],
  ['Website Revamp', '/website-revamp-steinbach'],
  ['Custom Automation Manitoba', '/custom-automation-manitoba'],
];

const company = [
  ['About Us', '#about'],
  ['Pricing', '#pricing'],
  ['Contact', '#contact'],
  ['Portfolio', '#portfolio'],
];

const serviceAreaLinks = seoPages.filter((page) => page.path.startsWith('/service-areas/'));

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14 text-[#07111f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#top" className="inline-flex" aria-label="Steinbots home">
              <img
                src="/brand/steinbots-logo-gpt2-v1-cropped.png"
                alt="Steinbots"
                className="h-9 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="mt-5 max-w-sm leading-7 text-slate-600">
              AI agents, bookkeeping workflows, custom software, and automation systems for businesses in
              Steinbach, MB and beyond.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-[#f7f9fc] text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-[#0b79d0]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="mt-5 space-y-3 text-slate-600">
              {services.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-[#0b79d0]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="mt-5 space-y-3 text-slate-600">
              {company.map(([label, href]) => (
                <li key={label}>
                  <a href={`/${href}`} className="transition hover:text-[#0b79d0]">
                    {label}
                  </a>
                </li>
              ))}
              {serviceAreaLinks.map((page) => (
                <li key={page.path}>
                  <a href={page.path} className="transition hover:text-[#0b79d0]">
                    Niverville AI Automation
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>
                <a href="mailto:hello@steinbots.com" className="transition hover:text-[#0b79d0]">
                  hello@steinbots.com
                </a>
              </li>
              <li>
                <a href="tel:+12041234567" className="transition hover:text-[#0b79d0]">
                  (204) 123-4567
                </a>
              </li>
              <li>Steinbach, MB</li>
              <li>Canada</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-slate-200 pt-7 text-sm text-slate-500 md:flex-row md:items-center">
          <p>Copyright 2026 Steinbots. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-[#0b79d0]">Privacy Policy</a>
            <a href="#" className="transition hover:text-[#0b79d0]">Terms of Service</a>
            <a href="#" className="transition hover:text-[#0b79d0]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
