export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: 'web' | 'bot' | 'ai' | 'journal' | 'crypto' | 'utility';
  domain?: string;
  url?: string;
  status: 'active' | 'maintained' | 'archived' | 'experimental';
}

export const projects: Project[] = [
  // Institutional & Admin Systems
  {
    id: 'simpmu-dpmp2',
    title: 'SIMPMU DPMP2',
    description: 'Sistem Informasi Penjaminan Mutu untuk perguruan tinggi. Monitoring tridarma, evaluasi, review UJM.',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'Playwright'],
    category: 'web',
    domain: 'dpmp2.dwibudi.my.id',
    url: 'https://dpmp2.dwibudi.my.id',
    status: 'active'
  },
  {
    id: 'lk-ukms',
    title: 'LK UKMs',
    description: 'Sistem proposal/LPJ & admin UKM dengan fitur PDF export, QR code, dan PWA.',
    techStack: ['PHP', 'MySQL', 'Composer', 'TCPDF', 'PWA'],
    category: 'web',
    domain: 'lk.pjdigital.top',
    url: 'https://lk.pjdigital.top',
    status: 'active'
  },
  {
    id: 'ruang-belajar-terbuka',
    title: 'Ruang Belajar Terbuka',
    description: 'LMS / e-learning platform dengan Google OAuth dan AI-powered content generation.',
    techStack: ['PHP', 'MySQL', 'Google OAuth', 'OpenAI API', 'Quill'],
    category: 'web',
    domain: 'dwibudi.my.id',
    url: 'https://dwibudi.my.id',
    status: 'active'
  },
  {
    id: 'aidis-disposisi',
    title: 'AIDIS Disposisi Surat',
    description: 'Sistem disposisi surat untuk manajemen dokumen institusional.',
    techStack: ['PHP', 'Composer'],
    category: 'web',
    domain: 'aidis.my.id',
    url: 'https://aidis.my.id',
    status: 'active'
  },
  {
    id: 'al-barokah',
    title: 'Al-Barokah',
    description: 'Website & admin masjid untuk manajemen kegiatan dan informasi.',
    techStack: ['PHP', 'Composer'],
    category: 'web',
    domain: 'al-barokah.my.id',
    url: 'https://al-barokah.my.id',
    status: 'active'
  },
  {
    id: 'simpelu',
    title: 'SIMPEL-U',
    description: 'Web application untuk manajemen data dan administrasi.',
    techStack: ['PHP'],
    category: 'web',
    domain: 'simpelu.my.id',
    url: 'https://simpelu.my.id',
    status: 'active'
  },
  {
    id: 'shm-my-id',
    title: 'SHM My ID',
    description: 'Platform manajemen SHM dengan database MariaDB dan PHP custom.',
    techStack: ['PHP', 'MariaDB', 'Nginx'],
    category: 'web',
    domain: 'shm.my.id',
    url: 'https://shm.my.id',
    status: 'active'
  },

  // AI & Multi-Agent Systems
  {
    id: 'slack-multi-agent',
    title: 'Slack Multi-Agent Bridge',
    description: 'Orchestration multi-agent via Slack untuk koordinasi AI agents.',
    techStack: ['TypeScript', 'Express', 'SQLite', 'Pi SDK', 'Slack API'],
    category: 'ai',
    domain: 'bot.pjdigital.top',
    status: 'active'
  },
  {
    id: 'x-creator-agent',
    title: 'X Creator Agent',
    description: 'AI writing tool dengan Pi Coding Agent untuk content creation.',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Prisma', 'Pi SDK'],
    category: 'ai',
    domain: 'nanariset.my.id/xcreator',
    status: 'experimental'
  },
  {
    id: 'pi-meteora',
    title: 'Pi Meteora',
    description: 'Multi-agent trading decision layer untuk Meteora DLMM (Solana DeFi).',
    techStack: ['TypeScript', 'Pi SDK', 'Solana', 'Meteora', 'Jupiter'],
    category: 'ai',
    status: 'active'
  },
  {
    id: 'socai',
    title: 'SocAI',
    description: 'Autonomous AI social content automation platform.',
    techStack: ['Node.js', 'AI'],
    category: 'ai',
    domain: 'socai.my.id',
    url: 'https://socai.my.id',
    status: 'active'
  },
  {
    id: 'vibeplan-ai',
    title: 'VibePlan AI',
    description: 'AI planning application dengan Next.js frontend dan Laravel backend.',
    techStack: ['Next.js', 'Laravel', 'AI'],
    category: 'ai',
    domain: 'vibeplan.socai.my.id',
    url: 'https://vibeplan.socai.my.id',
    status: 'active'
  },
  {
    id: 'ai-study-buddy',
    title: 'AI Study Buddy',
    description: 'AI learning assistant dengan Groq API untuk pembelajaran interaktif.',
    techStack: ['Laravel', 'MongoDB', 'Groq API'],
    category: 'ai',
    domain: 'studdybuddy.socai.my.id',
    url: 'https://studdybuddy.socai.my.id',
    status: 'active'
  },
  {
    id: 'quizify-socai',
    title: 'Quizify SocAI',
    description: 'Quiz & learning app dengan Laravel dan fitur interaktif.',
    techStack: ['Laravel', 'PHP', 'Vite'],
    category: 'ai',
    domain: 'quizify.socai.my.id',
    url: 'https://quizify.socai.my.id',
    status: 'active'
  },
  {
    id: 'eduguide-socai',
    title: 'EduGuide SocAI',
    description: 'Education guide app dengan split frontend/backend architecture.',
    techStack: ['Frontend', 'Backend', 'Reverse Proxy'],
    category: 'ai',
    domain: 'eduguide.socai.my.id',
    url: 'https://eduguide.socai.my.id',
    status: 'active'
  },
  {
    id: 'brainboard-socai',
    title: 'Brainboard SocAI',
    description: 'Laravel web app untuk SocAI ecosystem.',
    techStack: ['Laravel', 'PHP', 'Composer', 'Vite'],
    category: 'ai',
    domain: 'brainboard.socai.my.id',
    url: 'https://brainboard.socai.my.id',
    status: 'active'
  },

  // Messaging & Bot Platforms
  {
    id: 'wa-dwibudi',
    title: 'WA Dwibudi Multi-Device',
    description: 'WhatsApp gateway dengan Baileys untuk multi-device messaging.',
    techStack: ['Node.js', 'Express', 'Baileys', 'MariaDB'],
    category: 'bot',
    domain: 'wa.dwibudi.my.id',
    url: 'https://wa.dwibudi.my.id',
    status: 'active'
  },
  {
    id: 'simpelu-telegram',
    title: 'SIMPEL-U Telegram Bot',
    description: 'Telegram bot dengan Pi SDK untuk automation.',
    techStack: ['Node.js', 'TypeScript', 'Python', 'Pi SDK'],
    category: 'bot',
    domain: 'bot.shm.my.id',
    status: 'active'
  },
  {
    id: 'cmaestro',
    title: 'Cmaestro BengkelBot',
    description: 'Bot & web service untuk manajemen bengkel.',
    techStack: ['Node.js', 'Apache Proxy'],
    category: 'bot',
    domain: 'cmaestro.my.id',
    url: 'https://cmaestro.my.id',
    status: 'active'
  },
  {
    id: 'botjb-nanariset',
    title: 'BotJB Nanariset',
    description: 'Bot & web utility untuk Nanariset ecosystem.',
    techStack: ['Static', 'PHP'],
    category: 'bot',
    domain: 'botjb.nanariset.my.id',
    status: 'active'
  },

  // Dashboards & Finance
  {
    id: 'lelangu-bitcoin',
    title: 'Lelangu Bitcoin Chart',
    description: 'Crypto chart dashboard real-time dengan Tokocrypto API.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Tokocrypto API'],
    category: 'crypto',
    domain: 'lelangu.my.id',
    url: 'https://lelangu.my.id',
    status: 'active'
  },
  {
    id: 'dompet-bitget',
    title: 'Dompet Bitget',
    description: 'Crypto wallet & dashboard untuk monitoring portfolio.',
    techStack: ['Node.js', 'Fullstack'],
    category: 'crypto',
    domain: 'dompet.lelangu.my.id',
    status: 'active'
  },
  {
    id: 'sjm-lelangu',
    title: 'SJM Lelangu',
    description: 'Platform lelang online dengan PHP Native.',
    techStack: ['PHP', 'MySQL'],
    category: 'web',
    domain: 'sjmlelang.com',
    url: 'https://sjmlelang.com',
    status: 'active'
  },
  {
    id: 'claw-invoice',
    title: 'CLAW Invoice',
    description: 'Invoice workspace untuk manajemen faktur.',
    techStack: ['Static', 'PHP', 'API'],
    category: 'utility',
    domain: 'inv.nanariset.my.id',
    status: 'active'
  },

  // Machine Learning
  {
    id: 'fetal-pjd',
    title: 'Fetal PJD',
    description: 'Prediksi risiko kehamilan (maternal/fetal) dengan ML model.',
    techStack: ['Python', 'Flask', 'scikit-learn', 'SHAP', 'Gunicorn'],
    category: 'ai',
    domain: 'fetal.pjdigital.top',
    url: 'https://fetal.pjdigital.top',
    status: 'active'
  },

  // Content & SEO
  {
    id: 'eclipsetrack',
    title: 'EclipseTrack',
    description: 'SEO content site dengan Supabase dan Google Search Console.',
    techStack: ['PHP', 'Supabase', 'Google Search Console'],
    category: 'web',
    domain: 'eclipsetrack.my.id',
    url: 'https://eclipsetrack.my.id',
    status: 'active'
  },
  {
    id: 'nana-research',
    title: 'Nana Research',
    description: 'Landing page & URL shortener dengan file-based storage.',
    techStack: ['PHP', 'Tailwind', 'Font Awesome'],
    category: 'utility',
    domain: 'nanariset.my.id',
    url: 'https://nanariset.my.id',
    status: 'active'
  },

  // Social Impact
  {
    id: 'safesphere',
    title: 'SafeSphere',
    description: 'Anti-bullying reporting app untuk pelaporan kekerasan.',
    techStack: ['Static', 'Node.js', 'Express', 'SQLite'],
    category: 'web',
    domain: 'safesphere.my.id',
    url: 'https://safesphere.my.id',
    status: 'active'
  },
  {
    id: 'arisan-pkk',
    title: 'Arisan PKK',
    description: 'PKK activity app untuk manajemen kegiatan PKK.',
    techStack: ['Vite', 'TypeScript', 'Node.js'],
    category: 'web',
    domain: 'arisanpkk.web.id',
    url: 'https://arisanpkk.web.id',
    status: 'active'
  },
  {
    id: 'kausar-leather',
    title: 'Kausar Leather',
    description: 'Commerce landing & admin untuk produk kulit.',
    techStack: ['PHP', 'MySQL'],
    category: 'web',
    domain: 'kl.socai.my.id',
    url: 'https://kl.socai.my.id',
    status: 'active'
  },

  // Journal Platforms
  {
    id: 'dief-shm',
    title: 'DIEF SHM Publisher',
    description: 'Platform jurnal ilmiah dengan OJS-style architecture.',
    techStack: ['PHP', 'OJS', 'Nginx'],
    category: 'journal',
    domain: 'dief.shmpublisher.com',
    status: 'active'
  },
  {
    id: 'jogasto-shm',
    title: 'JOGASTO SHM Publisher',
    description: 'Platform jurnal ilmiah untuk publikasi akademik.',
    techStack: ['PHP', 'OJS', 'Nginx'],
    category: 'journal',
    domain: 'jogasto.shmpublisher.com',
    status: 'active'
  },
  {
    id: 'johmpe-shm',
    title: 'JOHMPE SHM Publisher',
    description: 'Platform jurnal ilmiah untuk publikasi akademik.',
    techStack: ['PHP', 'OJS', 'Nginx'],
    category: 'journal',
    domain: 'johmpe.shmpublisher.com',
    status: 'active'
  },
  {
    id: 'joiser-shm',
    title: 'JOISER SHM Publisher',
    description: 'Platform jurnal ilmiah untuk publikasi akademik.',
    techStack: ['PHP', 'OJS', 'Nginx'],
    category: 'journal',
    domain: 'joiser.shmpublisher.com',
    status: 'active'
  },
  {
    id: 'joscex-shm',
    title: 'JOSCEX SHM Publisher',
    description: 'Platform jurnal ilmiah untuk publikasi akademik.',
    techStack: ['PHP', 'OJS', 'Nginx'],
    category: 'journal',
    domain: 'joscex.shmpublisher.com',
    status: 'active'
  },
  {
    id: 'josre-shm',
    title: 'JOSRE SHM Publisher',
    description: 'Platform jurnal ilmiah untuk publikasi akademik.',
    techStack: ['PHP', 'OJS', 'Nginx'],
    category: 'journal',
    domain: 'josre.shmpublisher.com',
    status: 'active'
  },
  {
    id: 'node-pjdigital',
    title: 'Node PJDigital',
    description: 'OJS-style publisher landing untuk PJDigital.',
    techStack: ['PHP', 'OJS', 'Nginx'],
    category: 'journal',
    domain: 'node.pjdigital.top',
    url: 'https://node.pjdigital.top',
    status: 'active'
  },
  {
    id: 'biro-jurnal',
    title: 'Biro Jurnal',
    description: 'Portal jurnal ilmiah untuk akses publik.',
    techStack: ['PHP', 'Nginx'],
    category: 'journal',
    domain: 'birojurnal.com',
    url: 'https://birojurnal.com',
    status: 'active'
  },
  {
    id: 'ibraa',
    title: 'IBRAA',
    description: 'Website organisasi dengan PHP application.',
    techStack: ['PHP', 'Nginx'],
    category: 'web',
    domain: 'ibraa.or.id',
    url: 'https://ibraa.or.id',
    status: 'active'
  },

  // Learning & Experiments
  {
    id: 'toko-curhat',
    title: 'Toko Curhat',
    description: 'Anonymous curhat app dengan Deno dan zero dependency.',
    techStack: ['Deno', 'Deno KV'],
    category: 'utility',
    status: 'archived'
  },
  {
    id: 'plk-app',
    title: 'PLK App',
    description: 'PKK activity PWA dengan TypeScript dan Turso.',
    techStack: ['Vite', 'TypeScript', 'Turso', 'PWA'],
    category: 'web',
    status: 'maintained'
  }
];

export const categories = [
  { id: 'all', label: 'Semua', icon: '🌐' },
  { id: 'web', label: 'Web App', icon: '💻' },
  { id: 'ai', label: 'AI / ML', icon: '🤖' },
  { id: 'bot', label: 'Bot', icon: '💬' },
  { id: 'journal', label: 'Jurnal', icon: '📚' },
  { id: 'crypto', label: 'Crypto', icon: '₿' },
  { id: 'utility', label: 'Utility', icon: '🔧' },
] as const;

export const techStacks = [
  'PHP', 'TypeScript', 'JavaScript', 'Python', 'Node.js',
  'Next.js', 'React', 'Laravel', 'Express', 'Vite',
  'MySQL', 'MariaDB', 'SQLite', 'Supabase', 'MongoDB', 'Turso',
  'Tailwind', 'Bootstrap', 'Pi SDK', 'OpenAI API', 'Solana',
  'Playwright', 'Flask', 'scikit-learn', 'Baileys', 'OJS'
] as const;
