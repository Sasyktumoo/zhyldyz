import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-primary-50/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-gray-900 mb-12">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-primary-400"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {testimonial.headline}
              </h3>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                <img
                  src={`/images/review${testimonial.id.split('-')[1]}.png`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-400"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

