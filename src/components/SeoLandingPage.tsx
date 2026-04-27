import { ArrowRight, CheckCircle2, MapPin, Search, Sparkles } from 'lucide-react';
import type { SeoPage } from '../data/seoPages';

type SeoLandingPageProps = {
  page: SeoPage;
};

export default function SeoLandingPage({ page }: SeoLandingPageProps) {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#07111f] pt-20 text-white">
        <div className="absolute -right-28 top-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-[#f4c96b]/10 blur-3xl" />
        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl content-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-white/18 bg-white/8 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Sparkles className="h-4 w-4" />
              {page.eyebrow}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">{page.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex h-14 items-center justify-center gap-2 bg-cyan-400 px-6 text-base font-bold text-[#07111f] transition hover:bg-cyan-300"
              >
                Start This Workflow
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/#pricing"
                className="inline-flex h-14 items-center justify-center border border-white/25 bg-white/8 px-6 text-base font-bold text-white transition hover:bg-white/14"
              >
                View Pricing
              </a>
            </div>
          </div>

          <div className="border border-white/10 bg-white/8 p-6 backdrop-blur">
            <div className="flex items-center gap-3 border border-white/10 bg-[#07111f]/70 p-4">
              <span className="flex h-11 w-11 items-center justify-center bg-cyan-300 text-[#07111f]">
                <Search className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-300">Target phrase</div>
                <div className="text-2xl font-bold">{page.primaryKeyword}</div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3 border border-white/10 bg-white/8 p-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
              <div>
                <div className="font-bold">Service area</div>
                <p className="mt-1 leading-7 text-slate-300">{page.serviceArea}</p>
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              {page.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3 border border-white/10 bg-white/8 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <span className="font-semibold">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">
                Local search focus
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#07111f]">
                Built around one practical business result.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{page.intro}</p>
            </div>

            <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
              {page.services.map((service) => (
                <div key={service.title} className="bg-white p-7">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center bg-[#07111f] text-cyan-300">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#07111f]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">Questions</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#07111f]">
              Common questions about {page.primaryKeyword}.
            </h2>
          </div>

          <div className="mt-12 border border-slate-200">
            {page.faqs.map((faq, index) => (
              <div key={faq.question} className={index === 0 ? 'p-7 sm:p-8' : 'border-t border-slate-200 p-7 sm:p-8'}>
                <h3 className="text-xl font-bold text-[#07111f]">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/#contact"
              className="inline-flex h-14 items-center justify-center gap-2 bg-[#07111f] px-6 font-bold text-white transition hover:bg-[#0b79d0]"
            >
              Ask Steinbots About This
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
