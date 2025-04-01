import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedDigimon from '@/components/FeaturedDigimon';
import PopularDigimon from '@/components/PopularDigimon';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Gamepad2, Info } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Digital World</h2>
            <p className="text-lg text-gray-600">
              Digimon, short for "Digital Monsters," is a Japanese media franchise encompassing virtual pets, 
              anime, manga, video games, films, and more. The universe is centered around digital creatures 
              that inhabit a parallel universe called the "Digital World."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-digipurple text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Database</h3>
              <p className="text-gray-600 mb-4">
                Access detailed information on every Digimon, including stats, evolution lines, and more.
              </p>
              <Link to="/digidex" className="text-digipurple font-medium inline-flex items-center">
                View DigiDex <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-digiorange text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Game Mechanics</h3>
              <p className="text-gray-600 mb-4">
                Learn about the various gameplay systems, from raising Digimon to battle strategies.
              </p>
              <Link to="/game-mechanics" className="text-digiorange font-medium inline-flex items-center">
                Explore Mechanics <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-digiyellow-dark text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Info size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Resources</h3>
              <p className="text-gray-600 mb-4">
                Find guides, tips, and community contributions to enhance your Digimon experience.
              </p>
              <Link to="/about" className="text-digiyellow-dark font-medium inline-flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedDigimon />
      <PopularDigimon />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with fellow Digimon enthusiasts, share your knowledge, and contribute to the growth of the DIGILib Hub.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="digi-btn digi-btn-primary">
                GitHub Repository
              </a>
              <Link to="/about" className="digi-btn digi-btn-secondary">
                Learn How to Contribute
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
