import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Database, Filter, ChevronDown, ChevronUp, Search } from 'lucide-react';

// Mock data - replace with Firebase data in the future
const digimonData = [
  {
    id: "agumon",
    name: "Agumon",
    image: "https://digimon.shadowsmith.com/img/agumon.jpg",
    level: "Rookie",
    type: "Vaccine",
    attribute: "Fire",
    location: "Fire Island, Volcano Area",
    food: "Meat, Hot Food",
    evolutionFrom: "Koromon",
    evolutionTo: ["Greymon", "GeoGreymon", "Tyrannomon"],
    characteristics: "A Reptile Digimon with a cool appearance and a fiery personality. Attacks with 'Pepper Breath', a fireball shot from its mouth.",
    items: ["Fire Crest", "Courage Emblem"],
  },
  {
    id: "gabumon",
    name: "Gabumon",
    image: "https://digimon.shadowsmith.com/img/gabumon.jpg",
    level: "Rookie",
    type: "Data",
    attribute: "Ice",
    location: "Freezeland, Snow Area",
    food: "Meat, Cold Food",
    evolutionFrom: "Tsunomon",
    evolutionTo: ["Garurumon", "BlackGarurumon", "Dorugamon"],
    characteristics: "A reptile Digimon with a fur pelt. Known for its loyal personality and friendship.",
    items: ["Ice Crest", "Friendship Emblem"],
  },
  {
    id: "patamon",
    name: "Patamon",
    image: "https://digimon.shadowsmith.com/img/patamon.jpg",
    level: "Rookie",
    type: "Data",
    attribute: "Wind",
    location: "Sky Area, Holy Ground",
    food: "Fruits, Vegetables",
    evolutionFrom: "Tokomon",
    evolutionTo: ["Angemon", "Centarumon", "Unimon"],
    characteristics: "A small mammal Digimon with large ears that allow it to fly. Cheerful and hopeful by nature.",
    items: ["Wind Crest", "Hope Emblem"],
  },
  {
    id: "beelzebubmon",
    name: "Beelzebubmon",
    image: "https://digimon.shadowsmith.com/img/beelzebubmon.jpg",
    level: "Mega",
    type: "Virus",
    attribute: "Dark",
    location: "Dark Area, Abyss",
    food: "Dark Matter, Evil Crystals",
    evolutionFrom: "Skull Satamon",
    evolutionTo: [],
    characteristics: "A Demon Lord Digimon embodying the sin of gluttony. Extremely powerful with devastating attacks.",
    items: ["Dark Crest", "Chaos Emblem"],
  },
  {
    id: "greymon",
    name: "Greymon",
    image: "https://digimon.shadowsmith.com/img/greymon.jpg",
    level: "Champion",
    type: "Vaccine",
    attribute: "Fire",
    location: "Fire Island, Volcano Core",
    food: "Large Meat, Spicy Food",
    evolutionFrom: "Agumon",
    evolutionTo: ["MetalGreymon", "SkullGreymon", "RizeGreymon"],
    characteristics: "A dinosaur Digimon with a brown skull helmet. Much larger and more powerful than Agumon.",
    items: ["Fire Core", "Nova Fragment"],
  },
  {
    id: "angemon",
    name: "Angemon",
    image: "https://digimon.shadowsmith.com/img/angemon.jpg",
    level: "Champion",
    type: "Vaccine",
    attribute: "Light",
    location: "Holy Ground, Heaven Area",
    food: "Holy Food, Light Essence",
    evolutionFrom: "Patamon",
    evolutionTo: ["MagnaAngemon", "Andromon"],
    characteristics: "An angel Digimon with six shining wings. Represents hope and battles for justice.",
    items: ["Holy Ring", "Angel Feather"],
  },
];

interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

const DigiDB: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'name', direction: 'asc' });
  
  // Get unique values for filters
  const levels = Array.from(new Set(digimonData.map(d => d.level)));
  const types = Array.from(new Set(digimonData.map(d => d.type)));
  const attributes = Array.from(new Set(digimonData.map(d => d.attribute)));
  
  // Handle sorting
  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  // Apply filters and sorting
  const filteredAndSortedData = digimonData
    .filter(digimon => {
      return (
        digimon.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedLevel ? digimon.level === selectedLevel : true) &&
        (selectedType ? digimon.type === selectedType : true) &&
        (selectedAttribute ? digimon.attribute === selectedAttribute : true)
      );
    })
    .sort((a, b) => {
      if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  
  // Render sort indicator
  const renderSortIndicator = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
    }
    return null;
  };
  
  return (
    <Layout>
      <div className="bg-digiblue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">DIGI DB</h1>
          <p className="text-center max-w-2xl mx-auto">
            Access our structured database of Digimon information with advanced filtering and sorting options.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-1/3">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search Digimon..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-digiblue"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            <div className="flex flex-col space-y-4 md:w-2/3 lg:w-auto">
              <div className="flex items-center mb-2">
                <Filter size={18} className="mr-2 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filters</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-digiblue text-sm w-full"
                >
                  <option value="">All Levels</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-digiblue text-sm w-full"
                >
                  <option value="">All Types</option>
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                
                <select
                  value={selectedAttribute}
                  onChange={(e) => setSelectedAttribute(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-digiblue text-sm w-full"
                >
                  <option value="">All Attributes</option>
                  {attributes.map(attribute => (
                    <option key={attribute} value={attribute}>{attribute}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel('');
                  setSelectedType('');
                  setSelectedAttribute('');
                }}
                className="text-sm text-digiblue hover:underline self-start"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16"
                  >
                    Image
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('name')}
                  >
                    <div className="flex items-center">
                      Name
                      {renderSortIndicator('name')}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('level')}
                  >
                    <div className="flex items-center">
                      Level
                      {renderSortIndicator('level')}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('type')}
                  >
                    <div className="flex items-center">
                      Type
                      {renderSortIndicator('type')}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('attribute')}
                  >
                    <div className="flex items-center">
                      Attribute
                      {renderSortIndicator('attribute')}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Food
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Items
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Evolution
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedData.length > 0 ? (
                  filteredAndSortedData.map((digimon) => (
                    <tr key={digimon.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <img 
                          src={digimon.image} 
                          alt={digimon.name} 
                          className="w-12 h-12 object-contain rounded-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{digimon.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {digimon.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${digimon.type === 'Vaccine' ? 'bg-green-100 text-green-800' : 
                           digimon.type === 'Virus' ? 'bg-red-100 text-red-800' : 
                           'bg-yellow-100 text-yellow-800'}`}
                        >
                          {digimon.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {digimon.attribute}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {digimon.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {digimon.food}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {digimon.items?.join(", ") || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>
                          <span className="text-xs text-gray-500">From:</span>
                          <p className="font-medium">{digimon.evolutionFrom || "N/A"}</p>
                        </div>
                        {digimon.evolutionTo.length > 0 && (
                          <div className="mt-1">
                            <span className="text-xs text-gray-500">To:</span>
                            <p className="font-medium">{digimon.evolutionTo.join(", ")}</p>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9} className="px-6 py-8 text-center text-gray-500">
                      <Database className="mx-auto mb-2" size={24} />
                      <p>No Digimon found matching your filters.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DigiDB;
