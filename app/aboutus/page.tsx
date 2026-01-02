import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import founderImg from "../assets/owner.jpg";

export default function AboutUs() {
    return (
        <main className="pt-20 overflow-x-hidden bg-white">
            {/* HERO */}
            <ScrollReveal>
                <section className="relative isolate overflow-hidden py-20 md:py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.2),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(244,114,182,0.16),transparent_36%)]" />
                    <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center relative">
                        <div className="space-y-5">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-md backdrop-blur-sm">
                                <span className="text-blue-600">✦</span> About DARC
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                                Where Neuroscience Meets
                                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> Lasting Change</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                                Founded by <span className="font-semibold text-gray-900">Dr. Aaditya Malathy, OT, MS (USA)</span>, DARC revolutionizes developmental therapy. We don&apos;t mask symptoms—we transform lives by healing the neurological foundations that impact autism, ADHD, speech delays, and developmental challenges.
                            </p>
                            <div className="flex items-center gap-6 pt-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold shadow-md">
                                        ✓
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">1,000+ Families</div>
                                        <div className="text-xs text-gray-600">Transformed</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                                        95%
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Success Rate</div>
                                        <div className="text-xs text-gray-600">Proven Results</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <a
                                    href="/book"
                                    className="inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                >
                                    Book Assessment
                                </a>
                                <a
                                    href="tel:+918015152682"
                                    className="inline-flex items-center justify-center h-12 rounded-full border-2 border-blue-200 bg-white text-blue-800 px-6 font-semibold hover:bg-blue-50 transition-all duration-300"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 lg:gap-5">
                            {[
                                { label: "Year Founded", value: "2023", icon: "🏆" },
                                { label: "Lives Transformed", value: "1,000+", icon: "❤️" },
                                { label: "Success Rate", value: "95%", icon: "📊" },
                                { label: "Therapy Sessions", value: "10,000+", icon: "🎯" },
                            ].map((item) => (
                                <div key={item.label} className="group rounded-2xl border border-white/60 bg-white/80 p-5 shadow-md backdrop-blur hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="text-3xl font-extrabold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">{item.value}</div>
                                    <div className="text-sm font-medium text-gray-700 mt-1">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ABOUT DARC */}
            <ScrollReveal>
                <section className="py-20 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                                <span className="text-blue-600">●</span> Our Approach
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                Progress that lasts—
                                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">not just band-aids</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                DARC looks deeper than standard therapy to uncover the <span className="font-semibold text-gray-900">neurological barriers</span> holding a child back. We pair Root Cause Therapy™ with neuro-adaptive, non-invasive methods and evidence-based paediatric OT, speech, and neuro-rehab approaches—tracking outcomes so progress is visible and meaningful.
                            </p>
                            <div className="grid gap-4">
                                {[
                                    { text: "Root Cause Therapy™ to pinpoint what is truly limiting progress", icon: "🔍" },
                                    { text: "Evidence-based OT, speech, PT, ABA, and special education grounded in clinical research", icon: "🧬" },
                                    { text: "Goal-led planning and measurable tracking—parents see clear change, not guesswork", icon: "📈" },
                                    { text: "Science, structure, and outcomes—individually tailored to your child", icon: "⚡" },
                                ].map((item) => (
                                    <div key={item.text} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                                        <span className="text-gray-800 leading-relaxed">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-lg">
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
                                    ⭐ Why We're Different
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">What makes our results different</h3>
                                <div className="space-y-4">
                                    {[
                                        { title: "Root Cause Focus", text: "We identify neurological barriers to address regulation, readiness, and skill-building at the source" },
                                        { title: "Neuro-Adaptive Methods", text: "Non-invasive tech-assisted input combined with evidence-backed OT and speech to rewire neural pathways" },
                                        { title: "Transparent Progress", text: "Structured, measurable reviews keep families informed and confident—step by step" },
                                    ].map((item) => (
                                        <div key={item.title} className="p-4 rounded-xl bg-white/80 backdrop-blur border border-blue-100 shadow-sm">
                                            <div className="font-semibold text-blue-700 mb-1">{item.title}</div>
                                            <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-6 shadow-md">
                                <div className="text-4xl mb-3">🏆</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Award-Winning Care</h4>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Recognized as <span className="font-semibold">Best Child Rehab Centre (2025)</span> with Dr. Aaditya awarded <span className="font-semibold">Best Occupational Therapist (2025)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* THE VISIONARY */}
            <ScrollReveal>
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
                            {/* LEFT SIDE - Doctor Image & Info */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200">
                                    <span className="text-sm font-semibold text-gray-900">🎓 Founder</span>
                                </div>
                                
                                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={founderImg}
                                        alt="Dr. Aaditya Malathy, Founder of DARC"
                                        width={500}
                                        height={600}
                                        className="object-cover w-full"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Dr. Aaditya Malathy, OT, MS (USA)
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Dr. Aaditya Malathy is the founder of DARC, transforming lives of 1000+ children over the past 5 years. At DARC, every child's journey begins with uncovering the root cause of their challenges.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-5 shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-2xl">🏆</span>
                                        <div className="text-base font-bold text-blue-700">Awards & Recognition</div>
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Best Occupational Therapist (2025) | DARC awarded Best Child Rehab Centre (2025) | Root Cause Therapy™ Architect | Evidence-based Pediatric OT Specialist
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT SIDE - Content */}
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
                                        <span className="text-amber-500">★</span> Meet The Visionary
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                        Transforming Lives Through
                                        <span className="block mt-1 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                                            Root Cause Therapy™
                                        </span>
                                    </h2>
                                </div>

                                <div className="relative rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 p-6 shadow-md">
                                    <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-2xl shadow-lg">
                                        "
                                    </div>
                                    <p className="text-lg font-semibold leading-relaxed text-gray-900 italic mb-3 mt-2">
                                        We don&apos;t chase symptoms—we rebuild the foundation. Root-cause, evidence-based therapy helps the nervous system regulate, the body organize, and the child function better—so families don&apos;t just feel change, they can see it.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
                                        <p className="text-sm font-semibold text-gray-700">Dr Aaditya Malathy</p>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-700 leading-relaxed">
                                    My work is built on one fundamental belief: <span className="font-bold text-gray-900">children progress faster when we address the underlying neurological foundations</span>—not just surface behaviors. Root Cause Therapy™ transforms autism, ADHD, sensory processing differences, and developmental delays by healing what&apos;s underneath.
                                </p>

                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="text-2xl">🎯</span> Areas of Expertise
                                    </h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {[
                                            { text: "Sensory regulation & modulation", icon: "🧠" },
                                            { text: "Primitive reflex integration", icon: "🔄" },
                                            { text: "Functional Speech Therapy", icon: "💬" },
                                            { text: "Neuroadaptive Therapy Methods", icon: "⚡" },
                                            { text: "Neuromotor development", icon: "🏃" },
                                            { text: "Brain–body connectivity", icon: "🔗" },
                                        ].map((item) => (
                                            <div key={item.text} className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white p-4 text-sm text-gray-800 shadow-sm hover:shadow-md transition-shadow">
                                                <span className="text-xl flex-shrink-0">{item.icon}</span>
                                                <span className="font-medium">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-base text-gray-700 leading-relaxed">
                                    Instead of only working on surface behaviours, I use standardised assessment, clinical reasoning, goal-led intervention, and progress tracking to select proven therapy strategies and refine the plan based on outcomes. The goal is simple: <span className="font-semibold text-gray-900">reduce underlying barriers, improve daily function, and create lasting progress</span>—at home, school, and life.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ROOT CAUSE METHODOLOGY */}
            <ScrollReveal>
                <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/30">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                                <span className="text-blue-600">◆</span> Our Framework
                            </div>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                                The Root Cause Therapy™
                                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    Methodology
                                </span>
                            </h3>
                            <p className="text-lg text-gray-700">A 4-step scientific framework that transforms lives by healing the neurological foundations.</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    title: "Neurological Assessment",
                                    desc: "Deep evaluation of brain–body connections, primitive reflexes, and sensory processing patterns.",
                                    step: "1",
                                    icon: "🔬"
                                },
                                {
                                    title: "Root Cause Identification",
                                    desc: "Pinpoint the neurological foundations causing developmental challenges.",
                                    step: "2",
                                    icon: "🎯"
                                },
                                {
                                    title: "Targeted Intervention",
                                    desc: "Evidence-based therapies and neuro-adaptive methods that rewire neural pathways.",
                                    step: "3",
                                    icon: "⚡"
                                },
                                {
                                    title: "Measurable Progress",
                                    desc: "Data-driven tracking with regular assessments to celebrate every milestone.",
                                    step: "4",
                                    icon: "📊"
                                },
                            ].map((item) => (
                                <div
                                    key={item.step}
                                    className="group relative rounded-3xl border-2 border-gray-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <div className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                        {item.step}
                                    </div>
                                    <div className="mb-4 text-4xl">{item.icon}</div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* IMPACT DATA */}
            <ScrollReveal>
                <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
                        <div className="text-center space-y-5 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                                <span className="text-blue-600">📈</span> Impact Data
                            </div>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                                Measurable Results.
                                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    Real Transformations.
                                </span>
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                From baseline assessment to functional change, parents see and understand every step. Data-driven outcomes from <span className="font-bold text-gray-900">1,000+ children</span> supported at DARC.
                            </p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xl">
                                        📊
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900">Average Improvement Across Key Areas</h4>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { label: "Speech Development", value: "94%", color: "from-blue-500 to-blue-600" },
                                        { label: "Sensory Regulation", value: "89%", color: "from-cyan-500 to-cyan-600" },
                                        { label: "Motor Skills", value: "91%", color: "from-blue-600 to-blue-700" },
                                        { label: "Social Skills", value: "87%", color: "from-sky-500 to-blue-600" },
                                    ].map((item) => (
                                        <div key={item.label} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-base font-bold text-gray-900">{item.label}</span>
                                                <span className={`text-lg font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.value}</span>
                                            </div>
                                            <div className="h-3 rounded-full bg-gray-100 shadow-inner overflow-hidden">
                                                <div 
                                                    className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-md transition-all duration-1000 ease-out`}
                                                    style={{ width: item.value }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                                {[
                                    { value: "98%", label: "Parent Satisfaction", note: "Based on 1,000+ family surveys", icon: "❤️", gradient: "from-blue-500 to-cyan-500" },
                                    { value: "4.2×", label: "Faster Progress", note: "vs symptom-only approaches", icon: "🚀", gradient: "from-cyan-500 to-blue-600" },
                                    { value: "8–12", label: "Months to Priority Goals", note: "Varies by child", icon: "⏱️", gradient: "from-blue-600 to-blue-700" },
                                    { value: "100%", label: "Transparency", note: "Root causes = lasting skills", icon: "✨", gradient: "from-sky-500 to-cyan-600" },
                                ].map((stat) => (
                                    <div key={stat.label} className="group rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                        <div className="text-4xl mb-3">{stat.icon}</div>
                                        <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
                                        <p className="text-base font-bold text-gray-900 mb-2">{stat.label}</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">{stat.note}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 text-center">
                            Note: Individual outcomes vary. These are aggregated results from DARC's internal outcome tracking and family feedback.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
                <section className="relative py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
                    <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
                            <span className="text-yellow-300">✦</span> Start Your Journey
                        </div>
                        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Ready to See
                            <span className="block mt-2 text-yellow-300">Real Progress?</span>
                        </h3>
                        <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
                            Book a comprehensive assessment with Dr. Aaditya and discover the root causes holding your child back. Evidence-based solutions, measurable outcomes, transparent progress.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <a
                                href="/book"
                                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                <span>Book Assessment</span>
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <a
                                href="tel:+918015152682"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                            >
                                <span className="mr-2">📞</span>
                                <span>Call +91 801 515 2682</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
                            {[
                                { icon: "🎯", text: "Root Cause Focus" },
                                { icon: "📊", text: "Measurable Progress" },
                                { icon: "🏆", text: "Award-Winning Care" },
                            ].map((item) => (
                                <div key={item.text} className="text-center">
                                    <div className="text-4xl mb-2">{item.icon}</div>
                                    <p className="text-sm font-semibold text-white/90">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
}
