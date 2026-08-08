import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  /** Light tone for dark sections (e.g. application fields on navy). */
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Section heading. Source `.title`: 0.36rem (36px), centered, with an orange
 * underline (::after — 3px tall, 40px wide, #f39800, margin-top 10px).
 */
export function SectionTitle({
  children,
  tone = "dark",
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-center",
        tone === "light" ? "text-white" : "text-ink",
        className,
      )}
      style={{ fontSize: "clamp(26px, 2.6vw, 36px)", fontWeight: 400 }}
    >
      {children}
      <span className="mx-auto mt-2.5 block h-[3px] w-10 bg-brand" />
    </h2>
  );
}
