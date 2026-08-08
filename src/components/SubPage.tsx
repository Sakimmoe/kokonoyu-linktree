"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { Background } from "@/src/components/Background";
import { LangSwitch } from "@/src/components/LangSwitch";
import { footer, type Lang } from "@/src/data/links";

export function SubPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("zh");

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
    <>
      <Background />
      <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[560px] flex-col px-6 pb-16 pt-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-[8px] border-[1.5px] border-deep/20 bg-white/75 px-3 py-1.5 text-[12px] font-semibold text-sub shadow-[0_4px_14px_-6px_rgba(131,88,186,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-[1px] hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
            {lang === "zh" ? "返回" : "戻る"}
          </Link>
          <LangSwitch lang={lang} onChange={switchLang} />
        </div>

        <h1 className="mt-8 font-display text-[26px] font-semibold leading-tight text-deep">
          {title}
        </h1>

        <div className="mt-5">{children}</div>

        <footer className="mt-12 text-center">
          <p className="font-display text-[14px] text-deep/90">
            {footer.thanks[lang]}
          </p>
          <p className="mt-5 text-[11px] tracking-wider text-faint/80">
            {footer.copyright}
          </p>
        </footer>
      </main>
    </>
  );
}
