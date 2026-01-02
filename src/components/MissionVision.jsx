import React from 'react';

const MissionVision = () => {
  const images = [
    'https://images.pexels.com/photos/35419947/pexels-photo-35419947.jpeg',
    'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg',
    'https://images.pexels.com/photos/35431447/pexels-photo-35431447.jpeg',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To redefine logistics through innovation, speed, and service excellence —
                empowering businesses and individuals to move goods across the globe with
                confidence and reliability.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted global logistics partner by integrating
                technology, sustainability, and customer-centric practices in every step of
                our operations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in integrity, transparency, and continuous improvement. Every
                shipment is handled with accountability and care, ensuring lasting trust
                with every client we serve.
              </p>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src={images[0]}
                alt="Warehouse"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={images[1]}
                alt="Cargo"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={images[2]}
                alt="Shipping"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;