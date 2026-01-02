import React, { useState, useEffect } from 'react';

const Statistics = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    orders: 0,
    sellers: 0,
  });

  const finalCounts = {
    clients: 5000,
    orders: 10000,
    sellers: 500,
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts((prev) => {
        const newCounts = {};
        let allComplete = true;

        Object.keys(finalCounts).forEach((key) => {
          if (prev[key] < finalCounts[key]) {
            newCounts[key] = Math.min(
              prev[key] + Math.ceil(finalCounts[key] / steps),
              finalCounts[key]
            );
            allComplete = false;
          } else {
            newCounts[key] = finalCounts[key];
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          First Track Superiority
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {counts.clients.toLocaleString()}+
            </div>
            <div className="text-xl md:text-2xl font-medium">Trusted Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {counts.orders.toLocaleString()}+
            </div>
            <div className="text-xl md:text-2xl font-medium">Orders Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {counts.sellers.toLocaleString()}+
            </div>
            <div className="text-xl md:text-2xl font-medium">Sellers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;