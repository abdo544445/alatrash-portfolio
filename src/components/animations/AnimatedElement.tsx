import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedElementProps {
  children: React.ReactNode;
  variants?: Variants;
  initial?: string | object;
  animate?: string | object;
  exit?: string | object;
  transition?: object;
  className?: string;
}

// Predefined animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -15 },
  visible: { opacity: 1, rotate: 0 },
};

export const bounce: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15
    }
  },
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  variants = fadeIn,
  initial = 'hidden',
  animate = 'visible',
  exit = 'hidden',
  transition = { duration: 0.5 },
  className
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;