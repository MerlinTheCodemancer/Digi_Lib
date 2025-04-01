import React from 'react';
import Layout from '@/components/Layout';
import { Gamepad2 } from 'lucide-react';

const GameMechanics: React.FC = () => {
  return (
    <Layout>
      <div className="bg-digiorange text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Game Mechanics</h1>
          <p className="text-center max-w-2xl mx-auto">
            Learn about the various gameplay systems found in Digimon games, from raising Digimon to battle strategies.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Gamepad2 className="mr-2" />
              Core Gameplay Elements
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-digipurple">Evolution System</h3>
                <p className="text-gray-700 mb-4">
                  Digimon evolve through various stages: Fresh, In-Training, Rookie, Champion, Ultimate, and Mega. 
                  Each Digimon has multiple potential evolution paths based on how they are raised.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2">Key Factors Affecting Evolution:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Stats (Attack, Defense, Speed, etc.)</li>
                    <li>Care mistakes</li>
                    <li>Battle experience</li>
                    <li>Special requirements (items, locations, etc.)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-digiorange">Raising System</h3>
                <p className="text-gray-700 mb-4">
                  Properly raising your Digimon is essential for unlocking their full potential. This includes feeding, 
                  training, resting, and other care activities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Care Basics:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Feeding (different foods affect different stats)</li>
                      <li>Rest (recover from fatigue)</li>
                      <li>Training (improve specific stats)</li>
                      <li>Discipline (affects behavior and evolution)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Status Conditions:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Hunger</li>
                      <li>Fatigue</li>
                      <li>Happiness</li>
                      <li>Discipline</li>
                      <li>Illness</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-digiblue">Battle System</h3>
                <p className="text-gray-700 mb-4">
                  Battle mechanics vary between games, but generally involve turn-based combat with various attacks, 
                  abilities, and strategic elements.
                </p>
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Common Battle Elements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Type advantages/disadvantages (Vaccine, Data, Virus)</li>
                    <li>Attribute effects (Fire, Water, Electric, etc.)</li>
                    <li>Special moves and combos</li>
                    <li>Support items</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 italic">
                  Note: Exact battle mechanics differ significantly between different Digimon games and series.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Game-Specific Mechanics</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-digipurple pl-4">
                <h3 className="text-xl font-bold mb-2">Digimon Story: Cyber Sleuth</h3>
                <p className="text-gray-700">
                  Features a turn-based battle system with a focus on party composition and Digimon "memory" limits. 
                  Evolution requires meeting specific level requirements and stats.
                </p>
              </div>
              
              <div className="border-l-4 border-digiorange pl-4">
                <h3 className="text-xl font-bold mb-2">Digimon World Series</h3>
                <p className="text-gray-700">
                  Emphasizes raising and training your partner Digimon with real-time battles. Evolution depends heavily 
                  on care quality and meeting specific stat thresholds.
                </p>
              </div>
              
              <div className="border-l-4 border-digiyellow pl-4">
                <h3 className="text-xl font-bold mb-2">Digimon Survive</h3>
                <p className="text-gray-700">
                  Combines visual novel elements with tactical RPG gameplay. Features a karma system that affects both 
                  story progression and Digimon evolution paths.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Advanced Tips & Strategies</h2>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Expert Raising Techniques</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-digipurple">Stat Optimization</h4>
                  <p className="text-gray-700">
                    Focus on specific stats based on your desired evolution path. For example, emphasize Attack and Speed 
                    for offensive Digimon, or HP and Defense for tank roles.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-digiorange">Efficient Training</h4>
                  <p className="text-gray-700">
                    Alternate between training sessions and rest to maximize stat gains while minimizing care mistakes. 
                    Always monitor your Digimon's fatigue levels.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-digiblue">Evolution Planning</h4>
                  <p className="text-gray-700">
                    Research evolution requirements in advance and create a raising plan to efficiently reach desired forms. 
                    Some rare evolutions require specific items or conditions that need careful preparation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default GameMechanics;
