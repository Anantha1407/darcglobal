"use client";

import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import { useState } from "react";

export default function OccupationalTherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How many sessions per week does my child need?",
      answer: "Most children benefit from 2-3 sessions per week in the early months. We recommend frequency during the assessment and adjust as goals are met.",
      icon: "📅"
    },
    {
      question: "Is Sensory Integration Therapy safe?",
      answer: "Yes. Safety is prioritized through sanitized equipment, supervised therapy spaces, and staff trained in pediatric first aid. We follow secure check-in and check-out procedures for every family.",
      icon: "🛡️"
    },
    {
      question: "How long until we see progress?",
      answer: "Many families notice small shifts within 2-4 weeks. Significant gains typically emerge over 2-3 months of consistent therapy, with every child's pace tracked through data-driven reports.",
      icon: "⏱️"
    },
    {
      question: "Do you provide home equipment or practice activities?",
      answer: "Absolutely. Each week you receive a simple home practice plan with 2-3 daily activities that fit routines like meals, playtime, and bedtime. We don't require special equipment—everyday items work great!",
      icon: "🏠"
    },
  ];

  return (
    <main className="pt-20 overflow-x-hidden bg-white">
      {/* HERO */}
      <ScrollReveal>
        <section className="relative isolate overflow-hidden py-20 md:py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.2),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(244,114,182,0.16),transparent_36%)]" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-md backdrop-blur-sm">
                <span className="text-blue-600">✦</span> Occupational Therapy
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                Building Independence Through
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Occupational Therapy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Evidence-based Occupational Therapy helping children with <span className="font-semibold text-gray-900">autism, ADHD, and developmental delays</span> build daily living skills, sensory integration, and independence through play-based, child-led interventions.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book OT Assessment
                </Link>
                <a
                  href="tel:+918015152682"
                  className="inline-flex items-center justify-center h-12 rounded-full border-2 border-blue-600 bg-white text-blue-700 px-8 font-semibold hover:bg-blue-50 transition-all duration-300"
                >
                  <span className="mr-2">📞</span>
                  Call Us
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  { value: "95%", label: "Success Rate", icon: "🎯" },
                  { value: "500+", label: "Children Helped", icon: "❤️" },
                  { value: "8-12", label: "Weeks Average", icon: "⏱️" },
                  { value: "98%", label: "Parent Trust", icon: "⭐" },
                ].map((stat) => (
                  <div key={stat.label} className="group rounded-2xl border border-white/60 bg-white/80 p-5 shadow-md backdrop-blur hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-700 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* DEVELOPMENT AREAS & METHODS (MERGED) */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <span className="text-blue-600">◆</span> Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Challenges We Address &
                <span className="block mt-1 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  How We Help
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                For each developmental area, we have specific, evidence-based methods to build skills and independence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  challenge: "Sensory Integration",
                  percent: "92%",
                  challengeDesc: "Processing sensory input effectively for better regulation and function",
                  method: "Sensory Integration (SI) Therapy",
                  methodDesc: "Addressing underlying sensory processing challenges through controlled sensory experiences.",
                  techniques: [
                    "Swings & vestibular input",
                    "Tactile exploration activities",
                    "Proprioceptive training",
                    "Sensory diet creation",
                  ],
                  icon: "🧠",
                  gradient: "from-blue-500 to-blue-600",
                  rate: "95%"
                },
                {
                  challenge: "Daily Living Skills",
                  percent: "90%",
                  challengeDesc: "Self-feeding, dressing, hygiene, and independence in routines",
                  method: "ADL Training",
                  methodDesc: "Teaching practical skills for self-feeding, dressing, hygiene, and toileting.",
                  techniques: [
                    "Self-feeding techniques",
                    "Dressing sequences",
                    "Toileting routines",
                    "Hygiene habits",
                  ],
                  icon: "🎯",
                  gradient: "from-cyan-500 to-blue-600",
                  rate: "90%"
                },
                {
                  challenge: "Fine Motor Skills",
                  percent: "88%",
                  challengeDesc: "Hand strength, precision, and coordination for writing and daily tasks",
                  method: "Fine Motor Development",
                  methodDesc: "Building hand strength, coordination, and precision for writing and play.",
                  techniques: [
                    "Pre-writing activities",
                    "Scissor skills",
                    "Buttoning & zipping",
                    "Hand strengthening",
                  ],
                  icon: "✋",
                  gradient: "from-blue-600 to-blue-700",
                  rate: "88%"
                },
                {
                  challenge: "Self-Regulation",
                  percent: "85%",
                  challengeDesc: "Emotional control, attention, and managing sensory input",
                  method: "Self-Regulation Training",
                  methodDesc: "Helping children manage emotions and sensory input throughout the day.",
                  techniques: [
                    "Breathing techniques",
                    "Sensory breaks",
                    "Emotional identification",
                    "Coping strategies",
                  ],
                  icon: "⚡",
                  gradient: "from-sky-500 to-blue-600",
                  rate: "87%"
                },
              ].map((item) => (
                <div key={item.challenge} className="group rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="space-y-6">
                    {/* Challenge Part */}
                    <div className="pb-6 border-b border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{item.icon}</div>
                        <span className={`text-xl font-extrabold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.percent}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.challenge}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.challengeDesc}</p>
                    </div>

                    {/* Solution Part */}
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 mb-3">
                        <span>✓ Our Solution</span>
                      </div>
                      <h4 className="font-bold text-blue-700 mb-2 text-sm">{item.method}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">{item.methodDesc}</p>
                      
                      <div className="space-y-2">
                        {item.techniques.map((technique) => (
                          <div key={technique} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${item.gradient}`} />
                            <span>{technique}</span>
                          </div>
                        ))}
                      </div>

                      <div className={`mt-4 h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full opacity-30`}></div>
                      <div className="text-xs text-gray-600 mt-3 text-right font-semibold">
                        Success Rate: <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.rate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHO BENEFITS & OUTCOMES */}
      <ScrollReveal>
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12">
            {/* Who Benefits */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm mb-3">
                  <span className="text-blue-600">●</span> For Families
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Who Benefits
                  <span className="block mt-1 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    from OT?
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  { text: "Autism Spectrum Disorder", icon: "🧩" },
                  { text: "Sensory Processing Difficulties", icon: "🧠" },
                  { text: "Self-Care Skill Delays", icon: "🎯" },
                  { text: "Fine Motor Delays", icon: "✋" },
                  { text: "Attention & Regulation Challenges", icon: "⚡" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="font-medium text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm mb-3">
                  <span className="text-blue-600">●</span> Results
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Outcomes You
                  <span className="block mt-1 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    Can Expect
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  "Improved self-feeding, dressing, and toileting skills",
                  "Better sensory processing and self-regulation",
                  "Enhanced fine motor skills (handwriting, cutting, buttoning)",
                  "Increased attention and focus for learning",
                  "Reduced sensory meltdowns and behavioral challenges",
                  "Greater independence in daily activities",
                ].map((outcome) => (
                  <div key={outcome} className="flex gap-3 items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex-shrink-0" />
                    <span className="text-gray-800 leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SESSION JOURNEY */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <span className="text-blue-600">◆</span> Your Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                What Happens in an
                <span className="block mt-1 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  OT Session?
                </span>
              </h2>
              <p className="text-lg text-gray-700">
                A structured, transparent journey from assessment to measurable progress.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  label: "Week 1",
                  title: "Comprehensive Assessment",
                  description: "We evaluate sensory processing, motor skills, and daily living routines to build a clear starting point.",
                  step: "1",
                  icon: "🔍"
                },
                {
                  label: "Weeks 2-4",
                  title: "Intensive Therapy",
                  description: "Child-led, play-based sessions that target sensory integration, motor skills, and self-care goals.",
                  step: "2",
                  icon: "🎯"
                },
                {
                  label: "Month 1+",
                  title: "Progress Review",
                  description: "We track gains, fine-tune goals, and align therapy with real-life routines at home and school.",
                  step: "3",
                  icon: "📊"
                },
              ].map((phase) => (
                <div key={phase.step} className="group relative rounded-3xl border-2 border-gray-100 bg-white p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {phase.step}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">
                    {phase.label}
                  </div>
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{phase.description}</p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🏠</div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Home Practice Plans</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Each week, you receive a <span className="font-semibold text-gray-900">simple home plan</span> with 2-3 activities to practice daily. These are designed to fit into your routine—sensory breaks before meals, brushing teeth routines, or play activities that build skills.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { icon: "✓", text: "5-10 min daily" },
                      { icon: "✓", text: "Fits your routine" },
                      { icon: "✓", text: "Progress tracking" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-blue-700">
                        <span className="text-green-600">{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <span className="text-blue-600">❓</span> Common Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Frequently Asked
                <span className="block mt-1 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group border-l-4 border-blue-600 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl flex-shrink-0 pt-1">{faq.icon}</div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <span className={`text-blue-600 font-bold text-2xl flex-shrink-0 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      ›
                    </span>
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <p className="text-gray-700 mb-4">Still have questions? Explore more topics below.</p>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
              <span className="text-yellow-300">✦</span> Start Your OT Journey
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Start Your Child&apos;s
              <span className="block mt-2 text-yellow-300">OT Journey Today</span>
            </h2>
            <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Book a comprehensive Occupational Therapy assessment and discover how evidence-based OT can help your child build <span className="font-semibold">independence and confidence</span> in daily life.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-4 max-w-2xl mx-auto pb-8">
              {[
                { icon: "⏱️", text: "30-minute assessment" },
                { icon: "🎯", text: "Personalized plan" },
                { icon: "🏠", text: "Home practice included" },
              ].map((item) => (
                <div key={item.text} className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <p className="text-sm font-semibold text-white/90">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Book OT Assessment Now</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="tel:+918015152682"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <span className="mr-2">📞</span>
                <span>Call +91 801 515 2682</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
