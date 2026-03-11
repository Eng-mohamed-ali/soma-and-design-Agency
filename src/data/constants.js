import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  GraduationCap,
  PhoneCall,
  Sparkles,
  Zap,
  Shield,
  BarChart,
  Globe,
  Users,
  Target,
  Rocket,
  CheckCircle,
  Clock,
  Heart,
  Star,
  Award,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Code,
  PenTool,
  TrendingUp,
  BookOpen,
  MessageCircle,
  Calendar,
  Eye,
  Lock,
  Download,
  PlayCircle,
  Settings,
  Bell,
  Trash2,
  FileText,
  UserCheck,
  Database,
  Cookie,
  Scale,
  Brain,
  Palette
} from 'lucide-react';

// ============================================
// NAVIGATION
// ============================================
export const NAVIGATION = [
  { name: 'Home', path: '/', icon: 'Home' },
  { name: 'About', path: '/about', icon: 'User' },
  { name: 'Services', path: '/services', icon: 'Briefcase' },
  { name: 'Portfolio', path: '/portfolio', icon: 'FolderKanban' },
  { name: 'Academy', path: '/courses', icon: 'GraduationCap' },
  { name: 'Contact', path: '/contact', icon: 'PhoneCall' }
];

// ============================================
// COMPANY INFO - CORRECTED with working WhatsApp number
// ============================================
export const COMPANY_INFO = {
  name: 'SOMA',
  tagline: 'Design & Marketing',
  description: 'Empowering businesses with cutting-edge design and marketing solutions across East Africa.',
  email: 'info@soma.design',
  phone: '+358 45 174290',
  displayPhone: '+358 45 174290',
  address: 'Mogadishu · Nairobi · Berlin',
  whatsapp: '358451742902', // ✅ CORRECTED: Added the missing final '2' (based on your working link)
  whatsappDisplay: '+358 45 1742902', // ✅ CORRECTED for display
  whatsappMessage: 'Hello SOMA! I would like to know more about your services.'
};

// ============================================
// SOCIAL LINKS
// ============================================
export const SOCIAL_LINKS = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/soma', color: 'hover:bg-[#1877F2]' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/soma', color: 'hover:bg-[#1DA1F2]' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/soma', color: 'hover:bg-[#0A66C2]' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/soma', color: 'hover:bg-[#E4405F]' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/soma', color: 'hover:bg-[#FF0000]' }
];

// ============================================
// SERVICES
// ============================================
export const SERVICES = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: 'Globe',
    features: ['React.js', 'Node.js', 'Responsive Design', 'SEO Optimized'],
    price: '$2,999',
    slug: 'web-development'
  },
  {
    id: 2,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence.',
    icon: 'BarChart',
    features: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    price: '$1,499',
    slug: 'digital-marketing'
  },
  {
    id: 3,
    title: 'Brand Design',
    description: 'Creative branding that tells your unique story.',
    icon: 'Sparkles',
    features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Guidelines'],
    price: '$1,999',
    slug: 'brand-design'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User-centered design that converts visitors into customers.',
    icon: 'Target',
    features: ['Wireframing', 'Prototyping', 'User Testing', 'Interaction Design'],
    price: '$2,499',
    slug: 'ui-ux-design'
  }
];

// ============================================
// PORTFOLIO ITEMS
// ============================================
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'UNDP Somalia Digital Transformation',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'UNDP Somalia',
    year: '2024',
    description: 'Complete digital transformation including website, dashboard, and reporting system.',
    tags: ['React', 'Node.js', 'MongoDB'],
    results: ['40% faster reporting', '10k+ monthly users'],
    link: '/portfolio/undp',
    featured: true
  },
  {
    id: 2,
    title: 'Ministry of Education Learning Portal',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'Ministry of Education',
    year: '2024',
    description: 'E-learning platform for 50,000+ students across Somalia.',
    tags: ['UI/UX', 'Figma', 'React'],
    results: ['99.9% uptime', '50k+ students'],
    link: '/portfolio/education',
    featured: true
  },
  {
    id: 3,
    title: 'WHO Health Information System',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    client: 'WHO Somalia',
    year: '2023',
    description: 'Real-time health data collection and visualization platform.',
    tags: ['Vue.js', 'D3.js', 'Firebase'],
    results: ['Real-time tracking', '200+ health facilities'],
    link: '/portfolio/who'
  }
];

// ============================================
// COURSES / ACADEMY
// ============================================
export const COURSES = [
  {
    id: 1,
    title: 'AI & ChatGPT Mastery',
    description: 'Learn how to use AI tools like ChatGPT to automate work, research faster, and build AI-powered businesses.',
    longDescription: 'Master the art of prompt engineering, automate workflows, and create AI-powered solutions. Perfect for professionals looking to leverage AI in their work.',
    icon: 'Brain',
    category: 'AI & Technology',
    level: 'Beginner to Advanced',
    duration: '8 weeks',
    format: 'Live Online',
    lessons: 24,
    students: 1250,
    rating: 4.8,
    price: '$299',
    originalPrice: '$499',
    language: 'Af-Somali',
    instructor: {
      name: 'Ahmed Hassan',
      title: 'AI Specialist',
      bio: '10+ years in AI and machine learning. Previously led AI teams at tech companies.',
      students: 1250,
      rating: 4.9,
      courses: 3
    },
    curriculum: [
      { week: 1, title: 'Introduction to AI', topics: ['What is AI?', 'Types of AI', 'Real-world applications'] },
      { week: 2, title: 'ChatGPT Fundamentals', topics: ['Setting up ChatGPT', 'Basic prompts', 'Best practices'] },
      { week: 3, title: 'Advanced Prompt Engineering', topics: ['Complex prompts', 'Chain-of-thought', 'Role prompting'] },
      { week: 4, title: 'Automation with AI', topics: ['Workflow automation', 'API integration', 'Custom tools'] },
      { week: 5, title: 'AI for Business', topics: ['Content creation', 'Data analysis', 'Decision making'] },
      { week: 6, title: 'Capstone Project', topics: ['Build your own AI tool', 'Presentations', 'Feedback'] }
    ],
    highlights: [
      'Master prompt engineering',
      'Build AI-powered tools',
      'Automate workflows',
      'Create content 10x faster'
    ],
    outcomes: [
      'Master prompt engineering',
      'Build AI-powered tools',
      'Automate 50% of daily tasks',
      'Create content 10x faster'
    ],
    prerequisites: ['Basic computer skills', 'No coding required'],
    featured: true,
    slug: 'ai-mastery'
  },
  {
    id: 2,
    title: 'Graphic Design Professional',
    description: 'Master Photoshop, Illustrator, and branding to design professional logos and marketing materials.',
    longDescription: 'Become a professional graphic designer. Learn industry-standard tools and create stunning visuals for print and digital media.',
    icon: 'Palette',
    category: 'Design',
    level: 'All Levels',
    duration: '12 weeks',
    format: 'Live Online',
    lessons: 36,
    students: 2100,
    rating: 4.9,
    price: '$399',
    originalPrice: '$599',
    language: 'Af-Somali',
    instructor: {
      name: 'Fatima Ali',
      title: 'Senior Designer',
      bio: 'Award-winning designer with 8+ years experience.',
      students: 2100,
      rating: 4.9,
      courses: 4
    },
    highlights: [
      'Master Adobe Creative Suite',
      'Create professional logos',
      'Design marketing materials',
      'Build strong portfolio'
    ],
    featured: true,
    slug: 'graphic-design'
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Learn HTML, CSS, React, and Tailwind to build modern websites and web applications.',
    longDescription: 'From zero to hero in web development. Build responsive websites and full-stack applications with modern technologies.',
    icon: 'Code',
    category: 'Development',
    level: 'Beginner to Intermediate',
    duration: '16 weeks',
    format: 'Live Online',
    lessons: 48,
    students: 3400,
    rating: 4.7,
    price: '$499',
    originalPrice: '$799',
    language: 'Af-Somali',
    instructor: {
      name: 'Mohamed Omar',
      title: 'Full-Stack Developer',
      bio: 'Lead developer with 12+ years experience.',
      students: 3400,
      rating: 4.8,
      courses: 5
    },
    highlights: [
      'Build responsive websites',
      'Create React applications',
      'Deploy to production',
      'Earn developer certificate'
    ],
    featured: true,
    slug: 'web-development'
  }
];

// ============================================
// ACADEMY COURSES (alias for COURSES)
// ============================================
export const ACADEMY_COURSES = COURSES;

// ============================================
// TESTIMONIALS
// ============================================
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'SOMA transformed our online presence. Their team delivered beyond our expectations.',
    avatar: '/avatars/sarah.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    content: 'The ROI from their digital marketing strategies has been incredible. Highly recommended!',
    avatar: '/avatars/michael.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, CreativeCo',
    content: 'Their design work is exceptional. They truly understood our brand vision.',
    avatar: '/avatars/emily.jpg',
    rating: 5
  },
  {
    id: 4,
    name: 'Fatima Ahmed',
    role: 'Program Manager, UNDP Somalia',
    content: 'The AI course in Af-Somali transformed how our team works. We\'re now using AI daily.',
    rating: 5
  },
  {
    id: 5,
    name: 'Mohamed Omar',
    role: 'CTO, Somali Tech',
    content: 'Excellent curriculum. The Af-Somali instruction made complex topics accessible.',
    rating: 5
  }
];

// ============================================
// FEATURES
// ============================================
export const FEATURES = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Projects delivered on time, every time with exceptional quality.'
  },
  {
    icon: Shield,
    title: '100% Secure',
    description: 'Enterprise-grade security for all solutions and data protection.'
  },
  {
    icon: Heart,
    title: 'Client First',
    description: 'Your success is our priority with dedicated support.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your needs.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with industry experts who care about your success.'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Data-backed strategies that deliver measurable results.'
  }
];

// ============================================
// STATS
// ============================================
export const STATS = [
  { label: 'Years Experience', value: '6+', icon: Award },
  { label: 'Projects Completed', value: '120+', icon: Briefcase },
  { label: 'NGO Partners', value: '25+', icon: Users },
  { label: 'Success Rate', value: '98%', icon: TrendingUp },
  { label: 'Students Trained', value: '5000+', icon: GraduationCap },
  { label: 'Satisfaction Rate', value: '97%', icon: Star }
];

// ============================================
// TRUST BADGES
// ============================================
export const TRUST_BADGES = [
  { name: 'UNDP', icon: Globe },
  { name: 'UNICEF', icon: Heart },
  { name: 'WHO', icon: Shield },
  { name: 'Ministry of Education', icon: BookOpen }
];

// ============================================
// QUICK LINKS
// ============================================
export const QUICK_LINKS = [
  { name: 'Services', path: '/services' },
  { name: 'Academy', path: '/courses' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' }
];

// ============================================
// FAQS
// ============================================
export const FAQS = [
  {
    question: 'What services do you offer?',
    answer: 'We offer web development, digital marketing, brand design, UI/UX design, and AI training courses.'
  },
  {
    question: 'Do you work with NGOs?',
    answer: 'Yes, we specialize in working with NGOs and government institutions across East Africa.'
  },
  {
    question: 'Are courses taught in Somali?',
    answer: 'Yes, our Academy courses are taught in Af-Somali by native speakers.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope, typically ranging from 4-12 weeks.'
  }
];

// ============================================
// SITE CONFIG (Legacy support)
// ============================================
export const SITE_CONFIG = {
  name: 'SOMA',
  tagline: 'Design & Marketing',
  email: 'info@soma.design',
  phone: '+358 45 174290',
  address: 'Mogadishu · Nairobi · Berlin',
  whatsapp: '358451742902' // ✅ CORRECTED: Added missing final '2'
};