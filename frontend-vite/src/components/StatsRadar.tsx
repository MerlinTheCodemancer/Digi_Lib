
import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

interface Stat {
  name: string;
  value: number;
  fullMark: number;
}

interface StatsRadarProps {
  stats: Stat[];
  size?: number;
}

const StatsRadar: React.FC<StatsRadarProps> = ({ stats, size = 250 }) => {
  return (
    <div style={{ width: size, height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={stats}>
          <PolarGrid stroke="#555" />
          <PolarAngleAxis dataKey="name" tick={{ fill: '#333', fontSize: 12 }} />
          <Radar
            name="Stats"
            dataKey="value"
            stroke="#00BCD4"
            fill="#00BCD4"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsRadar;
