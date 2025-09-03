import React, { useState, useEffect } from 'react';

interface TrustCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export const TrustCounter: React.FC<TrustCounterProps> = ({ 
  target, 
  suffix = "", 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(target * easeOut));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target, duration, isVisible]);

  return (
    <span 
      id={`counter-${target}`}
      className="inline-block tabular-nums font-bold text-4xl md:text-5xl gradient-text animate-counter"
    >
      {count.toLocaleString()}{suffix}
    </span>
  );
};