import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Vela and Opulent</h2>
        <p className="text-lg text-gray-700 mb-8">Discover the latest trends in fashion with our exclusive collection.</p>
        <a href="#shop" className="bg-blue-500 text-white px-6 py-3 rounded-full">Shop Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
