import { ArrowUpRight, CheckCircle2, Globe, Sparkles } from 'lucide-react';

const projects = [
  {
    name: 'Lending Legion',
    url: 'https://lendinglegion.com',
    blurb:
      'A polished finance-focused website built to present lending services clearly, build trust quickly, and guide visitors toward the next step.',
    highlights: ['Trust-focused service pages', 'Clear borrower CTA paths', 'Professional finance brand'],
    tags: ['Finance Website', 'Lead Generation', 'Professional Services'],
    screenshot: '/portfolio/lendinglegion-home.png',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f7f9fc] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">Recent work</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl">
              Built to convert.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Recent builds pair clean design with automation-ready funnels so the website can become part of
            the sales and operations system.
          </p>
        </div>

        <div className="mt-14 grid gap-8">
          {projects.map((project) => (
            <article key={project.url} className="border border-slate-200 bg-white">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative overflow-hidden bg-[#07111f] p-6 text-white sm:p-8">
                  <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                  <div className="absolute -bottom-20 right-8 h-56 w-56 rounded-full bg-[#f4c96b]/10 blur-3xl" />

                  <div className="relative mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center bg-cyan-400 text-[#07111f]">
                        <Sparkles className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-bold">Live project</div>
                        <div className="text-xs text-slate-400">{project.url.replace('https://', '')}</div>
                      </div>
                    </div>
                    <Globe className="h-8 w-8 text-slate-400" />
                  </div>

                  <div className="relative">
                    <div className="absolute -right-3 -top-3 z-10 border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
                      Live Preview
                    </div>

                    <div className="origin-top-left rotate-[-1.4deg] border border-white/10 bg-slate-950 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                      <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/8 px-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
                        <span className="ml-3 truncate text-xs font-semibold text-slate-300">
                          lendinglegion.com
                        </span>
                      </div>
                      <div className="relative aspect-[16/11] overflow-hidden">
                        <img
                          src={project.screenshot}
                          alt="Screenshot of the Lending Legion website"
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/45 via-transparent to-transparent" />
                      </div>
                    </div>

                    <div className="relative z-20 -mt-10 ml-5 mr-2 grid gap-2 sm:grid-cols-3">
                      {project.tags.map((tag) => (
                        <div
                          key={tag}
                          className="border border-white/10 bg-[#07111f]/88 px-3 py-3 text-xs font-semibold text-white shadow-lg backdrop-blur"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex flex-col justify-between gap-8 lg:min-h-80">
                    <div>
                      <h3 className="text-3xl font-bold text-[#07111f]">{project.name}</h3>
                      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{project.blurb}</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 border border-slate-200 bg-[#f7f9fc] p-4">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0b79d0]" />
                          <span className="text-sm font-semibold leading-6 text-slate-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-12 items-center justify-center gap-2 bg-[#07111f] px-5 font-bold text-white transition hover:bg-[#0b79d0]"
                      >
                        View Live Site
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex h-12 items-center justify-center border border-slate-300 bg-white px-5 font-bold text-slate-900 transition hover:bg-slate-50"
                      >
                        Build something like this
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
