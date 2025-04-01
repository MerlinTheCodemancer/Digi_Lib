import React from 'react';
import DigimonCard from './DigimonCard';

// Mock data for now - will connect to Firebase later
const popularDigimon = [
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
  }
];

const PopularDigimon: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Popular Digimon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDigimon.map((digimon) => (
            <DigimonCard
              key={digimon.id}
              {...digimon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDigimon;