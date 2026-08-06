import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-jp",
  display: "swap",
});

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-jp",
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
    <html lang="ja">
      <body className={`${serif.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
