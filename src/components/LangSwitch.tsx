import type { Lang } from "@/src/data/links";

export function LangSwitch({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (next: Lang) => void;
}) {
  const options: { value: Lang; label: string; aria: string }[] = [
    { value: "zh", label: "中", aria: "中文" },
    { value: "ja", label: "日", aria: "日本語" },
  ];

  return (
    <div className="flex items-center gap-0.5 rounded-[6px] border border-deep/20 bg-white/75 p-[3px] shadow-[0_4px_14px_-6px_rgba(131,88,186,0.35)] backdrop-blur-md">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          aria-pressed={lang === opt.value}
          aria-label={opt.aria}
          onClick={() => onChange(opt.value)}
          className={`h-[20px] min-w-[26px] rounded-[4px] px-1 text-[10px] font-bold leading-none transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-deep ${
            lang === opt.value
              ? "bg-primary text-white shadow-[0_2px_8px_-2px_rgba(131,88,186,0.6)]"
              : "text-sub hover:text-deep"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
