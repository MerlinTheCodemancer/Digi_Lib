import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-digipurple">DigiVerse Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}>
              Home
            </Link>
            <Link to="/digidex" className={`nav-link ${isActive('/digidex') ? 'active-nav-link' : ''}`}>
              DigiDex
            </Link>
            <Link to="/game-mechanics" className={`nav-link ${isActive('/game-mechanics') ? 'active-nav-link' : ''}`}>
              Game Mechanics
            </Link>
            <Link to="/digidb" className={`nav-link ${isActive('/digidb') ? 'active-nav-link' : ''}`}>
              DIGI DB
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active-nav-link' : ''}`}>
              About
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link"
            >
              <Github size={18} className="inline mr-1" />
              <span className="sr-only md:not-sr-only">GitHub</span>
            </a>
          </nav>

          {/* Search and Mobile Menu Trigger */}
          <div className="flex items-center">
            <div className="hidden md:block w-48 xl:w-64 mr-4">
              <SearchBar />
            </div>
            <button 
              className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <div className="w-full">
              <SearchBar />
            </div>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md ${isActive('/') ? 'bg-secondary text-digipurple' : 'hover:bg-secondary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/digidex" 
                className={`px-3 py-2 rounded-md ${isActive('/digidex') ? 'bg-secondary text-digipurple' : 'hover:bg-secondary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                DigiDex
              </Link>
              <Link 
                to="/game-mechanics" 
                className={`px-3 py-2 rounded-md ${isActive('/game-mechanics') ? 'bg-secondary text-digipurple' : 'hover:bg-secondary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Game Mechanics
              </Link>
              <Link 
                to="/digidb" 
                className={`px-3 py-2 rounded-md ${isActive('/digidb') ? 'bg-secondary text-digipurple' : 'hover:bg-secondary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                DIGI DB
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md ${isActive('/about') ? 'bg-secondary text-digipurple' : 'hover:bg-secondary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-2 rounded-md hover:bg-secondary flex items-center"
              >
                <Github size={18} className="mr-2" />
                GitHub
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;