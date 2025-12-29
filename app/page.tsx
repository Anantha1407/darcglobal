import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useCountUp } from "./hooks/useCountUp";
import { AnimatedStatCard } from "./components/AnimatedStatCard";
import { AnimatedMetric } from "./components/AnimatedMetric";
import { Poppins } from "next/font/google";

// Replace these with your real images
import heroTall from "./assets/hero.jpg";
import heroTopRight from "./assets/hero1.png";
import heroBottomRight from "./assets/hero2.png";
import doctorImage from "./assets/owner.jpg";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import TherapyTimeline from "./components/TherapyTimeline";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Page() {
  const standardPoints = [
    "Works on what you see today (speech, attention, behaviour)",
    "Trains skills, but the child may not feel ready",
    "Behaviour is often treated as a problem to manage",
    "Progress may look good in sessions, but feel inconsistent and changes at home & school",
    "Separate therapies can feel disconnected",
    "Parents are only updated after sessions",
    "Can feel like “Just therapy”, “more sessions”",
  ];

  const rootCausePoints = [
    "Find the root cause, why it’s happening and build the foundations for change",
    "Builds the foundation—mitochondrial healing, regulation + readiness, so skills come easier and faster",
    "Behaviour is treated as a signal—we support the child’s nervous system",
    "Progress is designed to show in real life—home, school, routines and maintains throughout life",
    "One aligned plan: Dr Aaditya’s Root Cause Therapy method",
    "Transparent view: Parents are supported with guidance, monthly reviews, and Dr Aaditya’s supervision",
    "Feels like a roadmap—clarity, confidence, and visible progress",
  ];

  const outcomeStats = [
    { label: "Positive Outcomes", value: 95, note: "Based on 1,000+ children supported" },
    { label: "Parent Satisfaction", value: 98, note: "Based on feedback from 1,000+ families" },
    { label: "Progress Rate", value: 91, note: "Consistent improvement across key goals" },
  ];

  const keyAreas = [
    { label: "Speech & Communication", value: 94, gradient: "linear-gradient(90deg, #6366f1, #a855f7)" },
    { label: "Attention & Focus", value: 89, gradient: "linear-gradient(90deg, #14b8a6, #0ea5e9)" },
    { label: "Social Integration", value: 92, gradient: "linear-gradient(90deg, #f97316, #ef4444)" },
    { label: "Sensory Regulation", value: 87, gradient: "linear-gradient(90deg, #f43f5e, #a855f7)" },
  ];

  const impactMetrics = [
    { label: "Therapy Sessions Delivered", value: "156,555+", color: "from-orange-100 to-amber-50" },
    { label: "Children Supported", value: "1000+", color: "from-blue-100 to-indigo-50" },
    { label: "Parent Trust", value: "98%", color: "from-rose-100 to-pink-50" },
    { label: "Months Average Progress Journey", value: "12+", color: "from-blue-100 to-blue-50" },
  ];


  return (
    <main className={`bg-white ${poppins.className}`}>
      {/* HERO SECTION */}
      <section className="pt-32 pb-10 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_1.15fr] md:items-center">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              {/* Top badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-xs font-medium text-gray-700">
                  CHENNAI&apos;S #1 PEDIATRIC NEURO-REHAB CENTER
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                Transform Your Child&apos;s
                <br />
                <span className="text-blue-600">Development Journey</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                — With Real Progress You Can See
              </p>

              {/* Supporting paragraph */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                At DARC, your child deserves more than "sessions." We deliver <span className="font-semibold text-gray-900">Root Cause Therapy</span>—an evidence-based, neurodevelopmental approach that identifies why challenges are happening and builds the brain-body foundations needed for real progress. Through <span className="font-semibold text-blue-600">Occupational Therapy</span>, <span className="font-semibold text-red-500">Speech Therapy</span>, and <span className="font-semibold text-blue-600">Special Education</span>, we create a clear, family-centred plan that improves communication, attention, behavior regulation, learning readiness, and independence—with progress that shows at home, at school, and in everyday life.
              </p>

              {/* Credibility Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-sm font-medium text-gray-800">Root Cause Therapy Approach</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-sm font-medium text-gray-800">5+ Years of Autism Therapy Experience</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-sm font-medium text-gray-800">1,000+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-sm font-medium text-gray-800">Family-Centered Care</span>
                </div>
              </div>

              {/* Services Checklist */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Autism Therapy in Chennai</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>ADHD Support &amp; Attention Training</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Speech Delay &amp; Communication Development</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Sensory Integration &amp; Behavioral Regulation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Special Education &amp; School Readiness</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Developmental Delay &amp; Learning Support</span>
                </div>
              </div>

              {/* Trust line */}
              <div className="pt-2 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">1,000+ families trust DARC</span>—because progress should show at home, not just inside the therapy room.
              </div>

              {/* Locations / Teletherapy note */}
              <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700 space-y-2">
                <div className="font-semibold text-gray-900">
                  We serve families at our Chennai centres and worldwide through structured online teletherapy:
                </div>
                <ul className="space-y-1 text-gray-600">
                  <li>• <span className="font-medium text-gray-900">Chennai Centres:</span> Ashok Nagar &amp; Pallikaranai</li>
                  <li>• <span className="font-medium text-gray-900">Online Teletherapy:</span> Parent coaching + home structure + weekly goals (from anywhere)</li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/book"
                  className="group relative h-10 w-full sm:w-[240px] overflow-hidden rounded-full bg-blue-600 shadow-md transition-transform duration-300 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 active:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <span className="absolute inset-0 flex items-center justify-center text-white font-medium transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus-visible:opacity-0">
                    Book Free Assessment →
                  </span>

                  <span className="absolute inset-0 flex items-center justify-center text-white font-medium translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-active:translate-x-0 group-focus-visible:translate-x-0">
                    Taking the first step! 🎉
                  </span>
                </Link>

                <a
                  href="https://www.youtube.com/watch?v=cd_EKSbZ0e4&list=PL0soVNqKLg5Mk3uKidD-TPGw2y4xTDJmb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-10 w-full sm:w-[200px] rounded-full border border-red-600 text-red-600 font-medium flex items-center justify-center overflow-hidden group transition-all duration-500 active:scale-95"
                >
                  <span className="absolute inset-0 bg-red-600 rounded-full scale-y-0 origin-bottom group-hover:scale-y-100 group-active:scale-y-100 transition-transform duration-500 ease-out will-change-transform" />
                  <span className="relative z-10 flex items-center gap-2 transition-all duration-500 will-change-auto">
                    <span className="text-lg group-hover:hidden group-active:hidden">▶</span>
                    <span className="hidden text-2xl text-white group-hover:block group-active:block">▶</span>
                    <span className="group-hover:hidden group-active:hidden">Success Stories</span>
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE (IMAGE COLLAGE) */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Tall image */}
                <div className="col-span-1 row-span-2">
                  <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <Image
                      src={heroTall}
                      alt="Therapy session at DARC"
                      fill
                      className="object-cover object-cover object-[50%_35%]"
                      priority
                    />
                  </div>
                </div>

                {/* Top right */}
                <div className="col-span-1">
                  <div className="relative h-[180px] md:h-[240px] w-full overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
                    <Image
                      src={heroTopRight}
                      alt="Pediatric therapy activity"
                      fill
                      className="object-cover object-[50%_35%]"
                    />
                  </div>
                </div>

                {/* Bottom right */}
                <div className="col-span-1">
                  <div className="relative h-[180px] md:h-[240px] w-full overflow-hidden rounded-xl shadow-md bg-white transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
                    <Image
                      src={heroBottomRight}
                      alt="Child development therapy"
                      fill
                      className="object-cover object-[50%_35%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DARC SECTION */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            {/* LEFT SIDE - Doctor Image & Intro */}
            <div className="space-y-6">
         
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={doctorImage}
                  alt="Dr. Aaditya Malathy, Founder of DARC"
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200">
                  <span className="text-sm font-semibold text-gray-900">🎓 Founder</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Dr. Aaditya Malathy, OT, MS (USA) 
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Aaditya Malathy is the founder of DARC transforming lives of 1000+ children over the past 5 years. At DARC, every child's journey begins with uncovering the root cause of their challenges.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  What Makes DARC Different
                </h2>
              </div>

              {/* Feature Grid */}
              <div className="grid gap-6">
            {/* Root Cause Therapy */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Root Cause Therapy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We begin by understanding the "why" behind your child's challenges— Root Cause analysis, sensory regulation, attention control, motor planning, communication readiness, behavior regulation, and learning foundations. Then we build a step-by-step therapy plan that supports long-term development, not short-term fixes.
              </p>
            </div>

            {/* Evidence-Based */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based, Goal-Driven Therapy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every child receives a structured plan with measurable goals and consistent progress tracking. We focus on outcomes that matter to parents: better communication, improved attention, reduced meltdowns, stronger daily living skills, and increased independence at home and school.
              </p>
            </div>

            {/* Multidisciplinary Support */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinary Support Under One Roof</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                DARC brings Occupational Therapy, Speech Therapy, ABA Therapy and Special Education together in one coordinated plan—so your child gets integrated care instead of disconnected sessions.
              </p>
            </div>

            {/* Family-Centered Care */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍👩‍👧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family-Centered Care + Parent Guidance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Progress accelerates when parents are supported. We guide you with practical strategies, routines, and home support steps—so therapy continues beyond the clinic.
              </p>
            </div>
              </div>
            </div>
          </div>

          {/* Mission Statement - Full Width */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">Our Mission</h3>
            <p className="text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto">
              To help every child unlock their full potential through Root Cause Therapy and evidence-based pediatric rehab—so families experience clarity, confidence, and visible progress.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
          <div className="text-center space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Standard / Conventional Therapy VS. Dr Aaditya’s Method
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">See the difference in approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We don’t just work on today’s challenges—we build the foundations so your child progresses faster and carries those gains into everyday life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/70 via-white to-white" />
              <div className="relative p-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-3 py-1 text-sm font-semibold">
                  Standard Therapy
                </div>
                <p className="text-lg font-semibold text-gray-900">Works on what’s seen today—skills may not stick.</p>
                <ul className="space-y-3 text-gray-700">
                  {standardPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 text-red-500">✕</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
              <div className="relative p-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm font-semibold">
                  Dr Aaditya’s Root Cause Therapy
                </div>
                <p className="text-lg font-semibold text-gray-900">Builds readiness, regulation, and lasting change.</p>
                <ul className="space-y-3 text-gray-700">
                  {rootCausePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 text-green-600">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes / Infographic Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Measurable Progress. <span className="text-blue-600">Real Impact.</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Data-driven outcomes from 1,000+ success stories at DARC — a trusted Paediatric Rehab centre in Chennai.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {outcomeStats.map((stat) => (
              <AnimatedStatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                note={stat.note}
                suffix="%"
              />
            ))}
          </div>

          {/* Key areas bar chart */}
          <div className="rounded-2xl bg-white shadow-lg border border-gray-100 p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <h3 className="text-2xl font-bold text-gray-900">Average Improvement Across Key Areas</h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                Based on 1,000+ children
              </span>
            </div>

            <div className="space-y-5">
              {keyAreas.map((area) => (
                <div key={area.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-medium text-gray-800">
                    <span className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-gray-400" />
                      {area.label}
                    </span>
                    <span>{area.value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full rounded-full progress-fill"
                      style={{ "--progress": `${area.value}%`, background: area.gradient } as CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact metrics */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {impactMetrics.map((metric) => (
              <AnimatedMetric
                key={metric.label}
                label={metric.label}
                value={metric.value}
                color={metric.color}
              />
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-700 max-w-3xl mx-auto">
              Join thousands of families experiencing real transformation — calmer routines, clearer communication, better learning readiness, and growing independence.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Start Your Child&apos;s Journey
            </Link>
          </div>
        </div>
      </section>

      <TherapyTimeline />

      <TestimonialsCarousel />
    </main>
  );
}
