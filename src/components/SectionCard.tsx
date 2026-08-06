import Image from "next/image";
import type { PageSection } from "@/src/data/pages";

export function SectionCard({ section }: { section: PageSection }) {
  return (
    <section className="rounded-[6px] border border-deep/20 bg-white/70 p-4 shadow-[0_8px_20px_-14px_rgba(131,88,186,0.35)] backdrop-blur-md">
      {section.heading && (
        <h2 className="font-display text-[15px] font-semibold text-deep">
          {section.heading}
        </h2>
      )}

      {section.paragraphs?.map((p, i) => (
        <p
          key={i}
          className={`text-[13px] leading-6 text-sub ${
            section.heading ? "mt-2" : i === 0 ? "" : "mt-1.5"
          }`}
        >
          {p}
        </p>
      ))}

      {section.ordered && (
        <ol className="mt-3 space-y-2">
          {section.ordered.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] leading-6 text-sub">
              <span className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] bg-primary text-[10px] font-bold text-white">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )}

      {section.list && (
        <ul className="mt-3 space-y-1.5">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] leading-6 text-sub">
              <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-[2px] bg-deep/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.note && (
        <p className="mt-3 border-l-2 border-deep/30 pl-3 text-[13px] leading-6 text-sub">
          {section.note}
        </p>
      )}

      {section.images && (
        <div
          className={`mt-3 grid gap-2 ${
            section.imageCols === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {section.images.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-[4/3] overflow-hidden rounded-[6px] border border-deep/15 bg-white/60"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 430px) 44vw"
                className="object-cover"
              />
            </a>
          ))}
        </div>
      )}

      {section.mailto && (
        <a
          href={`mailto:${section.mailto}`}
          className="mt-4 flex items-center justify-between rounded-[10px] border border-deep/20 bg-primary px-4 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-deep"
        >
          {section.mailto}
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      )}
    </section>
  );
}
