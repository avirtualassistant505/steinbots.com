import { MapPin, Zap, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Proudly Serving Steinbach, MB</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your Local AI Automation Partner
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Steinbots is a locally-owned AI agency building Steinbach AI Agents for businesses in Steinbach
              and surrounding communities. We understand the unique needs of Manitoba businesses and provide
              personalized solutions that drive real results.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From small local shops to growing enterprises, we're committed to making cutting-edge AI
              technology accessible and affordable. Our mission is to help you work smarter, not harder,
              by automating repetitive tasks and improving customer experiences.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Zap className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">10,000+</div>
                <div className="text-sm text-gray-600">Automated Conversations</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

              <div className="relative z-10 text-center p-8">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Heart className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Built for Manitoba</h3>
                <p className="text-blue-50 text-lg">
                  We understand your market, your customers, and your challenges. Let's grow together.
                </p>
              </div>

              <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900">Active Now</span>
              </div>
              <p className="text-sm text-gray-600">Serving businesses across Steinbach, Niverville, and Southern MB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
