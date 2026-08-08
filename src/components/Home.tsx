"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LangSwitch } from "@/src/components/LangSwitch";
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

  const bioLines = profile.bio[lang].split("\n").filter(Boolean);

  return (
    <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[560px] flex-col px-6 pb-16 pt-6">
      <div className="relative z-30 flex items-center justify-between">
        <MenuButton lang={lang} />

        <div className="h-[132px] w-[132px] rounded-[20px] border-2 border-deep/25 bg-white/60 p-1.5 shadow-[0_18px_44px_-18px_rgba(131,88,186,0.5)] backdrop-blur-md">
          <div className="relative h-full w-full overflow-hidden rounded-[13px]">
            <Image
              src="/avatar.png"
              alt="九重紫"
              width={560}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <LangSwitch lang={lang} onChange={switchLang} />
      </div>

      <header className="animate-fade-up mt-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-deep/70">
          {profile.romaji}
        </p>
        <h1 className="mt-1 font-display text-[34px] font-semibold leading-tight text-deep">
          {profile.name}
        </h1>
        <p className="mt-1 text-[12px] tracking-[0.2em] text-faint">
          {profile.kana}
        </p>

        <div className="mx-auto mt-5 h-px w-14 bg-deep/20" />

        <div className="mx-auto mt-5 max-w-[500px] rounded-[10px] border border-deep/15 bg-white/65 p-5 text-left shadow-[0_10px_28px_-18px_rgba(131,88,186,0.45)] backdrop-blur-md">
          <p className="font-display text-[13px] font-semibold tracking-wide text-deep">
            {lang === "zh" ? "自我介绍" : "自己紹介"}
          </p>
          <div className="mt-3 space-y-3">
            {bioLines.map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-[2px] bg-deep/50" />
                <p className="text-[13.5px] leading-6 text-sub">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <nav aria-label="リンク" className="mt-7">
        <ul className="space-y-3">
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
