'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

const TeamSection: React.FC = () => {
  const [teamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: 'דניאל כהן',
      position: 'שותף בכיר - דיני צרכנות',
      bio: 'עו״ד דניאל כהן הוא מומחה בדיני צרכנות עם ניסיון של למעלה מ-15 שנה. הוא ייצג בהצלחה מאות לקוחות בתביעות צרכניות מורכבות והוביל לשינויי חקיקה משמעותיים בתחום.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 2,
      name: 'מיכל לוי',
      position: 'שותפה - דיני מסחר קמעונאי',
      bio: 'עו״ד מיכל לוי מתמחה בליווי רשתות קמעונאיות ועסקים בתחום המסחר. בעלת תואר שני במשפטים מאוניברסיטת תל אביב וניסיון עשיר בניסוח חוזים והסכמי מסחר.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    },
    {
      id: 3,
      name: 'אלון ברק',
      position: 'שותף - ליטיגציה מסחרית',
      bio: 'עו״ד אלון ברק מוביל את מחלקת הליטיגציה במשרדנו. בעל ניסיון עשיר בייצוג לקוחות בבתי משפט בסכסוכים מסחריים מורכבים, עם התמחות בתחום הקמעונאות והמסחר האלקטרוני.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 4,
      name: 'רונית אדרי',
      position: 'שותפה - דיני עבודה בקמעונאות',
      bio: 'עו״ד רונית אדרי מתמחה בדיני עבודה עם התמקדות בענף הקמעונאות. היא מלווה מעסיקים בניהול יחסי העבודה, הכנת חוזי העסקה, וייצוג בסכסוכי עבודה מול עובדים וארגוני עובדים.',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    },
    {
      id: 5,
      name: 'יוסף מזרחי',
      position: 'שותף - קניין רוחני ומותגים',
      bio: 'עו״ד יוסף מזרחי מתמחה בהגנה על קניין רוחני ומותגים בענף הקמעונאות. הוא מייעץ ללקוחות בנושאי רישום סימני מסחר, הגנה על זכויות יוצרים ומאבק בהפרות קניין רוחני.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

    document.querySelectorAll('.team-member-card').forEach((card) => {
      observer.observe(card);
    });

    return () => {
      document.querySelectorAll('.team-member-card').forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section id="team-section" className="bg-white py-16 px-4 md:px-8 lg:px-16 rtl-direction">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">הצוות המשפטי שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            צוות משרד עורכי דין ביתא מורכב ממשפטנים מובילים בתחום המסחר והקמעונאות, המחויבים להצלחת לקוחותינו
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="team-member-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 opacity-0"
              variants={itemVariants}
              whileHover="hover"
              onMouseEnter={() => setActiveIndex(member.id)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out"
                  style={{
                    transform: activeIndex === member.id ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 transition-opacity duration-300"
                  style={{
                    opacity: activeIndex === member.id ? 0.7 : 0,
                  }}
                ></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-4">{member.position}</p>
                <div
                  className="h-0 overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    height: activeIndex === member.id ? '100px' : '0',
                  }}
                >
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <motion.button
                  className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  קרא עוד
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;