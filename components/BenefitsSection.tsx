import { MessageCircle, Target, TrendingUp } from 'lucide-react';
import { benefits } from '@/lib/data';

const iconMap = {
  MessageCircle,
  Target,
  TrendingUp,
};

export default function BenefitsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Why Learn French With Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            French lessons engineered for adult learners: talk more, memorize less, see progress every 2 weeks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div
                key={benefit.id}
                className="relative p-8 rounded-lg border-2 border-primary-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white overflow-hidden"
              >
                {/* Green accent bar on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-50 p-4 rounded-full">
                    <Icon className="w-16 h-16 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-primary-600 mb-1">How it works:</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.how}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-600 mb-1">What you&apos;ll notice:</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.outcome}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proof strip */}
        <div className="bg-primary-50 rounded-xl p-8 mt-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-primary-600 font-semibold text-lg">✓</span>
              <span>A2 → B1 in 4 months (travel focus)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary-600 font-semibold text-lg">✓</span>
              <span>Passed DELF B2 speaking: 20/25</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary-600 font-semibold text-lg">✓</span>
              <span>From &apos;translating in my head&apos; to natural small talk in 6 weeks</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#hero"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book a 25-min trial → map your 90-day plan
          </a>
        </div>
      </div>
    </section>
  );
}

