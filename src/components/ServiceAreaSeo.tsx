import { ArrowRight, MapPin } from 'lucide-react';
import { seoPages, serviceAreas } from '../data/seoPages';

const keywordGroups = [
  {
    label: 'AI automation',
    phrases: ['AI automation Steinbach', 'business automation Steinbach', 'custom automation Manitoba'],
  },
  {
    label: 'Chatbots and agents',
    phrases: ['AI chatbots Steinbach', 'AI agents Steinbach', 'AI receptionist Steinbach'],
  },
  {
    label: 'Back office',
    phrases: ['bookkeeping automation Steinbach', 'QuickBooks automation Steinbach', 'invoice automation Steinbach'],
  },
  {
    label: 'Websites',
    phrases: ['website revamp Steinbach', 'website redesign Steinbach', 'web design and automation Steinbach'],
  },
];

export default function ServiceAreaSeo() {
  return (
    <section id="service-areas" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">Local SEO coverage</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl">
              Steinbach AI services for nearby towns and search intent.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Steinbots is positioned around local AI buyers searching for practical help: chatbots, booking
              agents, bookkeeping automation, website revamps, and custom workflow software.
            </p>

            <div className="mt-9 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="inline-flex items-center gap-2 border border-slate-200 bg-[#f7f9fc] px-3 py-2 text-sm font-semibold text-slate-700">
                  <MapPin className="h-4 w-4 text-[#0b79d0]" />
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
            {keywordGroups.map((group) => (
              <div key={group.label} className="bg-white p-7">
                <h3 className="text-xl font-bold text-[#07111f]">{group.label}</h3>
                <div className="mt-5 grid gap-3">
                  {group.phrases.map((phrase) => (
                    <div key={phrase} className="border border-slate-200 bg-[#f7f9fc] px-4 py-3 text-sm font-semibold text-slate-700">
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {seoPages.slice(0, 4).map((page) => (
            <a key={page.path} href={page.path} className="group bg-[#f7f9fc] p-6 transition hover:bg-cyan-50/60">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b79d0]">{page.primaryKeyword}</p>
              <h3 className="mt-4 text-lg font-bold leading-7 text-[#07111f]">{page.title}</h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#07111f] transition group-hover:text-[#0b79d0]">
                Open page
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
