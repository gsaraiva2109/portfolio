export const HERO_CONTENT = "Architecting hyperconverged systems and AI-accelerated workflows. Transforming localhost into production-grade reality using Proxmox, Kubernetes, and Arch Linux. Focused on Zero-Trust Security and Self-Healing Infrastructure.";

export const ABOUT_TEXT = "I design, automate, and deploy systems that turn code into production-grade reality. My journey began with full-stack development—building web apps with Java, React, and Node.js. Over time, that foundation evolved into a passion for DevOps and Cloud Engineering, where I now focus on crafting scalable infrastructure, clean CI/CD pipelines, and resilient deployments. I work across AWS and OCI, orchestrate containers with Docker and Kubernetes, and define infrastructure with Terraform, Ansible, and CloudFormation. Behind the command line, I'm equally comfortable in version control and workflow automation, using Git, GitHub, GitLab CI/CD, CodePipeline, and Bash scripting to bridge collaboration and delivery. For me, DevOps isn't just about speed—it's about precision, repeatability, and creating systems that empower developers to ship confidently and innovate faster.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 60 },
  { name: 'OCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'cloud', level: 60 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 60 },

  // Infrastructure
  { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-plain-wordmark.svg', category: 'infrastructure', level: 60 },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 60 },

  // DevOps / Automation
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 100 },
  { name: 'Bash Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 100 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 60 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 85 },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'devops', level: 30 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },

  // Development
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development', level: 90 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'development', level: 70 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'development', level: 70 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'development', level: 70 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg', category: 'development', level: 70 },

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
  description: 'Full-stack medical equipment management platform for tracking machines, scheduling preventive/corrective maintenance, and managing calibration cycles.  Features automated maintenance alerts, equipment lifecycle tracking, repair history, and role-based access control.  Built with React/TypeScript frontend and Node.js/Express backend, deployed via Docker with CI/CD automation.',
  technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Docker', 'GitHub Actions', 'Coolify', 'PrimeReact', 'Vite', 'JWT', 'Swagger', 'Jest'],
  category: 'fullstack',
  githubLink: 'https://github.com/gsaraiva2109/vitta',
  },
  {
    title: 'Cyber Terminal Portfolio',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A production-grade React portfolio featuring a terminal-themed interface, 3D grid backgrounds, and seamless page transitions. Built with performance and aesthetics in mind using Tailwind CSS and Framer Motion.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    category: 'fullstack',
    githubLink: 'https://github.com/gsaraiva2109/portfolio',
    websiteLink: 'https://gsaraiva.com.br/',
  },
];

export const CONTACT = {
  address: 'Fortaleza, Ceará, Brasil',
  phoneNo: '+55 85 996543567',
  email: 'gsaraiva2109@gmail.com',
  social: {
    github: 'https://github.com/gsaraiva2109',
    linkedin: 'https://linkedin.com/in/gabriel-saraiva-4a0009268',
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
