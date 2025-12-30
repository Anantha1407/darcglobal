import { Poppins } from "next/font/google";
import FaqAccordion from "../components/FaqAccordion";
import { faqCategories } from "./faqData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function FaqPage() {
  const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <main className={`min-h-screen bg-white ${poppins.className}`}>
      <section className="pt-28 pb-14">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            FAQ
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-red-500 rounded-[36px] p-[1px] inline-block">
            <div className="bg-white rounded-[35px] px-6 md:px-10 py-6 md:py-8 shadow-lg">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Your Questions, Answered Clearly
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Explore quick answers about admissions, pricing, curriculum, and how we support
                your family. If you need anything else, our team is just a message away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
          <div className="text-center space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Explore by Category
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
              Find answers fast with curated topics
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Browse the areas families ask about most. Each card highlights how many questions
              we&apos;ve covered so you can dive right into what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((category) => (
              <div
                key={category.title}
                className="bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl p-[1px]"
              >
                <div className="bg-white rounded-2xl h-full p-5 flex flex-col gap-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {category.questions.length} Qs
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{category.blurb}</p>
                  </div>
                  <a
                    href={`#${slugify(category.title)}`}
                    className="mt-auto text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors text-left"
                  >
                    View questions →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between flex-col md:flex-row gap-3">
              <div className="text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Full FAQ
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Browse every question by topic
                </h3>
              </div>
              <p className="text-sm text-gray-600 max-w-xl md:text-right">
                Expand each section to see the most common questions parents ask about joining,
                costs, learning, and support on campus. Use the toggles below to open categories and
                reveal detailed answers.
              </p>
            </div>

            <FaqAccordion categories={faqCategories} />
          </div>
        </div>
      </section>
    </main>
  );
}
