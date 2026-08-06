"use client";

import { useState } from "react";
import { menu, type Lang } from "@/src/data/links";

export function MenuButton({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/60 text-deep shadow-[0_6px_18px_-8px_rgba(131,88,186,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-[1px] hover:bg-linear-to-br hover:from-primary hover:to-lavender hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="close menu"
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-11 z-20 w-52 overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-1.5 shadow-[0_18px_40px_-16px_rgba(131,88,186,0.45)] backdrop-blur-xl">
            {menu.items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-ink transition-colors duration-200 hover:bg-linear-to-r hover:from-primary hover:to-lavender hover:text-white"
              >
                {item.label[lang]}
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 opacity-60"
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
            ))}
          </div>
        </>
      )}
    </div>
  );
}
