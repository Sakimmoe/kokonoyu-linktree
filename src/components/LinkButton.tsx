import type { Lang, LinkItem } from "@/src/data/links";
import { Icon } from "@/src/components/icons";

const baseClass =
  "group flex h-[60px] w-full items-center gap-4 rounded-[10px] border-[1.5px] border-deep/20 bg-white/70 px-4 shadow-[0_8px_22px_-12px_rgba(131,88,186,0.4)] backdrop-blur-lg transition-all duration-200";

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
        className={`${baseClass} hover:-translate-y-[1px] hover:border-deep/40 hover:bg-primary hover:shadow-[0_14px_30px_-14px_rgba(131,88,186,0.65)] focus-visible:-translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep`}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-mist/90 text-deep transition-colors duration-200 group-hover:bg-white/20 group-hover:text-white">
          <Icon name={item.icon} />
        </span>
        <span className="flex-1 text-left text-[15px] font-semibold tracking-wide text-ink transition-colors duration-200 group-hover:text-white">
          {item.label[lang]}
        </span>
        <span className="translate-x-1 text-deep opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-white">
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
