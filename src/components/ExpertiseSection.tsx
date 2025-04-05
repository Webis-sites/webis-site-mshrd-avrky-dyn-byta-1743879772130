'use client';

import React, { useEffect, useRef } from 'react';
import { FaBalanceScale, FaFileContract, FaShieldAlt, FaTrademark, FaUsers, FaStore } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExpertiseItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExpertiseSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const expertiseAreas: ExpertiseItem[] = [
    {
      id: 1,
      icon: <FaFileContract className="text-4xl text-primary mb-4" />,
      title: 'חוזים מסחריים',
      description: 'ייעוץ וניסוח חוזים מסחריים, הסכמי זיכיון, הסכמי הפצה והסכמי שיתוף פעולה עסקיים בענף הקמעונאות.',
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-4xl text-primary mb-4" />,
      title: 'הגנת הצרכן',
      description: 'ייעוץ בנושאי חוק הגנת הצרכן, מדיניות החזרות, אחריות מוצר וטיפול בתביעות צרכניות.',
    },
    {
      id: 3,
      icon: <FaTrademark className="text-4xl text-primary mb-4" />,
      title: 'קניין רוחני',
      description: 'רישום וניהול סימני מסחר, זכויות יוצרים והגנה על סודות מסחריים בתחום הקמעונאות.',
    },
    {
      id: 4,
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: 'דיני עבודה',
      description: 'ייעוץ בנושאי העסקת עובדים, חוזי עבודה, זכויות עובדים וטיפול בסכסוכי עבודה בענף הקמעונאות.',
    },
    {
      id: 5,
      icon: <FaStore className="text-4xl text-primary mb-4" />,
      title: 'נדל"ן מסחרי',
      description: 'ליווי בעסקאות שכירות ורכישת נכסים מסחריים, הסכמי שכירות בקניונים ומרכזי מסחר.',
    },
    {
      id: 6,
      icon: <FaBalanceScale className="text-4xl text-primary mb-4" />,
      title: 'ליטיגציה מסחרית',
      description: 'ייצוג בסכסוכים מסחריים, הליכי גישור ובוררות וניהול תביעות בתחום הקמעונאות.',
    },
  ];

  return (
    <section id="expertise" className="py-16 bg-gradient-to-br from-white to-gray-100 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative z-10">תחומי התמחות</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-secondary opacity-30 transform -rotate-1"></span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            משרדנו מתמחה במתן ייעוץ וליווי משפטי מקיף לעסקים בענף הקמעונאות
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 } 
              }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border-b-4 border-primary"
            >
              <div className="expertise-icon-wrapper mb-4 rounded-full bg-primary bg-opacity-10 p-5 transform transition-transform duration-500 hover:rotate-12">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            לייעוץ ראשוני
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;