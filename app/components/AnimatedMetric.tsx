"use client";

import React from "react";

type MetricProps = {
  label: string;
  value: string;
  color: string;
};

export function AnimatedMetric({ label, value, color }: MetricProps) {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = React.useState(value);
  const hasAnimatedRef = React.useRef(false);
  const frameRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          
          // Extract number from value
          const numberMatch = value.match(/\d+/);
          if (numberMatch) {
            const target = parseInt(numberMatch[0]);
            const suffix = value.replace(numberMatch[0], "");
            const startTime = Date.now();
            const duration = 2000;
            
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(target * easeOutCubic);
              
              setDisplayValue(`${current}${suffix}`);
              
              if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
              }
            };
            
            frameRef.current = requestAnimationFrame(animate);
          }
        }
      },
      { threshold: 0.3 }
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
  }, [value]);

  return (
    <div
      ref={elementRef}
      className={`rounded-2xl bg-gradient-to-br ${color} p-5 shadow-md border border-white/60 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg`}
    >
      <div className="text-2xl font-bold text-gray-900">{displayValue}</div>
      <div className="text-sm font-medium text-gray-700 mt-1">{label}</div>
    </div>
  );
}

