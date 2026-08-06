import type { Lang, LinkItem } from "@/src/data/links";
import { Icon } from "@/src/components/icons";

const baseClass =
  "group flex h-[60px] w-full items-center gap-4 rounded-[30px] border border-white/70 bg-white/60 px-4 shadow-[0_12px_30px_-12px_rgba(131,88,186,0.35)] backdrop-blur-xl transition-all duration-300";

export function LinkButton({
  item,
  lang,
  index,
}: {
  item: LinkItem;
  lang: Lang;
  index: number;
}) {
  const delay = { animationDelay: `${150 + index * 60}ms` };
  const isMail = item.href.startsWith("mailto:");

  return (
    <li className="animate-fade-up opacity-0" style={delay}>
      <a
        href={item.href}
        target={isMail ? undefined : "_blank"}
        rel={isMail ? undefined : "noreferrer"}
        className={`${baseClass} hover:-translate-y-[2px] hover:border-white/80 hover:bg-linear-to-r hover:from-primary hover:to-lavender hover:shadow-[0_18px_36px_-14px_rgba(131,88,186,0.55)] focus-visible:-translate-y-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep`}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist/90 text-deep transition-colors duration-300 group-hover:bg-white/25 group-hover:text-white">
          <Icon name={item.icon} />
        </span>
        <span className="flex-1 text-left text-[15px] font-semibold tracking-wide text-ink transition-colors duration-300 group-hover:text-white">
          {item.label[lang]}
        </span>
        <span className="translate-x-1 text-deep opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-white">
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
        </span>
      </a>
    </li>
  );
}
