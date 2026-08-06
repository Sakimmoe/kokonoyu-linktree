export type Lang = "ja" | "zh";

export type IconName =
  | "bilibili"
  | "youtube"
  | "x"
  | "fanbox"
  | "fantia"
  | "booth"
  | "bolt"
  | "mail";

export type LinkItem = {
  id: string;
  href: string;
  icon: IconName;
  label: Record<Lang, string>;
};

export const profile = {
  name: "九重紫",
  romaji: "Kokonoyu",
  kana: "ここのゆ",
  bio: {
    ja: "平和族のアニメガール巫女、九重紫です。\n叶えられなかった夢や、忘れられた夢を、夢の持ち主の代わりに追体験して供養しています。\n私の夢は、大きくなって光り輝くこと。",
    zh: "我是自称和平族的动漫小巫女，九重紫。\n我会代替梦的主人，去体验那些未能实现、或已被遗忘的梦，以此供养它们。\n我的梦想，是成为照亮大家的光。",
  },
};

export const links: LinkItem[] = [
  {
    id: "bilibili",
    href: "https://space.bilibili.com/225347042",
    icon: "bilibili",
    label: { ja: "bilibili", zh: "哔哩哔哩" },
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/@KokonoeYukari",
    icon: "youtube",
    label: { ja: "YouTube", zh: "YouTube" },
  },
  {
    id: "x",
    href: "https://twitter.com/Kokonoe_Yukari",
    icon: "x",
    label: { ja: "X (Twitter)", zh: "X（Twitter）" },
  },
  {
    id: "fanbox",
    href: "https://kokonoe-yukari.fanbox.cc",
    icon: "fanbox",
    label: { ja: "FANBOX", zh: "FANBOX" },
  },
  {
    id: "fantia",
    href: "https://fantia.jp/fanclubs/246651",
    icon: "fantia",
    label: { ja: "Fantia", zh: "Fantia" },
  },
  {
    id: "booth",
    href: "https://kokonoeyukari.booth.pm",
    icon: "booth",
    label: { ja: "BOOTH", zh: "BOOTH" },
  },
  {
    id: "afdian",
    href: "https://afdian.com/a/kokonoeyukari",
    icon: "bolt",
    label: { ja: "爱发电", zh: "爱发电" },
  },
  {
    id: "mail",
    href: "mailto:9cz.work@gmail.com",
    icon: "mail",
    label: { ja: "メール", zh: "邮箱" },
  },
];

export const footer = {
  thanks: {
    ja: "いつも応援してくれてありがとう。",
    zh: "感谢你一直以来的支持。",
  },
  copyright: "© 2026 Made in 九重紫",
};
