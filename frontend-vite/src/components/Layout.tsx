import React from 'react';
import Navbar from './Navbar';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-digiblue text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© {new Date().getFullYear()} DigiVerse Hub - A fan-made website</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-digiyellow transition-colors">
                Terms
              </a>
              <a href="#" className="text-white hover:text-digiyellow transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white hover:text-digiyellow transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
      <Sonner />
    </div>
  );
};

export default Layout;