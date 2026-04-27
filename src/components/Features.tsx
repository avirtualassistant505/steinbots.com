import { Bot, Calendar, Calculator, Code2, Globe, LayoutDashboard, ShieldCheck, Workflow } from 'lucide-react';

const systems = [
  {
    icon: Bot,
    title: 'AI Lead Agents',
    description:
      'Answer FAQs, qualify leads, collect contact details, and move serious inquiries into your inbox, CRM, or calendar.',
  },
  {
    icon: Calendar,
    title: 'Booking Systems',
    description:
      'Automated booking that syncs with your calendar so customers can schedule without manual back-and-forth.',
  },
  {
    icon: Calculator,
    title: 'Bookkeeping Workflows',
    description:
      'Receipt intake, QuickBooks review queues, invoice follow-up, and monthly close routines with human review built in.',
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description:
      'Connect Gmail, Sheets, calendars, CRMs, forms, Stripe, Shopify, QuickBooks, and the tools your team already uses.',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description:
      'Focused internal tools, client portals, admin dashboards, calculators, and workflow apps built around your exact process.',
  },
  {
    icon: Globe,
    title: 'Websites & Landing Pages',
    description:
      'Conversion-focused websites and campaign pages designed around calls, quote requests, bookings, and applications.',
  },
  {
    icon: LayoutDashboard,
    title: 'Reporting Dashboards',
    description:
      'Simple views for leads, open invoices, follow-ups, operational tasks, revenue, and bottlenecks.',
  },
  {
    icon: ShieldCheck,
    title: 'Approval Controls',
    description:
      'Sensitive steps like bookkeeping, payments, client messages, and final submissions can pause for human approval.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#f7f9fc] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">Automation systems</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl">
              Steinbach AI systems for local operations.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Our Steinbach AI systems combine the pieces that usually live in separate tools: lead capture,
            booking, websites, bookkeeping intake, dashboards, approvals, notifications, and custom workflow
            software.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <div key={system.title} className="bg-white p-7 transition hover:bg-cyan-50/40">
                <div className="mb-7 flex h-12 w-12 items-center justify-center bg-[#07111f] text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#07111f]">{system.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{system.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
