import React from 'react';
import { Link } from 'react-router-dom';
import StatsRadar from './StatsRadar';

interface DigimonStat {
  name: string;
  value: number;
  fullMark: number;
}

interface DigimonCardProps {
  id: string;
  name: string;
  image: string;
  level: string;
  type: string;
  attribute: string;
  stats: DigimonStat[];
  evolutionFrom?: string;
  evolutionTo?: string[];
  characteristics?: string;
  description?: string;
  isFeatured?: boolean;
  numberInDigidex?: string;
}

const DigimonCard: React.FC<DigimonCardProps> = ({
  id,
  name,
  image,
  level,
  type,
  attribute,
  stats,
  evolutionFrom,
  evolutionTo = [],
  characteristics = "No characteristic information available",
  description,
  isFeatured = false,
  numberInDigidex = "000",
}) => {
  // Mock evolution images for demonstration
  const evolutionImages = [
    { name: name, image: image },
    ...(evolutionTo?.map(evo => ({
      name: evo,
      image: evo.toLowerCase().includes('greymon') 
        ? "https://digimon.shadowsmith.com/img/greymon.jpg" 
        : evo.toLowerCase().includes('garurumon')
        ? "https://digimon.shadowsmith.com/img/garurumon.jpg"
        : evo.toLowerCase().includes('angemon')
        ? "https://digimon.shadowsmith.com/img/angemon.jpg"
        : "https://digimon.shadowsmith.com/img/agumon.jpg" // Fallback
    })) || [])
  ];

  return (
    <div className={`digicard hover:scale-[1.01] transition-transform ${isFeatured ? 'md:flex' : ''}`}>
      <div className={`${isFeatured ? 'md:w-1/2' : ''}`}>
        <div className="digicard-header flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xs bg-white/30 rounded px-1.5 py-0.5 mr-2">No.{numberInDigidex}</span>
            <h3 className="truncate flex-1">{name}</h3>
          </div>
          {evolutionFrom && (
            <div className="text-xs bg-white/20 rounded px-2 py-0.5">
              From: {evolutionFrom}
            </div>
          )}
        </div>
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-4"
          />
          <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-black/20 flex justify-between">
            <span className="text-xs text-white bg-digipurple px-1.5 py-0.5 rounded">{level}</span>
            <span className="text-xs text-white bg-digiorange px-1.5 py-0.5 rounded">{type}</span>
          </div>
        </div>
      </div>
      
      <div className={`digicard-content ${isFeatured ? 'md:w-1/2' : ''}`}>
        <div className="flex flex-col gap-4 mb-4">
          <div className={`${isFeatured ? 'md:w-full' : 'w-full'}`}>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <span className="text-xs text-gray-500">Type</span>
                <p className="font-medium">{type}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Attribute</span>
                <p className="font-medium">{attribute}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Level</span>
                <p className="font-medium">{level}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <span className="text-xs text-gray-500">Characteristics</span>
              <p className="text-sm">{characteristics}</p>
            </div>
            
            {description && (
              <div className="mb-4">
                <span className="text-xs text-gray-500">Description</span>
                <p className="text-sm">{description}</p>
              </div>
            )}
          </div>
          
          <div className={`mx-auto ${isFeatured ? 'md:w-full' : 'w-3/4'}`}>
            <StatsRadar stats={stats} size={isFeatured ? 200 : 150} />
          </div>
          
          {evolutionTo && evolutionTo.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Evolution Path</h4>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {evolutionImages.map((evo, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden mb-1 border border-gray-200">
                      <img src={evo.image} alt={evo.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs text-center">{evo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <Link 
          to={`/digidex/${id}`}
          className="digi-btn digi-btn-primary w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DigimonCard;