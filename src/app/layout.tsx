import type { Metadata, Viewport } from "next";
import { Shippori_Mincho, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const display = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-jp",
  display: "swap",
});

const body = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "九重紫 Kokonoyu｜リンク",
  description:
    "九重紫（ここのゆ / Kokonoyu）のオフィシャルリンク集。YouTube・X・Fanbox など、いつも応援してくれてありがとう。",
  applicationName: "九重紫 Kokonoyu",
  authors: [{ name: "九重紫", url: "https://x.com/Kokonoe_Yukari" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "九重紫 Kokonoyu｜リンク",
    description:
      "平和族のアニメガール巫女、九重紫（ここのゆ）のリンク集です。",
    type: "website",
    locale: "ja_JP",
    siteName: "九重紫 Kokonoyu",
  },
  twitter: {
    card: "summary",
    title: "九重紫 Kokonoyu｜リンク",
    description: "平和族のアニメガール巫女、九重紫（ここのゆ）のリンク集です。",
    creator: "@Kokonoe_Yukari",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4edfb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
