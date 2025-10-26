import { CheckCircle } from 'lucide-react';

const results = [
  {
    id: 1,
    text: 'A2 → B1 in ~4 months (travel/daily life).',
  },
  {
    id: 2,
    text: 'DELF B2 speaking: 20/25 (from 14/25).',
  },
  {
    id: 3,
    text: 'TEF Canada: target bands met (8–12 weeks typical).',
  },
];

export default function ResultsSection() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Results & Proof (real outcomes to expect)
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {results.map((result) => (
            <div
              key={result.id}
              className="flex items-start gap-4 p-6 rounded-xl bg-white border border-slate-200 hover:border-coral-300 hover:shadow-md transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed">
                {result.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500 italic">
            (Numbers are representative of typical adult learners following the plan.)
          </p>
        </div>
      </div>
    </section>
  );
}

