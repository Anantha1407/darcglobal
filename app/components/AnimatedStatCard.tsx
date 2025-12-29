"use client";

import { useCountUp } from "@/app/hooks/useCountUp";

type StatCardProps = {
  label: string;
  value: number;
  note: string;
  suffix?: string;
};

export function AnimatedStatCard({ label, value, note, suffix = "%" }: StatCardProps) {
  const { count, elementRef } = useCountUp(value, 2000);

  return (
    <div
      ref={elementRef}
      className="rounded-2xl bg-white shadow-lg border border-gray-100 p-6 flex flex-col items-center gap-4 transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {count}
        <span className="text-gray-700">{suffix}</span>
      </div>
      <div className="text-lg font-semibold text-gray-800 text-center">{label}</div>
      <div className="text-sm text-gray-600 text-center">{note}</div>
    </div>
  );
}
