'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaHandshake, FaSearch, FaFileContract, FaBalanceScale, FaCheckCircle } from 'react-icons/fa';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: 'פגישת ייעוץ ראשונית',
      description: 'אנו מתחילים בפגישת ייעוץ מקיפה כדי להבין את הצרכים הספציפיים של העסק שלך בענף הקמעונאות. בפגישה זו אנו אוספים את כל המידע הרלוונטי ומגדירים את היעדים המשפטיים שלך.',
      icon: <FaHandshake className="text-3xl text-primary" />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'ניתוח מעמיק של המקרה',
      description: 'צוות המומחים שלנו מבצע ניתוח מעמיק של המקרה שלך, בוחן את כל ההיבטים המשפטיים הרלוונטיים לענף הקמעונאות, ומזהה את האסטרטגיה המשפטית האופטימלית עבורך.',
      icon: <FaSearch className="text-3xl text-primary" />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'פיתוח אסטרטגיה משפטית',
      description: 'אנו מפתחים אסטרטגיה משפטית מותאמת אישית המתמקדת בצרכים הספציפיים של העסק הקמעונאי שלך, תוך התחשבות בחוקים ובתקנות הרלוונטיים לענף.',
      icon: <FaFileContract className="text-3xl text-primary" />,
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'ייצוג וליווי משפטי',
      description: 'אנו מייצגים את האינטרסים שלך בכל הליך משפטי נדרש, מנהלים משא ומתן בשמך, ומספקים ליווי משפטי מקצועי לאורך כל התהליך.',
      icon: <FaBalanceScale className="text-3xl text-primary" />,
      image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'יישום והטמעה',
      description: 'לאחר השגת התוצאה הרצויה, אנו מסייעים ביישום והטמעה של הפתרונות המשפטיים בעסק שלך, ומספקים הדרכה למניעת בעיות משפטיות עתידיות.',
      icon: <FaCheckCircle className="text-3xl text-primary" />,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="process-section" className="py-16 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800 relative inline-block">
            תהליך העבודה שלנו
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform -translate-y-2"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            במשרד עורכי דין ביתא, אנו מחויבים לספק שירות משפטי מקצועי ויעיל לעסקים בענף הקמעונאות. הנה כיצד אנו עובדים יחד להשגת התוצאות הטובות ביותר עבורך.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <StepItem key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StepItemProps {
  step: ProcessStep;
  index: number;
}

const StepItem: React.FC<StepItemProps> = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 relative`}
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shadow-lg transform -translate-y-1/2 md:translate-x-1/2">
        {step.id}
      </div>
      
      <motion.div 
        variants={itemVariants} 
        className="w-full md:w-1/2"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg border-r-4 border-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full transform translate-x-10 -translate-y-10"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="mr-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="w-full md:w-1/2 h-64 md:h-80 relative overflow-hidden rounded-lg shadow-lg"
      >
        <img 
          src={step.image} 
          alt={step.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </motion.div>
      
      {index < 4 && (
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: '100px' }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-0 left-1/2 w-1 bg-secondary transform translate-y-full -translate-x-1/2 hidden md:block"
        ></motion.div>
      )}
    </motion.div>
  );
};

export default ProcessSection;