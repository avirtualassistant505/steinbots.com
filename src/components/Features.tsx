import { MessageSquare, Calendar, Globe, Zap, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'AI-Powered Chatbot',
    description: 'Intelligent conversations across your website, SMS, and social media platforms. Answer FAQs and engage customers instantly.',
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Automated booking system that syncs with your calendar. Let customers schedule appointments 24/7 without manual intervention.',
  },
  {
    icon: Globe,
    title: 'Professional Website',
    description: 'Beautiful, mobile-responsive website included with every package. Custom design tailored to your brand and industry.',
  },
  {
    icon: Zap,
    title: 'Instant Response',
    description: 'Never miss a lead. Respond to customer inquiries in seconds, not hours. Keep conversations flowing and conversions growing.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security protecting your data and customer information. 99.9% uptime guarantee for uninterrupted service.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Business',
    description: 'Convert more leads, save time on repetitive tasks, and scale your customer service without hiring additional staff.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete AI automation solution that works around the clock to grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition bg-white"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
