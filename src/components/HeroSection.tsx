'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

interface HeroSectionProps {
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id = 'hero' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-white to-gray-100 rtl"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMTIgMTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6TTEyIDQyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2eiIgZmlsbD0iIzQ1QjdEMSIgZmlsbC1vcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNDIgMjRjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6bS0xOCAxMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMzYgMTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6IiBmaWxsPSIjRDRBNUE1IiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto flex h-full items-center px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="mb-4 font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              משרד עורכי דין מוביל בישראל
            </motion.h1>
            
            <motion.div
              className="mb-2 h-1 w-24 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
            
            <motion.p
              className="mb-8 text-lg text-gray-700 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <button
                className="group relative inline-flex items-center overflow-hidden rounded-lg bg-primary px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => {
                  // Handle CTA click
                  console.log('CTA clicked');
                }}
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <span className="absolute left-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-4">
                  <FaArrowLeft className="mr-2 h-5 w-5" />
                </span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="משרד עורכי דין ביתא"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-secondary opacity-70"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            ></motion.div>
            <motion.div
              className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary opacity-70"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        onClick={() => {
          const nextSection = document.getElementById('about') || document.getElementById('services');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-gray-500">גלול למטה</span>
          <div className="h-10 w-6 rounded-full border-2 border-gray-400 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;