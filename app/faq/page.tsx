import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function FaqPage() {
  return (
    <main className={`min-h-screen bg-white ${poppins.className}`}>
      <section className="pt-32 pb-16 md:pt-28">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            FAQ
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
            Your Questions, Answered
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            We&apos;re gathering the most common questions from families. Check back soon or
            reach out directly for quick guidance.
          </p>
        </div>
      </section>
    </main>
  );
}
