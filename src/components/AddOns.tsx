import { Phone, Mail, Users, TrendingUp, FileText, Megaphone, CreditCard, BarChart3 } from 'lucide-react';

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
