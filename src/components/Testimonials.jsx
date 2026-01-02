import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amit',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
      text: 'First Track Express has been an absolute pleasure to work with. Professional, reliable, and timely!',
    },
    {
      name: 'Sneha',
      image: 'https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg',
      text: 'Their global shipping services have helped expand my business. Truly world-class.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <Quote className="text-emerald-500 mr-2" size={32} />
                </div>
                <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-emerald-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;