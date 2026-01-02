"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";

const faqs = [
  {
    question: "What is the difference between behavioral therapy and ABA?",
    answer:
      "Traditional ABA focuses on compliance and changing behaviors through repetition and reinforcement. Our behavioral therapy uses Positive Behavior Support (PBS)—we understand why behaviors happen, teach better alternatives, and respect your child's neurodivergence. We build emotional regulation, social skills, and flexibility, not just compliance.",
    icon: "🤔"
  },
  {
    question: "How do you handle aggressive or challenging behaviors?",
    answer:
      "We start with a functional behavior assessment to understand what triggers the behavior and what need it's meeting. Then we teach replacement skills (e.g., asking for a break instead of hitting), modify the environment to prevent triggers, and coach parents on de-escalation techniques. Safety is always our priority.",
    icon: "🛡️"
  },
  {
    question: "Will therapy stop my child's meltdowns completely?",
    answer:
      "Meltdowns are a form of communication and nervous system overload. While we can't eliminate them entirely, therapy significantly reduces their frequency and intensity. Most families see 60-80% reduction in meltdowns within 12-16 weeks as regulation skills improve.",
    icon: "📉"
  },
  {
    question: "How do you teach emotional regulation to young children?",
    answer:
      "We use visual tools like emotion charts, Zones of Regulation, and social stories. Children learn to identify feelings, use calming strategies (deep breathing, sensory breaks), and communicate needs. We practice in sessions and provide home activities so skills generalize to daily life.",
    icon: "😊"
  },
  {
    question: "Do you provide support for school behavioral challenges?",
    answer:
      "Yes! We collaborate with schools by sharing behavior support plans, visual supports, and teacher strategies. We can also observe your child in the classroom (with permission) to identify triggers and recommend accommodations. Consistency between home, therapy, and school accelerates progress.",
    icon: "🏫"
  }
];

export default function BehaviouralTherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="pt-20 overflow-x-hidden bg-white">
      {/* HERO */}
      <ScrollReveal>
        <section className="relative isolate overflow-hidden py-20 md:py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(236,72,153,0.14),transparent_36%)]" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-rose-700 shadow-md backdrop-blur-sm">
                <span className="text-rose-600">✦</span> Behavioral Therapy
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                Build Lasting
                <span className="block mt-2 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
                  Behavioral Skills
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Compassionate behavioral therapy helping children with <span className="font-semibold text-gray-900">autism</span> build emotional regulation, social skills, and adaptive behaviors through positive, child-centered approaches.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-rose-600 to-purple-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book Behavioral Assessment
                </Link>
                <a
                  href="tel:+918015152682"
                  className="inline-flex items-center justify-center h-12 rounded-full border-2 border-rose-600 bg-white text-rose-700 px-8 font-semibold hover:bg-rose-50 transition-all duration-300"
                >
                  <span className="mr-2">📞</span>
                  Talk to Behavior Therapist
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
                {[
                  { value: "90%", label: "Behavioral Improvement", icon: "📈" },
                  { value: "380+", label: "Children Helped", icon: "💝" },
                  { value: "12-18 wks", label: "Average Progress", icon: "⏱️" }
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/60 bg-white/80 p-5 shadow-md backdrop-blur hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-rose-600 to-purple-700 bg-clip-text text-transparent">
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

      {/* WHAT IS BEHAVIORAL THERAPY */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 to-purple-50 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
                  <span className="text-rose-600">◆</span> Understanding Behavioral Therapy
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  What is Behavioral Therapy
                  <span className="block mt-1 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
                    for Children?
                  </span>
                </h2>
              </div>

              <div className="rounded-3xl border-2 border-rose-100 bg-gradient-to-br from-rose-50 via-white to-purple-50 p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Behavioral Therapy helps children understand and manage their emotions, develop social skills, and build adaptive behaviors for daily life. For children with autism, this includes reducing meltdowns, teaching emotional regulation, improving peer interactions, and developing flexibility.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At DARC, we use <span className="font-semibold text-gray-900">Positive Behavior Support (PBS)</span> and compassionate, evidence-based strategies that respect your child's neurodivergence while building skills for success. We focus on understanding why behaviors happen and teaching better alternatives—not compliance or behavior modification through punishment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BEHAVIORAL AREAS & METHODS */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50/30 to-purple-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 to-purple-50 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
                <span className="text-rose-600">◆</span> Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Behavioral Areas We Develop &
                <span className="block mt-1 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
                  Our Therapy Methods
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Evidence-based, compassionate behavioral support focused on emotional regulation, social skills, and adaptive behaviors.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  focus: "Emotional Regulation",
                  percent: "88%",
                  focusDesc: "Managing big feelings, reducing meltdowns, and developing coping strategies",
                  method: "Positive Behavior Support (PBS)",
                  methodDesc: "Understanding behavior functions and teaching replacement skills with positive reinforcement.",
                  techniques: ["Functional behavior assessment", "Antecedent modifications", "Replacement skill teaching", "Positive reinforcement"],
                  icon: "💝",
                  gradient: "from-rose-500 to-pink-600",
                  rate: "91%"
                },
                {
                  focus: "Social Skills & Peer Interaction",
                  percent: "85%",
                  focusDesc: "Building friendships, conversation skills, and peer play abilities",
                  method: "Emotional Regulation Training",
                  methodDesc: "Teaching children to identify, understand, and manage emotions effectively.",
                  techniques: ["Emotion identification", "Zones of Regulation", "Self-calming techniques", "Coping skills toolbox"],
                  icon: "🤝",
                  gradient: "from-pink-500 to-rose-600",
                  rate: "89%"
                },
                {
                  focus: "Adaptive Behavior & Flexibility",
                  percent: "87%",
                  focusDesc: "Developing flexibility with routines, transitions, and daily activities",
                  method: "Social Skills Training",
                  methodDesc: "Building conversation, sharing, turn-taking, and friendship skills through practice.",
                  techniques: ["Turn-taking practice", "Conversation skills", "Conflict resolution", "Peer play activities"],
                  icon: "🔄",
                  gradient: "from-rose-600 to-purple-700",
                  rate: "86%"
                },
                {
                  focus: "Independent Coping & Problem-Solving",
                  percent: "83%",
                  focusDesc: "Teaching children to solve problems and cope with challenges independently",
                  method: "Parent Behavior Coaching",
                  methodDesc: "Empowering families with positive behavior strategies and consistency tools.",
                  techniques: ["Behavior analysis training", "Consistency strategies", "Crisis prevention", "Data tracking"],
                  icon: "🧩",
                  gradient: "from-purple-600 to-rose-700",
                  rate: "92%"
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
                      <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700 mb-3">
                        <span>✓ Our Method</span>
                      </div>
                      <h4 className="font-bold text-rose-700 mb-2 text-sm">{item.method}</h4>
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
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 to-purple-50 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm mb-3">
                  <span className="text-rose-600">●</span> For Children With
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Who Benefits from
                  <span className="block mt-1 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
                    Behavioral Therapy?
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  { text: "Tantrums & Meltdowns", icon: "😤" },
                  { text: "Aggressive Behaviors", icon: "⚡" },
                  { text: "Social Difficulties", icon: "👥" },
                  { text: "Anxiety & Fears", icon: "😰" },
                  { text: "Inflexibility & Rigidity", icon: "🔒" },
                  { text: "Self-Regulation Challenges", icon: "🎭" }
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
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 to-purple-50 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm mb-3">
                  <span className="text-rose-600">●</span> Outcomes
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Results You Can
                  <span className="block mt-1 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
                    Expect
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  "Reduced frequency and intensity of meltdowns",
                  "Improved emotional recognition and regulation",
                  "Better social interaction and peer relationships",
                  "Increased flexibility and adaptability",
                  "Enhanced problem-solving and coping skills",
                  "Greater independence in managing emotions",
                  "Improved family harmony and reduced stress"
                ].map((outcome) => (
                  <div
                    key={outcome}
                    className="flex gap-3 items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-rose-600 to-purple-700 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-b from-white via-rose-50/30 to-purple-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 to-purple-50 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
                <span className="text-rose-600">◆</span> Your Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                What Happens in
                <span className="block mt-1 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
                  Behavioral Therapy Sessions?
                </span>
              </h2>
              <p className="text-lg text-gray-700">A structured 4-phase approach focused on understanding, teaching, and maintaining positive behaviors.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  label: "Week 1-2",
                  title: "Behavior Assessment",
                  description: "Functional behavior assessment to understand triggers, functions, and patterns. Parent interview and goal setting.",
                  step: "1",
                  icon: "🔍"
                },
                {
                  label: "Weeks 3-6",
                  title: "Skill Building",
                  description: "Teaching replacement behaviors, emotional regulation strategies, and social skills through positive reinforcement.",
                  step: "2",
                  icon: "🛠️"
                },
                {
                  label: "Weeks 7-14",
                  title: "Practice & Generalization",
                  description: "Practicing skills in different settings, increasing complexity, and generalizing to home, school, and community.",
                  step: "3",
                  icon: "🎯"
                },
                {
                  label: "Month 4+",
                  title: "Maintenance & Independence",
                  description: "Reducing support gradually, maintaining gains, and transitioning to parent-led strategies for long-term success.",
                  step: "4",
                  icon: "🌟"
                }
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="group relative rounded-3xl border-2 border-gray-100 bg-white p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-gradient-to-br from-rose-500 via-rose-600 to-purple-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {phase.step}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-rose-600 font-semibold mb-3">
                    {phase.label}
                  </div>
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{phase.description}</p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-rose-600 to-purple-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border-2 border-rose-100 bg-gradient-to-br from-rose-50 via-white to-purple-50 p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">📋</div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Home Behavior Plans</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We provide simple, practical strategies to use at home—<span className="font-semibold text-gray-900">visual emotion charts, reward systems, and de-escalation techniques</span>. Consistency between therapy and home is key to lasting change.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { icon: "✓", text: "Visual emotion charts" },
                      { icon: "✓", text: "Reward systems" },
                      { icon: "✓", text: "De-escalation techniques" }
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-rose-700">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 to-purple-50 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
                <span className="text-rose-600">❓</span> Common Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Frequently Asked
                <span className="block mt-1 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="group border-l-4 border-rose-600 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl flex-shrink-0 pt-1">{faq.icon}</div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-rose-700 transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`text-rose-600 font-bold text-2xl flex-shrink-0 transition-transform duration-300 ${
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
                className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-rose-600 to-purple-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="relative py-24 bg-gradient-to-br from-rose-700 via-rose-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
              <span className="text-yellow-300">✦</span> Start Today
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build Lasting
              <span className="block mt-2 text-yellow-300">Behavioral Skills</span>
            </h2>
            <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Book a comprehensive behavioral assessment and discover compassionate strategies that work.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 max-w-2xl mx-auto pb-8">
              {[
                { icon: "🔍", text: "Functional behavior assessment" },
                { icon: "📋", text: "Personalized behavior support plan" },
                { icon: "🏠", text: "Home strategies and parent coaching included" }
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
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-rose-700 font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Book Behavioral Assessment</span>
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
