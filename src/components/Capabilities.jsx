import React from 'react';
import { Globe, Building2, Ship, Package } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Capabilities = () => {
  const capabilities = [
    {
      icon: Globe,
      title: 'International Shipping',
      description:
        'Seamless global delivery with real-time tracking and guaranteed on-time arrivals across continents.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Building2,
      title: 'Smart Warehousing',
      description:
        'Modern, secure, and temperature-controlled storage solutions designed for efficiency and safety.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Ship,
      title: 'Air & Sea Cargo',
      description:
        'Flexible cargo transport options via air and sea, ensuring speed, safety, and cost-effectiveness.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Package,
      title: 'Supply Chain Management',
      description:
        'End-to-end logistics planning and freight coordination that optimizes routes and reduces delivery time.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${capability.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {capability.description}
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

export default Capabilities;