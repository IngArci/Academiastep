import { useEffect, useRef, useState } from 'react';

interface CountingAnimationProps {
  value: string;
  duration?: number;
  className?: string;
}

export function CountingAnimation({ value, duration = 2000, className = '' }: CountingAnimationProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract number and suffix from value
    const match = value.match(/^(\d+(?:,\d+)?)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const [, numStr, suffix] = match;
    const targetNumber = parseInt(numStr.replace(/,/g, ''));
    const hasComma = numStr.includes(',');
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const currentNumber = Math.floor(targetNumber * easedProgress);
      const formattedNumber = hasComma 
        ? currentNumber.toLocaleString('en-US')
        : currentNumber.toString();
      
      setDisplayValue(formattedNumber + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, value, duration]);

  return (
    <div ref={elementRef} className={className}>
      {displayValue}
    </div>
  );
}
