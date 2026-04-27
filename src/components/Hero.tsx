import { ArrowRight, CheckCircle2, MousePointer2, PhoneCall, Sparkles } from 'lucide-react';

const stats = [
  { value: '24/7', label: 'Always available' },
  { value: '10x', label: 'Faster lead response' },
  { value: 'Human', label: 'Approval where needed' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#07111f] pt-20 text-white">
      <img
        src="/brand/chatbot-hero.png"
        alt="AI chatbot assistant interface"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.96)_0%,rgba(7,17,31,0.86)_42%,rgba(7,17,31,0.46)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f7f9fc] to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(92vh-5rem)] max-w-7xl content-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/18 bg-white/8 px-4 py-2 text-sm font-semibold text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Steinbach AI systems for local businesses
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            Steinbots
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
            We are a Steinbach AI agency building AI agents, bookkeeping workflows, custom automation,
            sharper websites, and internal software for businesses that need faster response times without
            more admin load.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex h-14 items-center justify-center gap-2 bg-cyan-400 px-6 text-base font-bold text-[#07111f] transition hover:bg-cyan-300"
            >
              View AI Packages
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#bookkeeping"
              className="inline-flex h-14 items-center justify-center border border-white/25 bg-white/8 px-6 text-base font-bold text-white transition hover:bg-white/14"
            >
              Bookkeeping Automation
            </a>
            <a
              href="#website-revamp"
              className="inline-flex h-14 items-center justify-center border border-white/25 bg-white/8 px-6 text-base font-bold text-white transition hover:bg-white/14"
            >
              $500 Website Revamp
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/14">
            {stats.map((stat) => (
              <div key={stat.label} className="py-5 pr-4">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden self-end lg:block">
          <div className="border border-white/10 bg-[#07111f]/75 p-5 backdrop-blur">
            <div className="grid gap-3">
              <div className="flex items-center justify-between border border-white/10 bg-white/10 p-4">
                <div>
                  <div className="text-sm font-semibold text-slate-300">Lead captured</div>
                  <div className="mt-1 text-2xl font-bold">Quote request</div>
                </div>
                <MousePointer2 className="h-8 w-8 text-cyan-300" />
              </div>
              <div className="flex items-center justify-between border border-white/10 bg-white/10 p-4">
                <div>
                  <div className="text-sm font-semibold text-slate-300">Back office</div>
                  <div className="mt-1 text-2xl font-bold">Books reviewed</div>
                </div>
                <CheckCircle2 className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="flex items-center justify-between border border-white/10 bg-white/10 p-4">
                <div>
                  <div className="text-sm font-semibold text-slate-300">Human handoff</div>
                  <div className="mt-1 text-2xl font-bold">Call booked</div>
                </div>
                <PhoneCall className="h-8 w-8 text-[#f4c96b]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
