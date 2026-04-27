import { ArrowRight, Banknote, Calculator, CheckCircle2, FileText, Inbox, ShieldCheck } from 'lucide-react';

const steps = [
  { icon: Inbox, title: 'Collect', text: 'Receipts, invoices, statements, emails, and payment proof land in one workflow.' },
  { icon: Banknote, title: 'Review', text: 'Bank feed items, recurring categories, missing documents, and unusual transactions are flagged.' },
  { icon: Calculator, title: 'Prepare', text: 'QuickBooks routines, invoice follow-ups, and monthly close checklists are queued for review.' },
  { icon: ShieldCheck, title: 'Approve', text: 'Humans approve the sensitive items before anything final is filed, sent, or changed.' },
];

const outcomes = [
  'QuickBooks workflow setup',
  'Receipt and document intake',
  'Invoice and payment follow-up',
  'Monthly close checklist',
  'Exception report for owner review',
  'Bookkeeper or accountant handoff',
];

export default function BookkeepingAutomation() {
  return (
    <section id="bookkeeping" className="scroll-mt-28 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid border border-slate-200 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[#07111f] p-8 text-white sm:p-12 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
              AI bookkeeping workflows
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Cleaner books without black-box bookkeeping.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              We automate the repetitive admin around bookkeeping: receipt capture, invoice follow-up,
              bank-feed review, QuickBooks routines, and monthly close prep. AI organizes the work.
              Humans keep control of judgment calls.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-300">
              This is ideal for small businesses that want cleaner handoffs to a bookkeeper or accountant without
              chasing receipts at the end of every month.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3 border border-white/10 bg-white/8 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-sm font-semibold text-white">{outcome}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs leading-6 text-slate-400">
              Steinbots builds workflows and reporting systems. Tax, audit, CPA, or legal advice should be reviewed
              by the appropriate qualified professional.
            </p>
          </div>

          <div className="grid bg-white md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="border-b border-slate-200 p-8 even:border-l md:min-h-64 lg:p-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-cyan-100 text-[#0b79d0]">
                      <Icon className="h-6 w-6" />
                    </div>
                    {index < steps.length - 1 && <ArrowRight className="h-5 w-5 text-slate-300" />}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b79d0]">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[#07111f]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                </div>
              );
            })}

            <div className="border-b border-slate-200 bg-[#f7f9fc] p-8 md:col-span-2 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#07111f] text-cyan-300">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#07111f]">Result: review-ready bookkeeping work.</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                    Fewer missing receipts, fewer mystery transactions, faster invoice follow-up, and a clearer
                    monthly routine for owners, staff, bookkeepers, and accountants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
