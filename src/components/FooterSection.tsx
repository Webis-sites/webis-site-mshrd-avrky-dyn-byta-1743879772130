import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
  label: string;
  href: string;
}

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const mainNavLinks: NavLink[] = [
    { label: 'דף הבית', href: '/' },
    { label: 'אודותינו', href: '/about' },
    { label: 'תחומי התמחות', href: '/practice-areas' },
    { label: 'צוות המשרד', href: '/team' },
    { label: 'פסקי דין', href: '/cases' },
    { label: 'מאמרים', href: '/articles' },
    { label: 'צור קשר', href: '/contact' },
  ];

  const legalLinks: NavLink[] = [
    { label: 'מדיניות פרטיות', href: '/privacy-policy' },
    { label: 'תנאי שימוש', href: '/terms-of-service' },
  ];

  return (
    <footer className="bg-primary-dark text-white rtl" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo-small.png" 
                  alt="משרד עורכי דין ביתא" 
                  width={120} 
                  height={60}
                  className="h-auto"
                />
              </Link>
            </div>
            <p className="text-sm mb-4 opacity-90">
              משרד עורכי דין ביתא מתמחה בייצוג לקוחות בתחומי המשפט האזרחי, המסחרי והפלילי, תוך שמירה על רמת מקצועיות גבוהה ויחס אישי.
            </p>
            <div className="flex space-x-4 space-x-reverse mt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary-dark p-2 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary-dark p-2 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary-dark p-2 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 border-b border-secondary pb-2">ניווט מהיר</h3>
            <nav>
              <ul className="space-y-2">
                {mainNavLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-sm hover:text-secondary transition-colors duration-300 hover:pr-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 border-b border-secondary pb-2">צור קשר</h3>
            <address className="not-italic text-sm space-y-3">
              <p className="flex items-center">
                <span className="ml-2">כתובת:</span>
                <span className="opacity-90">רחוב הרצל 123, תל אביב</span>
              </p>
              <p className="flex items-center">
                <span className="ml-2">טלפון:</span>
                <a href="tel:+97235555555" className="opacity-90 hover:text-secondary transition-colors duration-300">03-5555555</a>
              </p>
              <p className="flex items-center">
                <span className="ml-2">פקס:</span>
                <span className="opacity-90">03-5555556</span>
              </p>
              <p className="flex items-center">
                <span className="ml-2">דוא"ל:</span>
                <a href="mailto:info@betalaw.co.il" className="opacity-90 hover:text-secondary transition-colors duration-300">info@betalaw.co.il</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-80 mb-4 md:mb-0">
            © {currentYear} משרד עורכי דין ביתא. כל הזכויות שמורות.
          </div>
          <nav>
            <ul className="flex space-x-6 space-x-reverse">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-xs hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;