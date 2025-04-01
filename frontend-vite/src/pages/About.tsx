import React from 'react';
import Layout from '@/components/Layout';
import { Github, Database, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="bg-digipurple text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">About DIGILib Hub</h1>
          <p className="text-center max-w-2xl mx-auto">
            Learn more about our project, mission, and how you can contribute.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
            DIGILib Hub was created with a simple goal: to be the most comprehensive, user-friendly resource for Digimon fans around the world. 
              Whether you're a casual gamer, anime enthusiast, or competitive player, we aim to provide accurate, detailed information about the 
              Digital Monsters universe.
            </p>
            <p className="text-gray-700">
              The site is designed to be a meeting point for Digimon fans, offering an immersive, intuitive experience that is open to community 
              contributions and continuously evolving with new information and features.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Features & Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-digipurple">DigiDex</h3>
                <p className="text-gray-700">
                  A comprehensive database of Digimon profiles with detailed information on stats, evolution lines, 
                  locations, and more. The DigiDex is constantly updated with new entries and information.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-digiorange">Game Mechanics</h3>
                <p className="text-gray-700">
                  In-depth guides on the various gameplay systems across Digimon games, including raising mechanics,
                  battle strategies, item locations, and more.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-digiyellow-dark">DIGI DB</h3>
                <p className="text-gray-700">
                  A searchable database that allows users to quickly find specific information about Digimon,
                  items, locations, and more through advanced filtering options.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-digiblue">Community Integration</h3>
                <p className="text-gray-700">
                  Future plans include user accounts, contribution systems, forums, and more to foster
                  a thriving community of Digimon enthusiasts.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
            <p className="text-gray-700 mb-6">
            DIGILib Hub is built using modern web technologies to ensure a fast, responsive, and user-friendly experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Code size={40} className="text-digipurple mb-2" />
                <h3 className="font-bold mb-1">Frontend</h3>
                <p className="text-sm text-center text-gray-600">
                  React, TypeScript, Tailwind CSS
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Database size={40} className="text-digiorange mb-2" />
                <h3 className="font-bold mb-1">Database</h3>
                <p className="text-sm text-center text-gray-600">
                  Firebase (planned integration)
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Github size={40} className="text-digiblue mb-2" />
                <h3 className="font-bold mb-1">Open Source</h3>
                <p className="text-sm text-center text-gray-600">
                  Hosted on GitHub with community contributions
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Contribute</h2>
            <p className="text-gray-700 mb-6">
            DIGILib Hub is an open-source project that welcomes contributions from the community. Whether you're a developer, 
              designer, content creator, or Digimon enthusiast, there are many ways to get involved.
            </p>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Ways to Contribute</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Submit Digimon data, images, or descriptions</li>
                <li>Report bugs or issues with the website</li>
                <li>Suggest new features or improvements</li>
                <li>Contribute code through GitHub pull requests</li>
                <li>Help with documentation and guides</li>
              </ul>
              
              <div className="mt-6">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="digi-btn digi-btn-primary inline-flex items-center"
                >
                  <Github size={18} className="mr-2" />
                  Visit our GitHub Repository
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
