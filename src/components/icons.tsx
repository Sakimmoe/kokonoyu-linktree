import type { ReactNode } from "react";
import type { IconName } from "@/src/data/links";

const paths: Record<IconName, ReactNode> = {
  bilibili: (
    <>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.5 2.8 5.6 4.7M16.5 2.8l1.9 1.9" />
        <rect x="3" y="6" width="18" height="13.2" rx="3.4" />
      </g>
      <path d="m10 9.4 4.6 2.7-4.6 2.7Z" />
    </>
  ),
  youtube: (
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  ),
  x: (
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  ),
  fanbox: (
    <>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 5v14M8 5h6.8M8 11.5h4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  fantia: (
    <>
      <circle
        cx="12"
        cy="12"
        r="9.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M8.4 7.4h7.2M8.4 7.4v9.6M8.4 12.2h5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </>
  ),
  booth: (
    <path
      d="M7 5h4.2a3.6 3.6 0 0 1 0 7.2H7V5Zm0 7.2h4.8a3.6 3.6 0 0 1 0 7.2H7v-7.2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
  ),
  bolt: <path d="M13.2 1.8 4.6 13.6h5.1L9.1 22.2l8.6-11.8h-5.1l.6-8.6Z" />,
  mail: (
    <>
      <rect
        x="2.5"
        y="5"
        width="19"
        height="14"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m3.8 7.2 8.2 5.7 8.2-5.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export function Icon({
  name,
  className = "h-[22px] w-[22px]",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
