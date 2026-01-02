import React from 'react';
import { CheckCircle, Shield, Clock, Headphones } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: 'Trusted Reliability',
      description:
        'Count on us for consistent, dependable logistics solutions built on years of proven performance.',
    },
    {
      icon: Shield,
      title: 'Secure Handling',
      description:
        'Every shipment is managed with utmost care and advanced safety protocols to ensure complete protection.',
    },
    {
      icon: Clock,
      title: 'On-Time Every Time',
      description:
        'We value your time — our optimized network ensures fast, accurate, and punctual deliveries, always.',
    },
    {
      icon: Headphones,
      title: 'Round-the-Clock Assistance',
      description:
        'Our dedicated support team is available 24/7 to resolve queries and provide real-time shipment updates.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose <span className="text-emerald-600">Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="border-0 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Icon className="text-emerald-600" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;