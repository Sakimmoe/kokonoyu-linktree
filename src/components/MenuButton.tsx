"use client";

import { useState } from "react";
import Link from "next/link";
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
        className="flex h-9 w-9 items-center justify-center rounded-[8px] border-[1.5px] border-deep/20 bg-white/75 text-deep shadow-[0_4px_14px_-6px_rgba(131,88,186,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-[1px] hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
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
          <div className="absolute left-0 top-11 z-20 w-52 overflow-hidden rounded-[8px] border border-deep/20 bg-white/90 p-1.5 shadow-[0_16px_36px_-16px_rgba(131,88,186,0.5)] backdrop-blur-xl">
            {menu.items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-[6px] px-3.5 py-2.5 text-[13px] font-semibold text-ink transition-colors duration-150 hover:bg-primary hover:text-white"
              >
                {item.label[lang]}
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
