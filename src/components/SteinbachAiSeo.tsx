import { Bot, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    question: 'What does Steinbach AI mean for a local business?',
    answer:
      'Steinbach AI means practical automation built around real local workflows: faster replies, better lead capture, cleaner bookkeeping handoffs, booking support, dashboards, and follow-up systems your team can actually use.',
  },
  {
    question: 'What Steinbach AI services does Steinbots offer?',
    answer:
      'Steinbots builds AI chatbots, booking agents, bookkeeping workflows, custom automation, internal software, landing pages, dashboards, CRM handoffs, and website revamps for Steinbach and Southern Manitoba businesses.',
  },
  {
    question: 'Can AI help with bookkeeping without replacing my accountant?',
    answer:
      'Yes. Steinbots focuses on bookkeeping workflow automation: receipt intake, invoice follow-up, QuickBooks review queues, monthly close checklists, and exception reports. Sensitive accounting, tax, and filing decisions stay with a human reviewer or qualified professional.',
  },
  {
    question: 'Who is a good fit for Steinbots?',
    answer:
      'A good fit is a local business that misses leads, repeats the same admin steps, chases receipts, copies data between tools, needs a better website, or wants a simple AI system before hiring more staff.',
  },
];

const proofPoints = [
  { icon: MapPin, label: 'Local focus', text: 'Built for Steinbach, Niverville, and Southern Manitoba teams.' },
  { icon: Bot, label: 'Practical AI', text: 'Chatbots, booking agents, lead capture, and workflow routing.' },
  { icon: CheckCircle2, label: 'Back-office help', text: 'Bookkeeping intake, invoice follow-up, dashboards, and checklists.' },
  { icon: ShieldCheck, label: 'Human approval', text: 'Sensitive steps can pause for owner, staff, bookkeeper, or accountant review.' },
];

export default function SteinbachAiSeo() {
  return (
    <section id="steinbach-ai" className="bg-[#f7f9fc] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">Steinbach AI</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl">
              AI automation for local businesses that need less admin drag.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Steinbots brings Steinbach AI services into practical business workflows: leads, bookings,
              bookkeeping admin, client follow-up, custom software, and website conversion paths.
            </p>

            <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {proofPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.label} className="bg-white p-6">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center bg-[#07111f] text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#07111f]">{point.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border border-slate-200 bg-white">
            {faqs.map((faq, index) => (
              <div key={faq.question} className={index === 0 ? 'p-7 sm:p-8' : 'border-t border-slate-200 p-7 sm:p-8'}>
                <h3 className="text-xl font-bold text-[#07111f]">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
