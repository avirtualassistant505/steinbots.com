import { Mail, MapPin, Phone, Send } from 'lucide-react';

const contactItems = [
  { icon: Mail, label: 'Email Us', value: 'hello@steinbots.com', href: 'mailto:hello@steinbots.com' },
  { icon: Phone, label: 'Call Us', value: '(204) 905-2234', href: 'tel:+12049052234' },
  { icon: MapPin, label: 'Visit Us', value: 'Steinbach, MB, Canada' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f7f9fc] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0b79d0]">Start the conversation</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl">
            Ready to pick your first workflow?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tell us whether your Steinbach AI project should focus on leads, bookings, bookkeeping, admin work,
            reporting, or custom software.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="border border-slate-200 bg-white p-7 sm:p-8">
            <h3 className="text-2xl font-bold text-[#07111f]">Get in touch</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Tell us what you want the website, AI agent, bookkeeping workflow, or custom automation to handle.
              We can start local in Steinbach and expand the system as your process gets clearer.
            </p>

            <div className="mt-8 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 border border-slate-200 bg-[#f7f9fc] p-4 transition hover:border-cyan-300 hover:bg-cyan-50">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#07111f] text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-[#07111f]">{item.label}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-600">{item.value}</span>
                    </span>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 border border-slate-200 p-5">
              <h4 className="font-bold text-[#07111f]">Business hours</h4>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-600">Monday - Friday</span>
                  <span className="font-semibold text-[#07111f]">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-semibold text-[#07111f]">By appointment</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-semibold text-[#07111f]">Closed</span>
                </div>
              </div>
            </div>
          </aside>

          <form className="border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(7,17,31,0.08)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-[#07111f]">Your Name</span>
                <input
                  type="text"
                  className="mt-2 h-12 w-full border border-slate-300 bg-white px-4 text-slate-900 outline-none transition focus:border-[#0b79d0] focus:ring-2 focus:ring-cyan-100"
                  placeholder="John Doe"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-[#07111f]">Email Address</span>
                <input
                  type="email"
                  className="mt-2 h-12 w-full border border-slate-300 bg-white px-4 text-slate-900 outline-none transition focus:border-[#0b79d0] focus:ring-2 focus:ring-cyan-100"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-[#07111f]">Phone Number</span>
                <input
                  type="tel"
                  className="mt-2 h-12 w-full border border-slate-300 bg-white px-4 text-slate-900 outline-none transition focus:border-[#0b79d0] focus:ring-2 focus:ring-cyan-100"
                  placeholder="(204) 905-2234"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-[#07111f]">Business Name</span>
                <input
                  type="text"
                  className="mt-2 h-12 w-full border border-slate-300 bg-white px-4 text-slate-900 outline-none transition focus:border-[#0b79d0] focus:ring-2 focus:ring-cyan-100"
                  placeholder="Your Business"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-[#07111f]">Message</span>
              <textarea
                rows={5}
                className="mt-2 w-full resize-none border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#0b79d0] focus:ring-2 focus:ring-cyan-100"
                placeholder="Tell us what you want automated: leads, bookings, bookkeeping, admin work, reporting, custom software, or a website revamp..."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 bg-[#07111f] px-6 font-bold text-white transition hover:bg-[#0b79d0]"
            >
              <span>Send Message</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
