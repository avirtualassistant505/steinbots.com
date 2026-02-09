import { Phone, Mail, Users, TrendingUp, FileText, Megaphone, CreditCard, BarChart3, Check } from 'lucide-react';

const executiveAssistantFeatures = [
  'Inbox Triage & Daily Summaries',
  'Reply Drafts (you approve before sending)',
  'Smart Follow-Up Reminders',
  'Meeting Scheduling + Rescheduling',
  'Calendar Agenda Briefings (morning + pre-meeting)',
  'Contact Lookup (name, company, notes, last conversation)',
  'Priority Sender Lists (VIPs, leads, vendors, staff)',
  'Email Templates (quotes, scheduling, follow-ups, FAQs)',
  'Google Workspace Support (Gmail, Calendar, Contacts)',
  'Optional Outlook/Microsoft 365 Setup',
  'Multi-Device Chat Access (phone + desktop)',
  'Human Support + Monthly Tuning',
];

const addons = [
  {
    icon: Phone,
    title: 'Call Tracking & Recording',
    price: '$49/month',
    description: 'Track calls from campaigns with dedicated numbers. Record calls for quality and training purposes.',
  },
  {
    icon: Mail,
    title: 'Email Marketing Automation',
    price: '$79/month',
    description: 'Automated email campaigns, drip sequences, and advanced segmentation with analytics.',
  },
  {
    icon: Users,
    title: 'CRM & Pipeline Management',
    price: '$99/month',
    description: 'Complete customer relationship management with visual sales pipelines and task automation.',
  },
  {
    icon: TrendingUp,
    title: 'Sales Funnels & Landing Pages',
    price: '$69/month',
    description: 'Unlimited custom sales funnels and landing pages with conversion tracking.',
  },
  {
    icon: FileText,
    title: 'Automated Invoicing & Quotes',
    price: '$39/month',
    description: 'Generate professional invoices, quotes, and estimates. Accept payments online.',
  },
  {
    icon: Megaphone,
    title: 'Reputation Management',
    price: '$59/month',
    description: 'Automated review requests and monitoring. Manage your online reputation effortlessly.',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    price: '$29/month',
    description: 'Text-to-pay, payment links, and secure payment collection with Stripe integration.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics & Reporting',
    price: '$89/month',
    description: 'Comprehensive business intelligence dashboards with custom reports and insights.',
  },
];

export default function AddOns() {
  return (
    <section id="addons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Supercharge Your Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your AI automation with powerful add-on services designed to scale your business
          </p>
        </div>

        <div id="assistant" className="max-w-5xl mx-auto mb-16 scroll-mt-28">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Moltbot Executive Assistant</h3>
                    <p className="text-blue-100">Email, calendar & contacts handled for you</p>
                  </div>
                  <div className="hidden sm:flex items-center text-white/90 text-sm font-semibold">
                    New offering
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12">
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold text-gray-900">$99.99*</span>
                  <span className="text-2xl text-gray-600 ml-2">/month</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {executiveAssistantFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started Today
                </a>

                <p className="text-center text-sm text-gray-500 mt-6">
                  No setup fees • Cancel anytime • Free onboarding
                </p>
                <p className="text-center text-xs text-gray-500 mt-3">
                  * AI usage fees are based on message volume + automations. Most small teams land around
                  $20–$60/month.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, index) => {
            const Icon = addon.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition bg-white"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.title}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">{addon.price}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{addon.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Bundle & Save</h3>
            <p className="text-gray-600 mb-4 max-w-2xl">
              Add 3 or more services and get <span className="font-bold text-blue-600">15% off</span> your total add-on costs
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Discuss Custom Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
