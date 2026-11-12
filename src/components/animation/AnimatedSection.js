import React, { useEffect } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, animationType = 'fade', className = '' }) => {
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  useEffect(() => {
    if (inView || shouldReduceMotion) {
      controls.start('visible');
    }
  }, [controls, inView, shouldReduceMotion]);

  const variants = {
    fade: {
      hidden: { opacity: 0, y: 18 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -24 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    },
    slideRight: {
      hidden: { opacity: 0, x: 24 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    },
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants[animationType] || variants.fade}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
