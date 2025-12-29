/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  title: string;
  subtitle: string;
  points: string[];
  badge: string;
  ghost: string;
};

const steps: Step[] = [
  {
    title: "Week 1",
    subtitle: "Assessment & Goal Setting",
    points: [
      "Comprehensive developmental assessment (OT / Speech Therapy / ABA Therapy / Special Education as needed)",
      "Understand your child's strengths, challenges, triggers, and learning readiness",
      "Identify root causes impacting communication, attention, behaviour, and regulation",
      "Set clear, measurable goals with a step-by-step therapy plan",
    ],
    badge: "Start",
    ghost: "01",
  },
  {
    title: "Weeks 2–4",
    subtitle: "Foundation Building",
    points: [
      "Build trust and a strong therapeutic relationship",
      "Establish regulation and readiness (sensory processing, attention stability, routines)",
      "Reduce overwhelm and improve participation in sessions",
      "Parent guidance: simple home structure to support progress",
    ],
    badge: "Regulate",
    ghost: "02",
  },
  {
    title: "Weeks 5–12",
    subtitle: "Active Skill Development",
    points: [
      "Target core goals: communication, attention, behaviour regulation, daily living skills",
      "Evidence-based therapy using Dr Aaditya's Root Cause Therapy approach",
      "Structured sessions with progress tracking and weekly adjustments",
      "Parent coaching to carry therapy into home routines",
    ],
    badge: "Build",
    ghost: "03",
  },
  {
    title: "Weeks 13–20",
    subtitle: "Consolidation & Generalisation",
    points: [
      "Strengthen skills until they become consistent, not occasional",
      "Apply progress across settings: home, school, play, community",
      "Improve independence, confidence, and learning readiness",
      "Build strategies for transitions, social situations, and classroom demands",
    ],
    badge: "Generalise",
    ghost: "04",
  },
  {
    title: "Weeks 21+",
    subtitle: "Maintenance & Growth",
    points: [
      "Monitor long-term progress and prevent regression",
      "Upgrade goals as your child grows (school readiness, behaviour, academics, independence)",
      "Periodic reviews and booster sessions when needed",
      "Continued parent support for sustainable outcomes",
    ],
    badge: "Grow",
    ghost: "05",
  },
];

export default function TherapyTimeline() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!scrollerRef.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-step-idx"));
            setVisible((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { root: scrollerRef.current, rootMargin: "0px 10% 0px 10%", threshold: 0.5 }
    );

    const nodes = scrollerRef.current.querySelectorAll("[data-step-idx]");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm">
            <span className="text-sm font-semibold text-blue-700">Your Child's Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Therapy Timeline & Transformation
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A structured, measurable path from assessment to lasting transformation—designed with intention, tracked with clarity, and celebrated with every milestone.
          </p>
        </div>

        <div className="relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 blur-3xl opacity-40 -z-10" />
          
          <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border border-white/50 px-2 md:px-6 py-10">
            {/* Animated timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent -translate-y-1/2" />
            
            <div
              ref={scrollerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar"
            >
              {steps.map((step, idx) => {
                const isVisible = visible.has(idx);
                const isHovered = hoveredIndex === idx;
                
                return (
                  <div
                    key={step.title}
                    data-step-idx={idx}
                    className="snap-center shrink-0 w-[90%] sm:w-[520px] lg:w-[640px] relative group"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Timeline connector line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 to-gray-200 -translate-y-1/2" />
                    
                    {/* Left dot */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
                      <div className={`h-5 w-5 rounded-full bg-white border-3 transition-all duration-500 ${
                        isVisible ? 'border-blue-600 shadow-lg shadow-blue-500/50' : 'border-gray-300'
                      }`} />
                    </div>
                    
                    {/* Animated progress indicator */}
                    <div
                      className={`absolute right-6 top-1/2 h-1.5 -translate-y-1/2 rounded-full transition-all duration-1000 ease-out ${
                        isVisible 
                          ? 'w-24 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50' 
                          : 'w-8 bg-gray-300'
                      }`}
                    />
                    
                    {/* Main card */}
                    <div className={`relative grid md:grid-cols-[0.95fr_1.05fr] items-center gap-6 md:gap-10 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg border transition-all duration-500 overflow-hidden ${
                      isVisible 
                        ? 'border-blue-200/50 shadow-2xl' 
                        : 'border-gray-200/50 shadow-lg'
                    } ${
                      isHovered ? 'shadow-2xl scale-[1.01] border-blue-300/80' : ''
                    }`}>
                      
                      {/* Glow effect on hover */}
                      {isVisible && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      )}
                      
                      {/* Left side - Visual badge */}
                      <div className="relative flex items-center justify-center">
                        <div className={`relative h-32 w-32 md:h-44 md:w-44 rounded-full overflow-hidden transition-all duration-700 ${
                          isVisible ? 'scale-100' : 'scale-75 opacity-60'
                        }`}>
                          {/* Background layers */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100" />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent" />
                          <div className="absolute inset-1 rounded-full border border-blue-200/40" />
                          <div className="absolute inset-3 rounded-full border border-purple-200/30" />
                          
                          {/* Ghost number background */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center text-6xl font-black text-gray-900/10 transition-all duration-700 ${
                              isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            {step.ghost}
                          </div>
                          
                          {/* Badge circle */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-xl transition-all duration-700 ${
                              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                          >
                            <span className="text-center px-2">{step.badge}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right side - Content */}
                      <div
                        className={`relative z-10 transition-all duration-700 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        }`}
                      >
                        {/* Stage label */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-all duration-500 ${
                            isVisible
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {step.title}
                          </div>
                          <div className={`h-1.5 w-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`} />
                        </div>
                        
                        {/* Heading */}
                        <h3 className={`text-2xl md:text-2xl font-bold text-gray-900 mb-4 transition-all duration-500 ${
                          isHovered ? 'text-blue-600' : ''
                        }`}>
                          {step.subtitle}
                        </h3>
                        
                        {/* Points list with staggered animation */}
                        <ul className="space-y-3">
                          {step.points.map((point, pointIdx) => (
                            <li 
                              key={point} 
                              className={`flex items-start gap-3 text-sm text-gray-700 transition-all duration-700 ${
                                isVisible 
                                  ? 'opacity-100 translate-y-0' 
                                  : 'opacity-0 translate-y-4'
                              }`}
                              style={{
                                transitionDelay: isVisible ? `${pointIdx * 80}ms` : '0ms'
                              }}
                            >
                              <span className={`mt-0.5 text-lg flex-shrink-0 transition-transform duration-500 ${
                                isHovered ? 'scale-125 text-green-600' : 'text-green-500'
                              }`}>
                                ✓
                              </span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress indicators */}
            <div className="mt-8 flex items-center justify-center gap-2 px-4">
              {steps.map((_, i) => (
                <div key={i} className="relative">
                  <span
                    className={`h-2 rounded-full transition-all duration-500 ${
                      visible.has(i) 
                        ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50' 
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid gap-4 sm:grid-cols-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl border border-blue-400/30">
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">
              3–6
            </div>
            <div className="text-blue-100 text-sm font-semibold">Months Average Duration</div>
            <div className="w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300" />
          </div>
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">
              3–6
            </div>
            <div className="text-blue-100 text-sm font-semibold">Sessions Per Week</div>
            <div className="w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300" />
          </div>
          <div className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
            <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-110 transition-transform duration-300">
              95%
            </div>
            <div className="text-blue-100 text-sm font-semibold">Goal Achievement Rate</div>
            <div className="w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300" />
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Ready to start your child's transformation? Book a comprehensive assessment and get a personalized therapy roadmap.
            </p>
          </div>
          <a
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <span>Book Your Consultation</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
