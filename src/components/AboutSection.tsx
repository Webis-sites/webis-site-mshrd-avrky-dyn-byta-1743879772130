'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-16 bg-white rtl" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="משרד עורכי דין ביתא - פגישת עורכי דין"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              אודות משרד עורכי דין ביתא
            </h2>
            
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              אנחנו משרד עורכי דין מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              המשרד שלנו מתמחה בדיני מסחר וקמעונאות, ומספק ייעוץ משפטי מקיף לעסקים בכל הגדלים. הצוות המקצועי שלנו מחויב להשגת התוצאות הטובות ביותר עבור הלקוחות שלנו.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300"
            >
              צור קשר
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;