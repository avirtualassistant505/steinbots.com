import { Check, Star } from 'lucide-react';

const includedFeatures = [
  'AI Chatbot for Website, SMS & Social Media',
  'Automated Appointment Scheduling',
  'Professional Custom Website',
  'Unlimited Conversations',
  'Multi-Channel Integration',
  '24/7 Customer Support',
  'Lead Capture & Management',
  'Real-Time Analytics Dashboard',
  'Mobile-Responsive Design',
  'Email Notifications',
  'Calendar Sync (Google, Outlook)',
  'Customizable Chat Widget',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate and grow your business, starting at just $199.99/month
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Complete AI Package</h3>
                    <p className="text-blue-100">Everything you need to get started</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12">
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold text-gray-900">$199.99</span>
                  <span className="text-2xl text-gray-600 ml-2">/month</span>
                </div>

                <div className="space-y-4 mb-10">
                  {includedFeatures.map((feature, index) => (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
