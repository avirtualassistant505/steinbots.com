import { Heart, MapPin, Zap } from 'lucide-react';

const areas = ['Steinbach', 'Niverville', 'Southern Manitoba'];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">Steinbach, Manitoba</p>
            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl">
              Your local Steinbach AI automation partner.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Steinbots is a locally-owned Steinbach AI agency building practical systems for businesses in
                Steinbach and surrounding communities. We understand local service businesses, lean teams, and
                owners who need results without a giant tech project.
              </p>
              <p>
                The goal is not flashy AI for its own sake. It is fewer missed leads, cleaner bookkeeping handoffs,
                faster replies, useful dashboards, and custom software your team can actually use.
              </p>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              <div className="bg-[#07111f] p-6 text-white">
                <Zap className="mb-5 h-8 w-8 text-cyan-300" />
                <div className="text-4xl font-bold">10,000+</div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Automated conversations
                </div>
              </div>
              <div className="bg-[#f7f9fc] p-6">
                <Heart className="mb-5 h-8 w-8 text-[#0b79d0]" />
                <div className="text-2xl font-bold text-[#07111f]">Local setup, real support</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Practical automations, tuned to the way your team actually works.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-slate-200 bg-[#f7f9fc] p-7 sm:p-9">
            <div className="border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center bg-cyan-100 text-[#0b79d0]">
                  <MapPin className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-[#07111f]">Built for Manitoba</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Practical, direct, dependable
                  </p>
                </div>
              </div>
              <p className="mt-7 text-lg leading-8 text-slate-600">
                We start with one painful workflow, build the first useful version, keep approval points
                where they belong, and expand once the system is earning its keep.
              </p>
            </div>

            <div className="mt-6 border border-slate-200 bg-[#07111f] p-6 text-white">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse bg-cyan-300" />
                <span className="font-bold">Active locally</span>
              </div>
              <div className="mt-5 grid gap-3">
                {areas.map((area) => (
                  <div key={area} className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3">
                    <span>{area}</span>
                    <span className="text-cyan-300">AI support</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
