import React, { useState } from 'react';
import Layout from '@/components/Layout';
import DigimonCard from '@/components/DigimonCard';
import { Search, Filter } from 'lucide-react';

// Mock data for now - will connect to Firebase later
const digimonList = [
  {
    id: "agumon",
    name: "Agumon",
    image: "https://digimon.shadowsmith.com/img/agumon.jpg",
    level: "Rookie",
    type: "Vaccine",
    attribute: "Fire",
    stats: [
      { name: 'STR', value: 60, fullMark: 100 },
      { name: 'DEF', value: 40, fullMark: 100 },
      { name: 'SPD', value: 50, fullMark: 100 },
      { name: 'INT', value: 30, fullMark: 100 },
      { name: 'TGH', value: 45, fullMark: 100 },
    ]
  },
  {
    id: "gabumon",
    name: "Gabumon",
    image: "https://digimon.shadowsmith.com/img/gabumon.jpg",
    level: "Rookie",
    type: "Data",
    attribute: "Ice",
    stats: [
      { name: 'STR', value: 55, fullMark: 100 },
      { name: 'DEF', value: 45, fullMark: 100 },
      { name: 'SPD', value: 45, fullMark: 100 },
      { name: 'INT', value: 40, fullMark: 100 },
      { name: 'TGH', value: 50, fullMark: 100 },
    ]
  },
  {
    id: "patamon",
    name: "Patamon",
    image: "https://digimon.shadowsmith.com/img/patamon.jpg",
    level: "Rookie",
    type: "Data",
    attribute: "Wind",
    stats: [
      { name: 'STR', value: 40, fullMark: 100 },
      { name: 'DEF', value: 35, fullMark: 100 },
      { name: 'SPD', value: 65, fullMark: 100 },
      { name: 'INT', value: 55, fullMark: 100 },
      { name: 'TGH', value: 30, fullMark: 100 },
    ]
  },
  {
    id: "beelzebubmon",
    name: "Beelzebubmon",
    image: "https://digimon.shadowsmith.com/img/beelzebubmon.jpg",
    level: "Mega",
    type: "Virus",
    attribute: "Dark",
    evolutionFrom: "Skull Satamon",
    stats: [
      { name: 'STR', value: 90, fullMark: 100 },
      { name: 'DEF', value: 80, fullMark: 100 },
      { name: 'SPD', value: 85, fullMark: 100 },
      { name: 'INT', value: 60, fullMark: 100 },
      { name: 'TGH', value: 75, fullMark: 100 },
    ]
  },
  {
    id: "greymon",
    name: "Greymon",
    image: "https://digimon.shadowsmith.com/img/greymon.jpg",
    level: "Champion",
    type: "Vaccine",
    attribute: "Fire",
    evolutionFrom: "Agumon",
    stats: [
      { name: 'STR', value: 75, fullMark: 100 },
      { name: 'DEF', value: 60, fullMark: 100 },
      { name: 'SPD', value: 55, fullMark: 100 },
      { name: 'INT', value: 40, fullMark: 100 },
      { name: 'TGH', value: 65, fullMark: 100 },
    ]
  },
  {
    id: "angemon",
    name: "Angemon",
    image: "https://digimon.shadowsmith.com/img/angemon.jpg",
    level: "Champion",
    type: "Vaccine",
    attribute: "Light",
    evolutionFrom: "Patamon",
    stats: [
      { name: 'STR', value: 65, fullMark: 100 },
      { name: 'DEF', value: 55, fullMark: 100 },
      { name: 'SPD', value: 70, fullMark: 100 },
      { name: 'INT', value: 75, fullMark: 100 },
      { name: 'TGH', value: 50, fullMark: 100 },
    ]
  }
];

const DigiDex: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedType, setSelectedType] = useState('');
  
  const filteredDigimon = digimonList.filter((digimon) => {
    // Apply search filter
    const matchesSearch = digimon.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply level filter if selected
    const matchesLevel = selectedLevel ? digimon.level === selectedLevel : true;
    
    // Apply type filter if selected
    const matchesType = selectedType ? digimon.type === selectedType : true;
    
    return matchesSearch && matchesLevel && matchesType;
  });
  
  // Get unique levels and types for filters
  const levels = Array.from(new Set(digimonList.map(d => d.level)));
  const types = Array.from(new Set(digimonList.map(d => d.type)));
  
  return (
    <Layout>
      <div className="bg-digipurple text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">DigiDex</h1>
          <p className="text-center max-w-2xl mx-auto">
            Explore our comprehensive database of Digimon, featuring detailed stats, 
            evolution paths, and more.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search Digimon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-digipurple"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center">
                <Filter size={18} className="mr-2 text-gray-500" />
                <span className="text-sm text-gray-500 mr-2">Filters:</span>
              </div>
              
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-digipurple text-sm"
              >
                <option value="">All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-digipurple text-sm"
              >
                <option value="">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel('');
                  setSelectedType('');
                }}
                className="text-sm text-digipurple hover:underline"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDigimon.length > 0 ? (
            filteredDigimon.map((digimon) => (
              <DigimonCard key={digimon.id} {...digimon} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-500">No Digimon found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DigiDex;
