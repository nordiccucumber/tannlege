
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInOutSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  translateY?: number;
}

export const FadeInOutSection: React.FC<FadeInOutSectionProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  translateY = 20,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: translateY,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Professional easing curve
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
