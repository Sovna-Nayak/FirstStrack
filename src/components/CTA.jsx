import React from 'react';
import { Button } from './ui/button';

const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect!</h2>
        <p className="text-blue-100 text-lg mb-8">
          We are always ready to assist you with your logistics needs. Contact us today!
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-6 text-base rounded-full transition-all duration-300"
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default CTA;