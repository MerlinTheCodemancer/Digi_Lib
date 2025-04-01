
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-digiblue text-white">
      <div className="absolute inset-0 bg-[url('https://digimon.shadowsmith.com/img/beelzebubmon.jpg')] bg-center bg-no-repeat bg-cover opacity-10"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to DigiVerse Hub
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your definitive source for all things Digimon - from game mechanics and evolution lines 
            to detailed profiles of every Digital Monster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/digidex" className="digi-btn digi-btn-secondary w-full sm:w-auto">
              Explore DigiDex
            </Link>
            <Link to="/about" className="digi-btn digi-btn-ghost border border-white w-full sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-digiblue to-transparent"></div>
    </div>
  );
};

export default HeroSection;
