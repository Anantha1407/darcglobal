import ScrollReveal from "../components/ScrollReveal";

export default function AboutUs() {
    return (
        <main className="pt-20 overflow-x-hidden">
            {/* HERO */}
            <ScrollReveal>
                <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
                                About DARC
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                Evidence-led Pediatric Neuro-Rehab, Reimagined
                            </h1>
                            <p className="text-white/90 leading-relaxed">
                                We identify root causes behind communication, attention, sensory, and behaviour challenges, then build readiness and skills through a clear, measurable therapy roadmap.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 pt-1">
                                <a href="/book" className="inline-flex items-center justify-center h-11 rounded-full bg-white text-blue-700 px-5 font-semibold shadow-md hover:shadow-lg transition">
                                    Book Assessment
                                </a>
                                <a href="tel:+918015152682" className="inline-flex items-center justify-center h-11 rounded-full border border-white/60 px-5 font-semibold hover:bg-white/10 transition">
                                    Call Us
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Children Supported", value: "1,000+" },
                                { label: "Therapy Sessions", value: "150,000+" },
                                { label: "Parent Satisfaction", value: "98%" },
                                { label: "Clinics & Online", value: "Chennai + Tele" },
                            ].map((item) => (
                                <div key={item.label} className="rounded-2xl border border-white/25 bg-white/10 p-4 shadow-sm">
                                    <div className="text-2xl font-bold">{item.value}</div>
                                    <div className="text-sm text-white/80">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* VISION / MISSION */}
            <ScrollReveal>
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 items-start">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">Our Vision</div>
                            <h2 className="text-3xl font-bold text-gray-900">A clear path to thriving</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We want every child to feel regulated, confident, and ready to learn. Families get clarity, measurable progress, and support that continues beyond the clinic.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">Our Mission</div>
                            <h2 className="text-3xl font-bold text-gray-900">Root-cause, measurable, family-centred</h2>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex gap-3"><span className="text-green-600 mt-1">✓</span><span>Thorough assessment and technology-assisted evaluation.</span></li>
                                <li className="flex gap-3"><span className="text-green-600 mt-1">✓</span><span>Build readiness and regulation so skills stick.</span></li>
                                <li className="flex gap-3"><span className="text-green-600 mt-1">✓</span><span>Parent coaching for carryover at home.</span></li>
                                <li className="flex gap-3"><span className="text-green-600 mt-1">✓</span><span>Transparent tracking and reviews; progress visible in daily life.</span></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* LEADERSHIP: FOUNDER & MD */}
            <ScrollReveal>
                <section className="py-16 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
                        <div className="text-center space-y-3">
                            <h3 className="text-3xl font-bold text-gray-900">Leadership</h3>
                            <p className="text-gray-700">Meet the people guiding our clinical approach and family experience.</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <PersonCard role="Founder" name="[Founder Name]" bio="Short 2–3 line bio about expertise, years of experience, and clinical focus. Replace this placeholder with real content." />
                            <PersonCard role="Managing Director" name="[MD Name]" bio="Short 2–3 line bio about operations, family experience, and service excellence. Replace this placeholder with real content." />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* TEAM GRID */}
            <ScrollReveal>
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
                        <div className="text-center space-y-3">
                            <h3 className="text-3xl font-bold text-gray-900">Clinical & Support Team</h3>
                            <p className="text-gray-700">A multidisciplinary team working in sync—OT, Speech, Physio, Special Education, and care coordinators.</p>
                            <p className="text-sm text-gray-500">Share photos, names, roles, and 1–2 lines for each member to replace placeholders.</p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {[
                                { role: "Lead OT", name: "[Name]" },
                                { role: "Speech Therapist", name: "[Name]" },
                                { role: "Physiotherapist", name: "[Name]" },
                                { role: "Special Educator", name: "[Name]" },
                                { role: "Care Coordinator", name: "[Name]" },
                                { role: "Therapy Assistant", name: "[Name]" },
                            ].map((m) => (
                                <TeamCard key={m.role} role={m.role} name={m.name} />
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
                <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white text-center">
                    <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-5">
                        <h3 className="text-3xl font-bold">Ready to talk?</h3>
                        <p className="text-white/90">Book an assessment or speak with our team to learn how we can help your child progress.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <a href="/book" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-md hover:shadow-lg transition">Book Appointment</a>
                            <a href="tel:+918015152682" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition">Call Now</a>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
}

function PersonCard({ role, name, bio }: { role: string; name: string; bio: string }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-md hover:shadow-xl transition">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-6 md:p-8 grid gap-6 md:grid-cols-[0.85fr_1.15fr] items-center relative">
                <div className="h-40 md:h-48 w-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner" />
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{role}</div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">{name}</h4>
                    <p className="text-gray-700 text-sm md:text-base">{bio}</p>
                    <div className="mt-3 flex gap-2 text-xs text-gray-600">
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">Experience: [Years]</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">Focus: [Areas]</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeamCard({ role, name }: { role: string; name: string }) {
    return (
        <div className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg transition">
            <div className="mb-4 h-28 w-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
            <div className="space-y-1">
                <h4 className="text-lg font-semibold text-gray-900">{role}</h4>
                <p className="text-sm text-gray-600">{name}</p>
                <p className="text-xs text-gray-500">Bio: [1–2 lines about expertise and approach]</p>
            </div>
        </div>
    );
}
