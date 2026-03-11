import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award, 
  ChevronRight,
  Star,
  BookOpen,
  MessageCircle,
  Sparkles,
  Zap,
  Target,
  CheckCircle,
  Play,
  Globe,
  Brain,
  Code,
  Palette,
  TrendingUp,
  Shield,
  Rocket,
  Crown,
  Medal,
  Gift,
  Coffee
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

// Premium course data
const premiumCourses = [
  {
    id: 1,
    title: "AI & ChatGPT Mastery",
    description: "Master AI tools and ChatGPT to automate work, research faster, and build AI-powered businesses. The first course taught completely in Somali.",
    language: "Af-Somali",
    level: "Beginner to Advanced",
    duration: "8 weeks",
    format: "Live Online",
    price: "$299",
    originalPrice: "$499",
    students: 1250,
    rating: 4.8,
    icon: Brain,
    color: "from-purple-500 to-cyan-400",
    badge: "Most Popular",
    highlights: [
      "Master prompt engineering",
      "Build AI-powered tools",
      "Automate 50% of daily tasks",
      "Create content 10x faster"
    ],
    curriculum: [
      "Introduction to AI and ChatGPT",
      "Prompt Engineering Mastery",
      "Automating Workflows",
      "Building AI-Powered Apps",
      "Ethics and Best Practices",
      "Capstone Project"
    ],
    instructor: {
      name: "Ahmed Hassan",
      title: "AI Specialist",
      bio: "10+ years in AI and machine learning",
      students: 1250,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    features: [
      { icon: Globe, text: "100% Af-Somali instruction" },
      { icon: Users, text: "Live interactive sessions" },
      { icon: Award, text: "Professional certificate" },
      { icon: Coffee, text: "NGO special pricing" }
    ]
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, React, and Tailwind to build modern websites and web applications. From zero to job-ready developer.",
    language: "Af-Somali",
    level: "Beginner to Intermediate",
    duration: "16 weeks",
    format: "Live Online",
    price: "$499",
    originalPrice: "$799",
    students: 3400,
    rating: 4.7,
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    badge: "Job Guarantee",
    highlights: [
      "Build responsive websites",
      "Create React applications",
      "Deploy to production",
      "Earn developer certificate"
    ],
    curriculum: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript Essentials",
      "React.js Mastery",
      "Tailwind CSS",
      "Backend Basics",
      "Deployment & DevOps"
    ],
    instructor: {
      name: "Mohamed Omar",
      title: "Full-Stack Developer",
      bio: "Lead developer with 12+ years experience",
      students: 3400,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    features: [
      { icon: Globe, text: "100% Af-Somali instruction" },
      { icon: Users, text: "Live coding sessions" },
      { icon: Award, text: "Professional certificate" },
      { icon: Rocket, text: "Portfolio projects" }
    ]
  },
  {
    id: 3,
    title: "Graphic Design Pro",
    description: "Master Photoshop, Illustrator, and branding to design professional logos and marketing materials.",
    language: "Af-Somali",
    level: "All Levels",
    duration: "12 weeks",
    format: "Live Online",
    price: "$399",
    originalPrice: "$599",
    students: 2100,
    rating: 4.9,
    icon: Palette,
    color: "from-pink-500 to-purple-400",
    badge: "Award Winning",
    highlights: [
      "Master Adobe Creative Suite",
      "Create professional logos",
      "Design marketing materials",
      "Build strong portfolio"
    ],
    curriculum: [
      "Design Fundamentals",
      "Photoshop Mastery",
      "Illustrator Pro",
      "Brand Identity Design",
      "Print & Digital Design",
      "Portfolio Development"
    ],
    instructor: {
      name: "Fatima Ali",
      title: "Senior Designer",
      bio: "Award-winning designer with 8+ years experience",
      students: 2100,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    features: [
      { icon: Globe, text: "100% Af-Somali instruction" },
      { icon: Users, text: "Live design critiques" },
      { icon: Award, text: "Professional certificate" },
      { icon: Medal, text: "Portfolio review" }
    ]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Course Card Component
const CourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = course.icon;

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Premium Card with Glass Effect */}
      <div className={`
        relative h-full rounded-3xl overflow-hidden
        bg-white dark:bg-[color:var(--color-soma-card)]
        border border-zinc-200 dark:border-[color:var(--color-soma-border)]
        hover:border-[color:var(--color-soma-cyan)]/50
        transition-all duration-500
        shadow-xl hover:shadow-2xl
        hover:shadow-[color:var(--color-soma-cyan)]/10
      `}>
        {/* Gradient Overlay on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          initial={false}
        />

        {/* Featured Badge */}
        {course.badge && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="primary" size="sm" icon={Crown}>
              {course.badge}
            </Badge>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Header with Icon and Rating */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`
                w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} 
                flex items-center justify-center shadow-lg
                group-hover:scale-110 transition-transform duration-300
              `}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-zinc-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {course.rating}
                  </span>
                  <span className="text-xs text-zinc-500">
                    ({course.students})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
            {course.description}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-white/5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[color:var(--color-soma-cyan)]" />
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {course.duration}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-white/5 rounded-full">
              <BookOpen className="w-3.5 h-3.5 text-[color:var(--color-soma-cyan)]" />
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {course.level}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-white/5 rounded-full">
              <Globe className="w-3.5 h-3.5 text-[color:var(--color-soma-cyan)]" />
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {course.language}
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {course.features.map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <FeatureIcon className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-[color:var(--color-soma-border)]">
            <div>
              <span className="text-2xl font-bold text-[color:var(--color-soma-cyan)]">
                {course.price}
              </span>
              {course.originalPrice && (
                <span className="ml-2 text-sm text-zinc-500 line-through">
                  {course.originalPrice}
                </span>
              )}
            </div>
            
            <Link to={`/courses/${course.id}`}>
              <Button
                variant="primary"
                size="sm"
                className="group shadow-lg hover:shadow-[color:var(--color-soma-cyan)]/25"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Hover Preview - Shows Instructor */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {course.instructor.name}
                    </p>
                    <p className="text-xs text-white/70">
                      {course.instructor.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// Stats Section
const StatsSection = () => (
  <motion.div
    variants={itemVariants}
    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
  >
    {[
      { value: "6,750+", label: "Students Trained", icon: Users },
      { value: "97%", label: "Satisfaction Rate", icon: Star },
      { value: "24/7", label: "Support Available", icon: MessageCircle },
      { value: "12+", label: "Expert Instructors", icon: Award },
    ].map((stat, index) => {
      const Icon = stat.icon;
      return (
        <motion.div
          key={index}
          whileHover={{ y: -5, scale: 1.02 }}
          className="text-center p-6 bg-white dark:bg-[color:var(--color-soma-card)] 
            rounded-2xl border border-zinc-200 dark:border-[color:var(--color-soma-border)]
            shadow-lg hover:shadow-xl transition-all"
        >
          <Icon className="w-8 h-8 text-[color:var(--color-soma-cyan)] mx-auto mb-3" />
          <div className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {stat.label}
          </div>
        </motion.div>
      );
    })}
  </motion.div>
);

// Testimonial Card
const TestimonialCard = ({ testimonial }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5 }}
    className="p-8 bg-white dark:bg-[color:var(--color-soma-card)] rounded-2xl 
      border border-zinc-200 dark:border-[color:var(--color-soma-border)]
      shadow-lg hover:shadow-xl transition-all"
  >
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-lg italic">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-3">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-black dark:text-white">
          {testimonial.name}
        </p>
        <p className="text-sm text-zinc-500">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

// Main Component
export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'ai', label: 'AI & Tech' },
    { id: 'design', label: 'Design' },
    { id: 'dev', label: 'Development' }
  ];

  const testimonials = [
    {
      quote: "The AI course in Af-Somali transformed how our team works. We're now using AI daily to automate reports.",
      name: "Fatima Ahmed",
      role: "Program Manager, UNDP",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Excellent curriculum. The Af-Somali instruction made complex topics accessible to everyone.",
      name: "Mohamed Ali",
      role: "CTO, Somali Tech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The web development bootcamp landed me a job in 3 months. Best investment in my career.",
      name: "Hawa Abdi",
      role: "Junior Developer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[color:var(--color-soma-dark)] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[color:var(--color-soma-cyan)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[color:var(--color-soma-cyan)]/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="lg" icon={GraduationCap} className="mb-4">
            Soma Creative Academy
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
            Master{' '}
            <span className="bg-gradient-to-r from-[color:var(--color-soma-cyan)] to-purple-400 bg-clip-text text-transparent">
              In-Demand Skills
            </span>
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Learn from industry experts in Af-Somali. Join 6,750+ students already 
            transforming their careers with our professional courses.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all
                ${activeFilter === filter.id
                  ? 'bg-[color:var(--color-soma-cyan)] text-black shadow-lg shadow-[color:var(--color-soma-cyan)]/25'
                  : 'bg-white dark:bg-[color:var(--color-soma-card)] border border-zinc-200 dark:border-[color:var(--color-soma-border)] text-zinc-600 dark:text-zinc-400 hover:border-[color:var(--color-soma-cyan)]'
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {premiumCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </motion.div>

        {/* Stats Section */}
        <StatsSection />

        {/* Testimonials Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <Badge variant="primary" icon={MessageCircle} className="mb-4">
              Student Success
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              What Our{' '}
              <span className="text-[color:var(--color-soma-cyan)]">
                Students Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          variants={itemVariants}
          className="mt-20 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-soma-cyan)] to-purple-500 opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of students who have transformed their careers with our professional courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 shadow-xl"
                >
                  Get Started Today
                  <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  View All Courses
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}