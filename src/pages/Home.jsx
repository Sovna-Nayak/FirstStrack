import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Capabilities from '../components/Capabilities';
import MissionVision from '../components/MissionVision';
import WhyChooseUs from '../components/WhyChooseUs';
import Statistics from '../components/Statistics';
import ShippingCalculator from '../components/ShippingCalculator';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSlider />
      <Capabilities />
      <MissionVision />
      <WhyChooseUs />
      <Statistics />
      <ShippingCalculator />
      <Newsletter />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;