import { useEffect, useRef, useState } from "react";

export function useCountUp(
  target: number,
  duration: number = 2000,
  threshold: number = 0.3
) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          
          const startTime = Date.now();
          const startValue = 0;
          const endValue = target;
          
          const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Cubic easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
            
            setCount(currentValue);
            
            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate);
            }
          };
          
          frameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      observer.disconnect();
    };
  }, [target, duration, threshold]);

  return { count, elementRef };
}
