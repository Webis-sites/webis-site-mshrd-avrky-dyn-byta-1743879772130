'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

interface NavItem {
  id: string;
  label: string;
}

const HeaderSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = [
    { id: 'home', label: 'דף הבית' },
    { id: 'about', label: 'אודות' },
    { id: 'services', label: 'תחומי התמחות' },
    { id: 'team', label: 'הצוות שלנו' },
    { id: 'cases', label: 'תיקים בולטים' },
    { id: 'contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="relative h-12 w-12 mr-3">
            <Image
              src="/logo.png"
              alt="משרד עורכי דין ביתא"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">משרד עורכי דין ביתא</h1>
            <p className="text-xs text-gray-600">צדק • מקצועיות • מסירות</p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer font-medium hover:text-primary transition-colors duration-300 relative px-2 py-1 ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-700'
                  }`}
                  activeClass="active"
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary focus:outline-none transition-colors duration-300"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="container mx-auto px-4 py-3">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={`block py-2 px-4 rounded-md transition-colors duration-300 ${
                        activeSection === item.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      activeClass="active"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderSection;