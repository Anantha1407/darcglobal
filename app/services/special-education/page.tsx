"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";

const faqs = [
  {
    question: "How is special education different from regular tutoring?",
    answer:
      "Special education addresses learning differences and developmental needs through structured, multisensory teaching. We assess the root cause of learning struggles, create individualized plans aligned with school IEPs, and coach parents and teachers. Tutoring is usually subject-focused; special education is learner-centered and holistic."
  },
  {
    question: "How long does it take to see progress?",
    answer:
      "Most children show visible progress in 6-8 weeks (improved focus, task completion, letter/number recognition). Significant skill gains typically appear in 3-4 months. We track progress weekly and share updates with you and the school regularly."
  },
  {
    question: "Will you collaborate with my child's school?",
    answer:
      "Yes! We share strategy guides and progress reports with schools (with your permission). This keeps expectations and teaching methods consistent between DARC and the classroom, accelerating progress and reducing confusion for your child."
  },
  {
    question: "My child has multiple learning challenges—can you address all of them?",
    answer:
      "Absolutely. We design one integrated plan that addresses reading, math, attention, organization, and behavior together. Often, improving foundations (like attention and regulation) naturally improves multiple skill areas."
  },
  {
    question: "How much parent involvement is expected?",
    answer:
      "We send home simple practice activities (10-15 minutes daily) and provide monthly strategy guides. Parent involvement accelerates progress—children who practice at home learn 40% faster. Sessions are 1:1 with our educator, but we involve you in goal-setting, progress reviews, and home strategies."
  }
];

export default function SpecialEducationPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="pt-20 overflow-x-hidden bg-white">
      {/* HERO */}
      <ScrollReveal>
        <section className="relative isolate overflow-hidden py-20 md:py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.14),transparent_36%)]" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-indigo-700 shadow-md backdrop-blur-sm">
                <span className="text-indigo-600">✦</span> Special Education
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                Help Every Child Find
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Academic Success
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Individualized learning plans for children with <span className="font-semibold text-gray-900">autism, ADHD, learning disabilities, dyslexia, and developmental delays</span>. We teach reading, math, organization, and social skills using structured, multi-sensory methods—so your child feels confident at school and at home.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book a Learning Assessment
                </Link>
                <a
                  href="tel:+918015152682"
                  className="inline-flex items-center justify-center h-12 rounded-full border-2 border-indigo-600 bg-white text-indigo-700 px-8 font-semibold hover:bg-indigo-50 transition-all duration-300"
                >
                  <span className="mr-2">📞</span>
                  Talk to a Special Educator
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  { value: "89%", label: "Academic Improvement", icon: "📈" },
                  { value: "350+", label: "Students Supported", icon: "📚" },
                  { value: "12-20 wks", label: "Visible Progress", icon: "⏱️" },
                  { value: "98%", label: "Parent Satisfaction", icon: "⭐" }
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/60 bg-white/80 p-5 shadow-md backdrop-blur hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-indigo-600 to-blue-700 bg-clip-text text-transparent">
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

      {/* FOCUS AREAS & METHODS */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
                <span className="text-indigo-600">◆</span> Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Academic Focus Areas &
                <span className="block mt-1 bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Teaching Methods
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Evidence-based, multisensory instruction targeting reading, math, organization, and social skills with measurable progress.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  focus: "Reading & Writing",
                  percent: "86%",
                  focusDesc: "Phonics, decoding, comprehension, spelling, and written expression",
                  method: "Structured Literacy",
                  methodDesc: "Explicit phonics instruction with visual supports, guided reading, and writing frames tailored to learning differences.",
                  techniques: ["Phonemic awareness & phonics", "Guided reading with comprehension checks", "Writing templates & scaffolds", "Errorless teaching with repetition"],
                  icon: "📖",
                  gradient: "from-indigo-500 to-blue-600",
                  rate: "87%"
                },
                {
                  focus: "Math & Logic",
                  percent: "84%",
                  focusDesc: "Number sense, operations, problem-solving, and math reasoning",
                  method: "Concrete-Pictorial-Abstract",
                  methodDesc: "Hands-on manipulatives, visual models, and stepwise teaching to build understanding and fluency.",
                  techniques: ["Math manipulatives & objects", "Visual number lines & hundreds charts", "Step-by-step problem solving", "Real-world math applications"],
                  icon: "🧮",
                  gradient: "from-blue-500 to-indigo-600",
                  rate: "85%"
                },
                {
                  focus: "Study Skills & Organization",
                  percent: "88%",
                  focusDesc: "Time management, task completion, planning, and executive function",
                  method: "Visual Structure & Coaching",
                  methodDesc: "Clear schedules, checklists, and step-by-step routines to build independence and reduce overwhelm.",
                  techniques: ["Visual schedules & checklists", "Task breakdown & chunking", "Organizational systems", "Self-monitoring strategies"],
                  icon: "✅",
                  gradient: "from-indigo-600 to-blue-700",
                  rate: "88%"
                },
                {
                  focus: "Social & Emotional Learning",
                  percent: "82%",
                  focusDesc: "Peer interaction, emotional regulation, and classroom participation",
                  method: "Social Skills & Emotional Coaching",
                  methodDesc: "Role-play, visual scripts, emotion identification, and supported practice to build social confidence.",
                  techniques: ["Social stories & scripts", "Emotion recognition & naming", "Role-play & peer practice", "Classroom behavior supports"],
                  icon: "🤝",
                  gradient: "from-blue-600 to-indigo-700",
                  rate: "83%"
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
                      <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 mb-3">
                        <span>✓ Our Method</span>
                      </div>
                      <h4 className="font-bold text-indigo-700 mb-2 text-sm">{item.method}</h4>
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
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm mb-3">
                  <span className="text-indigo-600">●</span> For Learners
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Who Benefits from
                  <span className="block mt-1 bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                    Special Education?
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  { text: "Autism Spectrum Disorder (ASD)", icon: "🧩" },
                  { text: "ADHD & Attention Challenges", icon: "⚡" },
                  { text: "Dyslexia, Dysgraphia & Dyscalculia", icon: "📘" },
                  { text: "Developmental or Global Delays", icon: "🌱" },
                  { text: "Speech & Language Delays", icon: "💬" },
                  { text: "School Transition & Classroom Support", icon: "🏫" }
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
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm mb-3">
                  <span className="text-indigo-600">●</span> Outcomes
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Results You Can
                  <span className="block mt-1 bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                    Expect
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  "Improved reading fluency, comprehension & writing skills",
                  "Strong math understanding & problem-solving confidence",
                  "Better organization, planning & task completion",
                  "Stronger peer relationships & classroom participation",
                  "Reduced school anxiety & increased academic confidence",
                  "Independence in school routines & lifelong learning readiness"
                ].map((outcome) => (
                  <div
                    key={outcome}
                    className="flex gap-3 items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-b from-white via-indigo-50/30 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
                <span className="text-indigo-600">◆</span> Your Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Your Child&apos;s Learning
                <span className="block mt-1 bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-lg text-gray-700">Clear phases with measurable goals, weekly updates, and collaboration with home and school.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  label: "Week 1-2",
                  title: "Comprehensive Assessment",
                  description: "Academic screening, learning profile, parent interview, school collaboration, and goal setting.",
                  step: "1",
                  icon: "📋"
                },
                {
                  label: "Week 3-8",
                  title: "Build Foundations",
                  description: "Structured lessons with multisensory methods, visual supports, and home activities to reinforce learning.",
                  step: "2",
                  icon: "🧱"
                },
                {
                  label: "Week 9-16",
                  title: "Expand & Apply Skills",
                  description: "More complex content, independent work with supports, and school-aligned projects and assessments.",
                  step: "3",
                  icon: "📈"
                },
                {
                  label: "Month 4+",
                  title: "School Integration",
                  description: "Full classroom participation, peer learning, goal maintenance, and transition to school-based support.",
                  step: "4",
                  icon: "🎓"
                }
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="group relative rounded-3xl border-2 border-gray-100 bg-white p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {phase.step}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-indigo-600 font-semibold mb-3">
                    {phase.label}
                  </div>
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{phase.description}</p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">👨‍👩‍👧</div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Parent & School Collaboration</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We keep families and schools aligned with <span className="font-semibold text-gray-900">weekly updates</span>, home practice packs, and simple strategies teachers can use in class. This keeps expectations and supports consistent everywhere.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { icon: "✓", text: "Weekly progress notes" },
                      { icon: "✓", text: "Home practice printables" },
                      { icon: "✓", text: "Teacher strategy guides" }
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-indigo-700">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
                <span className="text-indigo-600">❓</span> Common Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Frequently Asked
                <span className="block mt-1 bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="group border-l-4 border-indigo-600 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl flex-shrink-0 pt-1">📘</div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-700 transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`text-indigo-600 font-bold text-2xl flex-shrink-0 transition-transform duration-300 ${
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
                className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative py-24 bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
              <span className="text-yellow-300">✦</span> Start Your Plan
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Start Your Child&apos;s
              <span className="block mt-2 text-yellow-300">Learning Journey Today</span>
            </h2>
            <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Schedule a comprehensive learning assessment. We&apos;ll build an individualized plan that boosts skills, reduces stress, and keeps home and school aligned.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 max-w-2xl mx-auto pb-8">
              {[
                { icon: "⏱️", text: "45-minute assessment" },
                { icon: "📝", text: "Personalized IEP goals" },
                { icon: "🤝", text: "Home & school support" }
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
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Book a Learning Assessment</span>
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
