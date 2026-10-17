const root = document.documentElement;
const toast = document.querySelector(".toast");
const toolboxButton = document.querySelector('[data-action="toggle-toolbox"]');
const toolboxPanel = document.querySelector("#toolbox-panel");
const audioButton = document.querySelector('[data-action="toggle-bgm"]');
const bgmAudio = document.querySelector("#site-bgm");
const bgmGuide = document.querySelector(".bgm-guide");
const bgmPageGuide = document.querySelector(".bgm-page-guide");
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
    newMedia: "New Media & Game Design (B.Des.) @ KR DCU",
    soundDesign: "Sound Design (Master’s Student) @ Senzoku Gakuen",
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
    skillGroupCreate: "创作",
    skillGroupCollab: "协作",
    toolsTitle: "软件与工具",
    toolGroupSound: "声音",
    toolGroupDev: "开发 · 3D",
    toolGroupVisual: "视觉",
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
    expDetailLabel: "详情",
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
    cardGameGallery: "卡牌游戏图片",
    carouselPrev: "上一张",
    carouselNext: "下一张",
    galleryLabel: "插画作品",
    galleryPrev: "上一页",
    galleryNext: "下一页",
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
    audioPlaceholder: "背景音乐开关",
    bgmStart: "点击打开背景音乐",
    bgmPlaying: "背景音乐正在播放，点击静音",
    bgmMuted: "背景音乐已静音，点击恢复声音",
    bgmGuideText: "这里可以打开音乐，简单地靠我的简历页面体验一下交互式音乐！",
    bgmHint: "打开背景音乐",
    bgmPageGuideText: "请自由翻页以体验音乐变化吧",
    openToolbox: "打开链接工具箱",
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
    newMedia: "New Media & Game Design (B.Des.) @ KR DCU",
    soundDesign: "Sound Design (Master’s Student) @ Senzoku Gakuen",
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
    skillGroupCreate: "Create",
    skillGroupCollab: "Collaborate",
    toolsTitle: "Software & Tools",
    toolGroupSound: "Sound",
    toolGroupDev: "Dev · 3D",
    toolGroupVisual: "Visual",
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
    expDetailLabel: "Details",
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
    cardGameGallery: "Card game images",
    carouselPrev: "Previous image",
    carouselNext: "Next image",
    galleryLabel: "Illustration works",
    galleryPrev: "Previous page",
    galleryNext: "Next page",
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
    audioPlaceholder: "Background music switch",
    bgmStart: "Click to start the background music.",
    bgmPlaying: "Background music is playing. Click to mute.",
    bgmMuted: "Background music is muted. Click to turn sound back on.",
    bgmGuideText: "Turn on the music here and try a simple interactive music moment inside my resume page.",
    bgmHint: "Turn on music",
    bgmPageGuideText: "Turn the pages freely to experience the music changes.",
    openToolbox: "Open link toolbox",
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
    newMedia: "New Media & Game Design (B.Des.) @ KR DCU",
    soundDesign: "Sound Design (Master’s Student) @ Senzoku Gakuen",
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
    skillGroupCreate: "制作",
    skillGroupCollab: "連携",
    toolsTitle: "ソフトウェア",
    toolGroupSound: "サウンド",
    toolGroupDev: "開発・3D",
    toolGroupVisual: "ビジュアル",
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
    expDetailLabel: "詳細",
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
    cardGameGallery: "カードゲームの画像",
    carouselPrev: "前の画像",
    carouselNext: "次の画像",
    galleryLabel: "イラスト作品",
    galleryPrev: "前のページ",
    galleryNext: "次のページ",
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
    audioPlaceholder: "BGM切替",
    bgmStart: "クリックしてBGMを再生",
    bgmPlaying: "BGM再生中。クリックでミュートします。",
    bgmMuted: "BGMはミュート中。クリックで音を戻します。",
    bgmGuideText: "ここから音楽を再生できます。履歴書ページの中で、簡単なインタラクティブ音楽を体験してみてください！",
    bgmHint: "BGMをオン",
    bgmPageGuideText: "自由にページをめくって、音楽の変化を体験してみてください。",
    openToolbox: "リンクツールボックスを開く",
    toggleTheme: "テーマ切替",
    emailCopied: "メールをコピーしました",
    emailCopyLimited: "コピーできません。手動でコピーしてください：",
  },
};

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be blocked (private mode, site data disabled); preferences then last for this visit only.
  }
}

const storedTheme = readStorage("resume-theme");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentLanguage = "zh";
let illustrationLayoutFrame = 0;
let bgmGuideLayoutFrame = 0;
let localTimeTimer;
let toolboxCloseTimer;
let bgmStarted = false;
let bgmUserMuted = false;
let bgmGuideBounceTimer;
let bgmGuideBounceResetTimer;
let bgmGuideDismissTimer;
let bgmPageGuideShown = false;
let bgmPageGuideDismissed = false;
let bgmPageGuideDismissTimer;

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

  writeStorage("resume-language", currentLanguage);
  updateLocalTime();
  updateAudioButtonState();
  queueBgmGuideLayout();
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
  writeStorage("resume-theme", nextTheme);
}

function closeToolbox() {
  if (!toolboxPanel || !toolboxButton) return;

  window.clearTimeout(toolboxCloseTimer);
  toolboxPanel.classList.remove("is-open");
  toolboxButton.setAttribute("aria-expanded", "false");
  toolboxCloseTimer = window.setTimeout(() => {
    if (!toolboxPanel.classList.contains("is-open")) {
      toolboxPanel.hidden = true;
    }
  }, 240);
}

function toggleToolbox() {
  if (!toolboxPanel || !toolboxButton) return;

  const shouldOpen = toolboxPanel.hidden;
  window.clearTimeout(toolboxCloseTimer);
  if (shouldOpen) {
    toolboxPanel.hidden = false;
    window.requestAnimationFrame(() => {
      toolboxPanel.classList.add("is-open");
    });
  } else {
    closeToolbox();
  }
  toolboxButton.setAttribute("aria-expanded", String(shouldOpen));
}

function updateAudioButtonState() {
  if (!audioButton || !bgmAudio) return;

  const dictionary = i18n[currentLanguage] || i18n.zh;
  const isMuted = bgmStarted && bgmAudio.muted;
  const label = !bgmStarted ? dictionary.bgmStart : isMuted ? dictionary.bgmMuted : dictionary.bgmPlaying;
  audioButton.classList.toggle("is-collapsed", !bgmStarted || isMuted);
  audioButton.classList.toggle("is-muted", isMuted);
  audioButton.classList.toggle("is-idle", !bgmStarted);
  audioButton.setAttribute("aria-pressed", String(bgmStarted && !isMuted));
  audioButton.setAttribute("aria-label", label);
  audioButton.title = label;
  root.classList.toggle("bgm-live", bgmStarted && !bgmAudio.muted && !bgmAudio.paused);
  queueBgmGuideLayout();
}

async function startBgm() {
  if (!bgmAudio) return false;

  bgmAudio.volume = 0.42;
  bgmAudio.muted = bgmUserMuted;
  updateAudioButtonState();

  try {
    await bgmAudio.play();
    bgmStarted = true;
    showBgmPageGuide();
    updateAudioButtonState();
    return true;
  } catch {
    updateAudioButtonState();
    return false;
  }
}

function showBgmPageGuide() {
  if (!bgmPageGuide || bgmPageGuideShown || bgmPageGuideDismissed) return;

  window.clearTimeout(bgmPageGuideDismissTimer);
  bgmPageGuide.hidden = false;
  bgmPageGuide.classList.remove("is-dismissing");
  bgmPageGuideShown = true;

  window.requestAnimationFrame(() => {
    bgmPageGuide.classList.add("is-visible");
  });
}

function dismissBgmPageGuide() {
  if (!bgmPageGuide || bgmPageGuide.hidden || bgmPageGuide.classList.contains("is-dismissing")) return;

  window.clearTimeout(bgmPageGuideDismissTimer);
  bgmPageGuideDismissed = true;
  bgmPageGuide.classList.add("is-dismissing");
  bgmPageGuide.classList.remove("is-visible");

  bgmPageGuideDismissTimer = window.setTimeout(() => {
    bgmPageGuide.hidden = true;
  }, 720);
}

function toggleBgmMute() {
  if (!audioButton || !bgmAudio) return;

  if (!bgmStarted) {
    bgmUserMuted = false;
    bgmAudio.muted = false;
    startBgm();
    return;
  }

  bgmUserMuted = !bgmUserMuted;
  bgmAudio.muted = bgmUserMuted;
  updateAudioButtonState();

  if (bgmAudio.paused) {
    startBgm();
  }
}

function setupBgm() {
  if (!bgmAudio) return;

  bgmAudio.volume = 0.42;
  bgmAudio.muted = false;
  updateAudioButtonState();
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getBgmGuideCharacterSize(viewportWidth, viewportHeight) {
  const isCompactFrame = viewportWidth < 1020 || viewportHeight < 760;
  const preferred = isCompactFrame
    ? Math.min(viewportWidth * 0.095, viewportHeight * 0.18)
    : Math.min(viewportWidth * 0.115, viewportHeight * 0.2);
  const min = viewportWidth < 380 ? 70 : viewportWidth < 620 ? 76 : isCompactFrame ? 82 : 126;
  const max = viewportWidth < 620 ? 96 : isCompactFrame ? (viewportWidth < 1020 ? 104 : 130) : 166;
  return clampNumber(preferred, min, max);
}

function updateBgmGuideLayout() {
  if (!bgmGuide || !audioButton) return;

  const buttonRect = audioButton.getBoundingClientRect();
  if (!buttonRect.width || !buttonRect.height) return;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const margin = viewportWidth < 520 ? 8 : 12;
  const characterAspect = 1238 / 1011;
  const pointerTip = {
    x: 0.956,
    y: 0.148,
  };
  const pointerGap = viewportWidth < 520 ? 30 : 42;
  const targetX = buttonRect.left + buttonRect.width * 0.22;
  const targetY = buttonRect.bottom + pointerGap;
  const maxByLeft = (targetX - margin) / pointerTip.x;
  const maxByRight = (viewportWidth - margin - targetX) / Math.max(0.01, 1 - pointerTip.x);
  const maxByBottom = (viewportHeight - margin - targetY) / (characterAspect * (1 - pointerTip.y));
  const maxSize = Math.max(56, Math.min(maxByLeft, maxByRight, maxByBottom));
  const characterSize = Math.min(getBgmGuideCharacterSize(viewportWidth, viewportHeight), maxSize);
  const characterLeft = targetX - characterSize * pointerTip.x;
  const characterTop = targetY - characterSize * characterAspect * pointerTip.y;
  const characterHeight = characterSize * characterAspect;

  bgmGuide.style.setProperty("--bgm-guide-left", `${Math.round(characterLeft)}px`);
  bgmGuide.style.setProperty("--bgm-guide-top", `${Math.round(characterTop)}px`);
  bgmGuide.style.setProperty("--bgm-guide-character-size", `${Math.round(characterSize)}px`);
  root.style.setProperty("--bgm-guide-left-screen", `${Math.round(characterLeft)}px`);

  const bubble = bgmGuide.querySelector("p");
  if (!bubble) return;

  const bubbleWidth = viewportWidth < 380 ? viewportWidth - margin * 2 : Math.min(254, viewportWidth - margin * 2);
  bgmGuide.style.setProperty("--bgm-guide-bubble-width", `${Math.round(bubbleWidth)}px`);

  const bubbleRect = bubble.getBoundingClientRect();
  const bubbleHeight = bubbleRect.height || 72;
  const bubbleGap = viewportWidth < 520 ? 8 : 12;
  const headerRect = document.querySelector(".site-header")?.getBoundingClientRect();
  const bubbleMinTop = (headerRect?.bottom || 0) + bubbleGap;
  let bubbleLeft = characterLeft - bubbleWidth - bubbleGap;
  let bubbleTop = Math.max(characterTop + characterHeight * 0.16, bubbleMinTop);

  if (bubbleLeft < margin) {
    bubbleLeft = clampNumber(targetX - bubbleWidth * 0.5, margin, viewportWidth - margin - bubbleWidth);
    bubbleTop = Math.max(characterTop + characterHeight + bubbleGap, bubbleMinTop);
  }

  bubbleTop = clampNumber(bubbleTop, margin, Math.max(margin, viewportHeight - margin - bubbleHeight));
  bgmGuide.style.setProperty("--bgm-guide-bubble-left", `${Math.round(bubbleLeft - characterLeft)}px`);
  bgmGuide.style.setProperty("--bgm-guide-bubble-top", `${Math.round(bubbleTop - characterTop)}px`);

  const contentOffset = viewportWidth < 1020 || viewportHeight < 760
    ? Math.max(0, bubbleTop + bubbleHeight - (headerRect?.bottom || 0) + bubbleGap)
    : 0;
  root.style.setProperty("--bgm-guide-content-offset", `${Math.round(contentOffset)}px`);
}

function queueBgmGuideLayout() {
  window.cancelAnimationFrame(bgmGuideLayoutFrame);
  bgmGuideLayoutFrame = window.requestAnimationFrame(updateBgmGuideLayout);
}

function scheduleBgmGuideBounce() {
  if (!bgmGuide || motionQuery.matches || bgmGuide.hidden || bgmGuide.classList.contains("is-dismissing")) return;

  window.clearTimeout(bgmGuideBounceTimer);
  window.clearTimeout(bgmGuideBounceResetTimer);

  bgmGuideBounceTimer = window.setTimeout(
    () => {
      if (!bgmGuide || bgmGuide.hidden || bgmGuide.classList.contains("is-dismissing")) return;

      bgmGuide.classList.add("is-bouncing");
      bgmGuideBounceResetTimer = window.setTimeout(() => {
        bgmGuide.classList.remove("is-bouncing");
        scheduleBgmGuideBounce();
      }, 820);
    },
    2600 + Math.random() * 4200,
  );
}

function dismissBgmGuide() {
  dismissBgmHint();
  if (!bgmGuide || bgmGuide.hidden || bgmGuide.classList.contains("is-dismissing")) return;

  window.clearTimeout(bgmGuideBounceTimer);
  window.clearTimeout(bgmGuideBounceResetTimer);
  window.clearTimeout(bgmGuideDismissTimer);
  bgmGuide.classList.remove("is-bouncing");
  bgmGuide.classList.add("is-dismissing");

  bgmGuideDismissTimer = window.setTimeout(() => {
    bgmGuide.hidden = true;
  }, 720);
}

// Lightweight music hint: a label under the music button plus an idle pulse
// on the button. Shown shortly after load until the visitor scrolls, plays
// music, or ignores it for a while.
const bgmHint = document.querySelector(".bgm-hint");
let bgmHintTimer;

function dismissBgmHint() {
  window.clearTimeout(bgmHintTimer);
  bgmHint?.classList.remove("is-visible");
}

function setupBgmHint() {
  if (!bgmHint) return;

  bgmHintTimer = window.setTimeout(() => {
    if (bgmStarted || window.scrollY > 16) return;
    bgmHint.classList.add("is-visible");
    bgmHintTimer = window.setTimeout(dismissBgmHint, 12000);
  }, 1400);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 16) dismissBgmHint();
  }, { passive: true });
}

function setupBgmGuide() {
  if (!bgmGuide) return;

  window.addEventListener("resize", queueBgmGuideLayout);
  window.addEventListener("orientationchange", queueBgmGuideLayout);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 16) {
      dismissBgmGuide();
    }
  }, { passive: true });
  queueBgmGuideLayout();
  scheduleBgmGuideBounce();
}

function setupScrollState() {
  const hero = document.querySelector(".hero");
  const geoPages = [...document.querySelectorAll(".content-section")];
  const skills = document.getElementById("skills");
  const contact = document.getElementById("contact");
  const weight = document.querySelector(".skills-weight");
  const weightAnchor = document.querySelector(".edu-axis");
  let frame = 0;

  const update = () => {
    frame = 0;
    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const heroHeight = Math.max(1, hero?.offsetHeight || window.innerHeight);

    root.style.setProperty("--progress", clampNumber(scrollY / maxScroll, 0, 1).toFixed(4));
    root.style.setProperty("--hero-p", clampNumber(scrollY / heroHeight, 0, 1).toFixed(4));
    root.classList.toggle("is-scrolled", scrollY > 8);

    // --enter: 0 while a page is below the fold, 1 once its top reaches the
    // header. Drives the page geometry in styles.css.
    const headerH = getHeaderHeight();
    const span = Math.max(1, window.innerHeight - headerH);
    geoPages.forEach((page) => {
      const enter = clampNumber(1 - (page.getBoundingClientRect().top - headerH) / span, 0, 1);
      page.style.setProperty("--enter", enter.toFixed(3));
    });

    // Skills → contact handoff: the contact page's own entry progress drives
    // both pages (--enter on contact, --leave on skills).
    if (contact && skills) {
      const handoff = clampNumber((1 - (contact.getBoundingClientRect().top - headerH) / span) / 0.97, 0, 1);
      contact.style.setProperty("--enter", handoff.toFixed(3));
      skills.style.setProperty("--leave", handoff.toFixed(3));
    }

    // Counterweight fills whatever space is left under the timeline; it
    // hides when there is too little room, so it never covers content.
    if (weight && weightAnchor && skills) {
      const free = skills.getBoundingClientRect().bottom - weightAnchor.getBoundingClientRect().bottom - 28;
      const height = Math.min(free, window.innerHeight * 0.42);
      weight.style.setProperty("--weight-h", `${Math.max(0, Math.round(height))}px`);
      weight.classList.toggle("is-off", height < 72);
    }

    if (scrollY > window.innerHeight * 0.5 && bgmPageGuideShown && !bgmPageGuideDismissed) {
      dismissBgmPageGuide();
    }
  };

  const queue = () => {
    if (!frame) {
      frame = window.requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  // Content height changes (language switch, fonts, images) move the free
  // space under the timeline; re-measure when the skills page resizes.
  if (skills && "ResizeObserver" in window) {
    new ResizeObserver(queue).observe(skills.querySelector(".skill-columns") || skills);
  }
  update();

  // Re-anchor deep links (e.g. /#contact) once the masonry has settled.
  window.addEventListener("load", () => {
    const target = window.location.hash ? document.getElementById(decodeURIComponent(window.location.hash.slice(1))) : null;
    window.requestAnimationFrame(() => target?.scrollIntoView({ behavior: "auto" }));
  });
}

// Hero → Projects fall: as the Projects page slides in, hero shapes drop
// into the Projects page. The black plane, red bar, black line and blue
// circle land on the matching shapes of the heading. A black slab slides
// out from under the time card, hits the studio banner and splashes into
// its black ground; the red square drops into the banner's red corner and
// sinks into the paint. Each shape rides its own spring toward the scroll
// position, so it trails the page, falls in with momentum, overshoots a
// little and settles, tilting with its speed. Settled shapes hand over to
// the real ones (same drift phase, same clip). Reverses on scroll back.
// Desktop with motion only.
const fallQuery = window.matchMedia("(min-width: 861px)");
const fallPairs = [
  // hero shape, projects shape, window start, stiffness, damping ratio
  [".supre-hero .s-plane", ".geo-projects .g-sq", 0, 130, 0.74],
  [".supre-hero .s-bar", ".geo-projects .g-bar", 0.05, 170, 0.7],
  [".supre-hero .s-line:not(.s-line-b)", ".geo-projects .g-line", 0.1, 120, 0.74],
  [".supre-hero .s-circle", ".geo-projects .g-dot", 0.16, 210, 0.62],
  // Critically damped: it lands without overshoot (an overshoot reads as a
  // flash of a bigger square, since it grows a lot on the way).
  [".supre-fall .s-square", ".featured-project .supre-mark", 0.3, 220, 1],
];
// Paint droplets thrown on impact: angle (deg), reach (× banner width), size (× banner height).
const paintDrops = [
  [-172, 0.2, 0.11], [-150, 0.13, 0.06], [-196, 0.3, 0.07], [-24, 0.24, 0.14],
  [-6, 0.42, 0.06], [12, 0.33, 0.1], [160, 0.17, 0.09], [190, 0.1, 0.05],
];

function setupHeroFall() {
  const hero = document.querySelector(".hero");
  const projects = document.getElementById("projects");
  const ruleLayer = document.querySelector(".supre-hero");
  const fallLayer = document.querySelector(".supre-fall");
  const geo = document.querySelector(".geo-projects");
  const card = document.querySelector(".local-time-card");
  const slabEl = document.querySelector(".fall-slab");
  const banner = document.querySelector(".featured-project");
  const spring = (stiffness, zeta) => ({ k: stiffness, c: 2 * zeta * Math.sqrt(stiffness), pos: 0, vel: 0 });
  const pairs = fallPairs
    .map(([from, to, start, stiffness, zeta]) => ({
      from: document.querySelector(from),
      to: document.querySelector(to),
      start,
      ...spring(stiffness, zeta),
      landed: false,
      fromFloat: null,
      toFloat: null,
    }))
    .filter((pair) => pair.from && pair.to);
  if (!hero || !projects || !ruleLayer || !fallLayer || !geo || !card || !slabEl || !banner || pairs.length !== fallPairs.length) {
    return;
  }
  const mark = pairs[pairs.length - 1];
  mark.splash = true;
  const slab = { start: 0.02, ...spring(130, 0.76) };
  const splash = spring(150, 0.82);
  const drops = paintDrops.map(() => {
    const drop = document.createElement("span");
    drop.className = "paint-drop";
    drop.setAttribute("aria-hidden", "true");
    // Prepended so the banner's :last-child layout rules still apply.
    banner.prepend(drop);
    return drop;
  });

  // Layout boxes in document coordinates; offsets ignore transforms.
  const docBox = (el) => {
    let x = 0;
    let y = 0;
    for (let node = el; node; node = node.offsetParent) {
      x += node.offsetLeft;
      y += node.offsetTop;
    }
    return { x, y, cx: x + el.offsetWidth / 2, cy: y + el.offsetHeight / 2, w: el.offsetWidth, h: el.offsetHeight };
  };
  const readNum = (el, name) => parseFloat(getComputedStyle(el).getPropertyValue(name)) || 0;
  // The drift animation's (or transition's) current individual translate / rotate.
  const readFloat = (el) => {
    const style = getComputedStyle(el);
    // Computed translate keeps percentages ("0px 18%"): resolve them
    // against the element's own box.
    const [tx = 0, ty = 0] =
      style.translate === "none"
        ? []
        : style.translate
            .split(" ")
            .map((v, i) => (v.endsWith("%") ? (parseFloat(v) / 100) * (i ? el.offsetHeight : el.offsetWidth) : parseFloat(v)));
    const r = style.rotate === "none" ? 0 : parseFloat(style.rotate) || 0;
    return { tx: tx || 0, ty: ty || 0, r };
  };
  const zero = { tx: 0, ty: 0, r: 0 };
  const setDrift = (el, running) => {
    if (!running) {
      // An entry animation still playing (scrolling right after load) would
      // freeze mid-way; finish it so only the endless drift is paused.
      el.getAnimations?.().forEach((animation) => {
        if (animation.effect?.getComputedTiming().iterations !== Infinity) {
          animation.finish();
        }
      });
    }
    el.style.animationPlayState = running ? "" : "paused";
  };
  const step = (s, target, dt) => {
    const steps = Math.max(1, Math.ceil(dt * 240));
    const h = dt / steps;
    for (let i = 0; i < steps; i += 1) {
      s.vel += (-s.k * (s.pos - target) - s.c * s.vel) * h;
      s.pos += s.vel * h;
    }
    if (Math.abs(s.pos - target) < 0.0004 && Math.abs(s.vel) < 0.004) {
      s.pos = target;
      s.vel = 0;
      return false;
    }
    return true;
  };

  let geometry = null;
  let active = false;
  let frame = 0;
  let last = 0;

  const measure = () => {
    // The slab sits exactly under the time card.
    slabEl.style.left = `${card.offsetLeft}px`;
    slabEl.style.top = `${card.offsetTop}px`;
    slabEl.style.width = `${card.offsetWidth}px`;
    slabEl.style.height = `${card.offsetHeight}px`;
    const projectsBox = docBox(projects);
    const ruleBox = docBox(ruleLayer);
    const geoBox = docBox(geo);
    const bannerBox = docBox(banner);
    const slabBox = docBox(slabEl);
    const impact = { x: bannerBox.w * 0.3, y: bannerBox.h * 0.5 };
    geometry = {
      projectsTop: projectsBox.y,
      heroHeight: Math.max(1, hero.offsetHeight),
      // Same clip line as the Projects composition (its heading rule).
      ruleClip: ruleBox.y + ruleBox.h - (geoBox.y + geoBox.h),
      fallBox: docBox(fallLayer),
      banner: bannerBox,
      impact,
      paintMax: Math.hypot(Math.max(impact.x, bannerBox.w - impact.x), Math.max(impact.y, bannerBox.h - impact.y)),
      slab: {
        src: slabBox,
        tgt: { cx: bannerBox.x + impact.x, cy: bannerBox.y + impact.y, w: slabBox.w, h: slabBox.h },
        rot: 0,
        drot: 0,
        ty: 0,
        tgtRot: 0,
      },
      pairs: pairs.map((pair) => ({
        src: docBox(pair.from),
        tgt: docBox(pair.to),
        rot: readNum(pair.from, "--rot"),
        drot: readNum(pair.from, "--dr"),
        ty: readNum(pair.from, "--ty"),
        tgtRot: readNum(pair.to, "--r"),
      })),
    };
  };

  const setPainting = (on) => {
    banner.classList.toggle("is-painting", on);
    // Hold the banner still while it is painted (no reveal fade / slide).
    banner.style.opacity = on ? "1" : "";
    banner.style.translate = on ? "none" : "";
    banner.style.transition = on ? "none" : "";
  };

  const release = () => {
    ruleLayer.style.clipPath = "";
    fallLayer.style.clipPath = "";
    pairs.forEach((pair) => {
      Object.assign(pair, { pos: 0, vel: 0, landed: false, fromFloat: null, toFloat: null });
      pair.from.style.transform = "";
      pair.from.style.opacity = "";
      pair.to.style.opacity = "";
      setDrift(pair.from, true);
      setDrift(pair.to, true);
    });
    Object.assign(slab, { pos: 0, vel: 0 });
    Object.assign(splash, { pos: 0, vel: 0 });
    slabEl.style.transform = "";
    slabEl.style.opacity = "";
    drops.forEach((drop) => {
      drop.style.transform = "";
    });
    setPainting(false);
    active = false;
  };

  const progressNow = () => {
    const headerH = getHeaderHeight();
    const startScroll = geometry.projectsTop - window.innerHeight;
    const endScroll = geometry.projectsTop - headerH;
    return {
      startScroll,
      endScroll,
      p: clampNumber((window.scrollY - startScroll) / Math.max(1, endScroll - startScroll) / 0.99, 0, 1),
    };
  };

  // Transform that draws a shape laid out at g.src on its path to g.tgt.
  // The path runs in viewport space, from where the hero draws the shape
  // when the turn starts to the target when the turn ends, arcing up and
  // dropping in; scrolling beyond either end moves it with its page.
  const pathTransform = (g, s, hf, tf, view, squash = 0) => {
    const e = s.pos;
    const eC = clampNumber(e, 0, 1);
    const fromX = g.src.cx;
    const fromY = g.src.cy + g.ty * view.hp - view.startScroll;
    const toX = g.tgt.cx + tf.tx;
    const toY = g.tgt.cy + tf.ty - view.endScroll;
    const beyond =
      Math.max(0, view.scrollY - view.endScroll) * eC + Math.min(0, view.scrollY - view.startScroll) * (1 - eC);
    const x = fromX + (toX - fromX) * e;
    const y = fromY + (toY - fromY) * e - Math.sin(Math.PI * eC) * view.lift - beyond + view.scrollY;
    const rotFrom = g.rot + g.drot * view.hp;
    const rotTo = g.tgtRot + tf.r;
    const tilt = clampNumber(s.vel * 9, -28, 28) * (1 - Math.abs(2 * eC - 1) * 0.4);
    const rotate = rotFrom + (rotTo - rotFrom) * e + tilt;
    const sx = Math.max(0.05, 1 + (g.tgt.w / g.src.w - 1) * e) * (1 + squash * 0.3);
    const sy = Math.max(0.05, 1 + (g.tgt.h / g.src.h - 1) * e) * (1 - squash * 0.5);
    // The frozen drift still applies before transform. Cancel it in step
    // with the flight: none at the start (the shape is exactly where the
    // hero draws it, so release is seamless), all of it on arrival.
    return (
      `rotate(${(-hf.r * eC).toFixed(3)}deg) translate(${(-hf.tx * eC).toFixed(2)}px, ${(-hf.ty * eC).toFixed(2)}px) ` +
      `translate3d(${(x - g.src.cx).toFixed(2)}px, ${(y - g.src.cy).toFixed(2)}px, 0) ` +
      `rotate(${rotate.toFixed(3)}deg) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`
    );
  };

  const render = (startScroll, endScroll) => {
    if (!active) {
      active = true;
      ruleLayer.style.clipPath = `inset(-100vmax -100vmax ${geometry.ruleClip}px -100vmax)`;
    }
    const view = {
      startScroll,
      endScroll,
      scrollY: window.scrollY,
      // The hero's own scroll drift: live above the turn (matches the CSS
      // so release is seamless), held at its start value during the turn.
      hp: clampNumber(Math.min(window.scrollY, startScroll) / geometry.heroHeight, 0, 1),
      lift: (window.innerHeight - getHeaderHeight()) * 0.16,
    };
    const sp = splash.pos;
    const splashDone = sp === 1 && splash.vel === 0;

    pairs.forEach((pair, index) => {
      const g = geometry.pairs[index];
      const landed = pair.pos === 1 && pair.vel === 0 && (!pair.splash || splashDone);
      if (landed !== pair.landed || !pair.fromFloat) {
        pair.landed = landed;
        // Freeze both drifts while flying so the shapes meet exactly.
        setDrift(pair.from, landed);
        setDrift(pair.to, landed);
        if (!landed) {
          pair.fromFloat = readFloat(pair.from);
        }
        pair.from.style.opacity = landed ? "0" : "";
        pair.to.style.opacity = landed ? "" : "0";
      }
      if (landed) {
        return;
      }
      pair.toFloat = readFloat(pair.to);
      pair.from.style.transform = pathTransform(g, pair, pair.fromFloat, pair.toFloat, view);
      if (pair.splash) {
        // The banner's red mark is slightly translucent.
        pair.from.style.opacity = (1 - 0.08 * clampNumber(pair.pos, 0, 1)).toFixed(3);
      }
    });

    // Slab: falls onto the banner, squashes on impact and melts into the paint.
    const squash = Math.sin(Math.PI * clampNumber(sp / 0.5, 0, 1));
    slabEl.style.opacity = slab.pos > 0 ? (1 - clampNumber((sp - 0.12) / 0.3, 0, 1)).toFixed(3) : "0";
    slabEl.style.transform = pathTransform(geometry.slab, slab, zero, zero, view, squash);

    // Paint: a splash grows from the impact point into the banner's ground;
    // droplets fly out ahead of it and are swallowed as it spreads.
    const painting = slab.pos > 0 && !(splashDone && mark.landed);
    if (banner.classList.contains("is-painting") !== painting) {
      setPainting(painting);
    }
    if (painting) {
      const { impact, paintMax, banner: bb } = geometry;
      const r0 = geometry.slab.src.h * 0.45;
      const grow = Math.pow(clampNumber(sp, 0, 1.2), 1.5);
      banner.style.setProperty("--paint-x", `${impact.x}px`);
      banner.style.setProperty("--paint-y", `${impact.y}px`);
      banner.style.setProperty("--paint-r", `${sp > 0 ? (r0 + (paintMax - r0) * grow).toFixed(1) : 0}px`);
      banner.style.setProperty("--ink-in", clampNumber((sp - 0.5) / 0.4, 0, 1).toFixed(3));
      drops.forEach((drop, index) => {
        const [angle, reach, size] = paintDrops[index];
        const q = clampNumber(sp * 1.8, 0, 1.15);
        const travel = 1 - Math.pow(1 - clampNumber(q, 0, 1), 3) + (q > 1 ? q - 1 : 0);
        const rad = (angle * Math.PI) / 180;
        const d = size * bb.h;
        const x = impact.x + Math.cos(rad) * reach * bb.w * travel;
        const y = impact.y + Math.sin(rad) * reach * bb.w * travel * 0.45;
        drop.style.width = `${d.toFixed(1)}px`;
        drop.style.height = `${d.toFixed(1)}px`;
        drop.style.transform = `translate(${(x - d / 2).toFixed(1)}px, ${(y - d / 2).toFixed(1)}px) scale(${sp > 0.01 ? 1 : 0})`;
      });
    }

    // The red square sinks into the paint: as the splash spreads and the
    // square settles, its layer's clip closes onto the banner box.
    const close = clampNumber(sp, 0, 1) * clampNumber((mark.pos - 0.85) / 0.15, 0, 1);
    if (close > 0 && !mark.landed) {
      const fb = geometry.fallBox;
      const bb = geometry.banner;
      const pad = 420 * (1 - close);
      fallLayer.style.clipPath =
        `inset(${(bb.y - pad - fb.y).toFixed(1)}px ${(fb.x + fb.w - (bb.x + bb.w) - pad).toFixed(1)}px ` +
        `${(fb.y + fb.h - (bb.y + bb.h) - pad).toFixed(1)}px ${(bb.x - pad - fb.x).toFixed(1)}px)`;
    } else {
      fallLayer.style.clipPath = "";
    }
  };

  const tick = (now) => {
    frame = 0;
    if (!fallQuery.matches || motionQuery.matches) {
      if (active) {
        release();
      }
      last = 0;
      return;
    }
    if (!geometry) {
      measure();
    }

    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    const { startScroll, endScroll, p } = progressNow();
    let moving = false;

    [...pairs, slab].forEach((s) => {
      moving = step(s, clampNumber((p - s.start) / (1 - s.start), 0, 1), dt) || moving;
    });
    moving = step(splash, slab.pos > 0.96 ? 1 : 0, dt) || moving;

    if (!moving && p <= 0) {
      if (active) {
        release();
      }
    } else {
      render(startScroll, endScroll);
    }

    if (moving) {
      frame = window.requestAnimationFrame(tick);
    } else {
      last = 0;
    }
  };

  const queue = () => {
    if (!frame) {
      frame = window.requestAnimationFrame(tick);
    }
  };
  const remeasure = () => {
    geometry = null;
    queue();
  };

  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", remeasure);
  fallQuery.addEventListener?.("change", remeasure);
  motionQuery.addEventListener?.("change", remeasure);
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(remeasure);
    observer.observe(hero);
    observer.observe(projects.querySelector(".section-head") || projects);
    observer.observe(banner);
  }
  window.addEventListener("load", remeasure);
  queue();
}

// Projects → Experience morph: as the Experience page slides in, the
// Projects composition re-forms into the Experience "Supremus" stack. The
// black square flattens into the top bar, the red diagonal thickens into
// the red block, the hairline into the black line; the blue disc is
// reshaped like dragging Illustrator's live-corner widgets (its corners
// sharpen one by one, widgets shown) into the blue square that sinks into
// the heading rule. The yellow block keeps its own entry. Shapes fly as
// clones in a document-space layer (no page clips in the way), clipped at
// the heading rule, which stays put on screen through the turn. Springs as
// in the hero fall; reverses on scroll back. Desktop with motion only.
const morphPairs = [
  // from, to, window start, stiffness, damping ratio, extra
  [".geo-projects .g-sq", ".geo-experience .g-s1", 0, 150, 0.78],
  [".geo-projects .g-bar", ".geo-experience .g-s2", 0.06, 160, 0.76],
  [".geo-projects .g-line", ".geo-experience .g-s3", 0.1, 140, 0.8],
  [".geo-projects .g-dot", ".geo-experience .g-s5", 0.14, 120, 0.85, { corners: true, spin: 90 }],
];

function setupPageMorph() {
  const fromPage = document.getElementById("projects");
  const toPage = document.getElementById("experience");
  const fromGeo = document.querySelector(".geo-projects");
  const toGeo = document.querySelector(".geo-experience");
  if (!fromPage || !toPage || !fromGeo || !toGeo) {
    return;
  }

  const layer = document.createElement("div");
  layer.className = "morph-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  const pairs = morphPairs
    .map(([from, to, start, stiffness, zeta, extra = {}]) => ({
      from: document.querySelector(from),
      to: document.querySelector(to),
      start,
      k: stiffness,
      c: 2 * zeta * Math.sqrt(stiffness),
      pos: 0,
      vel: 0,
      ...extra,
      clone: null,
      widgets: [],
      landed: false,
      fromFloat: null,
    }))
    .filter((pair) => pair.from && pair.to);
  if (pairs.length !== morphPairs.length) {
    return;
  }

  const docBox = (el) => {
    let x = 0;
    let y = 0;
    for (let node = el; node; node = node.offsetParent) {
      x += node.offsetLeft;
      y += node.offsetTop;
    }
    return { x, y, cx: x + el.offsetWidth / 2, cy: y + el.offsetHeight / 2, w: el.offsetWidth, h: el.offsetHeight };
  };
  const readFloat = (el) => {
    const style = getComputedStyle(el);
    const [tx = 0, ty = 0] =
      style.translate === "none"
        ? []
        : style.translate
            .split(" ")
            .map((v, i) => (v.endsWith("%") ? (parseFloat(v) / 100) * (i ? el.offsetHeight : el.offsetWidth) : parseFloat(v)));
    const r = style.rotate === "none" ? 0 : parseFloat(style.rotate) || 0;
    return { tx: tx || 0, ty: ty || 0, r };
  };
  const readNum = (el, name) => parseFloat(getComputedStyle(el).getPropertyValue(name)) || 0;
  const setDrift = (el, running) => {
    el.style.animationPlayState = running ? "" : "paused";
  };
  const smooth = (v) => v * v * (3 - 2 * v);

  let geometry = null;
  let active = false;
  let frame = 0;
  let last = 0;

  const measure = () => {
    const fromBox = docBox(fromPage);
    const toBox = docBox(toPage);
    const fromGeoBox = docBox(fromGeo);
    const toGeoBox = docBox(toGeo);
    geometry = {
      fromTop: fromBox.y,
      toTop: toBox.y,
      fromRule: fromGeoBox.y + fromGeoBox.h,
      toRule: toGeoBox.y + toGeoBox.h,
      pairs: pairs.map((pair) => ({
        src: docBox(pair.from),
        tgt: docBox(pair.to),
        rot: readNum(pair.from, "--r"),
        tgtRot: readNum(pair.to, "--r"),
        bg: getComputedStyle(pair.from).backgroundColor,
        tgtBg: getComputedStyle(pair.to).backgroundColor,
      })),
    };
  };

  const build = () => {
    pairs.forEach((pair, index) => {
      const g = geometry.pairs[index];
      const clone = document.createElement("span");
      clone.className = "morph-shape";
      Object.assign(clone.style, {
        left: `${g.src.x}px`,
        top: `${g.src.y}px`,
        width: `${g.src.w}px`,
        height: `${g.src.h}px`,
        background: g.bg,
        borderRadius: getComputedStyle(pair.from).borderRadius,
      });
      if (pair.corners) {
        // Live-corner widgets, one per corner.
        pair.widgets = [0, 1, 2, 3].map(() => {
          const widget = document.createElement("i");
          widget.className = "morph-widget";
          clone.appendChild(widget);
          return widget;
        });
        const box = document.createElement("b");
        box.className = "morph-bounds";
        clone.appendChild(box);
        pair.bounds = box;
      }
      layer.appendChild(clone);
      pair.clone = clone;
    });
  };

  const release = () => {
    layer.replaceChildren();
    layer.style.clipPath = "";
    pairs.forEach((pair) => {
      Object.assign(pair, { pos: 0, vel: 0, clone: null, widgets: [], bounds: null, landed: false, fromFloat: null });
      pair.from.style.visibility = "";
      pair.to.style.visibility = "";
      setDrift(pair.from, true);
      setDrift(pair.to, true);
    });
    active = false;
  };

  const range = () => {
    const headerH = getHeaderHeight();
    const startScroll = geometry.fromTop - headerH;
    const endScroll = geometry.toTop - headerH;
    return {
      startScroll,
      endScroll,
      p: clampNumber((window.scrollY - startScroll) / Math.max(1, endScroll - startScroll) / 0.99, 0, 1),
    };
  };

  const render = ({ startScroll, endScroll, p }) => {
    const scrollY = window.scrollY;
    if (!active) {
      active = true;
      build();
    }
    // Clip at the heading rule: the Projects rule at the start, the
    // Experience rule at the end (the same place on screen).
    const ruleView =
      geometry.fromRule - startScroll + (geometry.toRule - endScroll - (geometry.fromRule - startScroll)) * p;
    layer.style.clipPath = `inset(-100vmax -100vmax ${(-(ruleView + scrollY)).toFixed(1)}px -100vmax)`;

    pairs.forEach((pair, index) => {
      const g = geometry.pairs[index];
      const landed = pair.pos === 1 && pair.vel === 0;
      if (!pair.fromFloat) {
        // Freeze the source drift; the clone starts exactly on it.
        setDrift(pair.from, false);
        setDrift(pair.to, false);
        pair.fromFloat = readFloat(pair.from);
        pair.from.style.visibility = "hidden";
      }
      if (landed !== pair.landed) {
        pair.landed = landed;
        setDrift(pair.to, landed);
      }
      const tf = readFloat(pair.to);
      pair.to.style.visibility = landed ? "" : "hidden";
      pair.clone.style.visibility = landed ? "hidden" : "";
      if (landed) {
        return;
      }
      const e = pair.pos;
      const eC = clampNumber(e, 0, 1);
      const hf = pair.fromFloat;
      // Viewport path from the Projects shape (turn start) to the
      // Experience shape (turn end); beyond either end it rides its page.
      const fromX = g.src.cx + hf.tx;
      const fromY = g.src.cy + hf.ty - startScroll;
      const toX = g.tgt.cx + tf.tx;
      const toY = g.tgt.cy + tf.ty - endScroll;
      const beyond =
        Math.max(0, scrollY - endScroll) * eC + Math.min(0, scrollY - startScroll) * (1 - eC);
      const x = fromX + (toX - fromX) * e;
      const y = fromY + (toY - fromY) * e - beyond + scrollY;
      const rotFrom = g.rot + hf.r;
      const rotTo = g.tgtRot + tf.r + (pair.spin || 0);
      const tilt = clampNumber(pair.vel * 7, -20, 20) * (1 - Math.abs(2 * eC - 1) * 0.4);
      // A spin of a multiple of 90deg lands a square on the same pose.
      const rotate = rotFrom + (rotTo - rotFrom) * e + tilt;
      const sx = Math.max(0.02, 1 + (g.tgt.w / g.src.w - 1) * e);
      const sy = Math.max(0.02, 1 + (g.tgt.h / g.src.h - 1) * e);
      pair.clone.style.transform =
        `translate3d(${(x - g.src.cx).toFixed(2)}px, ${(y - g.src.cy).toFixed(2)}px, 0) ` +
        `rotate(${rotate.toFixed(3)}deg) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`;
      if (g.bg !== g.tgtBg) {
        pair.clone.style.background = eC < 0.5 ? g.bg : g.tgtBg;
      }

      if (pair.corners) {
        // Circle → square: each corner's radius is dragged in turn.
        const m = clampNumber((e - 0.12) / 0.7, 0, 1);
        const radii = [0, 1, 2, 3].map((i) => 50 * (1 - smooth(clampNumber((m - i * 0.14) / 0.58, 0, 1))));
        pair.clone.style.borderRadius = radii.map((r) => `${r.toFixed(2)}%`).join(" ");
        const show = m > 0 && m < 1 ? Math.sin(Math.PI * m) : 0;
        const w = g.src.w;
        // Widgets sit inside each corner, on the arc's diagonal.
        const spots = [
          [1, 1],
          [-1, 1],
          [-1, -1],
          [1, -1],
        ];
        pair.widgets.forEach((widget, i) => {
          const inset = (radii[i] / 100) * w * 0.42 + 4;
          const [dx, dy] = spots[i];
          const left = dx > 0 ? inset : w - inset;
          const top = dy > 0 ? inset : w - inset;
          widget.style.transform = `translate(${left.toFixed(1)}px, ${top.toFixed(1)}px) scale(${(1 / sx).toFixed(3)})`;
          widget.style.opacity = show.toFixed(3);
        });
        pair.bounds.style.opacity = show.toFixed(3);
      }
    });
  };

  const tick = (now) => {
    frame = 0;
    if (!fallQuery.matches || motionQuery.matches) {
      if (active) {
        release();
      }
      last = 0;
      return;
    }
    if (!geometry) {
      measure();
    }
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    const view = range();
    let moving = false;
    pairs.forEach((pair) => {
      const target = clampNumber((view.p - pair.start) / (1 - pair.start), 0, 1);
      const steps = Math.max(1, Math.ceil(dt * 240));
      const h = dt / steps;
      for (let i = 0; i < steps; i += 1) {
        pair.vel += (-pair.k * (pair.pos - target) - pair.c * pair.vel) * h;
        pair.pos += pair.vel * h;
      }
      if (Math.abs(pair.pos - target) < 0.0004 && Math.abs(pair.vel) < 0.004) {
        pair.pos = target;
        pair.vel = 0;
      } else {
        moving = true;
      }
    });

    if (!moving && view.p <= 0) {
      if (active) {
        release();
      }
    } else {
      render(view);
    }

    if (moving) {
      frame = window.requestAnimationFrame(tick);
    } else {
      last = 0;
    }
  };

  const queue = () => {
    if (!frame) {
      frame = window.requestAnimationFrame(tick);
    }
  };
  const remeasure = () => {
    geometry = null;
    if (active) {
      release();
    }
    queue();
  };

  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", remeasure);
  fallQuery.addEventListener?.("change", remeasure);
  motionQuery.addEventListener?.("change", remeasure);
  window.addEventListener("load", remeasure);
  queue();
}

function getHeaderHeight() {
  return document.querySelector(".site-header")?.offsetHeight || 0;
}

// Desktop paging: the hero and each nav section are pages. One wheel gesture
// moves to the next page's heading. A page taller than the viewport (Works)
// scrolls natively inside first; reaching its edge stops there, and the next
// gesture turns the page. Trackpad momentum after a turn is swallowed so one
// flick never skips pages.
const pageQuery = window.matchMedia("(min-width: 861px) and (hover: hover) and (pointer: fine)");
const pageTurnMs = 700;
const pageSettleMs = 340;
// After a page turn, only the trackpad's momentum tail is swallowed: events
// that arrive in quick succession AND are not growing. A new swipe starts
// with growing deltas and is accepted at once; mouse-wheel notches (large,
// steady deltas) are never treated as momentum.
const wheelGapMs = 120;
const swallowMaxMs = 900;
const momentumMaxDelta = 60;

// Page stops: the hero, each nav section, and any [data-page-stop] block
// inside a tall section (the illustration gallery). A sub-stop is placed so
// its whole block fits the screen (heading at top, page bar at bottom), so a
// tall Works page turns as two clean screens instead of scroll + snap.
// A page whose overflow is only a sliver (bottom padding) counts as fitting,
// so no tiny leftover scroll ("bounce") happens before the next turn.
const pageOverflowTolerance = 40;

function getPageStops() {
  const headerH = getHeaderHeight();
  const view = window.innerHeight - headerH;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const docTop = (el) => el.getBoundingClientRect().top + window.scrollY;

  const pages = [...document.querySelectorAll(".hero, .content-section, .contact-section, [data-page-stop]")];
  const starts = pages.map((page, index) => {
    if (index === 0) return 0;
    if (!page.hasAttribute("data-page-stop")) {
      return Math.min(maxScroll, Math.round(docTop(page) - headerH));
    }
    const top = docTop(page) - headerH - 16;
    const bottom = docTop(page) + page.offsetHeight + 24;
    // Bottom-align the block when it fits, never pushing its heading off top.
    return Math.min(maxScroll, Math.round(Math.min(top, Math.max(top - view, bottom - window.innerHeight))));
  });

  const ends = starts.map((start, index) => {
    if (index === starts.length - 1) return maxScroll;
    const end = Math.max(start, starts[index + 1] - view);
    return end - start <= pageOverflowTolerance ? start : end;
  });

  return { pages, starts, ends };
}

function setupPaging() {
  let animating = false;
  let swallow = false;
  let swallowSince = 0;
  let lastWheelAt = 0;
  let lastWheelAbs = 0;
  let frame = 0;

  const syncMode = () => root.classList.toggle("paged", pageQuery.matches);
  syncMode();
  pageQuery.addEventListener?.("change", syncMode);

  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const animateTo = (target, duration = pageTurnMs) => {
    window.cancelAnimationFrame(frame);
    const from = window.scrollY;
    const distance = target - from;

    const finish = () => {
      animating = false;
      swallow = true;
      swallowSince = performance.now();
    };

    if (motionQuery.matches || Math.abs(distance) < 2) {
      window.scrollTo({ top: target, behavior: "auto" });
      finish();
      return;
    }

    animating = true;
    const start = performance.now();
    const step = (now) => {
      const t = clampNumber((now - start) / duration, 0, 1);
      window.scrollTo({ top: from + distance * easeInOutCubic(t), behavior: "auto" });
      if (t < 1) {
        frame = window.requestAnimationFrame(step);
      } else {
        finish();
      }
    };
    frame = window.requestAnimationFrame(step);
  };

  const currentIndex = (starts) => {
    const y = window.scrollY + 2;
    let index = 0;
    starts.forEach((start, i) => {
      if (start <= y) index = i;
    });
    return index;
  };

  // Returns true when paging handled the move; false lets the browser scroll.
  const turn = (direction, delta) => {
    const { starts, ends } = getPageStops();
    const index = currentIndex(starts);
    const y = window.scrollY;

    if (direction > 0) {
      if (y < ends[index] - 2) {
        if (y + delta > ends[index]) {
          animateTo(ends[index], pageSettleMs);
          return true;
        }
        return false;
      }
      if (index < starts.length - 1) {
        animateTo(starts[index + 1]);
        return true;
      }
      return false;
    }

    if (y > starts[index] + 2) {
      if (y + delta < starts[index]) {
        animateTo(starts[index], pageSettleMs);
        return true;
      }
      return false;
    }
    if (index > 0) {
      // Entering a tall page from below lands on its last screen.
      animateTo(Math.max(starts[index - 1], ends[index - 1]));
      return true;
    }
    return false;
  };

  window.addEventListener(
    "wheel",
    (event) => {
      if (!root.classList.contains("paged") || event.ctrlKey || event.target.closest?.(".toolbox-popover")) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
      const delta = event.deltaY * unit;
      if (!delta) return;

      const now = performance.now();
      const gap = now - lastWheelAt;
      const abs = Math.abs(delta);
      const previousAbs = lastWheelAbs;
      lastWheelAt = now;
      lastWheelAbs = abs;

      if (animating) {
        event.preventDefault();
        return;
      }

      if (swallow) {
        const momentumTail = gap < wheelGapMs && abs < momentumMaxDelta && abs <= previousAbs + 1;
        if (momentumTail && now - swallowSince < swallowMaxMs) {
          event.preventDefault();
          return;
        }
        swallow = false;
      }

      if (turn(Math.sign(delta), delta)) {
        event.preventDefault();
      }
    },
    { passive: false },
  );

  window.addEventListener("keydown", (event) => {
    if (!root.classList.contains("paged") || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.closest?.("input, textarea, select, button, [contenteditable]")) return;

    const keys = { PageDown: 1, PageUp: -1, " ": event.shiftKey ? -1 : 1 };
    const direction = keys[event.key];
    if (!direction) return;

    event.preventDefault();
    if (animating) return;

    const delta = direction * (window.innerHeight - getHeaderHeight()) * 0.85;
    if (!turn(direction, delta)) {
      const { ends } = getPageStops();
      const max = ends[ends.length - 1];
      animateTo(clampNumber(window.scrollY + delta, 0, max), pageSettleMs);
    }
  });

  // Nav links turn to their page instead of jumping.
  document.addEventListener("click", (event) => {
    const link = event.target.closest?.('a[href^="#"]');
    if (!link || !root.classList.contains("paged")) return;

    const id = link.getAttribute("href").slice(1);
    const { pages, starts } = getPageStops();
    const index = id === "top" ? 0 : pages.findIndex((page) => page.id === id);
    if (index < 0) return;

    event.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    animateTo(starts[index]);
  });
}

// Auto-advance for the carousel and the gallery: after a stretch without
// interaction the next page turns by itself (wrapping at the end). It pauses
// while the pointer is over it, while it has keyboard focus, while it is
// mostly off screen or the tab is hidden, and never runs with reduced motion.
// Any interaction restarts the countdown; a thin red bar shows its progress.
function setupAutoAdvance(rootEl, advance, intervalMs, barHost = rootEl) {
  if (motionQuery.matches || !("IntersectionObserver" in window)) return;

  const bar = document.createElement("span");
  bar.className = "autoplay-bar";
  bar.setAttribute("aria-hidden", "true");
  bar.style.setProperty("--autoplay-ms", `${intervalMs}ms`);
  barHost.append(bar);

  let timer = 0;
  let hovered = false;
  let focused = false;
  let visible = false;
  const canRun = () => visible && !hovered && !focused && !document.hidden;
  const schedule = () => {
    window.clearTimeout(timer);
    bar.classList.remove("is-running");
    if (!canRun()) return;
    void bar.offsetWidth; // restart the fill animation
    bar.classList.add("is-running");
    timer = window.setTimeout(() => {
      if (canRun()) advance();
      schedule();
    }, intervalMs);
  };

  rootEl.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") {
      hovered = true;
      schedule();
    }
  });
  rootEl.addEventListener("pointerleave", (event) => {
    if (event.pointerType === "mouse") {
      hovered = false;
      schedule();
    }
  });
  // Pause for keyboard focus only; a mouse click on a button shouldn't
  // leave autoplay paused until focus moves elsewhere.
  rootEl.addEventListener("focusin", (event) => {
    if (event.target.matches?.(":focus-visible")) {
      focused = true;
      schedule();
    }
  });
  rootEl.addEventListener("focusout", (event) => {
    if (!rootEl.contains(event.relatedTarget)) {
      focused = false;
      schedule();
    }
  });
  ["pointerdown", "wheel", "touchstart", "keydown"].forEach((type) => {
    rootEl.addEventListener(type, schedule, { passive: true });
  });
  document.addEventListener("visibilitychange", schedule);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    schedule();
  }, { threshold: 0.6 }).observe(rootEl);
}

// Gallery layout: every work is shown whole. A sheet's items are cut into
// rows (order kept); items in a row share its height and keep their own
// aspect ratio, so nothing is cropped. Every row cut and every phase of the
// row-width rhythm is tried, scaled to fit the height budget, and the one
// showing the most image area wins. Row widths and alignment alternate for a
// constructivist rhythm.
const galleryRowShape = [
  { width: 1, align: "start" },
  { width: 0.88, align: "end" },
  { width: 0.94, align: "start" },
];

// Inner margin so the hover lift/shadow is not clipped by the scroller.
const gallerySheetPad = 8;

// ratios: aspect ratios of the sheet's items, the page block last.
// Returns the best arrangement, or null.
function planGallerySheet(ratios, width, heightBudget, gap) {
  const n = ratios.length;
  const minItemWidth = width * (width < 600 ? 0.3 : 0.1);
  let best = null;
  let fallback = null;

  for (let combo = 0; combo < (1 << (n - 1)) << 2; combo += 1) {
    const mask = combo >> 2;
    const phase = combo & 3;
    if (phase >= galleryRowShape.length) continue;

    const rows = [];
    let from = 0;
    let total = 0;
    for (let i = 0; i < n; i += 1) {
      if (i !== n - 1 && !(mask & (1 << i))) continue;
      const to = i + 1;
      const shape = galleryRowShape[(rows.length + phase) % galleryRowShape.length];
      let ratioSum = 0;
      let imageRatioSum = 0;
      let minRatio = Infinity;
      for (let k = from; k < to; k += 1) {
        ratioSum += ratios[k];
        if (k !== n - 1) imageRatioSum += ratios[k];
        if (ratios[k] < minRatio) minRatio = ratios[k];
      }
      const height = (width * shape.width - gap * (to - from - 1)) / ratioSum;
      // The last row ends with the page block and is always right-aligned,
      // so the block sits bottom-right on every page.
      const align = to === n ? "end" : shape.align;
      rows.push({ from, to, height, align, imageRatioSum, minRatio });
      total += height;
      from = to;
    }

    const gaps = gap * (rows.length - 1);
    const scale = Math.min(1, (heightBudget - gaps) / total);
    let area = 0;
    let narrowest = Infinity;
    rows.forEach((row) => {
      const h = row.height * scale;
      area += row.imageRatioSum * h * h;
      narrowest = Math.min(narrowest, row.minRatio * h);
    });

    const candidate = { rows, scale, area };
    if (narrowest >= minItemWidth) {
      if (!best || area > best.area) best = candidate;
    } else if (!fallback || narrowest > fallback.narrowest) {
      fallback = { ...candidate, narrowest };
    }
  }

  return best || fallback;
}

function applyGallerySheet(sheet, ratios, plan, width, gap) {
  const pad = gallerySheetPad;
  const items = [...sheet.children];
  let y = pad;
  plan.rows.forEach((row) => {
    const height = row.height * plan.scale;
    let used = gap * (row.to - row.from - 1);
    for (let i = row.from; i < row.to; i += 1) used += ratios[i] * height;
    let x = pad + (row.align === "end" ? width - used : 0);
    for (let i = row.from; i < row.to; i += 1) {
      const itemWidth = ratios[i] * height;
      Object.assign(items[i].style, {
        left: `${x.toFixed(1)}px`,
        top: `${y.toFixed(1)}px`,
        width: `${itemWidth.toFixed(1)}px`,
        height: `${height.toFixed(1)}px`,
      });
      x += itemWidth + gap;
    }
    y += height + gap;
  });
  sheet.style.height = `${Math.ceil(y - gap + pad)}px`;
}

// In-page reordering: a work may trade places with its neighbour (never move
// further) when that gives a better composition. Each swap costs 3% of the
// score, so the order stays as close to newest-first as the layout allows.
const gallerySwapPenalty = 0.03;

function arrangeGalleryPage(cardRatios, markRatio, width, heightBudget, gap) {
  const n = cardRatios.length;
  let best = null;
  const order = [];
  const visit = (i, swaps) => {
    if (i >= n) {
      const plan = planGallerySheet([...order.map((k) => cardRatios[k]), markRatio], width, heightBudget, gap);
      if (!plan) return;
      const score = plan.area * (1 - gallerySwapPenalty * swaps);
      if (!best || score > best.score) best = { order: [...order], plan, score };
      return;
    }
    order.push(i);
    visit(i + 1, swaps);
    order.pop();
    if (i + 1 < n) {
      order.push(i + 1, i);
      visit(i + 2, swaps + 1);
      order.length -= 2;
    }
  };
  visit(0, 0);
  return best;
}

// Splits the works (in order) into pages of 6–10 (the last may be shorter)
// so that every page is as full as possible: dynamic programming over page
// breaks, minimising the summed squared emptiness of the pages.
const galleryPageMin = 6;
const galleryPageMax = 10;

function paginateGallery(cardRatios, markRatio, width, heightBudget, gap) {
  const total = cardRatios.length;
  const sheetArea = width * heightBudget;
  const cost = new Array(total + 1).fill(Infinity);
  const from = new Array(total + 1).fill(-1);
  const plans = new Map();
  cost[0] = 0;

  for (let end = 1; end <= total; end += 1) {
    const minSize = end === total ? 1 : galleryPageMin;
    for (let size = minSize; size <= galleryPageMax && size <= end; size += 1) {
      const start = end - size;
      if (cost[start] === Infinity) continue;
      const plan = planGallerySheet([...cardRatios.slice(start, end), markRatio], width, heightBudget, gap);
      if (!plan) continue;
      const emptiness = 1 - Math.min(1, plan.area / sheetArea);
      const pageCost = cost[start] + emptiness * emptiness;
      if (pageCost < cost[end]) {
        cost[end] = pageCost;
        from[end] = start;
        plans.set(end, plan);
      }
    }
  }

  const pages = [];
  for (let end = total; end > 0; end = from[end]) {
    if (from[end] < 0) return null;
    pages.unshift({ start: from[end], end, plan: plans.get(end) });
  }
  return pages;
}

// Paged illustration gallery. The cards stay in index.html in newest-first
// order (add new work there exactly as before); this splits them into pages
// of 6–10, each laid out to fill one screen, turned horizontally by swipe,
// arrows, page numbers or arrow keys. Without JS the original masonry stays.
function setupGallery() {
  const masonry = document.querySelector(".illustration-masonry");
  const cards = masonry ? [...masonry.querySelectorAll(".illustration-card")] : [];
  if (cards.length <= galleryPageMax) return;

  const dictionary = i18n[currentLanguage] || i18n.zh;
  const pad = (n) => String(n).padStart(2, "0");
  const arrow = (d) => `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="${d}" /></svg>`;
  const cardRatios = cards.map((card) => {
    const img = card.querySelector("img");
    const w = Number(img?.getAttribute("width")) || img?.naturalWidth || 1;
    const h = Number(img?.getAttribute("height")) || img?.naturalHeight || 1;
    return w / h;
  });

  const gallery = document.createElement("div");
  gallery.className = "gallery";

  const track = document.createElement("div");
  track.className = "gallery-track";
  track.tabIndex = 0;
  track.setAttribute("role", "region");
  track.setAttribute("aria-roledescription", "carousel");
  track.dataset.i18nAria = "galleryLabel";
  track.setAttribute("aria-label", dictionary.galleryLabel);

  const nav = document.createElement("div");
  nav.className = "gallery-nav";
  nav.innerHTML = `
    <button class="gallery-step" type="button" data-step="-1" data-i18n-aria="galleryPrev" aria-label="${dictionary.galleryPrev}">${arrow("M15 5 8 12l7 7")}</button>
    <div class="gallery-pages"></div>
    <button class="gallery-step" type="button" data-step="1" data-i18n-aria="galleryNext" aria-label="${dictionary.galleryNext}">${arrow("m9 5 7 7-7 7")}</button>
    <span class="gallery-count" aria-live="polite"></span>`;

  gallery.append(track, nav);
  masonry.replaceWith(gallery);

  const pagesBox = nav.querySelector(".gallery-pages");
  const count = nav.querySelector(".gallery-count");
  let sheets = [];
  let pageButtons = [];
  let pageKey = "";

  const currentIndex = () => Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
  const show = (index) => {
    pageButtons.forEach((button, i) => button.setAttribute("aria-current", String(i === index)));
    count.textContent = `${pad(index + 1)} / ${pad(sheets.length)}`;
  };
  const sync = () => show(currentIndex());
  const goTo = (index, instant = false) => {
    const pages = sheets.length;
    const target = ((index % pages) + pages) % pages;
    show(target); // reflect the destination right away, before the scroll lands
    track.scrollTo({ left: target * track.clientWidth, behavior: instant || motionQuery.matches ? "auto" : "smooth" });
  };

  // Lazy images inside a horizontal scroller only load once scrolled to;
  // start the neighbouring sheets early so turning a page never shows gaps.
  // Only once the gallery is near the viewport, so opening the site stays light.
  let galleryNear = false;
  const warm = () => {
    if (!galleryNear) return;
    const index = currentIndex();
    [index - 1, index, index + 1].forEach((i) => {
      sheets[i]?.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        img.loading = "eager";
      });
    });
  };
  if ("IntersectionObserver" in window) {
    const nearObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        galleryNear = true;
        warm();
        nearObserver.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    nearObserver.observe(gallery);
  } else {
    galleryNear = true;
  }

  // (Re)builds the sheets for the current width: picks page breaks, moves the
  // cards into their sheets and places every item.
  const layout = () => {
    const anchor = sheets[currentIndex()]?.querySelector(".illustration-card");
    const outerWidth = track.clientWidth;
    const width = outerWidth - gallerySheetPad * 2;
    const compact = outerWidth < 700;
    const budget = (compact
      ? Math.max(520, window.innerHeight * 1.25)
      : clampNumber(window.innerHeight - getHeaderHeight() - 190, 420, 820)) - gallerySheetPad * 2;
    const gap = compact ? 10 : clampNumber(outerWidth * 0.012, 10, 18);
    const markRatio = width < 600 ? 2.4 : 0.72;

    const pages = paginateGallery(cardRatios, markRatio, width, budget, gap);
    if (!pages) return;
    pages.forEach((page) => {
      const arranged = arrangeGalleryPage(cardRatios.slice(page.start, page.end), markRatio, width, budget, gap);
      page.order = (arranged ? arranged.order : cardRatios.slice(page.start, page.end).map((_, k) => k)).map((k) => page.start + k);
      page.plan = arranged ? arranged.plan : page.plan;
    });

    const key = pages.map((page) => page.order.join(".")).join("|");
    if (key !== pageKey) {
      pageKey = key;
      track.replaceChildren(...pages.map((page, index) => {
        const sheet = document.createElement("div");
        sheet.className = "gallery-sheet";
        sheet.setAttribute("role", "group");
        sheet.setAttribute("aria-label", `${index + 1} / ${pages.length}`);
        sheet.append(...page.order.map((i) => cards[i]));
        const mark = document.createElement("div");
        mark.className = "sheet-mark";
        mark.setAttribute("aria-hidden", "true");
        mark.innerHTML = `<b>${pad(index + 1)}</b><span>/ ${pad(pages.length)}</span>`;
        sheet.append(mark);
        return sheet;
      }));
      sheets = [...track.children];
      pagesBox.innerHTML = pages
        .map((_, i) => `<button type="button" data-page="${i}">${pad(i + 1)}</button>`)
        .join("");
      pageButtons = [...pagesBox.children];
    }

    pages.forEach((page, index) => {
      const ratios = [...page.order.map((i) => cardRatios[i]), markRatio];
      applyGallerySheet(sheets[index], ratios, page.plan, width, gap);
    });

    // Stay on the page that holds the work that was in view.
    const keep = anchor ? Math.max(0, sheets.findIndex((sheet) => sheet.contains(anchor))) : 0;
    track.scrollTo({ left: keep * outerWidth, behavior: "auto" });
    show(keep);
    warm();
  };

  track.addEventListener("scroll", () => {
    sync();
    warm();
  }, { passive: true });
  nav.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.page) goTo(Number(button.dataset.page));
    if (button.dataset.step) goTo(currentIndex() + Number(button.dataset.step));
  });
  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      goTo(currentIndex() + (event.key === "ArrowRight" ? 1 : -1));
    }
  });

  let layoutTimer = 0;
  let lastWidth = 0;
  let lastHeight = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(layoutTimer);
    layoutTimer = window.setTimeout(() => {
      // Mobile browsers fire resize when the toolbar shows/hides; ignore
      // small height-only changes so pages don't reshuffle while scrolling.
      if (window.innerWidth === lastWidth && Math.abs(window.innerHeight - lastHeight) < 120) return;
      lastWidth = window.innerWidth;
      lastHeight = window.innerHeight;
      layout();
    }, 120);
  });
  lastWidth = window.innerWidth;
  lastHeight = window.innerHeight;
  layout();
  setupAutoAdvance(gallery, () => goTo(currentIndex() + 1), 8000, nav);
}

// Project image carousels: native horizontal scroll with snap points (so
// trackpad and touch swipes page through), plus arrow buttons, arrow keys
// and a position indicator.
function setupCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const dots = [...carousel.querySelectorAll(".carousel-dots i")];
    const count = track?.children.length || 0;
    if (!track || count < 2) return;

    const currentIndex = () => Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    const goTo = (index, instant = false) => {
      const target = ((index % count) + count) % count;
      track.scrollTo({ left: target * track.clientWidth, behavior: instant || motionQuery.matches ? "auto" : "smooth" });
    };
    const sync = () => {
      const index = currentIndex();
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
    };

    track.addEventListener("scroll", sync, { passive: true });
    carousel.querySelectorAll("[data-carousel-step]").forEach((button) => {
      button.addEventListener("click", () => goTo(currentIndex() + Number(button.dataset.carouselStep)));
    });
    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        goTo(currentIndex() + (event.key === "ArrowRight" ? 1 : -1));
      }
    });
    window.addEventListener("resize", () => goTo(currentIndex(), true));
    sync();
    setupAutoAdvance(carousel, () => goTo(currentIndex() + 1), 5000);
  });
}

function setupReveal() {
  const targets = document.querySelectorAll("[data-reveal], .music-item, .illustration-card");

  if (!root.classList.contains("motion") || !("IntersectionObserver" in window)) {
    targets.forEach((node) => node.classList.add("is-inview"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      let order = 0;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.style.setProperty("--reveal-delay", `${Math.min(order, 6) * 70}ms`);
        entry.target.classList.add("is-inview");
        observer.unobserve(entry.target);
        order += 1;
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  targets.forEach((node) => observer.observe(node));
}

function setupScrollSpy() {
  const links = new Map(
    [...document.querySelectorAll('.nav a[href^="#"]')].map((link) => [link.getAttribute("href").slice(1), link]),
  );
  const sections = [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const visible = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.add(entry.target.id);
        } else {
          visible.delete(entry.target.id);
        }
      });

      const current = sections.find((section) => visible.has(section.id))?.id;
      links.forEach((link, id) => link.classList.toggle("is-current", id === current));
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

function layoutIllustrationMasonry() {
  const grid = document.querySelector(".illustration-masonry");
  if (!grid) return;

  const cards = [...grid.querySelectorAll(".illustration-card")];
  const styles = window.getComputedStyle(grid);
  const rowHeight = Number.parseFloat(styles.gridAutoRows);
  const rowGap = Number.parseFloat(styles.rowGap);

  if (!rowHeight) return;

  // Cards are top-aligned, so their height doesn't depend on the current span:
  // measure in place and only write spans that changed. Resetting every span
  // first made the page height jump on each image load, which re-triggered
  // scroll snapping.
  const spans = cards.map((card) => {
    const cardHeight = card.getBoundingClientRect().height;
    return `span ${Math.max(1, Math.ceil((cardHeight + rowGap) / (rowHeight + rowGap)))}`;
  });

  cards.forEach((card, index) => {
    if (card.style.gridRowEnd !== spans[index]) {
      card.style.gridRowEnd = spans[index];
    }
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
  if (!button) {
    if (!event.target.closest(".toolbox-wrap")) {
      closeToolbox();
    }
    return;
  }

  const action = button.dataset.action;

  if (action === "copy-email") {
    copyEmail();
  }

  if (action === "toggle-bgm") {
    closeToolbox();
    dismissBgmGuide();
    toggleBgmMute();
  }

  if (action === "toggle-toolbox") {
    toggleToolbox();
  }

  if (action === "theme") {
    closeToolbox();
    toggleTheme();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeToolbox();
  }
});

applyLanguage(readStorage("resume-language") || "zh");
setupGallery();
setupScrollState();
setupHeroFall();
setupPageMorph();
setupPaging();
setupReveal();
setupScrollSpy();
setupIllustrationMasonry();
setupCarousels();
setupLocalTime();
setupBgm();
setupBgmGuide();
setupBgmHint();
