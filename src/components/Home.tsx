"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LinkButton } from "@/src/components/LinkButton";
import { MenuButton } from "@/src/components/MenuButton";
import { footer, links, profile, type Lang } from "@/src/data/links";

const DEFAULT_LANG: Lang = "zh";

export function Home() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const saved = window.localStorage.getItem("kokonoyu-lang");
    if (saved === "ja" || saved === "zh") {
      setLang(saved);
    }
  }, []);

  const switchLang = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem("kokonoyu-lang", next);
  };

  const langBtn = (value: Lang, label: string) => (
    <button
      type="button"
      aria-pressed={lang === value}
      onClick={() => switchLang(value)}
      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-deep ${
        lang === value
          ? "bg-linear-to-r from-primary to-lavender text-white shadow-[0_4px_12px_-4px_rgba(131,88,186,0.55)]"
          : "text-sub hover:text-deep"
      }`}
    >
      {label}
    </button>
  );

  return (
    <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[430px] flex-col px-7 pb-16 pt-5">
      <div className="relative z-30 flex items-center justify-between">
        <MenuButton lang={lang} />
        <div className="flex items-center gap-0.5 rounded-full border border-white/70 bg-white/60 p-0.5 shadow-[0_6px_18px_-8px_rgba(131,88,186,0.4)] backdrop-blur-md">
          {langBtn("zh", "中文")}
          {langBtn("ja", "日本語")}
        </div>
      </div>

      <header className="animate-fade-up mt-6 text-center">
        <div className="mx-auto h-[148px] w-[148px] rounded-full border border-white/70 bg-white/55 p-1.5 shadow-[0_20px_50px_-18px_rgba(131,88,186,0.45)] ring-2 ring-lavender/50 backdrop-blur-md">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src="/avatar.png"
              alt="九重紫"
              width={560}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_38%,transparent_52%,rgba(131,88,186,0.12)_100%)]" />
          </div>
        </div>

        <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.42em] text-deep/70">
          {profile.romaji}
        </p>
        <h1 className="mt-1 font-display text-[34px] font-semibold leading-tight text-deep">
          {profile.name}
        </h1>
        <p className="mt-1 text-[12px] tracking-[0.2em] text-faint">
          {profile.kana}
        </p>

        <div className="mx-auto mt-5 h-px w-16 bg-linear-to-r from-transparent via-lavender to-transparent" />

        <p className="mx-auto mt-5 max-w-[350px] whitespace-pre-line px-2 text-[13px] leading-7 text-sub [text-shadow:0_1px_2px_rgba(255,255,255,0.85),0_0_14px_rgba(255,255,255,0.7)]">
          {profile.bio[lang]}
        </p>
      </header>

      <nav aria-label="リンク" className="mt-7">
        <ul className="space-y-3.5">
          {links.map((item, i) => (
            <LinkButton key={item.id} item={item} lang={lang} index={i} />
          ))}
        </ul>
      </nav>

      <footer className="mt-10 text-center">
        <p className="font-display text-[15px] text-deep/90">
          {footer.thanks[lang]}
        </p>
        <p className="mt-6 text-[11px] tracking-wider text-faint/80">
          {footer.copyright}
        </p>
      </footer>
    </main>
  );
}
