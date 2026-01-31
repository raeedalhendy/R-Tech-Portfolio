export const projects = [
  {
    id: "quran-app",
    type: "mobile",
    tag: { en: "Android App", ar: "تطبيق أندرويد" },
    title: { en: "Quran Challenges", ar: "تطبيق قرآن بتحديات" },
    desc: {
      en: "A Quran app with daily challenges, tasks, and progress tracking. Built with offline-first storage.",
      ar: "تطبيق قرآن فيه تحديات ومهام يومية مع تتبع للتقدم. مبني بتخزين أوفلاين.",
    },
    stack: ["React Native", "SQLite", "UI/UX", "Offline-first"],
    image: "/moben.jpg",
    // للموبايل: زر العرض رح يفتح صفحة داخلية (/projects/:id)
    liveUrl: "#",
    codeUrl: "#",
    screenshots: [
      "/moben (1).jpg",
      "/moben (2).jpg",
      "/moben (3).jpg",
      "/moben (4).jpg",
      "/moben (5).jpg",
      "/moben (6).jpg",
    ],
  },

  {
    id: "ledger-app",
    type: "mobile",
    tag: { en: "Android App", ar: "تطبيق أندرويد" },
    title: { en: "Ledger & Debts Book", ar: "دفتر ديون ومحاسبة" },
    desc: {
      en: "Accounting & debt tracking app with distributor modes and detailed records. Fully offline with SQLite.",
      ar: "تطبيق محاسبة ودفتر ديون مع أوضاع للموزّع وسجلات تفصيلية. أوفلاين بالكامل مع SQLite.",
    },
    stack: ["React Native", "SQLite", "Forms", "Reports"],
    image: "/daftar.jpg",
    liveUrl: "#",
    codeUrl: "#",
    screenshots: [
      "/daftar (1).jpg",
      "/daftar (2).jpg",
      "/daftar (3).jpg",
      "/daftar (4).jpg",
      "/daftar (5).jpg",
      "/daftar (6).jpg",
    ],
  },

  {
    id: "crafts-nearby",
    type: "mobile",
    tag: { en: "Mobile + Backend", ar: "موبايل + باك اند" },
    title: { en: "Qareeb", ar: "تطبيق قريب" },
    desc: {
      en: "A location-based app that helps users find the nearest craftsmen in Syria. Includes a Laravel backend and MySQL database.",
      ar: "تطبيق لتجميع الحرفيين بسوريا بهدف مساعدة الناس تلاقي أقرب حرفي. مع باك اند Laravel وقاعدة بيانات MySQL.",
    },
    stack: ["React Native", "Laravel", "MySQL", "Maps", "API"],
    image: "/qareeb.jpg",
    liveUrl: "#",
    codeUrl: "#",
    screenshots: [
      "/qareeb1.jpg",
      "/qareeb2.jpg",
      "/qareeb3.jpg",
      "/qareeb4.jpg",
      "/qareeb5.jpg",
      "/qareeb6.jpg",
    ],
  },

  {
    id: "mazare3na-app",
    type: "mobile",
    tag: { en: "Mobile + Backend", ar: "موبايل + باك اند" },
    title: { en: "Mazare3na", ar: "مزارعنا" },
    desc: {
      en: "A booking/discovery app for farms and venues (pools & more). Backend + MySQL for listings, availability, and management.",
      ar: "تطبيق لاكتشاف وحجز المزارع والأماكن (مسابح وغيرها). مع باك اند وMySQL للإعلانات والتوفر والإدارة.",
    },
    stack: ["React Native", "Backend", "MySQL", "Admin", "API"],
    image: "/mazarena.jpg",
    liveUrl: "#",
    codeUrl: "#",
    screenshots: [
      "/mazarena (1).jpg",
      "/mazarena (2).jpg",
      "/mazarena (3).jpg",
      "/mazarena (4).jpg",

    ],
  },

  {
    id: "my-clinic",
    type: "mobile",
    tag: { en: "Clinic System", ar: "نظام عيادة" },
    title: { en: "My Clinic (Dentist)", ar: "عيادتي (طبيب أسنان)" },
    desc: {
      en: "Dental clinic management: appointments, invoices, treatments, and interactive tooth chart for treatment planning.",
      ar: "نظام لإدارة عيادة الأسنان: مواعيد، فواتير، علاجات، وخطة علاج على أسنان تفاعلية.",
    },
    stack: ["React Native", "UI", "Invoices", "Scheduling"],
    image: "/clinic.png",
    liveUrl: "#",
    codeUrl: "#",
    screenshots: [
      "/clinic (1).png",
      "/clinic (2).png",
      "/clinic (3).png",
      "/clinic (4).png",
      "/clinic (5).png",
      "/clinic (6).png",
      "/clinic (7).png",
    ],
  },

  {
    id: "mazare3na-web",
    type: "web",
    tag: { en: "Web App", ar: "موقع ويب" },
    title: { en: "Mazare3na Website", ar: "موقع مزارعنا" },
    desc: {
      en: "Web version of Mazare3na: listings, details, booking flow, and an admin-friendly structure.",
      ar: "نسخة ويب من مزارعنا: قوائم، تفاصيل، تدفق حجز، وبنية مناسبة للإدارة.",
    },
    stack: ["React", "Vite", "Tailwind", "API"],
    image: "/mweb.png",
    // الويب: يفتح رابط خارجي
    liveUrl: "https://mazarena.sy",
    codeUrl: "#",
  },

  // =========================
  // UI/UX Projects
  // =========================

  {
    id: "uiux-mazare3na-case",
    type: "uiux",
    tag: { en: "UI/UX Case Study", ar: " UI/UX" },
    title: { en: "Mazare3na – UI/UX Case Study", ar: "مزارعنا – UI/UX" },
    desc: {
      en: "Research → user flows → wireframes → UI system → final screens for the Mazare3na booking experience.",
      ar: "بحث → مسارات المستخدم → وايرفريم → نظام تصميم → شاشات نهائية لتجربة حجز مزارعنا.",
    },
    stack: ["Research", "User Flows", "Wireframes", "UI System", "Prototype"],
    image: "/mazarenaUI.png",
    // UI/UX: يفتح رابط خارجي (Case Study / Figma)
    liveUrl: "https://www.figma.com/design/QT7RBtu2Zb0UKoDnzeN1gj/%D9%85%D8%B2%D8%A7%D8%B1%D8%B9%D9%86%D8%A7?node-id=0-1&t=cO688CeN0ukvE0aF-1",
    codeUrl: "#",
  },

  {
    id: "uiux-clinic-case",
    type: "uiux",
    tag: { en: "UI/UX Case Study", ar: "  UI/UX" },
    title: { en: "Clinic – UI/UX Case Study", ar: "العيادة –  UI/UX" },
    desc: {
      en: "Designing an appointment + invoices flow with clear information hierarchy and faster daily operations.",
      ar: "تصميم تدفق مواعيد + فواتير بهرمية معلومات واضحة لتسريع العمل اليومي.",
    },
    stack: ["UX", "Information Architecture", "UI", "Design System"],
    image: "/clinicUI.png",
    liveUrl: "https://www.figma.com/design/koyVRIjl4BA3sG2xxN3QqI/My-Clinic?node-id=0-1&t=fXz8o1W7KW7i33GV-1",
    codeUrl: "#",
  },
];
