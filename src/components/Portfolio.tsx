import { ArrowUpRight, Globe, Sparkles } from 'lucide-react';

const projects = [
  {
    name: 'Complete Credit',
    url: 'https://completecredit.vercel.app',
    blurb:
      'A clean, conversion-focused site built to showcase services and turn visitors into qualified leads.',
    highlights: ['Fast, mobile-first layout', 'Clear CTA paths', 'Ready for AI agent handoff'],
    tags: ['Website', 'Lead Capture', 'AI Agent-ready'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent builds that pair clean design with automation-ready funnels.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((p) => (
            <div
              key={p.url}
              className="group rounded-3xl border-2 border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:border-blue-200 transition overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[260px] bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                  <div className="absolute inset-0">
                    <div className="absolute -top-10 -left-10 w-52 h-52 bg-blue-200 rounded-full blur-3xl opacity-40" />
                    <div className="absolute -bottom-12 -right-10 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-35" />
                  </div>

                  <div className="relative h-full p-8 flex items-center justify-center">
                    <div className="w-full max-w-md rounded-2xl bg-white/90 backdrop-blur border border-gray-100 shadow-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow">
                            <Sparkles className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900 truncate">{p.name}</div>
                            <div className="text-xs text-gray-500 truncate">Live project</div>
                          </div>
                        </div>
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gray-900 text-white">
                          <Globe className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
                        >
                          View Live Site
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{p.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{p.blurb}</p>
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition"
                    >
                      Open
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-8 grid sm:grid-cols-3 gap-4">
                    {p.highlights.map((h) => (
                      <div
                        key={h}
                        className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 text-sm text-gray-700"
                      >
                        {h}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
                    >
                      Build something like this
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
