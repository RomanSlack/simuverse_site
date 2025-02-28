'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-space-blue mr-1">Simu</span>
              <span className="text-xl font-bold gradient-text">Verse</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-[#4a5568] hover:text-mars-red transition-colors">
              Features
            </Link>
            <Link href="#impact" className="text-[#4a5568] hover:text-mars-red transition-colors">
              Impact
            </Link>
            <Link href="#about" className="text-[#4a5568] hover:text-mars-red transition-colors">
              About
            </Link>
            <Link href="https://github.com/roman-slack/simuverse" className="btn-secondary py-2">
              GitHub
            </Link>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#4a5568] hover:text-mars-red focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="#features" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#4a5568] hover:text-mars-red hover:bg-[#f7fafc]"
            >
              Features
            </Link>
            <Link 
              href="#impact" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#4a5568] hover:text-mars-red hover:bg-[#f7fafc]"
            >
              Impact
            </Link>
            <Link 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#4a5568] hover:text-mars-red hover:bg-[#f7fafc]"
            >
              About
            </Link>
            <Link 
              href="https://github.com/roman-slack/simuverse" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-space-blue hover:bg-space-blue/5"
            >
              GitHub
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;