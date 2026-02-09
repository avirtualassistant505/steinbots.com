import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Serving Steinbach, MB & Beyond</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Steinbach AI Agents
            <br />
            for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Chatbots & Automation
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We build Steinbach AI Agents that automate customer conversations, capture leads, and schedule
            appointments 24/7 across your website, SMS, and social channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#pricing"
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="text-lg font-semibold">Start at $199.99/month</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#features"
              className="bg-white text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition border-2 border-gray-200 text-lg font-semibold shadow-md"
            >
              View Features
            </a>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden">
                <img
                  src="/brand/chatbot-hero.png"
                  alt="AI chatbot assistant on a mobile interface"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Always Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">10x</div>
                  <div className="text-sm text-gray-600">Faster Response</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
