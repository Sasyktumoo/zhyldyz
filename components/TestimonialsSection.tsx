import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { theme } from '@/lib/theme';

export default function TestimonialsSection() {
  return (
    <section 
      className="py-16"
      style={{ 
        background: theme.colors.background.universal,
        paddingLeft: theme.spacing.sectionPaddingX,
        paddingRight: theme.spacing.sectionPaddingX
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12"
          style={{ color: theme.colors.text.primary }}
        >
          What Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              style={{ 
                backgroundColor: theme.colors.primary[50],
                borderTopWidth: '4px',
                borderTopColor: theme.colors.citron[400]
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{ 
                      fill: theme.colors.accent[500], 
                      color: theme.colors.accent[500] 
                    }}
                  />
                ))}
              </div>
              <h3 
                className="text-lg font-semibold mb-3"
                style={{ color: theme.colors.text.primary }}
              >
                {testimonial.headline}
              </h3>
              <p 
                className="italic mb-4 leading-relaxed flex-grow"
                style={{ color: theme.colors.text.secondary }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div 
                className="pt-4 flex items-center gap-3 mt-auto"
                style={{ 
                  borderTopWidth: '1px',
                  borderTopColor: theme.colors.border.light
                }}
              >
                <img
                  src={`/images/review${testimonial.id.split('-')[1]}.png`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2"
                  style={{ 
                    '--tw-ring-color': theme.colors.citron[300] 
                  } as React.CSSProperties}
                />
                <div>
                  <p 
                    className="font-semibold"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {testimonial.name}
                  </p>
                  {testimonial.role && (
                    <p 
                      className="text-sm"
                      style={{ color: theme.colors.text.tertiary }}
                    >
                      {testimonial.role}
                    </p>
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

