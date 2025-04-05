'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'מהן העלויות של פגישת ייעוץ ראשונית?',
      answer: 'פגישת ייעוץ ראשונית במשרד עורכי דין ביתא עולה 250 ש"ח + מע"מ. פגישה זו נמשכת כשעה ובמהלכה נוכל להעריך את המקרה שלך ולהציע אסטרטגיה משפטית מתאימה. במקרה שתבחר להמשיך לעבוד איתנו, עלות הפגישה הראשונית תקוזז מהתשלום הכולל.'
    },
    {
      id: 'faq-2',
      question: 'כמה זמן לוקח לטפל בסכסוך מסחרי?',
      answer: 'משך הטיפול בסכסוך מסחרי משתנה בהתאם למורכבות המקרה. תיקים פשוטים יחסית עשויים להסתיים תוך 3-6 חודשים, בעוד שתיקים מורכבים יותר עלולים להימשך שנה או יותר. במשרדנו אנו שואפים לפתור סכסוכים ביעילות ובמהירות האפשרית, תוך שמירה על האינטרסים שלך.'
    },
    {
      id: 'faq-3',
      question: 'אילו סוגי בעיות משפטיות בתחום הקמעונאות אתם מטפלים?',
      answer: 'משרדנו מתמחה במגוון רחב של נושאים משפטיים בתחום הקמעונאות, כולל: סכסוכי חוזים עם ספקים, הגנת הצרכן, סימני מסחר וקניין רוחני, סכסוכי שכירות מסחרית, תביעות אחריות למוצרים, סוגיות העסקת עובדים, רגולציה וציות, וייצוג מול רשויות ממשלתיות.'
    },
    {
      id: 'faq-4',
      question: 'האם אתם מציעים הסכמי ריטיינר לעסקים?',
      answer: 'כן, אנו מציעים הסכמי ריטיינר המותאמים לצרכים הספציפיים של עסקים בתחום הקמעונאות. הסכמים אלה מאפשרים לעסקים לקבל ייעוץ משפטי שוטף, ניסוח וסקירת חוזים, וטיפול בבעיות משפטיות יומיומיות במחיר קבוע וידוע מראש. נשמח לדון בפתרון המתאים ביותר לעסק שלך.'
    },
    {
      id: 'faq-5',
      question: 'מה הניסיון שלכם בתחום המשפט המסחרי והקמעונאי?',
      answer: 'לצוות משרד עורכי דין ביתא יש למעלה מ-15 שנות ניסיון בייצוג עסקים קמעונאיים, מרשתות גדולות ועד לעסקים קטנים. הצוות שלנו כולל מומחים בתחומי המשפט המסחרי, דיני עבודה, קניין רוחני והגנת הצרכן. טיפלנו בהצלחה במאות מקרים וצברנו ידע מעמיק בסוגיות הייחודיות של ענף הקמעונאות בישראל.'
    },
    {
      id: 'faq-6',
      question: 'האם אתם מייצגים בבתי משפט או מתמקדים בייעוץ משפטי בלבד?',
      answer: 'משרדנו מספק ייצוג מלא בכל הערכאות המשפטיות, כולל בתי משפט שלום, מחוזי, עליון, בתי דין לעבודה וטריבונלים מנהליים. בנוסף לייצוג בבתי משפט, אנו מתמחים גם בהליכי גישור ובוררות כאלטרנטיבה לליטיגציה. אנו מאמינים בגישה הוליסטית ומציעים הן ייעוץ מונע והן ייצוג אגרסיבי בבית המשפט כשנדרש.'
    },
    {
      id: 'faq-7',
      question: 'איך מתחילים את תהליך העבודה עם המשרד שלכם?',
      answer: 'תהליך העבודה עם משרדנו מתחיל בפגישת היכרות ראשונית, בה נשמע על הצרכים המשפטיים שלך ונציג את האופן בו נוכל לסייע. לאחר מכן, נגבש הצעת שכר טרחה מפורטת המותאמת לצרכיך. לקביעת פגישה, ניתן ליצור קשר בטלפון 03-1234567 או באמצעות טופס יצירת הקשר באתר שלנו. אנו מתחייבים להגיב לכל פנייה תוך יום עסקים אחד.'
    }
  ];

  return (
    <section id="faq-section" className="py-16 bg-white font-heebo" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          שאלות נפוצות
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((faq) => (
            <div 
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex justify-between items-center w-full p-5 text-right bg-white hover:bg-gray-50 transition-colors duration-300"
                aria-expanded={openId === faq.id}
                aria-controls={`${faq.id}-content`}
              >
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                <span className="text-primary">
                  {openId === faq.id ? 
                    <IoIosArrowUp className="text-xl" /> : 
                    <IoIosArrowDown className="text-xl" />
                  }
                </span>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    id={`${faq.id}-content`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-gray-50 border-t border-gray-200"
                  >
                    <div className="p-5 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            יש לך שאלה שלא מופיעה כאן? אל תהסס לפנות אלינו
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            צור קשר
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;