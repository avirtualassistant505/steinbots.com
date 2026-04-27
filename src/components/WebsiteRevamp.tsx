import { ArrowRight, Code2, FileSearch, Rocket, Wrench } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    title: 'Audit the current site',
    description: 'We review messaging, layout, calls-to-action, mobile flow, and the places visitors are likely to drop off.',
  },
  {
    icon: Code2,
    title: 'Redesign and code',
    description: 'We rebuild the page experience with sharper copy flow, cleaner sections, stronger hierarchy, and modern front-end code.',
  },
  {
    icon: Rocket,
    title: 'Set up and launch',
    description: 'After approval, we install the revamp on your existing platform and get the improved version live.',
  },
  {
    icon: Wrench,
    title: 'Platform flexible',
    description: 'WordPress, Shopify, Webflow, Wix, Squarespace, GoHighLevel, and most custom-coded sites are supported.',
  },
];

const platforms = ['WordPress', 'Shopify', 'Webflow', 'Wix', 'Squarespace', 'GoHighLevel', 'Custom Sites'];

export default function WebsiteRevamp() {
  return (
    <section id="website-revamp" className="scroll-mt-28 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid border border-slate-200 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[#07111f] p-8 text-white sm:p-12 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
              One-time website service
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Website Revamp for $500</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Already have a website? We look at what you have now, redesign it for a cleaner and more
              professional look, code the update, and set it up on your existing platform.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Built for businesses that want a sharper online presence without paying for a full custom rebuild
              from scratch.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <span key={platform} className="border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                  {platform}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex h-[52px] items-center justify-center gap-2 bg-cyan-400 px-6 font-bold text-[#07111f] transition hover:bg-cyan-300"
            >
              Ask About the $500 Revamp
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="grid bg-white md:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="border-b border-slate-200 p-8 even:border-l md:min-h-64 lg:p-10">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center bg-cyan-100 text-[#0b79d0]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#07111f]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
