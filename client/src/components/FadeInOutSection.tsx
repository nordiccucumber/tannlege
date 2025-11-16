import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInOutSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;          // sekunder
  duration?: number;       // sekunder
  threshold?: number;      // 0..1
  translateY?: number;     // px
  /** NYTT: animér kun første gang (anbefalt) */
  once?: boolean;
  /** NYTT: litt hysterese for å unngå flikking mellom seksjoner */
  rootMargin?: string;     // f.eks. "0px 0px -12% 0px"
}

export const FadeInOutSection: React.FC<FadeInOutSectionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  threshold = 0.15,
  translateY = 20,
  once = true,
  rootMargin = '0px 0px -12% 0px',
}) => {
  const reduceMotion = useReducedMotion();

  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,     // ← viktig: ikke “blink” når man scroller tilbake
    rootMargin,            // ← flytt trigger litt inn i viewport for stabilitet
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : translateY,
      transition: {
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  } as const;

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? 'visible' : 'hidden'}
      animate={inView || reduceMotion ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      style={{ willChange: reduceMotion ? undefined : 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOutSection;
