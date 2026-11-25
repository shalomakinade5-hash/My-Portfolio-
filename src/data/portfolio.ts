export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  status: 'Live' | 'In Development' | 'OPay Hackathon Project' | 'PayPal Hackathon Project';
  statusTone: 'success' | 'development' | 'hackathon';
  launchNote?: string;
  tractionNote?: string;
  tagline?: string;
  url?: string;
  ctaLabel?: string;
  githubUrl?: string;
  accent: 'blue' | 'violet' | 'cyan';
  summary: string;
  highlights?: string[];
  architectureNote?: string;
  subComponents?: {
    name: string;
    role: string;
    points: string[];
  }[];
  visualType:
    | 'camera-busy'
    | 'workly'
    | 'fiscal-suite'
    | 'wuerld-boost'
    | 'aivora'
    | 'yapo'
    | 'paylens';
  recognitionTag?: string;
}

export const PERSONAL = {
  fullName: 'Akinade Shalom Eniola',
  shortLines: ['AKINADE', 'SHALOM', 'ENIOLA'] as const,
  headline: 'I build things people can actually use.',
  descriptor: 'Full-Stack Developer. Product Builder. Computer Science Student.',
  education: 'Computer Science, Federal University of Lafia (FULAFIA), Nigeria.',
  intro:
    "I'm Akinade Shalom Eniola, a 19-year-old full-stack developer and product builder passionate about technology, software development, and turning ideas into useful digital products. I enjoy exploring emerging technologies, solving practical problems, and building products that create meaningful value.",
  email: 'akinadeshalom2@gmail.com',
  phoneDisplay: '+234 902 484 1176',
  phoneHref: 'tel:+2349024841176',
  githubUrl: 'https://github.com/shalomakinade5-hash',
  linkedinUrl: 'https://www.linkedin.com/in/shalom-akinade-457240321',
};

export const ABOUT_INTERESTS = [
  {
    index: '01',
    title: 'Full-stack development',
    detail: 'Connecting responsive user interfaces with reliable server logic, APIs, and data layers.',
  },
  {
    index: '02',
    title: 'Product development',
    detail: 'Shaping raw ideas into structured, usable software products built for real people.',
  },
  {
    index: '03',
    title: 'Artificial intelligence',
    detail: 'Exploring practical AI workflows that augment everyday planning and productivity.',
  },
  {
    index: '04',
    title: 'Emerging technologies',
    detail: 'Testing modern web tooling and patterns that make software faster and clearer.',
  },
  {
    index: '05',
    title: 'Software engineering',
    detail: 'Writing maintainable TypeScript and component architectures that hold up in production.',
  },
  {
    index: '06',
    title: 'Problem-solving',
    detail: 'Breaking down ambiguous challenges into concrete, shippable technical steps.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'camera-busy',
    number: '01',
    title: 'Camera Busy',
    category: 'Web Application | Webcam Diagnostics | Troubleshooting',
    status: 'In Development',
    statusTone: 'development',
    url: 'https://camera-busy24.vercel.app/',
    ctaLabel: 'View Website',
    githubUrl: 'https://github.com/shalomakinade5-hash/Camera-busy-.git',
    accent: 'blue',
    summary:
      'Camera Busy is a paid, web-based webcam diagnostic and troubleshooting tool that helps users identify and resolve computer camera problems—guiding them through troubleshooting and retesting their webcams.',
    highlights: [
      'Investigates cameras already being used by another application, browser permission restrictions, black camera screens, access problems, Windows privacy settings, and driver conflicts',
      'One-time $5 payment for paid diagnostic functionality via Polar payment integration',
      'Server-side payment verification, webhook integration, signature verification, and secure paid-access entitlement handling',
    ],
    architectureNote:
      'Active development: Polar payment-to-entitlement and webhook verification workflows are implemented for testing and are not yet claimed as end-to-end production-verified.',
    visualType: 'camera-busy',
  },
  {
    id: 'workly',
    number: '02',
    title: 'Workly',
    category: 'Productivity | Web Application',
    status: 'Live',
    statusTone: 'success',
    launchNote: 'Launched First Week of November 2026',
    tractionNote: '30+ Registered Users',
    url: 'https://get-workly.vercel.app/',
    ctaLabel: 'Visit Workly',
    accent: 'violet',
    summary:
      'Workly is a productivity platform designed to help people organise responsibilities, manage tasks and goals, plan their weeks, and maintain daily focus.',
    highlights: [
      'Task management and goal management connected to weekly planning',
      'Daily focus workflows to turn weekly plans into actionable work',
      'AI-assisted productivity features',
      'Launched first week of November 2026 with 30+ registered users',
    ],
    architectureNote:
      'Live launched product built to help users turn weekly plans and goals into structured daily execution.',
    visualType: 'workly',
  },
  {
    id: 'fiscal-pulse-cash-water-flow',
    number: '03',
    title: 'FiscalPulse + Cash Water Flow',
    category: 'Public Finance | Financial Intelligence | Decision Support',
    status: 'Live',
    statusTone: 'success',
    url: 'https://fiscal-pulse-and-cash-flow-em76.vercel.app/',
    ctaLabel: 'Open Live Platform',
    accent: 'cyan',
    recognitionTag: 'Build4MDA — Semi-Finalist',
    summary:
      'FiscalPulse and Cash Water Flow are two interconnected components of one integrated public-fiscal decision-support platform—where FiscalPulse generates Nigerian government revenue projections that Cash Water Flow uses to support expenditure prioritisation.',
    subComponents: [
      {
        name: 'FiscalPulse',
        role: 'Public Revenue Forecasting (Nigeria)',
        points: [
          'Low, Expected, and High revenue scenarios',
          'Deterministic forecasting',
          'Shock simulation',
        ],
      },
      {
        name: 'Cash Water Flow',
        role: 'Expenditure Prioritisation & Allocation',
        points: [
          'Prioritises public expenditure using projected cash',
          'Identifies funded and deferred obligations',
          'Supports three allocation strategies & threshold alerts',
        ],
      },
    ],
    architectureNote:
      'Recognised as Build4MDA — Semi-Finalist as a unified public-finance decision-support platform.',
    visualType: 'fiscal-suite',
  },
  {
    id: 'wuerld-boost',
    number: '04',
    title: 'Wuerld Boost',
    category: 'Social Media Marketing | Digital Platform',
    status: 'Live',
    statusTone: 'success',
    url: 'https://wuerldboost.online/',
    ctaLabel: 'Visit Wuerld Boost',
    accent: 'blue',
    summary:
      'Wuerld Boost is a live Social Media Marketing (SMM) panel providing a digital platform for accessing social media marketing and growth services.',
    highlights: [
      'Dedicated Social Media Marketing (SMM) panel interface',
      'Live digital platform accessible at wuerldboost.online',
    ],
    visualType: 'wuerld-boost',
  },
  {
    id: 'aivora',
    number: '05',
    title: 'AIVORA',
    category: 'AI | Technology | Product Development',
    status: 'In Development',
    statusTone: 'development',
    accent: 'violet',
    summary:
      'AIVORA is my AI tool, which I am currently developing as an active product build.',
    visualType: 'aivora',
  },
  {
    id: 'yapo',
    number: '06',
    title: 'YAPO',
    category: 'Hackathon Project',
    status: 'OPay Hackathon Project',
    statusTone: 'hackathon',
    accent: 'cyan',
    summary:
      'YAPO is the project we built for the OPay Hackathon—proposing a dollar account within OPay as a hackathon entry.',
    visualType: 'yapo',
  },
  {
    id: 'paylens',
    number: '07',
    title: 'PayLens',
    category: 'Hackathon Project | Fintech | AI',
    status: 'PayPal Hackathon Project',
    statusTone: 'hackathon',
    tagline: 'Recovery starts with clarity.',
    accent: 'blue',
    summary:
      'PayLens is my PayPal Hackathon project, built as a hackathon entry around the tagline "Recovery starts with clarity."',
    visualType: 'paylens',
  },
];

export const RECOGNITION_ITEMS = [
  {
    id: 'build4mda',
    badge: 'Build4MDA — Semi-Finalist',
    heading: 'Public Finance Decision Support',
    context: 'FiscalPulse & Cash Water Flow',
    description:
      'Reached the Build4MDA semi-finals with FiscalPulse and Cash Water Flow—an integrated public-finance solution pairing government revenue forecasting with structured expenditure allocation.',
    link: 'https://fiscal-pulse-and-cash-flow-em76.vercel.app/',
    linkLabel: 'Explore the Live Platform',
  },
  {
    id: 'yapo-opay',
    badge: 'Hackathon & Competition Participation',
    heading: 'YAPO — OPay Competition',
    context: 'Proposed Dollar Account in OPay',
    description:
      'Built YAPO for the OPay competition, proposing a dollar account within OPay and collaborating under competition timelines to shape a practical fintech solution.',
  },
];

export interface SkillGroup {
  group: string;
  summary: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    group: 'Frontend',
    summary: 'Interfaces, interactive layouts, and component systems',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    summary: 'Server logic, APIs, and webhook workflows',
    items: ['Node.js'],
  },
  {
    group: 'Databases',
    summary: 'Application data, auth, and real-time storage',
    items: ['Firebase'],
  },
  {
    group: 'Development Tools',
    summary: 'Version control, editing, and cloud deployment',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
];

export const ALL_SKILLS_TICKER = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Firebase',
  'Git',
  'GitHub',
  'VS Code',
  'Vercel',
];

export const CAPABILITIES = [
  {
    num: '01',
    title: 'Frontend development',
    detail: 'Responsive, accessible interfaces built with React, Next.js, TypeScript, and Tailwind CSS.',
  },
  {
    num: '02',
    title: 'Full-stack web development',
    detail: 'End-to-end web applications connecting client experiences with Node.js and backend services.',
  },
  {
    num: '03',
    title: 'Building and deploying web applications',
    detail: 'Taking software from local development through GitHub workflows to live deployments on Vercel.',
  },
  {
    num: '04',
    title: 'API integrations',
    detail: 'Connecting third-party services, REST endpoints, and asynchronous webhooks reliably.',
  },
  {
    num: '05',
    title: 'Authentication and database integration',
    detail: 'Setting up user accounts, persisted application state, and structured data access with Firebase.',
  },
  {
    num: '06',
    title: 'Payment integrations',
    detail: 'Implementing checkout flows, payment gateways, and webhook verification with accurate sandbox/live discipline.',
  },
  {
    num: '07',
    title: 'Product thinking',
    detail: 'Designing features around real user workflows rather than disconnected technical demos.',
  },
  {
    num: '08',
    title: 'Problem-solving',
    detail: 'Diagnosing edge cases, iterating quickly, and shipping practical fixes when things break.',
  },
];

export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Computer Science at FULAFIA',
    subtitle: 'Federal University of Lafia, Nigeria',
    detail:
      'Studying Computer Science while grounding core algorithmic and software engineering concepts in hands-on product building.',
  },
  {
    step: '02',
    title: 'Practical Project Foundations',
    subtitle: 'Learning by Shipping',
    detail:
      'Developing technical skills across HTML, CSS, JavaScript, TypeScript, React, Next.js, and Node.js through real builds.',
  },
  {
    step: '03',
    title: 'Building & Launching Workly',
    subtitle: 'Productivity Platform',
    detail:
      'Created and deployed Workly for task management, goal tracking, and weekly planning—growing to 20+ registered users.',
  },
  {
    step: '04',
    title: 'Working on Camera Busy',
    subtitle: 'Checkout & Webhook Engineering',
    detail:
      'Built Camera Busy around camera workflows, checkout flows, payment integration, and webhook handling.',
  },
  {
    step: '05',
    title: 'FiscalPulse & Cash Water Flow',
    subtitle: 'Public Finance Decision Support',
    detail:
      'Developed FiscalPulse for government revenue forecasting alongside Cash Water Flow for expenditure allocation.',
  },
  {
    step: '06',
    title: 'Developing Wuerld Boost',
    subtitle: 'Live SMM Panel',
    detail:
      'Built and launched Wuerld Boost as a live social media marketing panel for growth and marketing services.',
  },
  {
    step: '07',
    title: 'Build4MDA Semi-Finals',
    subtitle: 'Recognition & Momentum',
    detail:
      'Reached the Build4MDA semi-finals with FiscalPulse and Cash Water Flow, alongside building YAPO (proposing a dollar account) for the OPay competition.',
  },
];
