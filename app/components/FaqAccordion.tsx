"use client";

import { useState } from "react";
import { faqCategories, type FaqCategory } from "../faq/faqData";

type FaqAccordionProps = {
  categories?: FaqCategory[];
};

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqAccordion({ categories = faqCategories }: FaqAccordionProps) {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(categories.map((category, index) => [category.title, index === 0])),
  );

  const [openQuestions, setOpenQuestions] = useState<Record<string, Record<string, boolean>>>(() =>
    Object.fromEntries(
      categories.map((category) => [
        category.title,
        Object.fromEntries(category.questions.map((question) => [question.question, false])),
      ]),
    ),
  );

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleQuestion = (categoryTitle: string, questionText: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [categoryTitle]: {
        ...prev[categoryTitle],
        [questionText]: !prev[categoryTitle]?.[questionText],
      },
    }));
  };

  return (
    <div className="space-y-4">
      {categories.map((category) => {
        const categoryId = slugify(category.title);
        const categoryOpen = openCategories[category.title];

        return (
          <div
            key={category.title}
            id={categoryId}
            className="overflow-hidden rounded-2xl border border-blue-200/70 bg-white shadow-sm"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition hover:bg-blue-50/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              onClick={() => toggleCategory(category.title)}
              aria-expanded={categoryOpen}
              aria-controls={`${categoryId}-panel`}
              id={`${categoryId}-header`}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-gradient-to-br from-blue-500/15 via-white to-red-500/15 text-xl text-blue-700 shadow-inner">
                  {category.icon}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    <span className="text-xs font-semibold text-blue-700">
                      {category.questions.length} Qs
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{category.blurb}</p>
                </div>
              </div>
              <svg
                className={`mt-1 h-5 w-5 text-blue-700 transition-transform ${
                  categoryOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              id={`${categoryId}-panel`}
              role="region"
              aria-labelledby={`${categoryId}-header`}
              className={categoryOpen ? "border-t border-slate-100 bg-white" : "hidden"}
            >
              <ul className="divide-y divide-slate-100">
                {category.questions.map((question, idx) => {
                  const questionId = `${categoryId}-q-${idx}`;
                  const questionOpen = openQuestions[category.title]?.[question.question];

                  return (
                    <li key={question.question} className="px-6 py-4">
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-4 text-left transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                        onClick={() => toggleQuestion(category.title, question.question)}
                        aria-expanded={questionOpen}
                        aria-controls={`${questionId}-answer`}
                        id={`${questionId}-trigger`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-red-50 text-xs font-semibold text-blue-700 shadow-inner">
                            Q
                          </span>
                          <p className="text-sm md:text-base font-medium text-gray-900">
                            {question.question}
                          </p>
                        </div>
                        <svg
                          className={`mt-1 h-4 w-4 text-red-600 transition-transform ${
                            questionOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M5.5 7.5L10 12.5L14.5 7.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {questionOpen && (
                        <div
                          id={`${questionId}-answer`}
                          role="region"
                          aria-labelledby={`${questionId}-trigger`}
                          className="mt-3 rounded-xl border border-red-200/70 bg-gradient-to-r from-blue-50/50 via-white to-red-50/70 px-4 py-3 text-sm text-gray-700"
                        >
                          {question.answer}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
