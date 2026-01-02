import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: 'DHL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/320px-DHL_Logo.svg.png',
    },
    {
      name: 'Blue Dart',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Blue_Dart_Logo.svg/320px-Blue_Dart_Logo.svg.png',
    },
    {
      name: 'Razorpay',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/320px-Razorpay_logo.svg.png',
    },
    {
      name: 'Zoho',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Zoho_logo.svg/320px-Zoho_logo.svg.png',
    },
    {
      name: 'Delhivery',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Delhivery_Logo.svg/320px-Delhivery_Logo.svg.png',
    },
    {
      name: 'Gati',
      logo: 'https://www.gati.com/images/gati-logo.png',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 h-24"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<span class="text-gray-600 font-semibold text-sm">${partner.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;