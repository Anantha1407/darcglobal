"use client";

import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import { useState } from "react";

export default function SpeechTherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "My child is non-verbal. Can speech therapy help?",
      answer: "Absolutely. Our Speech-Language Pathologists work with non-verbal children using AAC devices (like PECS or speech-generating devices), sign language, and visual supports to develop functional communication strategies.",
      icon: "🗣️"
    },
    {
      question: "How do I know if my child needs speech therapy?",
      answer: "Signs include limited speech, difficulty expressing needs, unclear speech, limited vocabulary, stuttering, or social communication challenges. We recommend a comprehensive evaluation if you have any concerns.",
      icon: "❓"
    },
    {
      question: "Will my child need an AAC device?",
      answer: "Not necessarily. AAC is recommended when verbal speech alone isn't sufficient for functional communication. We'll assess your child's needs and recommend appropriate communication strategies tailored to their profile.",
      icon: "📱"
    },
    {
      question: "How long until my child starts talking?",
      answer: "Every child progresses at their own pace. With consistent therapy, many families notice improvements in communication within 2-4 weeks. Some children develop verbal speech, while others may rely more on AAC—both are successful outcomes.",
      icon: "⏱️"
    },
    {
      question: "Do you provide home practice activities?",
      answer: "Yes! Each week we provide specific communication activities and strategies to practice at home during natural routines. Parent coaching is a core part of our therapy model.",
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
                <span className="text-blue-600">✦</span> Speech Therapy
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                Help Your Child Find
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Their Voice
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Evidence-based Speech-Language Therapy helping children with <span className="font-semibold text-gray-900">autism develop communication skills</span> through verbal speech, AAC devices, and social language strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book Speech Assessment
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
                  { value: "94%", label: "Success Rate", icon: "🎯" },
                  { value: "450+", label: "Children Helped", icon: "❤️" },
                  { value: "10-16", label: "Weeks Average", icon: "⏱️" },
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
                For each communication area, we have specific, evidence-based methods to build skills and confidence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  challenge: "Verbal Speech",
                  percent: "89%",
                  challengeDesc: "Clear articulation and speech production",
                  method: "Articulation & Motor Speech",
                  methodDesc: "Improving speech clarity through oral-motor exercises and phonetic practice",
                  techniques: [
                    "Oral-motor exercises",
                    "Sound production training",
                    "Apraxia therapy",
                    "Phonological awareness",
                  ],
                  icon: "🗣️",
                  gradient: "from-blue-500 to-blue-600",
                  rate: "88%"
                },
                {
                  challenge: "Language Development",
                  percent: "92%",
                  challengeDesc: "Vocabulary and sentence building",
                  method: "Language Development",
                  methodDesc: "Building functional vocabulary and sentence structures through play-based activities.",
                  techniques: [
                    "Vocabulary expansion",
                    "Sentence formulation",
                    "Following instructions",
                    "Early literacy foundations",
                  ],
                  icon: "📚",
                  gradient: "from-cyan-500 to-blue-600",
                  rate: "92%"
                },
                {
                  challenge: "Social Communication",
                  percent: "87%",
                  challengeDesc: "Conversation and pragmatic skills",
                  method: "Social Language (Pragmatics)",
                  methodDesc: "Teaching conversational skills, turn-taking, and understanding social cues",
                  techniques: [
                    "Turn-taking practice",
                    "Topic maintenance",
                    "Non-verbal cues",
                    "Social stories",
                  ],
                  icon: "👥",
                  gradient: "from-sky-500 to-blue-600",
                  rate: "94%"
                },
                {
                  challenge: "AAC Integration",
                  percent: "85%",
                  challengeDesc: "Alternative communication systems",
                  method: "Core Vocabulary & AAC",
                  methodDesc: "Teaching functional communication using words, signs, or picture-based systems",
                  techniques: [
                    "Picture Exchange (PECS)",
                    "AAC device training",
                    "Core vocabulary focus",
                    "Sign language integration",
                  ],
                  icon: "📱",
                  gradient: "from-purple-500 to-blue-600",
                  rate: "92%"
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
                    from Speech Therapy?
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  { text: "Non-verbal or Minimally Verbal", icon: "🤐" },
                  { text: "Speech Delays", icon: "⏱️" },
                  { text: "Articulation Disorders", icon: "🗣️" },
                  { text: "Childhood Apraxia of Speech", icon: "🎯" },
                  { text: "Social Communication Difficulties", icon: "👥" },
                  { text: "Language Delays", icon: "📚" },
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
                  "Functional communication (verbal or AAC-based)",
                  "Improved speech clarity and intelligibility",
                  "Expanded vocabulary and sentence length",
                  "Better conversational and social language skills",
                  "Reduced frustration and behavioral challenges",
                  "Increased confidence in expressing needs and wants",
                  "Enhanced family communication and connection",
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
                What Happens in a
                <span className="block mt-1 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Speech Session?
                </span>
              </h2>
              <p className="text-lg text-gray-700">
                A structured, transparent journey from assessment to measurable progress.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  label: "Week 1",
                  title: "Comprehensive Assessment",
                  description: "Complete communication evaluation to identify strengths and goals.",
                  step: "1",
                  icon: "🔍"
                },
                {
                  label: "Weeks 2-6",
                  title: "Building Foundation",
                  description: "Intensive therapy targeting core communication goals with measurable progress.",
                  step: "2",
                  icon: "🎯"
                },
                {
                  label: "Weeks 7-12",
                  title: "Expanding Skills",
                  description: "Building on foundations to develop more complex communication abilities.",
                  step: "3",
                  icon: "📈"
                },
                {
                  label: "Month 3+",
                  title: "Maintenance & Growth",
                  description: "Sustaining gains and continuously expanding communication repertoire.",
                  step: "4",
                  icon: "🌟"
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
                    Each week includes <span className="font-semibold text-gray-900">2-3 simple communication activities</span> to practice daily during natural routines like meals, bath time, or play. We show you exactly how to create communication opportunities at home.
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

            <div className="space-y-4 max-w-4xl mx-auto">
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
              <span className="text-yellow-300">✦</span> Start Your Speech Journey
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Start Your Child&apos;s
              <span className="block mt-2 text-yellow-300">Speech Journey Today</span>
            </h2>
            <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Book a comprehensive Speech Therapy assessment and discover how evidence-based speech therapy can help your child build <span className="font-semibold">clear communication and confidence</span> in daily life.
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
                <span>Book Speech Assessment Now</span>
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
