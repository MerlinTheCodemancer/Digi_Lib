import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
  compact?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search Digimon...", 
  className = "",
  onSearch,
  compact = false
}) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`search-input pr-10 ${compact ? 'h-8 text-xs' : 'h-10 text-sm'} w-full transition-all focus:ring-2 focus:ring-digipurple`}
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-digipurple transition-colors"
      >
        <Search size={compact ? 14 : 16} />
      </button>
    </form>
  );
};

export default SearchBar;