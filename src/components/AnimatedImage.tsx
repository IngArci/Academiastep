import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  animationType?: 'fade' | 'scale' | 'slideUp' | 'slideLeft' | 'zoom';
  delay?: number;
}

export function AnimatedImage({ 
  src, 
  alt, 
  className = '', 
  animationType = 'fade',
  delay = 0 
}: AnimatedImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const animations = {
    fade: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.8, delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, delay }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay }
    },
    slideLeft: {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.7, delay }
    },
    zoom: {
      initial: { opacity: 0, scale: 1 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, delay }
    }
  };

  const selectedAnimation = animations[animationType];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={selectedAnimation.transition}
      className="w-full h-full overflow-hidden"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full h-full"
      >
        <ImageWithFallback 
          src={src}
          alt={alt}
          className={`${className} transition-all duration-300 ${isHovered ? 'brightness-110' : ''}`}
        />
      </motion.div>
    </motion.div>
  );
}
