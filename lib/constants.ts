import type { Project, BlogPost, SkillGroup, TimelineItem } from '@/types';

export const PERSONAL = {
  name: 'Om Suresh Prajapati',
  title: 'Graduate Student at USC',
  tagline: 'Building intelligent systems at the intersection of AI & silicon.',
  email: 'omprajapati2110@gmail.com',
  github: 'https://github.com/OmPrajapati2110',
  linkedin: 'https://linkedin.com/in/om-suresh-prajapati',
  location: 'Los Angeles, CA',
  university: 'University of Southern California (USC)',
  degree: 'M.S. Electrical Engineering',
  graduationDate: 'December 2026',
  openToWork: true,
  // Drop your photo at public/Profile.jpeg to enable
  photo: '/Profile.jpeg',
  roles: [
    'ML Engineer',
    'AI Researcher',
    'GPU Architect',
    'Software Engineer',
    'Deep Learning Engineer',
  ],
  bio: `I'm Om Suresh Prajapati, a graduate student at the University of Southern California pursuing a Master's in Electrical Engineering with a focus on Machine Learning, Artificial Intelligence, and GPU/Computer Architecture. I'm passionate about building intelligent systems that operate at the intersection of software and hardware — from transformer models to CUDA kernels.

I'm actively preparing for the US tech job market (starting May 2026) and will be graduating in December 2026. I'm building projects across ML, AI, and GPU architecture to demonstrate my skills to top tech recruiters.`,
  currentlyLearning: [
    'CUDA Programming',
    'Transformer Architectures',
    'RISC-V ISA',
    'GPU Microarchitecture',
    'Reinforcement Learning',
    'Computer Vision',
    'PyTorch Internals',
    'Parallel Computing',
  ],
};

export const SKILLS: SkillGroup[] = [
  {
    category: 'AI / Machine Learning',
    icon: '🧠',
    skills: [
      { name: 'PyTorch', icon: 'SiPytorch', level: 85 },
      { name: 'TensorFlow', icon: 'SiTensorflow', level: 75 },
      { name: 'Transformers', icon: 'SiHuggingface', level: 80 },
      { name: 'Scikit-learn', icon: 'SiScikitlearn', level: 80 },
      { name: 'NumPy', icon: 'SiNumpy', level: 90 },
      { name: 'Pandas', icon: 'SiPandas', level: 85 },
    ],
  },
  {
    category: 'GPU / Architecture',
    icon: '⚡',
    skills: [
      { name: 'CUDA', icon: 'SiNvidia', level: 70 },
      { name: 'OpenCL', icon: 'SiKhronos', level: 60 },
      { name: 'RISC-V', icon: 'chip', level: 65 },
      { name: 'Verilog', icon: 'chip', level: 65 },
      { name: 'Gem5', icon: 'chip', level: 60 },
      { name: 'Computer Architecture', icon: 'chip', level: 75 },
    ],
  },
  {
    category: 'Software Engineering',
    icon: '💻',
    skills: [
      { name: 'Python', icon: 'SiPython', level: 90 },
      { name: 'C / C++', icon: 'SiCplusplus', level: 75 },
      { name: 'TypeScript', icon: 'SiTypescript', level: 70 },
      { name: 'React', icon: 'SiReact', level: 70 },
      { name: 'Next.js', icon: 'SiNextdotjs', level: 65 },
      { name: 'SQL', icon: 'SiPostgresql', level: 70 },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: 'SiGit', level: 85 },
      { name: 'Linux', icon: 'SiLinux', level: 80 },
      { name: 'Docker', icon: 'SiDocker', level: 65 },
      { name: 'AWS', icon: 'SiAmazon', level: 55 },
      { name: 'Jupyter', icon: 'SiJupyter', level: 90 },
      { name: 'VS Code', icon: 'SiVisualstudiocode', level: 90 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    title: 'AI-Powered Portfolio Website',
    description: 'This portfolio — built with Next.js 16, Three.js, Framer Motion, and Claude AI (OmBot chatbot). Features a 3D GPU model, neural network canvas, visitor analytics, and an AI assistant trained on my profile.',
    tags: ['Next.js', 'Three.js', 'Claude AI', 'TypeScript'],
    githubUrl: 'https://github.com/OmPrajapati2110',
    featured: true,
  },
  {
    id: 'project-1',
    title: 'End-to-End ML Pipeline',
    description: 'An end-to-end machine learning project showcasing model training, optimization, and deployment. Details dropping August 2026.',
    tags: ['PyTorch', 'Python', 'ML'],
    comingSoon: true,
  },
  {
    id: 'project-2',
    title: 'GPU Architecture Simulator',
    description: 'A CUDA/GPU architecture project exploring parallel computation and memory hierarchy optimization. Coming August 2026.',
    tags: ['CUDA', 'C++', 'GPU'],
    comingSoon: true,
  },
  {
    id: 'project-3',
    title: 'Transformer from Scratch',
    description: 'Deep learning research project implementing transformer architectures and attention mechanisms from first principles in PyTorch. Coming August 2026.',
    tags: ['Transformers', 'PyTorch', 'AI'],
    comingSoon: true,
  },
  {
    id: 'project-4',
    title: 'Real-Time Computer Vision System',
    description: 'Real-time computer vision system leveraging deep neural networks for image understanding. Coming August 2026.',
    tags: ['Computer Vision', 'TensorFlow', 'Python'],
    comingSoon: true,
  },
  {
    id: 'project-5',
    title: 'Pipelined RISC-V Processor',
    description: 'Verilog implementation of a 5-stage pipelined RISC-V processor with hazard detection, forwarding logic, and branch prediction. Coming August 2026.',
    tags: ['Verilog', 'RISC-V', 'Architecture'],
    comingSoon: true,
  },
  {
    id: 'project-6',
    title: 'Reinforcement Learning Agent',
    description: 'RL agent trained to solve complex sequential decision-making tasks using modern policy gradient methods (PPO/A3C). Coming August 2026.',
    tags: ['RL', 'PyTorch', 'Python'],
    comingSoon: true,
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'usc-masters',
    type: 'education',
    title: 'M.S. Electrical Engineering',
    organization: 'University of Southern California (USC)',
    location: 'Los Angeles, CA',
    startDate: '2024',
    endDate: 'Dec 2026',
    description: [
      'Specializing in Machine Learning, Artificial Intelligence, and GPU/Computer Architecture.',
      'Coursework: Deep Learning, GPU Architecture, Advanced Algorithms, Computer Vision, Parallel Computing.',
      'Actively building projects targeting US tech industry roles in ML/AI/GPU engineering.',
    ],
    tags: ['ML', 'AI', 'GPU Architecture', 'EE'],
  },
  {
    id: 'undergrad',
    type: 'education',
    title: 'B.E. / B.Tech — Engineering',
    organization: 'Silver Oak College of Engineering and Technology',
    location: 'Ahmedabad, India',
    startDate: '2020',
    endDate: '2024',
    description: [
      'Foundation in Electrical Engineering, Computer Science, and Mathematics.',
      'Built strong fundamentals in programming, signal processing, and circuit design.',
    ],
    tags: ['Engineering', 'Computer Science'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cuda-memory-hierarchy',
    title: 'Understanding CUDA Memory Hierarchy',
    excerpt: 'A deep dive into global, shared, and register memory in CUDA — and how to write kernels that make full use of the GPU memory hierarchy.',
    date: 'Coming Soon',
    readTime: '8 min read',
    tags: ['CUDA', 'GPU', 'Performance'],
    comingSoon: true,
  },
  {
    slug: 'attention-explained',
    title: 'Attention Is All You Need — Explained',
    excerpt: 'Breaking down the landmark transformer paper from first principles. Query, Key, Value matrices explained visually with implementation in PyTorch.',
    date: 'Coming Soon',
    readTime: '12 min read',
    tags: ['Transformers', 'NLP', 'PyTorch'],
    comingSoon: true,
  },
  {
    slug: 'risc-v-pipeline',
    title: 'Building a Pipelined RISC-V Processor',
    excerpt: 'Step-by-step walkthrough of implementing a 5-stage pipelined RISC-V processor in Verilog, including hazard detection and forwarding logic.',
    date: 'Coming Soon',
    readTime: '15 min read',
    tags: ['RISC-V', 'Verilog', 'Architecture'],
    comingSoon: true,
  },
];

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80', // circuit board
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80', // data center
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80', // matrix/code
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80', // AI brain
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80', // neural network
];
