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

  return (
    <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[430px] flex-col px-7 pb-16 pt-5">
      <div className="relative z-30 flex items-center justify-between">
        <MenuButton lang={lang} />
        <LangSwitch lang={lang} onChange={switchLang} />
      </div>

      <header className="animate-fade-up mt-6 text-center">
        <div className="mx-auto h-[148px] w-[148px] rounded-[22px] border-2 border-deep/25 bg-white/60 p-1.5 shadow-[0_18px_44px_-18px_rgba(131,88,186,0.5)] backdrop-blur-md">
          <div className="relative h-full w-full overflow-hidden rounded-[15px]">
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

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.42em] text-deep/70">
          {profile.romaji}
        </p>
        <h1 className="mt-1 font-display text-[34px] font-semibold leading-tight text-deep">
          {profile.name}
        </h1>
        <p className="mt-1 text-[12px] tracking-[0.2em] text-faint">
          {profile.kana}
        </p>

        <div className="mx-auto mt-5 h-px w-14 bg-deep/20" />

        <p className="mx-auto mt-5 max-w-[350px] whitespace-pre-line px-2 text-[13px] leading-7 text-sub [text-shadow:0_1px_2px_rgba(255,255,255,0.85),0_0_14px_rgba(255,255,255,0.7)]">
          {profile.bio[lang]}
        </p>
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
