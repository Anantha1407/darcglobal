"use client";

import Link from "next/link";
import { useMemo, useState, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const services = [
  { value: "occupational", label: "Occupational Therapy", icon: "🎯" },
  { value: "speech", label: "Speech Therapy", icon: "🗣️" },
  { value: "special-education", label: "Special Education", icon: "📚" },
  { value: "behavioural", label: "Behavioral Therapy", icon: "💚" },
  { value: "parent-coaching", label: "Parent Coaching", icon: "👨‍👩‍👧" },
  { value: "sensory", label: "Sensory Integration", icon: "✨" },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export default function BookAssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | null
  >(null);

  const [formData, setFormData] = useState({
    service: "",
    preferredDate: "",
    preferredTime: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    notes: "",
  });

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const canProceed = () => {
    if (step === 1) return Boolean(formData.service);
    if (step === 2) return Boolean(formData.preferredDate && formData.preferredTime);
    return Boolean(formData.name && formData.email && formData.phone && formData.location);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submit failed");
      setSubmitStatus({ type: "success", message: "Booked! We'll confirm shortly." });
      setFormData({
        service: "",
        preferredDate: "",
        preferredTime: "",
        name: "",
        email: "",
        phone: "",
        location: "",
        notes: "",
      });
      setStep(1);
      setTimeout(() => {
        router.push("/");
      }, 1600);
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={`min-h-screen bg-white ${poppins.className}`}>
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-wide">Book Assessment</p>
                  <h1 className="text-2xl md:text-3xl font-bold">Start your child's transformation journey</h1>
                  <p className="text-sm md:text-base text-white/80">Free comprehensive evaluation to understand your child's needs.</p>
                </div>
                <Link
                  href="/"
                  className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-white/15 px-4 text-sm font-semibold text-white hover:bg-white/25 transition"
                >
                  Close ✕
                </Link>
              </div>

              {/* Stepper */}
              <div className="mt-6 flex items-center gap-3">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                      <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition ${
                        step === s
                          ? "border-white bg-white text-blue-700"
                          : step > s
                          ? "border-white/70 bg-white/80 text-blue-700"
                          : "border-white/40 text-white/70"
                      }`}
                    >
                      {s}
                    </div>
                    {s !== 3 && (
                      <div
                        className={`h-[3px] w-16 rounded-full transition ${
                          step > s ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 space-y-6">
              {submitStatus && (
                <div
                  className={`rounded-2xl border p-4 text-sm font-semibold ${
                    submitStatus.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Select Service</h2>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {services.map((service) => (
                      <button
                        key={service.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: service.value })}
                        className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-left shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-300 hover:-translate-y-0.5 hover:shadow-md ${
                          formData.service === service.value
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <span className="text-xl">{service.icon}</span>
                        <span className="text-base font-semibold text-gray-900">{service.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Choose Date & Time</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Preferred Date</label>
                      <input
                        type="date"
                        name="preferredDate"
                        min={minDate}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Preferred Time</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredTime: slot })}
                            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm ${
                              formData.preferredTime === slot
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-gray-200 bg-white text-gray-800"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Your Details</h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Preferred Location *</label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                      >
                        <option value="">Select a location</option>
                        <option value="ashok-nagar">Ashok Nagar</option>
                        <option value="pallikaranai">Pallikaranai</option>
                        <option value="online">Online/Teletherapy</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Notes (optional)</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                      placeholder="Tell us anything helpful (child's age, areas of concern, best time to call, etc.)"
                    />
                  </div>
                </div>
              )}

              {/* Footer buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <div className="flex gap-3">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.max(1, s - 1))}
                      className="h-12 rounded-full border border-gray-300 px-6 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
                    >
                      Back
                    </button>
                  )}
                </div>

                <div className="flex gap-3">
                  {step < 3 && (
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.min(3, s + 1))}
                      disabled={!canProceed()}
                      className="h-12 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-8 text-sm font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue →
                    </button>
                  )}
                  {step === 3 && (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canProceed() || isSubmitting}
                      className="h-12 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-8 text-sm font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
                          Booking...
                        </span>
                      ) : (
                        "Book Assessment →"
                      )}
                    </button>
                  )}
                </div>
              </div>

              <p className="text-xs text-gray-500">We respect your privacy. Details are only used to schedule your assessment.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
