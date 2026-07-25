import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { lenis } from '../hooks/useLenis.js';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenisRef = useRef(lenis);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.5 });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1a1717] duration-75 transition-colors z-50"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 hover:animate-bounce duration-300 transition-transform portrait:w-5 portrait:h-5 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </motion.button>
  );
}