
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'PocDoc has transformed how I manage my health. The medication reminders are a lifesaver and the medical diary helps me track my progress.',
    rating: 5,
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Cardiologist',
    content: 'I recommend PocDoc to all my patients. It helps them stay organized with their medications and keeps a great record of their health journey.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Caregiver',
    content: 'Managing my mother\'s healthcare became much easier with PocDoc. The hospital finder feature has been particularly helpful during emergencies.',
    rating: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-primary-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">What People Say</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Discover how PocDoc is making a difference in people's healthcare journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-primary-100 shadow-sm">
              <CardContent className="p-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-700">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-primary-800">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
