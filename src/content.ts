export const site = {
  name: 'Samruddhi Patil',
  title: 'SOC Analyst · Application Security · Defensive Cybersecurity',
  location: 'Melbourne, Victoria, Australia',
  linkedin: 'https://www.linkedin.com/in/samruddhi-p-patil/',
  linkedinDisplay: 'linkedin.com/in/samruddhi-p-patil',
  github: 'https://github.com/samSecurity04',
  githubDisplay: 'github.com/samSecurity04',
  email: 'psamruddhi0804@gmail.com',
  resumePdf: '/Samruddhi_Patil_Resume.pdf',
  openToWork: true,
}

export const hero = {
  roles: ['SOC Analyst', 'Application Security', 'Threat Hunter', 'Malware Analyst'],
  headline: 'I detect threats before they become breaches.',
  subheading:
    'Cybersecurity professional with hands-on experience across application security, malware analysis, and SOC operations. Building real homelab environments on Apple Silicon — from Wazuh SIEM detection to SafeLine WAF defense.',
  seeking:
    'Open to SOC Analyst, Application Security, and security-focused technical roles across Australia.',
  ctaPrimary: 'Explore Labs',
  ctaSecondary: 'Download CV',
}

export const about = {
  photo: '/images/profile.jpg',
  title: 'Threat Profile',
  lead:
    'Cybersecurity professional with hands-on experience across application security, customer support, and technical troubleshooting, with a strong interest in SOC operations and defensive security. Experienced working in fast-paced support environments while continuously building practical cybersecurity skills through homelab projects and self-driven learning.',
  extended:
    'Recently built a Web Application Security Lab on Apple Silicon using Kali Linux, DVWA, Ubuntu Server, and SafeLine WAF, focused on attack simulation, reverse proxy security, rate limiting, and attack log analysis. Currently building a home SOC lab environment focused on SIEM tools, log monitoring, detection workflows, and hands-on security operations learning using platforms such as Splunk.',
  focusLabel: 'Mission focus',
  focusValue:
    'SOC operations, threat monitoring, application security, and defensive cybersecurity across Australia.',
  statChips: [
    'COMPTIA SECURITY+',
    'MASTER\'S IN CYBER SECURITY',
    'GOOGLE CYBERSECURITY',
    'OPEN TO WORK · MELBOURNE',
    'SIEM · THREAT HUNTING · INCIDENT RESPONSE',
    'MICROSOFT SC-900',
  ],
}

export type SkillCategory = {
  layer: string
  icon: 'shield' | 'network' | 'code' | 'ops'
  tags: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    layer: 'Detection & Response',
    icon: 'shield',
    tags: [
      'SIEM (Wazuh, Splunk)',
      'Threat Hunting',
      'Incident Response',
      'MITRE ATT&CK',
      'Log Analysis',
      'File Integrity Monitoring',
    ],
  },
  {
    layer: 'Application Security',
    icon: 'code',
    tags: [
      'OWASP Top 10',
      'WAF Configuration',
      'SQL Injection Testing',
      'XSS Analysis',
      'CASE-Java',
      'Reverse Proxy Security',
    ],
  },
  {
    layer: 'Network & Analysis',
    icon: 'network',
    tags: [
      'Wireshark',
      'Network Traffic Analysis',
      'Nmap Reconnaissance',
      'Network Security',
      'Windows Defender & Firewall',
    ],
  },
  {
    layer: 'Operations & Tools',
    icon: 'ops',
    tags: [
      'Kali Linux',
      'VMware Fusion (ARM64)',
      'Malware Analysis',
      'Hydra / Brute Force Detection',
      'LVM / Linux Troubleshooting',
      'Anti-virus Integration',
    ],
  },
]

export type ExperienceItem = {
  date: string
  title: string
  company: string
  location: string
  type: string
  narrative: string
  outcomes: string[]
  tools: string[]
}

export const experience: ExperienceItem[] = [
  {
    date: 'Mar 2024 — Present',
    title: 'Team Member',
    company: 'Woolworths Group',
    location: 'Geelong, Victoria · On-site',
    type: 'Part-time',
    narrative:
      'Fast-paced retail environment requiring prioritisation, analytical decision-making, and consistent delivery under pressure — skills directly transferable to SOC triage workflows.',
    outcomes: [
      'Prioritised and managed 20+ concurrent orders during peak hours, achieving over 90% on-time fulfillment',
      'Delivered personalized customer experiences with tailored substitutions based on availability and preferences',
    ],
    tools: ['Customer Service', 'Analytical Skills', 'Time Management'],
  },
  {
    date: 'Jun 2023 — Nov 2023',
    title: 'Senior Malware Analyst',
    company: 'Hardhat Enterprises',
    location: 'Geelong, Victoria · Hybrid',
    type: 'Full-time',
    narrative:
      'Developed and implemented an innovative visual analytics platform for efficient malware detection and response, classifying malware and identifying malicious payloads.',
    outcomes: [
      'Built visual analytics platform for malware detection and response workflows',
      'Classified malware, identified malicious payloads, and explored time/process dependencies',
      'Conducted system component analysis and integrated with anti-virus tools',
    ],
    tools: ['Malware Analysis', 'Visual Analytics', 'Anti-virus Integration', 'Analytical Skills'],
  },
  {
    date: 'Mar 2023 — May 2023',
    title: 'Junior Analyst — Fortify Initiative',
    company: 'Hardhat Enterprises',
    location: 'Geelong, Victoria · Hybrid',
    type: 'Full-time',
    narrative:
      'The Fortify initiative connects IT professionals and students with small businesses lacking cybersecurity resources through volunteer-driven security assessments.',
    outcomes: [
      'Supported small businesses and non-profits in developing effective cybersecurity strategies',
      'Gained practical experience through structured volunteer security engagements',
      'Contributed to addressing disparities in the IT and cybersecurity job market',
    ],
    tools: ['Vulnerability Assessment', 'Security Strategy', 'Volunteer Operations'],
  },
]

export type EducationItem = {
  degree: string
  school: string
  period: string
  highlight: string
}

export const education: EducationItem[] = [
  {
    degree: "Master's — Cyber Security (Professional)",
    school: 'Deakin University',
    period: '2022 — 2024',
    highlight: 'Security Incident Response, Network Security, and applied defensive security coursework.',
  },
  {
    degree: 'ACS — IT Professional Year',
    school: 'Performance Education',
    period: 'Oct 2025 — Nov 2026',
    highlight: 'Professional year bridging academic cybersecurity training with Australian industry practice.',
  },
  {
    degree: 'Bachelor of Engineering — Electronics',
    school: 'University of Mumbai',
    period: '2018 — 2022',
    highlight: 'Strong foundation in systems thinking, signal processing, and technical problem solving.',
  },
]

export type CertificationItem = {
  name: string
  issuer: string
  skills: string[]
}

export const certifications: CertificationItem[] = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    skills: ['Threat & Vulnerability Management', 'Application Security'],
  },
  {
    name: 'Google Cybersecurity Specialization',
    issuer: 'Google',
    skills: ['Threat & Vulnerability Management', 'Application Security'],
  },
  {
    name: 'Certified Application Security Engineer (CASE-Java)',
    issuer: 'EC-Council',
    skills: ['OWASP', 'Threat & Vulnerability Management'],
  },
  {
    name: 'Microsoft SC-900',
    issuer: 'Microsoft',
    skills: ['Malware Analysis', 'Vulnerability Assessment'],
  },
  {
    name: 'Wireshark for Network Security Analysis',
    issuer: 'Coursera',
    skills: ['Wireshark', 'Network Traffic Analysis'],
  },
  {
    name: 'Windows Defender and Firewall',
    issuer: 'IBM',
    skills: ['Application Security', 'Network Security Implementation'],
  },
]

export type ProjectItem = {
  id: string
  title: string
  tagline: string
  description: string
  attackView: string
  defenseView: string
  highlights: string[]
  tech: string[]
  featured?: boolean
}

export const projects: ProjectItem[] = [
  {
    id: 'wazuh-soc',
    featured: true,
    title: 'Wazuh SOC Simulation Lab',
    tagline: 'SIEM Detection & Threat Hunting on Apple Silicon',
    description:
      'End-to-end Security Operations Center home lab deploying the full Wazuh stack to monitor, detect, and investigate security events across a live Kali Linux endpoint.',
    attackView:
      'Simulated SSH brute force (Hydra), network reconnaissance (Nmap), and file integrity tampering against a monitored Kali Linux endpoint.',
    defenseView:
      'Real-time FIM alerts, Wazuh dashboard investigations, and full SIEM recovery after disk-full crash and LVM misconfiguration failures.',
    highlights: [
      'Deployed Wazuh manager, indexer, and dashboard',
      'Enrolled and monitored live Kali Linux endpoint',
      'Configured real-time File Integrity Monitoring',
      'Recovered SIEM from disk and database failures',
    ],
    tech: ['Wazuh SIEM', 'Kali Linux', 'Hydra', 'Nmap', 'VMware Fusion'],
  },
  {
    id: 'waf-dvwa',
    title: 'Web Application Security Lab',
    tagline: 'SafeLine WAF + DVWA on Apple Silicon',
    description:
      'Full-stack homelab simulating OWASP Top 10 attacks before and after deploying a reverse-proxy Web Application Firewall on ARM64-native infrastructure.',
    attackView:
      'Executed SQL Injection, XSS, Command Injection, and HTTP flood attacks from Kali Linux against a LAMP stack running DVWA.',
    defenseView:
      'Configured SafeLine WAF for payload detection, rate limiting, reverse proxy architecture, and attack log inspection.',
    highlights: [
      'Deployed LAMP stack with Apache, PHP, MySQL, and DVWA',
      'Configured SafeLine WAF reverse proxy',
      'Troubleshot MySQL 8.4 compatibility on ARM64',
      'Validated defensive controls against live attack traffic',
    ],
    tech: ['SafeLine WAF', 'DVWA', 'Kali Linux', 'Apache2', 'MySQL', 'OWASP Top 10'],
  },
]

export const impactStats = [
  { value: '6', label: 'Industry Certifications', sub: 'Security+, CASE-Java, SC-900, Google Cybersecurity' },
  { value: '2', label: 'Production Homelabs', sub: 'Full SOC SIEM stack and WAF defense lab on Apple Silicon' },
  { value: 'HD', label: 'Master\'s Grade', sub: 'Cyber Security (Professional) — Deakin University' },
  { value: '6 mo', label: 'Malware Analysis', sub: 'Senior role building visual analytics for detection workflows' },
]

export const terminalCommands: Record<string, string[]> = {
  help: [
    'Available commands:',
    '  whoami    — identity & location',
    '  skills    — technical capabilities',
    '  labs      — homelab projects',
    '  certs     — certifications',
    '  contact   — reach out',
    '  clear     — clear terminal',
  ],
  whoami: [
    'samruddhi@melbourne-soc ~ $ whoami',
    'Samruddhi Patil',
    'SOC Analyst | Application Security | Threat Hunter',
    'Melbourne, Victoria, Australia',
    'Status: #OPENTOWORK',
  ],
  skills: [
    'samruddhi@melbourne-soc ~ $ skills --list',
    '[DETECTION]  Wazuh SIEM · Splunk · MITRE ATT&CK · Threat Hunting',
    '[APPSEC]     OWASP Top 10 · WAF · CASE-Java · SQLi/XSS Testing',
    '[NETWORK]    Wireshark · Nmap · Traffic Analysis · FIM',
    '[OPS]        Kali Linux · VMware Fusion ARM64 · Incident Response',
  ],
  labs: [
    'samruddhi@melbourne-soc ~ $ labs --active',
    '▸ wazuh-soc-lab     [RUNNING]  SIEM + FIM + MITRE mapping',
    '▸ waf-dvwa-lab      [RUNNING]  OWASP attacks + SafeLine WAF',
    '▸ splunk-soc-lab    [BUILDING] Detection workflows in progress',
  ],
  certs: [
    'samruddhi@melbourne-soc ~ $ certs --list',
    '✓ CompTIA Security+',
    '✓ Google Cybersecurity Specialization',
    '✓ CASE-Java (EC-Council)',
    '✓ Microsoft SC-900',
    '✓ Wireshark · Coursera',
    '✓ Windows Defender · IBM',
  ],
  contact: [
    'samruddhi@melbourne-soc ~ $ contact',
    'Email:    psamruddhi0804@gmail.com',
    'LinkedIn: linkedin.com/in/samruddhi-p-patil',
    'GitHub:   github.com/samSecurity04',
    'Location: Melbourne, VIC, Australia',
    'Open to: SOC · AppSec · Security Support roles',
  ],
}

export const contact = {
  heading: 'Ready to strengthen your security posture?',
  body: 'Open to SOC Analyst, Application Security, and security-focused technical roles across Australia. Let\'s connect.',
  linkedinCta: 'Connect on LinkedIn',
  githubCta: 'View GitHub',
  resumeCta: 'Download CV',
  emailCta: 'Send an Email',
}
