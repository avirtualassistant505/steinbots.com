import {
  BarChart3,
  Check,
  ClipboardCheck,
  Code2,
  CreditCard,
  FileText,
  Mail,
  Megaphone,
  Phone,
  ReceiptText,
  TrendingUp,
  Users,
} from 'lucide-react';

const assistantFeatures = [
  'Inbox triage and daily summaries',
  'Reply drafts you approve before sending',
  'Smart follow-up reminders',
  'Meeting scheduling and rescheduling',
  'Calendar agenda briefings',
  'Contact lookup and conversation notes',
  'Priority sender lists',
  'Email templates for quotes, scheduling, follow-ups, and FAQs',
  'Google Workspace support',
  'Optional Outlook/Microsoft 365 setup',
  'Multi-device chat access',
  'Human support and monthly tuning',
];

const addons = [
  {
    icon: ReceiptText,
    title: 'Receipt & Document Intake',
    price: '$149/month',
    description: 'Collect receipts, invoices, statements, and bookkeeping documents before month-end chaos starts.',
  },
  {
    icon: ClipboardCheck,
    title: 'Monthly Close Checklist',
    price: '$199/month',
    description: 'Flag missing receipts, uncategorized items, unpaid invoices, and follow-ups that need attention.',
  },
  {
    icon: Code2,
    title: 'Custom Internal Tool',
    price: 'Quote',
    description: 'A focused dashboard, intake portal, calculator, reporting view, or staff workflow around your exact process.',
  },
  {
    icon: Phone,
    title: 'Call Tracking & Recording',
    price: '$49/month',
    description: 'Track calls from campaigns with dedicated numbers and review call quality.',
  },
  {
    icon: Mail,
    title: 'Email Marketing Automation',
    price: '$79/month',
    description: 'Automated campaigns, drip sequences, review requests, and segmentation with analytics.',
  },
  {
    icon: Users,
    title: 'CRM & Pipeline Management',
    price: '$99/month',
    description: 'Customer relationship management with visual sales pipelines, statuses, reminders, and task automation.',
  },
  {
    icon: TrendingUp,
    title: 'Sales Funnels & Landing Pages',
    price: '$69/month',
    description: 'Focused pages and funnels for quotes, consultations, applications, or campaign traffic.',
  },
  {
    icon: FileText,
    title: 'Automated Invoicing & Quotes',
    price: '$89/month',
    description: 'Quote, invoice, payment-link, and follow-up workflows connected to your existing tools where possible.',
  },
  {
    icon: Megaphone,
    title: 'Reputation Management',
    price: '$59/month',
    description: 'Automated review requests and monitoring for your online reputation.',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    price: '$29/month',
    description: 'Text-to-pay, payment links, and secure payment collection with Stripe or compatible processors.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics & Reporting',
    price: '$89/month',
    description: 'Dashboards for leads, revenue, open invoices, source tracking, and operational bottlenecks.',
  },
];

export default function AddOns() {
  return (
    <section id="addons" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">Expand the system</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl">
              Add the tools around your AI agent.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Build the core first, then layer in the pieces that remove more admin work: inbox support,
            bookkeeping intake, calls, payments, campaigns, custom tools, and reporting.
          </p>
        </div>

        <div id="assistant" className="mt-14 scroll-mt-28 border border-slate-200 bg-[#07111f]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Assistant add-on</p>
              <h3 className="mt-4 text-3xl font-bold">Moltbot Executive Assistant</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Email, calendar, contacts, and follow-up handled with AI support and approval points.
              </p>
              <div className="mt-9">
                <span className="text-5xl font-bold">$99.99*</span>
                <span className="ml-2 text-lg text-slate-300">/month</span>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex h-[52px] w-full items-center justify-center bg-white px-6 font-bold text-[#07111f] transition hover:bg-cyan-50"
              >
                Add Assistant Support
              </a>
              <p className="mt-5 text-xs leading-6 text-slate-400">
                * AI usage fees are based on message volume and automations. Most small teams land around $20-$60/month.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {assistantFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3 bg-white p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-cyan-100 text-[#0b79d0]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold leading-6 text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {addons.map((addon) => {
            const Icon = addon.icon;
            return (
              <div key={addon.title} className="bg-white p-6 transition hover:bg-cyan-50/40">
                <div className="mb-6 flex h-11 w-11 items-center justify-center bg-[#07111f] text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#07111f]">{addon.title}</h3>
                <div className="mt-3 text-2xl font-bold text-[#0b79d0]">{addon.price}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{addon.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border border-slate-200 bg-[#f7f9fc] p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#07111f]">Bundle & Save</h3>
            <p className="mt-2 text-slate-600">
              Combine lead capture, bookkeeping intake, CRM follow-up, and reporting into one operating system.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center bg-[#07111f] px-6 font-bold text-white transition hover:bg-[#0b79d0]"
          >
            Discuss Custom Package
          </a>
        </div>
      </div>
    </section>
  );
}
