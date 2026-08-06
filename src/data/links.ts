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
    ja: "叶えられなかった夢を追体験することで供養し、寿命をつないでいる亜人です。\n数年前までは人間でしたが、今は亜人として生きています。\n自称・最も平和を願う平和族。みんなが仲良く、一人ひとりが幸せに同じ世界で暮らせることを夢見て、そのために活動しています。",
    zh: "通过体验实现某人生前无法达成的梦想来超度他们，以延续自己寿命的亚人。\n在几年前还是人类，但现在以亚人的姿态存在。\n自称最清楚的平和族，梦想大家能和平相处，每一个人都幸福地在同一个世界生活。为了这个目标而努力进行活动。",
  },
};

export const menu = {
  items: [
    {
      id: "commission-zh",
      href: "https://kokonoeyukari.my.canva.site/hp-cn/page-4",
      label: { ja: "依頼", zh: "委托" },
    },
    {
      id: "commission",
      href: "https://kokonoeyukari.my.canva.site/hp-cn/commission",
      label: { ja: "Commission", zh: "Commission" },
    },
    {
      id: "contact",
      href: "https://kokonoeyukari.my.canva.site/hp-cn/contact",
      label: { ja: "Contact", zh: "Contact" },
    },
    {
      id: "design",
      href: "https://kokonoeyukari.my.canva.site/hp-cn/design",
      label: { ja: "Design", zh: "Design" },
    },
  ],
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
