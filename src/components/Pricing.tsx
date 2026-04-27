import { Check, Star } from 'lucide-react';

const packages = [
  {
    name: 'AI Front Desk + Website',
    eyebrow: 'Core package',
    price: '$249+',
    unit: '/month',
    description: 'For businesses that need faster lead response, booking, website chat, and a cleaner conversion path.',
    features: [
      'AI chatbot for website, SMS, and social channels',
      'Lead capture and qualification',
      'Automated appointment scheduling',
      'Professional website or landing page support',
      'Email notifications and calendar handoff',
      'Basic analytics and monthly tuning',
    ],
    cta: 'View AI Package',
    featured: true,
  },
  {
    name: 'Bookkeeping Workflow Setup',
    eyebrow: 'Back-office system',
    price: '$750+',
    unit: 'project',
    description: 'For owners who need receipts, invoices, QuickBooks review, and monthly close prep under control.',
    features: [
      'Bookkeeping workflow map',
      'Receipt and document intake',
      'QuickBooks review queues',
      'Invoice and payment follow-up',
      'Monthly close checklist',
      'Monitoring available from $149/month',
    ],
    cta: 'Plan Bookkeeping Workflow',
    featured: false,
  },
  {
    name: 'Custom Automation Build',
    eyebrow: 'Software and workflows',
    price: '$1,500+',
    unit: 'project',
    description: 'For custom software, dashboards, portals, automations, and integrations around your exact process.',
    features: [
      'Workflow discovery and system design',
      'Gmail, Sheets, CRM, Stripe, Shopify, or QuickBooks integrations',
      'Custom dashboards, portals, and forms',
      'Approval steps for sensitive actions',
      'Launch support and documentation',
      'Ongoing care plans available',
    ],
    cta: 'Scope Automation Build',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f7f9fc] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">Starting points</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl">
            Packages for leads, books, and custom workflows.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Start with one high-value workflow, prove the value, then expand into the next system when it makes sense.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="border border-slate-200 bg-white">
              <div className={pkg.featured ? 'bg-[#07111f] p-8 text-white' : 'bg-white p-8 text-[#07111f]'}>
                <div className={pkg.featured ? 'text-sm font-bold uppercase tracking-[0.24em] text-cyan-300' : 'text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]'}>
                  {pkg.eyebrow}
                </div>
                {pkg.featured && (
                  <div className="mt-5 flex gap-1 text-[#f4c96b]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                )}
                <h3 className="mt-5 text-3xl font-bold leading-tight">{pkg.name}</h3>
                <p className={pkg.featured ? 'mt-4 leading-7 text-slate-300' : 'mt-4 leading-7 text-slate-600'}>
                  {pkg.description}
                </p>
                <div className="mt-10">
                  <span className="text-5xl font-bold">{pkg.price}</span>
                  <span className={pkg.featured ? 'ml-2 text-lg text-slate-300' : 'ml-2 text-lg text-slate-500'}>
                    {pkg.unit}
                  </span>
                </div>
                <a
                  href="#contact"
                  className={pkg.featured
                    ? 'mt-9 inline-flex h-[52px] w-full items-center justify-center bg-cyan-400 px-6 font-bold text-[#07111f] transition hover:bg-cyan-300'
                    : 'mt-9 inline-flex h-[52px] w-full items-center justify-center bg-[#07111f] px-6 font-bold text-white transition hover:bg-[#0b79d0]'}
                >
                  {pkg.cta}
                </a>
              </div>

              <div className="grid gap-px bg-slate-200">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 bg-white p-5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-cyan-100 text-[#0b79d0]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold leading-6 text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-6 text-slate-500">
          Software subscriptions, AI usage, SMS, phone numbers, QuickBooks, CRMs, payment processors, and other
          third-party platform fees are billed separately when required.
        </p>
      </div>
    </section>
  );
}
