const root = document.documentElement;
const toast = document.querySelector(".toast");
const hasTranslation = (dictionary, key) => Object.prototype.hasOwnProperty.call(dictionary, key);
const i18n = {
  zh: {
    htmlLang: "zh-CN",
    title: "殷雲清 | 个人简历",
    description: "殷雲清的个人简历网站：展示作编曲、音响设计、平面设计、插画与项目作品。",
    brandName: "殷雲清",
    navExperience: "经历",
    navProjects: "项目",
    navWorks: "作品",
    navSkills: "技能",
    navContact: "联系",
    profileEyebrow: "个人简历 / Portfolio",
    profileName: "殷雲清",
    aliasIntro: "你可以称呼我",
    primaryAliases: "殷雲清 / JAN WANCING / ヤン・ワンチン",
    commonAliases: "通俗名：张云恺 / Klaus Zhang / ZHANG YUNKAI / チョウ・ウンカイ",
    role: "作编曲 / 音响设计 / 平面设计 / 插画",
    summary: "关注声音、视觉与互动体验之间的叙事关系，持续创作音乐、声音设计、平面设计与插画项目。",
    newMedia: "New Media & Game Design @ KR DCU",
    soundDesign: "Sound Design @ Senzoku Gakuen",
    portraitCaption: "个人标识 / YINYUNQING",
    localTimeTitle: "我所在的时间",
    localTimeZone: "北京时间 / UTC+8",
    metricProjectsValue: "6",
    metricProjectsLabel: "个项目",
    metricLanguagesValue: "CN / JP / EN",
    metricLanguagesLabel: "工作语言",
    metricFieldsValue: "2",
    metricFieldsLabel: "个专业方向",
    skillsEyebrow: "Skills",
    skillsTitle: "技能与教育",
    coreSkillsTitle: "核心技能",
    skillTagsAria: "技能标签",
    skillProjectManagement: "项目管理",
    skillJapaneseCommunication: "日语沟通",
    skillCrossTeam: "跨团队协作",
    skillIllustration: "插画设计",
    skillGraphicDesign: "平面设计",
    skillComposition: "作曲编曲",
    educationTitle: "教育背景",
    educationSenzokuPeriod: "2026 - 至今",
    educationSenzoku: "洗足学园音乐大学 · 作曲 - 音响设计 · 硕士",
    educationDcUPeriod: "2024 - 2025",
    educationDcU: "大邱加图立大学 · 新媒体与游戏设计 · 学士",
    educationGdfaPeriod: "2017 - 2022",
    educationGdfa: "广东省外语艺术职业学院 · 音乐教育 · 专科",
    contactEyebrow: "Contact",
    contactTitle: "联系我很简单",
    contactIntro: "请通过邮箱",
    contactOutro: "与我联系吧！",
    contactButton: "发送邮件",
    projectExperienceEyebrow: "Projects",
    projectExperienceTitle: "项目经历",
    expCmccAnnualTitle: "中国移动广东公司年会 - 誓师大会",
    expCmccAnnualRole: "音响调度",
    expCmccMvTitle: "中国移动广东公司中国共产党 100 周年党庆 MV",
    expCmccMvRole: "音乐担当",
    expHospitalTitle: "广东省人民医院 5G 医疗宣传片",
    expHospitalRole: "场景布置 / 音乐顾问",
    expAntiDrugTitle: "广州市公用事业技师学院 - 广州市禁毒主题文艺作品创作",
    expAntiDrugRole: "作编曲",
    expGacTitle: "广汽传祺 E9 发布会",
    expGacRole: "音乐顾问",
    expDonguriTitle: "游戏《ドングリ》",
    expDonguriRole: "配乐",
    featuredProjectsEyebrow: "Projects",
    featuredProjectsTitle: "重点项目",
    studioTag: "Independent Game Studio",
    studioTitle: "独立游戏工作室",
    studioDescription: "与三名合伙人一起创建独立游戏工作室，作为音乐和插画担当。目前正在进行视觉小说游戏、卡牌游戏、类恶魔城游戏开发。",
    visualNovelTitle: "视觉小说游戏",
    visualNovelDescription: "参与项目概念推进、视觉方向讨论与音乐氛围设计。",
    cardGameTitle: "卡牌游戏",
    cardGameDescription: "负责角色插画、视觉素材与声音气质的协同设计。",
    metroidvaniaTitle: "类恶魔城游戏",
    metroidvaniaDescription: "进行游戏配乐、战斗段落音乐逻辑与动态音乐测试。",
    worksEyebrow: "Works",
    worksTitle: "作品展示",
    musicWorksTitle: "音乐作品",
    musicWorksIntro: "按时间从新到旧排列。",
    musicOpenLabel: "打开作品",
    musicBuildEmpireTitle: "Build My Empire",
    musicBuildEmpireMeta: "BanG Dream 同人曲",
    musicDangerousSugarTitle: "危险糖衣",
    musicDangerousSugarMeta: "为禁毒宣传所作",
    musicExistenceTitle: "Existence",
    musicExistenceMeta: "原创音乐作品",
    musicShanghaiAliceTitle: "明治十七年上海爱丽丝舞曲",
    musicShanghaiAliceMeta: "東方Project 同人曲",
    musicFloweringNightTitle: "Flowering night No.11 I.Walts",
    musicFloweringNightMeta: "東方Project 同人曲",
    musicInheritanceTitle: "继承之歌",
    musicInheritanceMeta: "动画《无职转生》第一季 OP2 弦乐改编",
    musicTravelerTitle: "旅人之歌",
    musicTravelerMeta: "动画《无职转生》第一季 OP1 弦乐改编",
    musicDonguriTitle: "游戏《ドングリ》",
    musicDonguriDescription: "为游戏世界观与关卡节奏进行配乐创作。",
    musicDonguriMeta: "配乐 / 2026",
    musicAdaptiveTitle: "自适应战斗音乐测试",
    musicAdaptiveDescription: "在 Unity 环境中测试战斗强度、状态切换与音乐层级变化。",
    musicAdaptiveMeta: "动态音乐",
    musicVisualNovelTitle: "视觉小说氛围音乐",
    musicVisualNovelDescription: "围绕角色关系、场景情绪与叙事节拍设计音乐氛围。",
    musicVisualNovelMeta: "氛围设计",
    illustrationWorksTitle: "插画作品",
    illustrationWorksIntro: "按时间从新到旧排列。",
    illustrationEmpty: "插画作品待补充",
    illustMonetSpringTitle: "「重构莫奈」春天",
    illustMonetSpringQuote: "BanG Dream 同人作品",
    illustMonetParasolTitle: "「重构莫奈」撑阳伞的女人",
    illustMonetParasolQuote: "BanG Dream 同人作品",
    illustWillowTitle: "枯杨生华，何可久也",
    illustWillowQuote: "知是行之始，行是知之成",
    illustCharacterTitle: "视觉小说角色设定",
    illustCharacterQuote: "“用服装、饰品和轮廓先建立角色的气质。”",
    illustActionTitle: "角色动态插画",
    illustActionQuote: "“让镜头靠近角色，把运动和光一起推向前。”",
    illustMarkTitle: "个人标识插画",
    illustMarkQuote: "“作为个人主页的视觉锚点，保留安静而明确的识别感。”",
    illustStoryboardTitle: "视觉小说分镜草图",
    illustStoryboardQuote: "“从镜头、姿态和场景关系开始寻找叙事节奏。”",
    copyEmail: "复制邮箱",
    printResume: "打印简历",
    toggleTheme: "切换深浅色",
    emailCopied: "邮箱已复制",
    emailCopyLimited: "复制受限，请手动复制：",
  },
  en: {
    htmlLang: "en",
    title: "Jan Wancing | Portfolio",
    description: "Jan Wancing's portfolio for composition, sound design, graphic design, illustration, and selected projects.",
    brandName: "Jan Wancing",
    navExperience: "Experience",
    navProjects: "Projects",
    navWorks: "Works",
    navSkills: "Skills",
    navContact: "Contact",
    profileEyebrow: "Portfolio / Resume",
    profileName: "JAN WANCING",
    aliasIntro: "You can call me",
    primaryAliases: "Yin Yunqing / JAN WANCING / Yan Wanchin",
    commonAliases: "Common name: Zhang Yunkai / Klaus Zhang / ZHANG YUNKAI",
    role: "Composition & Arrangement / Sound Design / Graphic Design / Illustration",
    summary: "I work across sound, visual identity, and interactive experience, creating music, sound design, graphic design, and illustration projects.",
    newMedia: "New Media & Game Design @ KR DCU",
    soundDesign: "Sound Design @ Senzoku Gakuen",
    portraitCaption: "Personal Mark / YINYUNQING",
    localTimeTitle: "My Time",
    localTimeZone: "Beijing Time / UTC+8",
    metricProjectsValue: "6",
    metricProjectsLabel: "Projects",
    metricLanguagesValue: "CN / JP / EN",
    metricLanguagesLabel: "Working languages",
    metricFieldsValue: "2",
    metricFieldsLabel: "Study fields",
    skillsEyebrow: "Skills",
    skillsTitle: "Skills & Education",
    coreSkillsTitle: "Core Skills",
    skillTagsAria: "Skill tags",
    skillProjectManagement: "Project Management",
    skillJapaneseCommunication: "Japanese Communication",
    skillCrossTeam: "Cross-Team Collaboration",
    skillIllustration: "Illustration Design",
    skillGraphicDesign: "Graphic Design",
    skillComposition: "Composition & Arrangement",
    educationTitle: "Education",
    educationSenzokuPeriod: "2026 - Present",
    educationSenzoku: "Senzoku Gakuen College of Music · Composition - Sound Design · Master's",
    educationDcUPeriod: "2024 - 2025",
    educationDcU: "Catholic University of Daegu · New Media & Game Design · Bachelor's",
    educationGdfaPeriod: "2017 - 2022",
    educationGdfa: "Guangdong Teachers College of Foreign Language and Arts · Music Education · Associate Degree",
    contactEyebrow: "Contact",
    contactTitle: "Getting in touch is simple",
    contactIntro: "Reach me by email at ",
    contactOutro: ".",
    contactButton: "Send Email",
    projectExperienceEyebrow: "Projects",
    projectExperienceTitle: "Project Experience",
    expCmccAnnualTitle: "China Mobile Guangdong Annual Meeting - Kickoff Rally",
    expCmccAnnualRole: "Sound operations",
    expCmccMvTitle: "China Mobile Guangdong MV for the 100th Anniversary of the CPC",
    expCmccMvRole: "Music lead",
    expHospitalTitle: "Guangdong Provincial People's Hospital 5G Medical Promotional Film",
    expHospitalRole: "Scene setup / Music consultant",
    expAntiDrugTitle: "Guangzhou Public Utilities Technician College - Anti-Drug Themed Arts Creation",
    expAntiDrugRole: "Composition and arrangement",
    expGacTitle: "GAC Trumpchi E9 Launch Event",
    expGacRole: "Music consultant",
    expDonguriTitle: "Game \"Donguri\"",
    expDonguriRole: "Music composition",
    featuredProjectsEyebrow: "Projects",
    featuredProjectsTitle: "Featured Projects",
    studioTag: "Independent Game Studio",
    studioTitle: "Independent Game Studio",
    studioDescription: "Co-founded an independent game studio with three partners, serving as the music and illustration lead. The team is currently developing a visual novel, a card game, and a Metroidvania-style game.",
    visualNovelTitle: "Visual Novel Game",
    visualNovelDescription: "Contributing to concept development, visual direction discussions, and music atmosphere design.",
    cardGameTitle: "Card Game",
    cardGameDescription: "Responsible for character illustration, visual assets, and the coordination of the sound identity.",
    metroidvaniaTitle: "Metroidvania-Style Game",
    metroidvaniaDescription: "Working on game scoring, battle music logic, and adaptive music tests.",
    worksEyebrow: "Works",
    worksTitle: "Works Showcase",
    musicWorksTitle: "Music Works",
    musicWorksIntro: "Sorted from newest to oldest.",
    musicOpenLabel: "Open work",
    musicBuildEmpireTitle: "Build My Empire",
    musicBuildEmpireMeta: "BanG Dream fan work",
    musicDangerousSugarTitle: "Dangerous Sugarcoat",
    musicDangerousSugarMeta: "Created for an anti-drug campaign",
    musicExistenceTitle: "Existence",
    musicExistenceMeta: "Original music work",
    musicShanghaiAliceTitle: "Meiji 17 Shanghai Alice Waltz",
    musicShanghaiAliceMeta: "Touhou Project fan work",
    musicFloweringNightTitle: "Flowering night No.11 I.Walts",
    musicFloweringNightMeta: "Touhou Project fan work",
    musicInheritanceTitle: "Song of Inheritance",
    musicInheritanceMeta: "Mushoku Tensei Season 1 OP2 string arrangement",
    musicTravelerTitle: "Song of the Traveler",
    musicTravelerMeta: "Mushoku Tensei Season 1 OP1 string arrangement",
    musicDonguriTitle: "Game \"Donguri\"",
    musicDonguriDescription: "Composing music for the game's worldbuilding and level pacing.",
    musicDonguriMeta: "Score / 2026",
    musicAdaptiveTitle: "Adaptive Battle Music Test",
    musicAdaptiveDescription: "Testing battle intensity, state transitions, and layered music changes in Unity.",
    musicAdaptiveMeta: "Adaptive music",
    musicVisualNovelTitle: "Visual Novel Atmosphere Music",
    musicVisualNovelDescription: "Designing musical atmosphere around character relationships, scene emotion, and narrative rhythm.",
    musicVisualNovelMeta: "Atmosphere design",
    illustrationWorksTitle: "Illustration Works",
    illustrationWorksIntro: "Sorted from newest to oldest.",
    illustrationEmpty: "Illustration works to be added",
    illustMonetSpringTitle: "\"Reconstructing Monet\" Spring",
    illustMonetSpringQuote: "BanG Dream fan work",
    illustMonetParasolTitle: "\"Reconstructing Monet\" Woman with a Parasol",
    illustMonetParasolQuote: "BanG Dream fan work",
    illustWillowTitle: "Withered Willow Blooms",
    illustWillowQuote: "Knowing is the beginning of action; action is the completion of knowing.",
    illustCharacterTitle: "Visual Novel Character Design",
    illustCharacterQuote: "\"Building a character's presence first through clothing, accessories, and silhouette.\"",
    illustActionTitle: "Character Action Illustration",
    illustActionQuote: "\"Bringing the camera close to the character and pushing motion forward with light.\"",
    illustMarkTitle: "Personal Mark Illustration",
    illustMarkQuote: "\"A quiet but clear visual anchor for the personal site.\"",
    illustStoryboardTitle: "Visual Novel Storyboard Sketch",
    illustStoryboardQuote: "\"Searching for narrative rhythm through camera, posture, and scene relationships.\"",
    copyEmail: "Copy email",
    printResume: "Print resume",
    toggleTheme: "Toggle theme",
    emailCopied: "Email copied",
    emailCopyLimited: "Copy blocked. Copy manually: ",
  },
  ja: {
    htmlLang: "ja",
    title: "ヤン ワンチン | ポートフォリオ",
    description: "ヤン ワンチンのポートフォリオ。作編曲、音響デザイン、グラフィックデザイン、イラスト、プロジェクトを掲載。",
    brandName: "ヤン ワンチン",
    navExperience: "経歴",
    navProjects: "プロジェクト",
    navWorks: "作品",
    navSkills: "スキル",
    navContact: "連絡",
    profileEyebrow: "ポートフォリオ / 履歴",
    profileName: "ヤン\nワンチン",
    aliasIntro: "呼び名",
    primaryAliases: "殷雲清 / JAN WANCING / ヤン ワンチン",
    commonAliases: "通称：张云恺 / Klaus Zhang / ZHANG YUNKAI / チョウ・ウンカイ",
    role: "作編曲 / 音響デザイン / グラフィックデザイン / イラスト",
    summary: "音、ビジュアル、インタラクティブな体験の関係性を軸に、音楽、音響デザイン、グラフィック、イラストを制作しています。",
    newMedia: "New Media & Game Design @ KR DCU",
    soundDesign: "Sound Design @ Senzoku Gakuen",
    portraitCaption: "個人標識 / YINYUNQING",
    localTimeTitle: "私の時間",
    localTimeZone: "北京時間 / UTC+8",
    metricProjectsValue: "6",
    metricProjectsLabel: "プロジェクト",
    metricLanguagesValue: "CN / JP / EN",
    metricLanguagesLabel: "対応言語",
    metricFieldsValue: "2",
    metricFieldsLabel: "専門分野",
    skillsEyebrow: "スキル",
    skillsTitle: "スキルと学歴",
    coreSkillsTitle: "主なスキル",
    skillTagsAria: "スキルタグ",
    skillProjectManagement: "プロジェクト管理",
    skillJapaneseCommunication: "日本語コミュニケーション",
    skillCrossTeam: "チーム横断連携",
    skillIllustration: "イラスト制作",
    skillGraphicDesign: "グラフィックデザイン",
    skillComposition: "作編曲",
    educationTitle: "学歴",
    educationSenzokuPeriod: "2026 - 現在",
    educationSenzoku: "洗足学園音楽大学 · 作曲 - 音響デザイン · 修士",
    educationDcUPeriod: "2024 - 2025",
    educationDcU: "大邱カトリック大学 · ニューメディア・ゲームデザイン · 学士",
    educationGdfaPeriod: "2017 - 2022",
    educationGdfa: "広東省外語芸術職業学院 · 音楽教育 · 専科",
    contactEyebrow: "連絡",
    contactTitle: "連絡は簡単です",
    contactIntro: "メールアドレス ",
    contactOutro: " までご連絡ください。",
    contactButton: "メールを送る",
    projectExperienceEyebrow: "プロジェクト",
    projectExperienceTitle: "プロジェクト経歴",
    expCmccAnnualTitle: "中国移動広東公司 年次総会・決起大会",
    expCmccAnnualRole: "音響オペレーション",
    expCmccMvTitle: "中国移動広東公司 中国共産党創立100周年記念MV",
    expCmccMvRole: "音楽担当",
    expHospitalTitle: "広東省人民医院 5G医療プロモーション映像",
    expHospitalRole: "シーン設営 / 音楽顧問",
    expAntiDrugTitle: "広州市公用事業技師学院 - 広州市禁毒テーマ文芸作品制作",
    expAntiDrugRole: "作編曲",
    expGacTitle: "広汽伝祺 E9 発表会",
    expGacRole: "音楽顧問",
    expDonguriTitle: "ゲーム『ドングリ』",
    expDonguriRole: "音楽制作",
    featuredProjectsEyebrow: "プロジェクト",
    featuredProjectsTitle: "注目プロジェクト",
    studioTag: "Independent Game Studio",
    studioTitle: "インディーゲームスタジオ",
    studioDescription: "3名のパートナーとインディーゲームスタジオを立ち上げ、音楽とイラストを担当しています。現在、ビジュアルノベルゲーム、カードゲーム、メトロイドヴァニア系ゲームを開発中です。",
    visualNovelTitle: "ビジュアルノベルゲーム",
    visualNovelDescription: "企画コンセプトの推進、ビジュアル方向の検討、音楽による雰囲気設計に参加しています。",
    cardGameTitle: "カードゲーム",
    cardGameDescription: "キャラクターイラスト、ビジュアル素材、サウンドイメージの連携設計を担当しています。",
    metroidvaniaTitle: "メトロイドヴァニア系ゲーム",
    metroidvaniaDescription: "ゲーム音楽、バトルパートの音楽ロジック、アダプティブミュージックのテストを行っています。",
    worksEyebrow: "作品",
    worksTitle: "作品展示",
    musicWorksTitle: "音楽作品",
    musicWorksIntro: "新しい作品から古い作品の順に掲載。",
    musicOpenLabel: "作品を開く",
    musicBuildEmpireTitle: "Build My Empire",
    musicBuildEmpireMeta: "BanG Dream 同人曲",
    musicDangerousSugarTitle: "危険な糖衣",
    musicDangerousSugarMeta: "禁毒広報のための楽曲",
    musicExistenceTitle: "Existence",
    musicExistenceMeta: "オリジナル音楽作品",
    musicShanghaiAliceTitle: "明治十七年の上海アリス舞曲",
    musicShanghaiAliceMeta: "東方Project 同人曲",
    musicFloweringNightTitle: "Flowering night No.11 I.Walts",
    musicFloweringNightMeta: "東方Project 同人曲",
    musicInheritanceTitle: "継承の歌",
    musicInheritanceMeta: "アニメ『無職転生』第1期 OP2 弦楽アレンジ",
    musicTravelerTitle: "旅人の歌",
    musicTravelerMeta: "アニメ『無職転生』第1期 OP1 弦楽アレンジ",
    musicDonguriTitle: "ゲーム『ドングリ』",
    musicDonguriDescription: "ゲームの世界観とステージ進行に合わせた音楽制作。",
    musicDonguriMeta: "音楽制作 / 2026",
    musicAdaptiveTitle: "アダプティブバトル音楽テスト",
    musicAdaptiveDescription: "Unity上でバトル強度、状態遷移、音楽レイヤーの変化をテストしています。",
    musicAdaptiveMeta: "動的音楽",
    musicVisualNovelTitle: "ビジュアルノベル雰囲気音楽",
    musicVisualNovelDescription: "キャラクター関係、場面の感情、物語のリズムに合わせて音楽の雰囲気を設計しています。",
    musicVisualNovelMeta: "雰囲気設計",
    illustrationWorksTitle: "イラスト作品",
    illustrationWorksIntro: "新しい作品から古い作品の順に掲載。",
    illustrationEmpty: "イラスト作品を追加予定",
    illustMonetSpringTitle: "「モネ再構成」春",
    illustMonetSpringQuote: "BanG Dream 同人作品",
    illustMonetParasolTitle: "「モネ再構成」日傘の女",
    illustMonetParasolQuote: "BanG Dream 同人作品",
    illustWillowTitle: "枯れた柳に花が咲く",
    illustWillowQuote: "知は行の始め、行は知の成るところ",
    illustCharacterTitle: "ビジュアルノベル キャラクター設定",
    illustCharacterQuote: "「衣装、アクセサリー、シルエットからキャラクターの雰囲気を立ち上げる。」",
    illustActionTitle: "キャラクターアクションイラスト",
    illustActionQuote: "「カメラをキャラクターに近づけ、動きと光を前へ押し出す。」",
    illustMarkTitle: "個人標識イラスト",
    illustMarkQuote: "「個人サイトの静かで明確なビジュアルアンカーとして。」",
    illustStoryboardTitle: "ビジュアルノベル絵コンテラフ",
    illustStoryboardQuote: "「カメラ、姿勢、場面関係から物語のリズムを探す。」",
    copyEmail: "メールをコピー",
    printResume: "印刷",
    toggleTheme: "テーマ切替",
    emailCopied: "メールをコピーしました",
    emailCopyLimited: "コピーできません。手動でコピーしてください：",
  },
};

const storedTheme = localStorage.getItem("resume-theme");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentLanguage = "zh";
let illustrationLayoutFrame = 0;
let localTimeTimer;

if (storedTheme) {
  root.dataset.theme = storedTheme;
}

function applyLanguage(language) {
  const dictionary = i18n[language] || i18n.zh;
  currentLanguage = i18n[language] ? language : "zh";
  root.lang = dictionary.htmlLang;
  document.title = dictionary.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (hasTranslation(dictionary, key)) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.dataset.i18nAria;
    if (hasTranslation(dictionary, key)) {
      node.setAttribute("aria-label", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("resume-language", currentLanguage);
  updateLocalTime();
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

async function copyEmail() {
  const emailNode = document.querySelector("[data-email]");
  const email = emailNode?.dataset.email || "contact@yinyq.net";

  try {
    await navigator.clipboard.writeText(email);
    showToast(i18n[currentLanguage].emailCopied);
  } catch {
    showToast(`${i18n[currentLanguage].emailCopyLimited}${email}`);
  }
}

function toggleTheme() {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("resume-theme", nextTheme);
}

function setupHomeMotion() {
  const projectsSection = document.querySelector("#projects");

  if (motionQuery.matches) {
    root.classList.add("is-ready");
    projectsSection?.classList.add("is-visible");
    return;
  }

  const showProjects = () => {
    projectsSection?.classList.add("is-visible");
    root.classList.add("projects-entered");
  };

  const updateHomeExit = () => {
    root.classList.toggle("home-exiting", window.scrollY > 32);
  };

  updateHomeExit();
  window.addEventListener("scroll", updateHomeExit, { passive: true });
  window.addEventListener("resize", updateHomeExit);

  if (projectsSection && "IntersectionObserver" in window) {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        showProjects();
        projectObserver.disconnect();
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.04,
      },
    );

    projectObserver.observe(projectsSection);
  } else {
    showProjects();
  }

  window.setTimeout(() => {
    window.requestAnimationFrame(() => {
      root.classList.add("is-ready");
      updateHomeExit();
    });
  }, 160);
}

function layoutIllustrationMasonry() {
  const grid = document.querySelector(".illustration-masonry");
  if (!grid) return;

  const cards = [...grid.querySelectorAll(".illustration-card")];
  const styles = window.getComputedStyle(grid);
  const rowHeight = Number.parseFloat(styles.gridAutoRows);
  const rowGap = Number.parseFloat(styles.rowGap);

  if (!rowHeight) return;

  cards.forEach((card) => {
    card.style.gridRowEnd = "";
  });

  cards.forEach((card) => {
    const cardHeight = card.getBoundingClientRect().height;
    const span = Math.max(1, Math.ceil((cardHeight + rowGap) / (rowHeight + rowGap)));
    card.style.gridRowEnd = `span ${span}`;
  });
}

function queueIllustrationLayout() {
  window.cancelAnimationFrame(illustrationLayoutFrame);
  illustrationLayoutFrame = window.requestAnimationFrame(layoutIllustrationMasonry);
}

function setupIllustrationMasonry() {
  const grid = document.querySelector(".illustration-masonry");
  if (!grid) return;

  grid.querySelectorAll("img").forEach((image) => {
    if (!image.complete) {
      image.addEventListener("load", queueIllustrationLayout, { once: true });
    }
  });

  window.addEventListener("resize", queueIllustrationLayout);
  queueIllustrationLayout();
}

function updateLocalTime() {
  const timeNode = document.querySelector("[data-beijing-time]");
  const dateNode = document.querySelector("[data-beijing-date]");
  if (!timeNode || !dateNode) return;

  const now = new Date();
  const localeMap = {
    zh: "zh-CN",
    en: "en-US",
    ja: "ja-JP",
  };
  const locale = localeMap[currentLanguage] || "zh-CN";
  const timeFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    hourCycle: "h23",
  });
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  timeNode.textContent = timeFormatter.format(now);
  timeNode.setAttribute("datetime", now.toISOString());
  dateNode.textContent = dateFormatter.format(now);
}

function setupLocalTime() {
  updateLocalTime();
  window.clearInterval(localTimeTimer);
  localTimeTimer = window.setInterval(updateLocalTime, 1000);
}

document.addEventListener("click", (event) => {
  const languageButton = event.target.closest("[data-lang]");
  if (languageButton) {
    applyLanguage(languageButton.dataset.lang);
    queueIllustrationLayout();
    return;
  }

  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;

  if (action === "copy-email") {
    copyEmail();
  }

  if (action === "print") {
    window.print();
  }

  if (action === "theme") {
    toggleTheme();
  }
});

applyLanguage(localStorage.getItem("resume-language") || "zh");
setupHomeMotion();
setupIllustrationMasonry();
setupLocalTime();
