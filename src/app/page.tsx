'use client';

import React from 'react';
import Hero from '@/components/Hero';
import HeaderSection from '../components/HeaderSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero 
        title="משרד עורכי דין ביתא" 
        subtitle="משרד עורכי דין" 
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <HeaderSection />
  </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 משרד עורכי דין ביתא. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}