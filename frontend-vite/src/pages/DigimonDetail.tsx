import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useIsMobile } from '@/hooks/use-mobile';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import StatsRadar from '@/components/StatsRadar';

interface DigimonStat {
  name: string;
  value: number;
  fullMark: number;
}

// Mock data for individual Digimon - would come from Firebase in the future
const digimonData = {
  "agumon": {
    id: "agumon",
    name: "Agumon",
    image: "https://digimon.shadowsmith.com/img/agumon.jpg",
    level: "Rookie",
    type: "Vaccine",
    attribute: "Fire",
    region: "File Island",
    numberInDigidex: "001",
    preferredFood: "Meat Apples",
    itemsCarried: "None",
    description: "Agumon is a Reptile Digimon. Its name comes from the Japanese onomatopoeia 'Aguagu'. It has grown up and become able to walk on two legs, and has an appearance like a tiny dinosaur. Because it is still on the way to adulthood, its power is low, but as its personality is quite ferocious, it doesn't understand fear.",
    researchLevel: 8,
    height: "3'0\" (0.9m)",
    weight: "45.2 lbs (20.5kg)",
    characteristics: "Brave, loyal and always hungry. Agumon is known for its determination and will never give up in a fight to protect its partner.",
    stats: [
      { name: 'STR', value: 60, fullMark: 100 },
      { name: 'DEF', value: 40, fullMark: 100 },
      { name: 'SPD', value: 50, fullMark: 100 },
      { name: 'INT', value: 30, fullMark: 100 },
      { name: 'TGH', value: 45, fullMark: 100 },
    ],
    evolutionFrom: "Koromon",
    evolutionTo: ["Greymon", "GeoGreymon", "Tyrannomon", "Meramon"],
    forms: [
      { name: "Normal Form", image: "https://digimon.shadowsmith.com/img/agumon.jpg" },
      { name: "X-Antibody Form", image: "https://digimon.shadowsmith.com/img/blackagumon.jpg" }
    ]
  }
};

const DigimonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isMobile = useIsMobile();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentForm, setCurrentForm] = useState(0);
  
  // Get digimon data based on the ID parameter
  const digimon = digimonData[id as keyof typeof digimonData] || null;

  // Update body class for dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  if (!digimon) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Digimon not found</h1>
          <p>Sorry, we couldn't find the Digimon you're looking for.</p>
        </div>
      </Layout>
    );
  }

  // Switch to previous form
  const prevForm = () => {
    setCurrentForm((prev) => (prev === 0 ? digimon.forms.length - 1 : prev - 1));
  };

  // Switch to next form
  const nextForm = () => {
    setCurrentForm((prev) => (prev === digimon.forms.length - 1 ? 0 : prev + 1));
  };

  return (
    <Layout>
      <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-digiblue-dark text-white' : 'bg-digiorange-light'}`}>
        <div className="container mx-auto px-4 py-4">
          {/* Top navigation bar with dark mode toggle */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl md:text-3xl font-bold">DigiDex</h1>
            <Toggle 
              pressed={isDarkMode} 
              onPressedChange={setIsDarkMode}
              className="p-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Toggle>
          </div>

          {/* Main content area with parchment-style background */}
          <div className={`rounded-lg overflow-hidden shadow-lg ${isDarkMode ? 'bg-digiblue text-white border border-white/10' : 'bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200'}`}>
            {/* Header with digimon ID and type */}
            <div className={`py-2 px-4 ${isDarkMode ? 'bg-digipurple' : 'bg-digiorange'} text-white flex justify-between items-center`}>
              <div className="flex items-center space-x-2">
                <span className="font-bold">No. {digimon.numberInDigidex}</span>
                <h2 className="text-xl font-bold">{digimon.name}</h2>
              </div>
              <div className="flex space-x-2">
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">{digimon.type}</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">{digimon.attribute}</span>
              </div>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {/* Left column - Image and forms */}
              <div className="flex flex-col">
                {/* Image display with form controls */}
                <div className={`border-4 ${isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-amber-200 bg-white'} rounded-lg overflow-hidden relative aspect-square`}>
                  <img 
                    src={digimon.forms[currentForm].image} 
                    alt={`${digimon.name} - ${digimon.forms[currentForm].name}`} 
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white text-center">
                    {digimon.forms[currentForm].name}
                  </div>
                </div>

                {/* Form selector */}
                <div className="flex justify-between items-center mt-2">
                  <button 
                    onClick={prevForm} 
                    className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-digipurple-dark' : 'bg-digiorange'} text-white`}
                  >
                    L
                  </button>
                  <span className="text-sm">Form {currentForm + 1} / {digimon.forms.length}</span>
                  <button 
                    onClick={nextForm} 
                    className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-digipurple-dark' : 'bg-digiorange'} text-white`}
                  >
                    R
                  </button>
                </div>

                {/* Description box */}
                <div className={`mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-amber-200'}`}>
                  <p className="text-sm">{digimon.description}</p>
                </div>
              </div>

              {/* Right column - Stats and details */}
              <div className="flex flex-col space-y-4">
                {/* Physical attributes */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Weight</p>
                      <p className="font-medium">{digimon.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Height</p>
                      <p className="font-medium">{digimon.height}</p>
                    </div>
                  </div>
                </div>

                {/* Food and Items */}
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-digipurple border border-purple-700' : 'bg-digiorange border border-orange-400'}`}>
                  <h3 className="font-semibold text-white mb-1">Preferred Foods</h3>
                  <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <p>{digimon.preferredFood || 'None'}</p>
                  </div>
                </div>

                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-digipurple border border-purple-700' : 'bg-digiorange border border-orange-400'}`}>
                  <h3 className="font-semibold text-white mb-1">Items Carried</h3>
                  <div className={`p-2 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <p>{digimon.itemsCarried || 'None'}</p>
                  </div>
                </div>

                {/* Characteristics */}
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-amber-200'}`}>
                  <h3 className="font-semibold mb-1">Characteristics</h3>
                  <p className="text-sm">{digimon.characteristics || 'No characteristic information available'}</p>
                </div>

                {/* Research Level */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img src="https://digimon.shadowsmith.com/img/agumon.jpg" alt="Research" className="w-6 h-6 rounded-full" />
                    <span className="text-sm font-medium">Research Level</span>
                  </div>
                  <div className={`px-3 py-1 rounded-lg ${isDarkMode ? 'bg-digipurple' : 'bg-digiorange'} text-white font-bold`}>
                    {digimon.researchLevel} / 10
                  </div>
                </div>

                {/* Stats radar chart */}
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-amber-200'}`}>
                  <h3 className="font-semibold mb-1 text-center">Stats</h3>
                  <div className="flex justify-center">
                    <StatsRadar stats={digimon.stats} size={isMobile ? 150 : 180} />
                  </div>
                </div>
              </div>
            </div>

            {/* Evolution path */}
            <div className={`p-4 ${isDarkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-amber-100 border-t border-amber-200'}`}>
              <h3 className="font-semibold mb-3">Evolution Path</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {digimon.evolutionFrom && (
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full overflow-hidden mb-1 border border-gray-300`}>
                      <img src="https://digimon.shadowsmith.com/img/koromon.jpg" alt={digimon.evolutionFrom} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs text-center">{digimon.evolutionFrom}</span>
                    <span className="text-xs text-gray-500">← From</span>
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <div className={`w-20 h-20 ${isDarkMode ? 'bg-gray-700 border-digipurple' : 'bg-white border-digiorange'} rounded-full overflow-hidden mb-1 border-2`}>
                    <img src={digimon.image} alt={digimon.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-bold text-center">{digimon.name}</span>
                </div>

                {digimon.evolutionTo.map((evo, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full overflow-hidden mb-1 border border-gray-300`}>
                      <img 
                        src={evo.toLowerCase().includes('greymon') 
                          ? "https://digimon.shadowsmith.com/img/greymon.jpg" 
                          : evo.toLowerCase().includes('tyrannomon')
                          ? "https://digimon.shadowsmith.com/img/tyrannomon.jpg"
                          : evo.toLowerCase().includes('meramon')
                          ? "https://digimon.shadowsmith.com/img/meramon.jpg"
                          : "https://digimon.shadowsmith.com/img/agumon.jpg"}
                        alt={evo} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <span className="text-xs text-center">{evo}</span>
                    <span className="text-xs text-gray-500">→ To</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side navigation for nearby Digimon in the dex */}
          <div className={`mt-4 rounded-lg ${isDarkMode ? 'bg-digiblue border border-white/10' : 'bg-amber-100 border border-amber-200'}`}>
            <h3 className={`p-2 ${isDarkMode ? 'bg-digipurple' : 'bg-digiorange'} text-white font-bold rounded-t-lg`}>Nearby in DigiDex</h3>
            <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {['Koromon', 'Agumon', 'Greymon', 'MetalGreymon', 'WarGreymon'].map((name, idx) => (
                <div key={idx} className={`flex items-center p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-amber-50'} cursor-pointer ${name === digimon.name ? (isDarkMode ? 'border-2 border-digipurple' : 'border-2 border-digiorange') : ''}`}>
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                    <img 
                      src={name.toLowerCase() === 'agumon' 
                        ? "https://digimon.shadowsmith.com/img/agumon.jpg"
                        : name.toLowerCase() === 'greymon' 
                        ? "https://digimon.shadowsmith.com/img/greymon.jpg"
                        : name.toLowerCase() === 'koromon'
                        ? "https://digimon.shadowsmith.com/img/koromon.jpg"
                        : name.toLowerCase() === 'metalgreymon'
                        ? "https://digimon.shadowsmith.com/img/metalgreymon.jpg"
                        : "https://digimon.shadowsmith.com/img/wargreymon.jpg"}
                      alt={name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">No. {String(idx + 1).padStart(3, '0')}</p>
                    <p className="text-sm font-medium truncate">{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DigimonDetail;