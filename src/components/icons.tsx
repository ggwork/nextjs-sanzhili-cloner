import type { SVGProps } from "react";

/**
 * Right-pointing arrow used inside ".more" buttons (source: images/jt.png).
 * Rendered as inline SVG using currentColor so it recolors correctly on hover
 * (e.g. orange-on-white → white-on-orange in the application-fields cards).
 */
export function MoreArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 25 7"
      width={25}
      height={7}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 3.5h22M19.5 0.5l4 3-4 3"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
