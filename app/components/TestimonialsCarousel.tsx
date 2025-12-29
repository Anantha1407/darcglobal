/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  id: string;
  title: string;
  subtitle: string;
  highlights: string[];
  speaker: string;
};

const testimonials: Testimonial[] = [
  {
    id: "cd_EKSbZ0e4",
    title: "Teletherapy mom from Erode saw gains in a month",
    subtitle: "Progress in speech, chewing, and clarity through remote sessions",
    highlights: ["Speech started improving within a month", "Better chewing and oral motor control"],
    speaker: "Teletherapy mom (Erode)",
  },
  {
    id: "4EzqdS2LPIY",
    title: "Heartfelt testimonial of a mom",
    subtitle: "Mother from Chennai shares her child's progress",
    highlights: ["Improved communication skills", "Better social interactions"],
    speaker: "Mrs. Mayuri Kumari",
  },
  {
    id: "z7bg3nnqizg",
    title: "Manav's parents saw big gains and graduated in 6–9 months",
    subtitle: "Steady progress from therapy start to completion",
    highlights: ["Better communication and focus", "Ready for school within 6–9 months"],
    speaker: "Manav's parents",
  },
  {
    id: "osjv5F7dVKA",
    title: "Transparent therapy for my grandson was a game changer",
    subtitle: "Grandmom shares how watching sessions built trust",
    highlights: ["Seeing every step of therapy built confidence", "Transparent approach helped her support at home"],
    speaker: "Grandmom's experience",
  },
  {
    id: "yKhaRmobUc4",
    title: "NRI family shares steady speech progress",
    subtitle: "Tracking gains across speech and multidisciplinary therapy",
    highlights: ["Clearer communication week over week", "Progress tracking across multiple therapies"],
    speaker: "NRI family (speech therapy)",
  },
];

export default function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [prefetchedIds, setPrefetchedIds] = useState<Set<string>>(new Set());

  const scrollCarousel = (direction: "left" | "right") => {
    const node = carouselRef.current;
    if (!node) return;
    const amount = direction === "left" ? -320 : 320;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    if (!carouselRef.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-testimonial-id");
            if (!id) return;
            setPrefetchedIds((prev) => {
              if (prev.has(id)) return prev;
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        });
      },
      { root: carouselRef.current, rootMargin: "200px", threshold: 0.1 }
    );

    const nodes = carouselRef.current.querySelectorAll("[data-testimonial-id]");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Real Families, Real Transformations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear directly from parents whose children have thrived with Dr. Aaditya&apos;s Root Cause Therapy at DARC.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white via-white/70 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white via-white/70 to-transparent" />

            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-4 md:pb-6 snap-x snap-mandatory no-scrollbar"
              style={{ scrollBehavior: "smooth" }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="snap-start shrink-0 w-[260px] sm:w-[300px] md:w-[320px] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-[560px] md:h-[600px] will-change-transform"
                  data-testimonial-id={item.id}
                >
                  {prefetchedIds.has(item.id) && (
                    <iframe
                      className="hidden"
                      src={`https://www.youtube.com/embed/${item.id}?rel=0`}
                      title={`${item.title} preload`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(item.id)}
                    className="group block relative overflow-hidden w-full text-left aspect-[9/16] h-[360px] md:h-[420px]"
                    aria-label={`Play testimonial: ${item.title}`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${item.id}/hq720.jpg`}
                      srcSet={`https://i.ytimg.com/vi/${item.id}/hq720.jpg 1x, https://i.ytimg.com/vi/${item.id}/maxresdefault.jpg 2x`}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 md:group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.dataset.fallback) return;
                        target.dataset.fallback = "1";
                        target.src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
                        target.srcset = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-lg transition-transform duration-300 md:group-hover:scale-110">
                        ▶
                      </div>
                    </div>
                  </button>

                  <div className="p-5 flex flex-col gap-3 h-full">
                    <div className="inline-flex items-center gap-2 text-amber-600 text-xl">
                      <span>“</span>
                      <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">{item.speaker}</span>
                    </div>
                    <p className="text-gray-800 font-semibold leading-snug">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                    <div className="rounded-xl bg-white/70 backdrop-blur px-4 py-3 text-sm text-gray-800 border border-gray-100 shadow-sm space-y-2">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-1">
                      <a
                        href={`https://www.youtube.com/watch?v=${item.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white font-semibold py-3 shadow-md transition-transform duration-300 md:hover:scale-[1.02] motion-reduce:transition-none motion-reduce:transform-none"
                      >
                        Watch Stories
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:flex items-center justify-between absolute inset-y-0 left-0 right-0 pointer-events-none">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="pointer-events-auto h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:-translate-x-0.5 transition"
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="pointer-events-auto h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:translate-x-0.5 transition"
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Testimonial video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow hover:scale-105 transition"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
