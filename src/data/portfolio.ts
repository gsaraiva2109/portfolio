const GITHUB_BASE = import.meta.env.VITE_GITHUB_URL || 'https://github.com';

export const HERO_CONTENT = "Software Engineering Intern at Serasa Experian, building Java/Spring Boot microservices on the VDOC team. After hours, I run a Proxmox homelab with Kubernetes, OPNsense, and Cloudflare Zero Trust, because understanding the metal makes me a better developer.";

export const ABOUT_TEXT = "I'm a Software Engineering Intern at Serasa Experian, working on the VDOC team. My day-to-day is Java and Spring Boot — building and maintaining microservices that handle sensitive identity verification data at scale.\n\nOutside of work, I run a Proxmox VE homelab on a hyperconverged node with ZFS storage, multi-VM Kubernetes, OPNsense firewall with VLAN segmentation, and Cloudflare Zero Trust tunnels for secure external access. I define infrastructure with Ansible and Terraform, automate with Bash and Python, and treat the homelab as a sandbox for breaking things before touching production.\n\nI use Arch Linux on my daily driver and Debian/Alpine on servers. I believe the best backend engineers understand the infrastructure their code runs on — not just the framework layer.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 60 },
  { name: 'OCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'cloud', level: 60 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 80 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 50 },

  // Infrastructure
  { name: 'Proxmox VE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/proxmox/proxmox-original-wordmark.svg', category: 'containers', level: 80 },
  { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-plain.svg', category: 'infrastructure', level: 60 },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 60 },

  // DevOps / Automation
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 80 },
  { name: 'Bash Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 80 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 60 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 85 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },

  // Development
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'development', level: 70 },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'development', level: 70 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'development', level: 70 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'development', level: 70 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg', category: 'development', level: 70 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development', level: 60 },
  { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg', category: 'development', level: 40 },

  // Databases
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg', category: 'database', level: 90 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 70 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 60 },
  { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'database', level: 60 },
];

export const PROJECTS = [
  {
  title: 'Vitta — Medical Equipment Management System',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  description: 'Medical equipment lifecycle management platform for a healthcare client. Tracks equipment inventory, schedules preventive maintenance, and enforces calibration compliance through automated alert escalation. React/TypeScript frontend with PrimeReact component library and JWT-based role access control. Node.js/Express REST API backed by PostgreSQL, containerized with Docker, and deployed via GitHub Actions CI/CD. API documented with Swagger/OpenAPI.',
  technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Docker', 'GitHub Actions', 'Coolify', 'PrimeReact', 'Vite', 'JWT', 'Swagger', 'Jest'],
  category: 'fullstack',
  githubLink: `${GITHUB_BASE}/vitta`,
  },
  {
    title: 'Cyber Terminal Portfolio',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Terminal-themed developer portfolio with 3D grid backgrounds and page transitions via Framer Motion. React/TypeScript SPA bundled with Vite, styled with Tailwind CSS. Deployed via Docker on Dokploy with Nginx reverse proxy, gzip compression, and security headers (CSP, HSTS). Contact form integrated with Web3Forms API.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    category: 'fullstack',
    githubLink: `${GITHUB_BASE}/portfolio`,
    websiteLink: import.meta.env.VITE_PORTFOLIO_URL || '#',
  },
  {
    title: 'K6 Homelab — Proxmox, Kubernetes & Zero-Trust Networking',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Single-node Proxmox VE hypervisor with ZFS storage, hosting a multi-VM Kubernetes cluster behind OPNsense firewall with VLAN segmentation and Cloudflare Zero Trust tunnels. Services include internal DNS (Pi-hole), monitoring stack (Prometheus/Grafana), and containerized workloads. Infrastructure managed as code with Ansible playbooks and Terraform modules. Arch Linux daily driver, Debian/Alpine on server VMs.',
    technologies: ['Proxmox VE', 'Kubernetes', 'Docker', 'OPNsense', 'Cloudflare Zero Trust', 'ZFS', 'Ansible', 'Terraform', 'Prometheus', 'Grafana', 'Arch Linux', 'Bash', 'Python'],
    category: 'devops',
    githubLink: import.meta.env.VITE_GITHUB_URL || '#',
  },
  {
    title: 'VinylVault — AI-Powered Vinyl Collection Manager',
    image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Self-hosted vinyl record catalog with AI-powered cover recognition. Point a camera at a record sleeve and the app identifies the album, pulls metadata from Discogs, and tracks collection value over time. Next.js 15/React 19 frontend with Tailwind CSS, Node.js/Express backend with TypeScript and Drizzle ORM on PostgreSQL 16. Supports OpenAI, Gemini, and local Ollama vision models for AI. Ships as a Tauri v2 desktop app with Rust FFI for native macOS OCR via Vision.framework. OIDC authentication (Authentik, Keycloak, Auth0) with PKCE flow. Dual CI/CD: Forgejo Actions for Linux builds, GitHub Actions for macOS release artifacts. 25+ published releases.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Tauri', 'Rust', 'Ollama', 'OpenAI', 'OIDC', 'Docker', 'GitHub Actions'],
    category: 'fullstack',
    githubLink: `${GITHUB_BASE}/VinylVault`,
  },
];

export const CONTACT = {
  address: import.meta.env.VITE_LOCATION || '',
  phoneNo: import.meta.env.VITE_PHONE || '',
  email: import.meta.env.VITE_EMAIL || '',
  social: {
    github: import.meta.env.VITE_GITHUB_URL || '#',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || '#',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
