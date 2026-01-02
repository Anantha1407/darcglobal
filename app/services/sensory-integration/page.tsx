"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";

const faqs = [
  {
    question: "What is Sensory Integration Therapy?",
    answer:
      "Sensory Integration (SI) Therapy is an evidence-based approach developed by Dr. Jean Ayres that helps children process and respond to sensory information more effectively. It uses controlled sensory experiences (movement, touch, sounds) to help the brain organize input and produce appropriate responses.",
    icon: "🧠"
  },
  {
    question: "How do I know if my child has sensory processing issues?",
    answer:
      "Signs include: extreme reactions to sounds/textures/lights, constant movement-seeking, difficulty with coordination, frequent meltdowns in busy environments, avoidance of messy play, difficulty sitting still, or appearing clumsy. A comprehensive sensory profile assessment can identify specific patterns.",
    icon: "🔍"
  },
  {
    question: "Is sensory integration therapy safe?",
    answer:
      "Yes! All activities are supervised by certified occupational therapists trained in SI. We carefully grade activities to your child's comfort level and always prioritize safety. Equipment like swings and climbing structures meet safety standards and are used therapeutically.",
    icon: "✅"
  },
  {
    question: "How long does it take to see improvement?",
    answer:
      "Many families notice small changes within 4-6 weeks (better tolerance, fewer meltdowns, improved attention). Significant progress typically appears in 10-14 weeks. SI therapy builds foundational brain processing, so gains continue long after therapy ends.",
    icon: "⏱️"
  },
  {
    question: "Can I do sensory activities at home?",
    answer:
      "Absolutely! We provide a personalized sensory diet—simple activities using household items (blankets, pillows, rice bins) that fit into your daily routine. These help maintain regulation between therapy sessions and empower parents to support their child's sensory needs.",
    icon: "🏠"
  }
];

export default function SensoryIntegrationTherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="pt-20 overflow-x-hidden bg-white">
      {/* HERO */}
      <ScrollReveal>
        <section className="relative isolate overflow-hidden py-20 md:py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.14),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.14),transparent_36%)]" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-teal-700 shadow-md backdrop-blur-sm">
                <span className="text-teal-600">✦</span> Sensory Integration Therapy
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                Transform Sensory
                <span className="block mt-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                  Challenges into Strengths
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Specialized Sensory Integration Therapy helping children with <span className="font-semibold text-gray-900">sensory processing challenges</span> regulate responses, build body awareness, and thrive in daily environments.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book Sensory Assessment
                </Link>
                <a
                  href="tel:+918015152682"
                  className="inline-flex items-center justify-center h-12 rounded-full border-2 border-teal-600 bg-white text-teal-700 px-8 font-semibold hover:bg-teal-50 transition-all duration-300"
                >
                  <span className="mr-2">📞</span>
                  Talk to SI Therapist
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
                {[
                  { value: "92%", label: "Sensory Regulation", icon: "🎯" },
                  { value: "400+", label: "Children Helped", icon: "👶" },
                  { value: "10-14 wks", label: "Average Progress", icon: "⏱️" }
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/60 bg-white/80 p-5 shadow-md backdrop-blur hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-700 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHAT IS SI THERAPY */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
                  <span className="text-teal-600">◆</span> Understanding SI
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  What is Sensory Integration
                  <span className="block mt-1 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                    Therapy?
                  </span>
                </h2>
              </div>

              <div className="rounded-3xl border-2 border-teal-100 bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sensory Integration (SI) Therapy addresses how the brain processes sensory information from the body and environment. For children with sensory processing challenges, everyday sensations (sounds, textures, movement) can be overwhelming, under-registered, or confusing—leading to meltdowns, avoidance, or seeking behaviors.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At DARC, our therapists are certified in Sensory Integration and use <span className="font-semibold text-gray-900">Jean Ayres' evidence-based SI approach</span>. We create controlled sensory experiences that help your child's brain learn to process, organize, and respond to sensory input more effectively.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SENSORY AREAS & METHODS */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
                <span className="text-teal-600">◆</span> Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Sensory Areas We Address &
                <span className="block mt-1 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                  Our SI Methods
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Evidence-based sensory integration therapy combining clinical activities, personalized sensory diets, and family training.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  focus: "Sensory Modulation",
                  percent: "90%",
                  focusDesc: "Appropriate responses to sensory input—not too much, not too little",
                  method: "Sensory Integration Therapy",
                  methodDesc: "Specialized activities using swings, climbing, tactile materials to help process sensory information.",
                  techniques: ["Vestibular activities (swings)", "Proprioceptive input", "Tactile exploration", "Controlled sensory exposure"],
                  icon: "🎢",
                  gradient: "from-teal-500 to-cyan-600",
                  rate: "91%"
                },
                {
                  focus: "Motor Planning & Body Awareness",
                  percent: "87%",
                  focusDesc: "Coordination, body awareness, and ability to plan and execute movements",
                  method: "Sensory Diet Programs",
                  methodDesc: "Customized daily sensory activities to maintain optimal alertness and regulation.",
                  techniques: ["Scheduled sensory breaks", "Calming activities", "Alerting activities", "Home sensory strategies"],
                  icon: "🤸",
                  gradient: "from-cyan-500 to-teal-600",
                  rate: "89%"
                },
                {
                  focus: "Attention & Focus",
                  percent: "85%",
                  focusDesc: "Sustained concentration and regulation for learning and tasks",
                  method: "Environmental Modifications",
                  methodDesc: "Adapting home and school environments to support sensory needs.",
                  techniques: ["Sensory-friendly spaces", "Visual supports", "Noise reduction strategies", "Lighting adjustments"],
                  icon: "🎯",
                  gradient: "from-teal-600 to-cyan-700",
                  rate: "89%"
                },
                {
                  focus: "Emotional Control & Regulation",
                  percent: "88%",
                  focusDesc: "Reduced meltdowns, anxiety, and better emotional regulation",
                  method: "Family Education & Training",
                  methodDesc: "Teaching parents to recognize sensory signals and respond effectively.",
                  techniques: ["Sensory profile understanding", "Crisis prevention", "Daily routine integration", "School collaboration"],
                  icon: "💚",
                  gradient: "from-cyan-600 to-teal-700",
                  rate: "93%"
                }
              ].map((item) => (
                <div
                  key={item.focus}
                  className="group rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{item.icon}</div>
                        <span className={`text-xl font-extrabold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.percent}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.focus}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.focusDesc}</p>
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 mb-3">
                        <span>✓ Our Method</span>
                      </div>
                      <h4 className="font-bold text-teal-700 mb-2 text-sm">{item.method}</h4>
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
                        Success Rate:{" "}
                        <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.rate}</span>
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
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm mb-3">
                  <span className="text-teal-600">●</span> For Children With
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Who Benefits from
                  <span className="block mt-1 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                    SI Therapy?
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  { text: "Sensory Processing Disorder (SPD)", icon: "🧩" },
                  { text: "Sensory Over-Responsivity", icon: "🔊" },
                  { text: "Sensory Under-Responsivity", icon: "🔇" },
                  { text: "Sensory Seeking Behaviors", icon: "🏃" },
                  { text: "Poor Body Awareness", icon: "🤔" },
                  { text: "Coordination Difficulties", icon: "⚖️" }
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="font-medium text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm mb-3">
                  <span className="text-teal-600">●</span> Outcomes
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Results You Can
                  <span className="block mt-1 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                    Expect
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  "Better sensory modulation and tolerance",
                  "Reduced sensory meltdowns and anxiety",
                  "Improved body awareness and motor planning",
                  "Enhanced attention and focus for learning",
                  "Increased participation in daily activities",
                  "Better sleep patterns and self-regulation",
                  "Greater comfort in various environments"
                ].map((outcome) => (
                  <div
                    key={outcome}
                    className="flex gap-3 items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-700 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-b from-white via-teal-50/30 to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
                <span className="text-teal-600">◆</span> Your Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                What Happens in
                <span className="block mt-1 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                  SI Therapy Sessions?
                </span>
              </h2>
              <p className="text-lg text-gray-700">A structured 4-phase approach with measurable progress tracking.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  label: "Week 1-2",
                  title: "Sensory Profile Assessment",
                  description: "Comprehensive evaluation of sensory processing patterns, responses, and challenges across all systems.",
                  step: "1",
                  icon: "📋"
                },
                {
                  label: "Weeks 3-6",
                  title: "Tolerance Building",
                  description: "Gradual exposure to sensory input, building tolerance and appropriate responses through play-based activities.",
                  step: "2",
                  icon: "🏗️"
                },
                {
                  label: "Weeks 7-12",
                  title: "Integration Phase",
                  description: "Complex sensory activities combining multiple systems, improving motor planning and adaptive responses.",
                  step: "3",
                  icon: "🧩"
                },
                {
                  label: "Month 3+",
                  title: "Maintenance & Generalization",
                  description: "Home sensory diet implementation, environmental modifications, and skill generalization to daily life.",
                  step: "4",
                  icon: "🏡"
                }
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="group relative rounded-3xl border-2 border-gray-100 bg-white p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {phase.step}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-teal-600 font-semibold mb-3">
                    {phase.label}
                  </div>
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{phase.description}</p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-teal-600 to-cyan-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border-2 border-teal-100 bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🍽️</div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Personalized Sensory Diet</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We create a customized <span className="font-semibold text-gray-900">sensory diet</span>—a schedule of sensory activities throughout the day. These use household items (blankets, pillows, rice bins) and fit into your daily routine to maintain optimal regulation.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { icon: "✓", text: "Simple home activities" },
                      { icon: "✓", text: "Household items" },
                      { icon: "✓", text: "Daily routine integration" }
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-teal-700">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
                <span className="text-teal-600">❓</span> Common Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Frequently Asked
                <span className="block mt-1 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="group border-l-4 border-teal-600 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl flex-shrink-0 pt-1">{faq.icon}</div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-teal-700 transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`text-teal-600 font-bold text-2xl flex-shrink-0 transition-transform duration-300 ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    >
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
              <p className="text-gray-700 mb-4">Need more details? Explore common topics across services.</p>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative py-24 bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
              <span className="text-yellow-300">✦</span> Start Today
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Transform Sensory
              <span className="block mt-2 text-yellow-300">Challenges Today</span>
            </h2>
            <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Book a comprehensive sensory profile assessment and discover how SI therapy can help your child thrive.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 max-w-2xl mx-auto pb-8">
              {[
                { icon: "📋", text: "Comprehensive sensory profile assessment" },
                { icon: "🍽️", text: "Personalized sensory diet and strategies" },
                { icon: "🏠", text: "Home sensory activities included" }
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
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-teal-700 font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Book Sensory Assessment Now</span>
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
