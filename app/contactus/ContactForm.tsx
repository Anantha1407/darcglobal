"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  age: string;
  location: string;
  message: string;
};

type SubmitStatus = {
  type: "success" | "error" | null;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  age: "",
  location: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll get back to you within 24 hours.",
      });
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try calling us instead.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
          Child's Age (optional)
        </label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
          placeholder="e.g., 4 years"
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
          Preferred Location *
        </label>
        <select
          id="location"
          name="location"
          required
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
        >
          <option value="">Select a location</option>
          <option value="ashok-nagar">Ashok Nagar</option>
          <option value="pallikaranai">Pallikaranai</option>
          <option value="online">Online/Teletherapy</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none resize-none"
          placeholder="Tell us about your child's needs, concerns, or questions..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white font-semibold text-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? "Sending..." : "Send Message →"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  );
}
