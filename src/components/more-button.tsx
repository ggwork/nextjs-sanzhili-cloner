import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { MoreArrow } from "@/components/icons";
import type { ReactNode } from "react";

interface MoreButtonProps {
  href: string;
  children: ReactNode;
  /**
   * "solid" (default): orange bg / white text, arrow nudges right on hover.
   * "invert": on hover bg→white, text→orange (used in application-fields cards).
   */
  variant?: "solid" | "invert";
  className?: string;
  ariaLabel?: string;
}

/**
 * Source `.more`: 1.6rem × 0.45rem (160×45px), line-height 45px, bg #f39800,
 * 14px white text, with a 25×7 arrow (jt.png) that shifts `left: 5px` on hover.
 */
export function MoreButton({
  href,
  children,
  variant = "solid",
  className,
  ariaLabel,
}: MoreButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "group inline-flex h-[45px] w-[160px] max-[1355px]:w-[120px] items-center justify-center bg-brand text-[14px] text-white transition-colors duration-300",
        variant === "invert" && "hover:bg-white hover:text-brand",
        className,
      )}
    >
      <span>{children}</span>
      <MoreArrow className="ml-2.5 transition-transform duration-300 group-hover:translate-x-[5px]" />
    </Link>
  );
}
