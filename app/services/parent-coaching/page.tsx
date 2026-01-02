"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";

const faqs = [
  {
    question: "What makes parent coaching different from regular therapy?",
    answer:
      "Regular therapy focuses on the child in sessions. Parent coaching focuses on YOU—teaching you strategies to use at home, during meals, play, and routines. You become the primary agent of change, with therapist guidance. This accelerates progress because learning happens throughout the day, not just during therapy hours.",
    icon: "💡"
  },
  {
    question: "I'm already overwhelmed. How will I find time for coaching?",
    answer:
      "Our coaching is designed to fit into your existing routines, not add more tasks. Sessions are flexible (in-person, online, or phone). We focus on small, practical changes that make daily life easier—not harder. Many parents say coaching reduces their stress by giving them clarity and confidence.",
    icon: "⏰"
  },
  {
    question: "What if my spouse/partner isn't on the same page?",
    answer:
      "We encourage both caregivers to attend sessions whenever possible. We help families align on strategies and communication. If your partner can't attend, we provide recordings, summaries, and strategies for you to share. Many couples find coaching improves their teamwork and reduces conflict.",
    icon: "👫"
  },
  {
    question: "Do you provide support for managing sibling relationships?",
    answer:
      "Yes! We address sibling dynamics, teach siblings about autism in age-appropriate ways, and provide strategies to reduce rivalry and build empathy. We also help you balance attention between children and manage guilt—many parents struggle with this, and it's a key focus of coaching.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    question: "How do you address parent stress and burnout?",
    answer:
      "Parent wellbeing is central to our coaching. We teach self-care strategies, help you set boundaries, identify support networks, and process emotions like grief, guilt, and overwhelm. We also connect you with other families through support groups. You can't pour from an empty cup—we help you refill yours.",
    icon: "🌱"
  }
];

export default function ParentCoachingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="pt-20 overflow-x-hidden bg-white">
      {/* HERO */}
      <ScrollReveal>
        <section className="relative isolate overflow-hidden py-20 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.14),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(249,115,22,0.14),transparent_36%)]" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-orange-700 shadow-md backdrop-blur-sm">
                <span className="text-orange-600">✦</span> Parent Coaching & Support
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                Empower Your Family
                <span className="block mt-2 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                  With Expert Guidance
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Empowering families with <span className="font-semibold text-gray-900">practical strategies, emotional support, and confidence</span> to help their children thrive at home, school, and beyond.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-orange-600 to-amber-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Start Parent Coaching
                </Link>
                <a
                  href="tel:+918015152682"
                  className="inline-flex items-center justify-center h-12 rounded-full border-2 border-orange-600 bg-white text-orange-700 px-8 font-semibold hover:bg-orange-50 transition-all duration-300"
                >
                  <span className="mr-2">📞</span>
                  Talk to Parent Coach
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
                {[
                  { value: "96%", label: "Parent Satisfaction", icon: "⭐" },
                  { value: "300+", label: "Families Coached", icon: "👨‍👩‍👧" },
                  { value: "8-12", label: "Sessions Average", icon: "📅" }
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/60 bg-white/80 p-5 shadow-md backdrop-blur hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-orange-600 to-amber-700 bg-clip-text text-transparent">
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

      {/* WHAT IS PARENT COACHING */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
                  <span className="text-orange-600">◆</span> Understanding Parent Coaching
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  What is Parent Coaching
                  <span className="block mt-1 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                    for Families?
                  </span>
                </h2>
              </div>

              <div className="rounded-3xl border-2 border-orange-100 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Parent Coaching empowers you with the knowledge, strategies, and confidence to support your child's development in everyday life. Rather than relying solely on therapist visits, you become equipped to create therapeutic moments during meals, play, bath time, and daily routines—maximizing your child's progress.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At DARC, parent coaching is led by experienced therapists who understand the unique challenges of raising a child with autism. We provide <span className="font-semibold text-gray-900">practical, evidence-based strategies tailored to your family's needs, culture, and daily reality</span>—not generic advice from a textbook.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* COACHING AREAS & METHODS */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
                <span className="text-orange-600">◆</span> Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Coaching Areas We Cover &
                <span className="block mt-1 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                  Our Support Methods
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Comprehensive parent coaching covering home strategies, behavior management, communication, and self-care.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  focus: "Home Strategies & Daily Routines",
                  percent: "94%",
                  focusDesc: "Practical techniques for meals, bedtime, transitions, and daily activities",
                  method: "Individualized Family Plans",
                  methodDesc: "Customized strategies that fit your family's unique needs, values, and daily routines.",
                  techniques: ["Family assessment", "Custom goal setting", "Routine optimization", "Cultural sensitivity"],
                  icon: "🏠",
                  gradient: "from-orange-500 to-amber-600",
                  rate: "95%"
                },
                {
                  focus: "Behavior Management & Prevention",
                  percent: "91%",
                  focusDesc: "Positive discipline, understanding triggers, and preventing meltdowns",
                  method: "Hands-On Training",
                  methodDesc: "Learn by doing—we model strategies, then coach you as you practice with your child.",
                  techniques: ["Live coaching", "Video feedback", "Practice sessions", "Real-time adjustments"],
                  icon: "🎯",
                  gradient: "from-amber-500 to-orange-600",
                  rate: "93%"
                },
                {
                  focus: "Communication & Understanding",
                  percent: "89%",
                  focusDesc: "Understanding your child's needs and supporting their communication development",
                  method: "Behavioral & Emotional Support",
                  methodDesc: "Understanding meltdowns, managing behaviors, and supporting emotional regulation at home.",
                  techniques: ["Trigger identification", "De-escalation techniques", "Prevention strategies", "Emotional coaching"],
                  icon: "💬",
                  gradient: "from-orange-600 to-amber-700",
                  rate: "91%"
                },
                {
                  focus: "Stress Management & Self-Care",
                  percent: "87%",
                  focusDesc: "Parental wellbeing, reducing burnout, and building support networks",
                  method: "Ongoing Support & Community",
                  methodDesc: "Connect with other families, access resources, and receive continued guidance.",
                  techniques: ["Parent support groups", "Resource library", "24/7 Q&A access", "Community connection"],
                  icon: "🌱",
                  gradient: "from-amber-600 to-orange-700",
                  rate: "94%"
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
                      <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
                        <span>✓ Our Method</span>
                      </div>
                      <h4 className="font-bold text-orange-700 mb-2 text-sm">{item.method}</h4>
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
                        Satisfaction Rate:{" "}
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
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm mb-3">
                  <span className="text-orange-600">●</span> For Families With
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Who Benefits from
                  <span className="block mt-1 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                    Parent Coaching?
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  { text: "New to Autism Diagnosis", icon: "🆕" },
                  { text: "Managing Daily Challenges", icon: "📅" },
                  { text: "Behavior & Meltdowns", icon: "😤" },
                  { text: "Communication Barriers", icon: "💬" },
                  { text: "School Collaboration Needs", icon: "🏫" },
                  { text: "Parental Stress & Burnout", icon: "😓" }
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
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm mb-3">
                  <span className="text-orange-600">●</span> Outcomes
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Results You Can
                  <span className="block mt-1 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                    Expect
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  "Confidence in understanding and supporting your child",
                  "Practical strategies that work in daily life",
                  "Reduced stress and improved family harmony",
                  "Better communication with your child",
                  "Effective behavior management without punishment",
                  "Strong collaboration with therapists and teachers",
                  "Self-care and emotional wellbeing for parents"
                ].map((outcome) => (
                  <div
                    key={outcome}
                    className="flex gap-3 items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-700 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-orange-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
                <span className="text-orange-600">◆</span> Your Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                What Happens in
                <span className="block mt-1 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                  Coaching Sessions?
                </span>
              </h2>
              <p className="text-lg text-gray-700">A flexible coaching journey tailored to your family's pace and needs.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  label: "Sessions 1-2",
                  title: "Understanding Your Child",
                  description: "Family assessment, understanding your child's profile, identifying challenges, and setting personalized goals.",
                  step: "1",
                  icon: "🔍"
                },
                {
                  label: "Sessions 3-5",
                  title: "Building Your Toolkit",
                  description: "Learning practical strategies for daily routines, communication, behavior prevention, and emotional support.",
                  step: "2",
                  icon: "🧰"
                },
                {
                  label: "Sessions 6-9",
                  title: "Advanced Strategies",
                  description: "Addressing specific challenges, school collaboration, sibling dynamics, and self-care for parents.",
                  step: "3",
                  icon: "🎓"
                },
                {
                  label: "Sessions 10+",
                  title: "Long-Term Success",
                  description: "Maintaining progress, troubleshooting setbacks, accessing community support, and planning for transitions.",
                  step: "4",
                  icon: "🌟"
                }
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="group relative rounded-3xl border-2 border-gray-100 bg-white p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {phase.step}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-orange-600 font-semibold mb-3">
                    {phase.label}
                  </div>
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{phase.description}</p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-orange-600 to-amber-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border-2 border-orange-100 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">💬</div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Ongoing Support Between Sessions</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Access our <span className="font-semibold text-gray-900">parent support WhatsApp group</span> for quick questions, troubleshooting, and encouragement between sessions. You're never alone on this journey.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { icon: "✓", text: "24/7 Q&A access" },
                      { icon: "✓", text: "Peer support" },
                      { icon: "✓", text: "Resource sharing" }
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-orange-700">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
                <span className="text-orange-600">❓</span> Common Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Frequently Asked
                <span className="block mt-1 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="group border-l-4 border-orange-600 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl flex-shrink-0 pt-1">{faq.icon}</div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-700 transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`text-orange-600 font-bold text-2xl flex-shrink-0 transition-transform duration-300 ${
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
                className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-orange-600 to-amber-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative py-24 bg-gradient-to-br from-orange-700 via-orange-600 to-amber-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
              <span className="text-yellow-300">✦</span> Start Today
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Empower Your Family
              <span className="block mt-2 text-yellow-300">With Expert Guidance</span>
            </h2>
            <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Start parent coaching and gain the confidence, strategies, and support you need.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 max-w-2xl mx-auto pb-8">
              {[
                { icon: "🎯", text: "Personalized family assessment & goal setting" },
                { icon: "🤝", text: "Hands-on training with real-time feedback" },
                { icon: "💬", text: "Ongoing support and parent community access" }
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
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-orange-700 font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Start Parent Coaching Now</span>
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
