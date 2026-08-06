export type PageSection = {
  heading?: string;
  note?: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: string[];
  images?: string[];
  imageCols?: 1 | 2;
  mailto?: string;
};

export type SubPageData = {
  title: string;
  sections: PageSection[];
};

export const commissionPage: SubPageData = {
  title: "Live2D 建模委托",
  sections: [
    {
      paragraphs: [
        "日程安排：OK～（制作开始时期要商量）",
        "如有疑问，请随时联系我。",
        "空档情况：-",
        "个人委托：接受",
        "最終更新：2025.07.13",
      ],
    },
    {
      heading: "基本套餐",
      images: [
        "/pages/commission/8246703e74c8058ff2b48ee0f4960836.png",
        "/pages/commission/7cc63e940e23d1d83f0f725fe0f6c538.png",
      ],
      imageCols: 1,
      note: "※价格和交期会根据插画的细节程度、可动范围以及差分的数量等因素发生变化。※￥＝JPY",
    },
    {
      heading: "制作流程",
      ordered: [
        "听取需求",
        "确认Live2D用插画（已分好部件的PSD文件）",
        "提供报价及档期",
        "支付全款",
        "开始制作",
        "交付数据",
        "检查有没有问题（提交数据后一周以内）※BUG无偿修",
        "支付追加修改的费用（如果有的话）",
        "最终数据交付，交易结束",
      ],
    },
    {
      heading: "需要数据",
      paragraphs: [
        "请准备已分好部件的PSD文件。",
        "在开始制作前，如果根据提出的要求，出现部件分离不充分的情况，会请求您进行修正补充。",
        "根据内容，也可以在支付额外费用的情况下让我进行处理。",
        "（请事先确保插画制作者或版权持有人已授予Live2D化的许可。）",
      ],
      list: [
        "色彩模式：RGB",
        "色彩配置文件：sRGB",
        "尺寸：高度约6000px（最多8000px）",
        "可使用的图层模式：通常、乘算、加算（发光）",
      ],
      note: "※对于已合并的部件，使用其他效果没有问题。",
    },
    {
      heading: "插图需要分图层吗",
      paragraphs: [
        "需要分图层，在制作前我会尽量进行充分确认需要分多少，但在开始后仍有可能需要额外的部件分离。",
        "如果是轻微的问题，我可以免费处理。",
        "如果需要较高技术要求，您可以请插画师处理，或者支付额外费用由我方进行部件分离。",
        "对于复杂的设计或使用了特殊纹理的情况，可能需要插画师进行处理。",
      ],
    },
    {
      heading: "关于对插图数据的修改和补充",
      paragraphs: [
        "在制作过程中，通常会出现无法避免的情况，需要额外的处理。",
        "请提前告知插画师，有可能需要他们进行额外的修改。",
        "对于一些小的涂色遗漏等轻微的修正，我会免费处理。",
        "但像后脑勺描绘不充分或复杂图案的遗漏，通常由插画师负责修正。",
        "如果需要由我方进行处理（有偿），我会尽力保持作品原有的风格，但由于我的插画技术或纹理等原因，可能无法完全还原。如果遇到这种情况，我会尝试通过遮掩（如果可能的话）或缩小可动范围来解决。这种情况下，恕不接受退款请求，敬请理解。",
      ],
    },
    {
      heading: "修正回数，范围",
      paragraphs: [
        "每次修正不限于一处，您可以在一次请求中修改多个地方。",
        "由于我方失误导致的修正不计入修正次数，但如果交付超过1个月，修正将被视为新的委托，并收取修正费用。",
        "免费处理：数据错误、部件溢出、部件消失等问题。",
      ],
    },
    {
      heading: "想了解交付数据的格式和推荐软件",
      list: [
        "[支持的追踪软件] VtubeStudio（推荐使用iPhone X及以后的IOS摄像头）",
        "[交付数据] moc3",
      ],
      note: "※原则上不提供数据。对于企业客户，可能会作出相应的安排，但基本上不提供。",
    },
    {
      heading: "想了解交付数据的使用范围和禁止事项",
      paragraphs: [
        "允许商用使用。",
        "可以自由用于盈利频道或商品化等用途。",
        "但请务必严格遵守以下事项：",
      ],
      list: [
        "声称为自制作品",
        "二次分发、二次销售、转让、滥用",
        "特定思想（如政治、宗教等）的宣传活动",
        "用于反社会活动",
        "进行诽谤中伤或歧视性言论",
        "其他恶意言论或活动",
      ],
      note: "如果使用我方建模的模型进行上述活动，将停止模型的使用权限。",
    },
    {
      heading: "支付方式",
      paragraphs: [
        "价格表中的金额均为含税价格。金额会根据部件数量和复杂度等因素有较大变动。",
        "支付时机仅接受在作业开始前一次性支付。",
        "如果后续产生额外费用，需在交付前支付。",
        "详情请随时咨询。",
      ],
      list: ["（日本）正在商议中", "（中国）支付宝"],
    },
    {
      heading: "制作时间大概会是多长？",
      paragraphs: [
        "具体的交期会根据您的需求、插画的外观发生较大的变化。",
        "此外，如果无法顺利取得联系或工作量增加，可能会导致超过预计交期。",
      ],
      list: [
        "简单套餐…1周内",
        "梅套餐…2周内",
        "竹套餐…1个月内",
        "松套餐…2个月内",
        "Live2D动画…约10天",
      ],
      note: "（参考）无额外选项时的交期：",
    },
    {
      heading: "模型会公开展示吗？",
      paragraphs: [
        "我可能会使用制作的模型用于制作作品集或在YouTube等平台上进行成果展示报告。",
      ],
    },
    {
      heading: "想要取消",
      paragraphs: [
        "如需取消委托，请尽早与我们联系。",
        "一旦开始制作，任何情况下均不接受取消请求。",
      ],
      list: [
        "自动取消（付费前）：如果联系后超过5天无法取得联系，自动取消。根据订单人的言行和活动内容，我方判断无法继续合作的情况下，我方将终止合作。",
        "自动结束交易（开始工作后）：如果持续无法取得联系，我方可能会采取以下措施，敬请理解。（3天起）将暂时中止工作并取消交期。一旦取得联系，将调整时间表并重新开始工作。（1个月起）在交付现有的moc数据后，结束交易。在这种情况下，不提供退货、退款或com数据的转让。",
      ],
    },
    {
      heading: "拒绝委托",
      paragraphs: [
        "在某些情况下，我可能会根据插画的内容选择拒绝委托。对于使用AI创作的插画，我不予建模。",
        "同时，我可能会参考您平时的言论和活动历史，决定是否拒绝委托。",
      ],
    },
  ],
};

export const worksPage: SubPageData = {
  title: "実績 / 工作展示",
  sections: [
    {
      heading: "主な実績",
      list: [
        "商品紹介",
        "ゲーム声優",
        "楽曲ボーカル",
        "日中翻訳校正（切り抜き動画、ゲームシナリオ等）",
        "Live2Dモデリング",
        "一枚絵から簡単なアニメーションを作成",
      ],
    },
    {
      heading: "Live2D",
      paragraphs: ["※サンプル動画準備中", "※仮で配信アーカイブなどの動画を入れています。（音あり）"],
    },
    {
      heading: "経歴 2020",
      list: ["Vtuber様立ち絵担当（2名）"],
    },
    {
      heading: "経歴 2021",
      list: ["bilibili公式イベントラッキースター企画参加"],
    },
    {
      heading: "経歴 2022",
      list: [
        "Vtuber様立ち絵担当（1名）",
        "bilibili公式ライブイベント“冰火夏日夜”出演",
        "bilibili公式ライブイベント“冰火年度盛典”出演",
        "bilibiliオリジナルテーマ（アプリスキン）販売",
        "bilibili公式プレゼント交換企画“圣诞树下你和我”参加",
        "コラボ商品販売　えにかいたもち 様",
        "ゲーム“The Lord of the Parties”キャラクター出演",
      ],
    },
    {
      heading: "経歴 2023",
      list: [
        "bilibili35万Ch登録達成",
        "bilibili公式ライブイベント“冰火春日宴”出演",
        "BILIBILIWORLD出演",
        "バーチャル物産展『#37 特別編　VTuberお盆祭り』出演",
        "副音声プラットフォーム“notbotti”音声販売（案件）",
        "副音声プラットフォーム“notbotti”音声販売、アンケート企画",
        "100時間カレーさまPR、コラボ",
      ],
    },
    {
      heading: "経歴 2024",
      list: [
        "biilibili45万Ch登録達成",
        "biilibili50万Ch登録達成",
        "bilibiliガチャコレクション参加",
        "bilibili公式ライブイベント“2023年度盛典冰火歌会”",
        "心和様コラボ商品販売",
        "中国版トレバ『抓乐霸』コラボ（宣伝×限定缶バッジイベント）",
        "バーチャル物産展大論争『肉VSスイーツ！食べたいのはどっち！？バーチャル物産展大論争！』参加",
        "大型サブカルチャーイベント“IDO动漫游戏嘉年华45th”、“IDO动漫游戏嘉年华 成都站4th”参加",
        "X.D. Network様　音ゲーム『Rotaeno - ロテーノ』宣伝、切り抜き動画作成　※超美麗3D注意",
        "心和様コラボ商品販売（ボイスアクリルフィギュア、お菓子セット）",
        "JROCKSTUDIO（玖石社）様　ギャルゲーム『月白星斗-Lunar Glow Stellar Dance』宣伝",
        "ゲーム『存在/しないあなた、と私』メインヒロイン役CV",
        "ゲーム『存在/しないあなた、と私』メインヒロインセリフ日本語化（翻訳）、その他シナリオ日本語監修",
      ],
    },
    {
      heading: "経歴 2025",
      list: [
        "AnimeJapan2025ステージ参加",
        "BilibiliWorld出演：hololive特別ステージ",
        "BilibiliWorld出演：台車で会場巡り",
        "大型オフラインコミケイベント“广州萤火虫动漫游戏嘉年华”参加",
      ],
    },
    {
      heading: "その他",
      paragraphs: ["宣伝動画提供、誕生日・周年記念のお祝い動画、イベント参加など"],
    },
    {
      heading: "実績ギャラリー",
      images: [
        "/pages/works/da043625828c8f7dc236d5f2461927ac.png",
        "/pages/works/bc68ab7c626d9edfe9b23ff99c748030.png",
        "/pages/works/cfe8f7f1a3bdf70525fba7d9524cab0e.jpg",
        "/pages/works/bc3b70b22c414632f8ad5c2520ba4eef.png",
        "/pages/works/fbd766ae662587ee099a8ce43281c42f.png",
        "/pages/works/6ce12d8074b316afccfcdefe50600b1f.png",
        "/pages/works/750f3161b00be53e9dd6b714d17b9e82.png",
        "/pages/works/72acc1fe047e2ff3ef951232a506cf94.png",
        "/pages/works/c40cf25cff897197956a765410a817f3.png",
        "/pages/works/878ef212f038af6d302b67cf3deaf045.png",
        "/pages/works/4ece61d5ba39035a21bf6d5dca47a810.png",
        "/pages/works/083628181a9efe0b7ff9b859a3a79846.png",
      ],
    },
  ],
};

export const contactPage: SubPageData = {
  title: "CONTACT",
  sections: [
    {
      paragraphs: [
        "工作、合作邀请以及其他咨询请通过以下方式联系我。",
        "如果超过5天未收到回复，可能是信息未能成功送达，烦请您再次联系确认。",
      ],
    },
    {
      heading: "联系方式",
      paragraphs: ["9cz.work✦gmail.com（✦⇒@）"],
      mailto: "9cz.work@gmail.com",
    },
  ],
};

export const designPage: SubPageData = {
  title: "Character design",
  sections: [
    {
      paragraphs: ["Character design"],
    },
    {
      heading: "作品",
      images: [
        "/pages/design/b51a9d351d1cf17b5cf6e81c9f5c2a2b.png",
        "/pages/design/c5ac96823f3ad410463467626231535e.png",
        "/pages/design/afc591603777404bd4c1128a33270532.png",
        "/pages/design/c249d5c0f432b52a03f349efaf28958d.png",
        "/pages/design/a0e7a4388d82e36f60e8db30c89c34d8.png",
        "/pages/design/7f825dfa894ce695da5c1a52c65de830.jpg",
        "/pages/design/37d648addfe7ed42027e325cdaccbf13.jpg",
        "/pages/design/a8e72911811ec617c268b0c7547f9fc2.png",
      ],
    },
  ],
};
