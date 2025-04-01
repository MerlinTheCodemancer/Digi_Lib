import React from 'react';
import DigimonCard from './DigimonCard';

// This is a placeholder for future Firebase integration
// Mock data for now
const featuredDigimon = {
  id: "beelzebubmon",
  name: "Beelzebubmon",
  image: "https://digimon.shadowsmith.com/img/beelzebubmon.jpg",
  level: "Mega",
  type: "Virus",
  attribute: "Dark",
  evolutionFrom: "Skull Satamon",
  description: "A Demon Lord Digimon with immense power. Its special attack 'Darkness Claw' can tear through almost any defense.",
  stats: [
    { name: 'STR', value: 90, fullMark: 100 },
    { name: 'DEF', value: 80, fullMark: 100 },
    { name: 'SPD', value: 85, fullMark: 100 },
    { name: 'INT', value: 60, fullMark: 100 },
    { name: 'TGH', value: 75, fullMark: 100 },
  ]
};

const FeaturedDigimon: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-digiblue-dark to-digipurple text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Digimon</h2>
        <div className="max-w-4xl mx-auto">
          <DigimonCard 
            {...featuredDigimon} 
            isFeatured={true} 
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedDigimon;
