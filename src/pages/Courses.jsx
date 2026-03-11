import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Brain,
  Palette,
  Code,
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  ChevronRight,
  Sparkles,
  Zap,
  Target,
  Globe,
  PlayCircle,
  Download,
  CheckCircle,
  ArrowRight
} from "lucide-react";

// Import from constants
import { COURSES } from "../data/constants";

// Fallback courses data
const coursesData = COURSES || [
  {
    id: 1,
    title: "AI & ChatGPT Mastery",
    description: "Learn how to use AI tools like ChatGPT to automate work, research faster, and build AI-powered businesses.",
    longDescription: "Master the art of prompt engineering, automate workflows, and create AI-powered solutions. Perfect for professionals looking to leverage AI in their work.",
    icon: Brain,
    category: "AI & Technology",
    level: "Beginner to Advanced",
    duration: "8 weeks",
    lessons: 24,
    students: 1250,
    rating: 4.8,
    price: "$299",
    originalPrice: "$499",
    instructor: {
      name: "Ahmed Hassan",
      title: "AI Specialist",
      avatar: "/instructors/ahmed.jpg",
      bio: "10+ years in AI and machine learning"
    },
    curriculum: [
      "Introduction to AI and ChatGPT",
      "Prompt Engineering Mastery",
      "Automating Workflows",
      "Building AI-Powered Apps",
      "Ethics and Best Practices",
      "Capstone Project"
    ],
    outcomes: [
      "Master prompt engineering",
      "Build AI-powered tools",
      "Automate 50% of daily tasks",
      "Create content 10x faster"
    ],
    prerequisites: ["Basic computer skills", "No coding required"],
    featured: true,
    slug: "ai-mastery"
  },
  {
    id: 2,
    title: "Graphic Design Professional",
    description: "Master Photoshop, Illustrator, and branding to design professional logos and marketing materials.",
    longDescription: "Become a professional graphic designer. Learn industry-standard tools and create stunning visuals for print and digital media.",
    icon: Palette,
    category: "Design",
    level: "All Levels",
    duration: "12 weeks",
    lessons: 36,
    students: 2100,
    rating: 4.9,
    price: "$399",
    originalPrice: "$599",
    instructor: {
      name: "Fatima Ali",
      title: "Senior Designer",
      avatar: "/instructors/fatima.jpg",
      bio: "Award-winning designer with 8+ years experience"
    },
    curriculum: [
      "Design Fundamentals",
      "Photoshop Mastery",
      "Illustrator Pro",
      "Brand Identity Design",
      "Print & Digital Design",
      "Portfolio Development"
    ],
    outcomes: [
      "Master Adobe Creative Suite",
      "Create professional logos",
      "Design marketing materials",
      "Build strong portfolio"
    ],
    prerequisites: ["No design experience needed"],
    featured: true,
    slug: "graphic-design"
  },
  {
    id: 3,
    title: "Web Development",
    description: "Learn HTML, CSS, React, and Tailwind to build modern websites and web applications.",
    longDescription: "From zero to hero in web development. Build responsive websites and full-stack applications with modern technologies.",
    icon: Code,
    category: "Development",
    level: "Beginner to Intermediate",
    duration: "16 weeks",
    lessons: 48,
    students: 3400,
    rating: 4.7,
    price: "$499",
    originalPrice: "$799",
    instructor: {
      name: "Mohamed Omar",
      title: "Full-Stack Developer",
      avatar: "/instructors/mohamed.jpg",
      bio: "Lead developer with 12+ years experience"
    },
    curriculum: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript Essentials",
      "React.js Mastery",
      "Tailwind CSS",
      "Backend Basics",
      "Deployment & DevOps"
    ],
    outcomes: [
      "Build responsive websites",
      "Create React applications",
      "Deploy to production",
      "Earn developer certificate"
    ],
    prerequisites: ["Basic computer skills"],
    featured: true,
    slug: "web-development"
  }
];

// Categories for filtering
const categories = ["All", "AI & Technology", "Design", "Development", "Business"];

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
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Course Card Component
const CourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = course.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-[color:var(--color-soma-card)] rounded-2xl overflow-hidden border border-zinc-200 dark:border-[color:var(--color-soma-border)] hover:border-[color:var(--color-soma-cyan)] transition-all duration-300"
    >
      {/* Featured Badge */}
      {course.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-medium bg-[color:var(--color-soma-cyan)] text-black rounded-full flex items-center gap-1">
            <Award className="w-3 h-3" />
            Featured
          </span>
        </div>
      )}

      {/* Header with Icon */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={{ rotate: isHovered ? 10 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 rounded-xl bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center"
          >
            <Icon className="w-7 h-7 text-[color:var(--color-soma-cyan)]" />
          </motion.div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-xs text-zinc-500">({course.students})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-[color:var(--color-soma-cyan)] transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-4 text-sm">
          <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-500">
            <Clock className="w-4 h-4" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-500">
            <BookOpen className="w-4 h-4" />
            {course.lessons} lessons
          </span>
          <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-500">
            <Users className="w-4 h-4" />
            {course.students.toLocaleString()}
          </span>
        </div>

        {/* Level Badge */}
        <div className="mb-4">
          <span className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400">
            {course.level}
          </span>
        </div>
      </div>

      {/* Footer with Price & CTA */}
      <div className="p-6 pt-0 border-t border-zinc-200 dark:border-[color:var(--color-soma-border)] mt-4">
        <div className="flex items-center justify-between">
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

          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[color:var(--color-soma-cyan)] text-black rounded-xl font-medium hover:bg-[color:var(--color-soma-cyan)]/80 transition-all group"
          >
            <span>Enroll Now</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Hover Preview */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6 pt-12"
          >
            <div className="text-white">
              <h4 className="font-semibold mb-2">What you'll learn:</h4>
              <ul className="space-y-1">
                {course.outcomes.slice(0, 3).map((outcome, i) => (
                  <li key={i} className="text-xs flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-[color:var(--color-soma-cyan)]" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Featured Instructor Card
const InstructorCard = ({ instructor }) => (
  <motion.div
    variants={itemVariants}
    className="flex items-center gap-4 p-4 bg-white dark:bg-[color:var(--color-soma-card)] rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)]"
  >
    <div className="w-16 h-16 rounded-full bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center">
      <GraduationCap className="w-8 h-8 text-[color:var(--color-soma-cyan)]" />
    </div>
    <div>
      <h4 className="font-semibold">{instructor.name}</h4>
      <p className="text-sm text-zinc-500">{instructor.title}</p>
      <p className="text-xs text-zinc-400 mt-1">{instructor.bio}</p>
    </div>
  </motion.div>
);

// Stats Section
const StatsSection = () => (
  <motion.div
    variants={itemVariants}
    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 p-8 rounded-2xl bg-zinc-50 dark:bg-[color:var(--color-soma-card)] border border-zinc-200 dark:border-[color:var(--color-soma-border)]"
  >
    {[
      { value: "5000+", label: "Students Trained", icon: Users },
      { value: "97%", label: "Satisfaction Rate", icon: Star },
      { value: "24/7", label: "Support Available", icon: Globe },
      { value: "6+", label: "Expert Instructors", icon: Award },
    ].map((stat, index) => {
      const Icon = stat.icon;
      return (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-[color:var(--color-soma-cyan)] mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-center gap-1">
            <Icon className="w-4 h-4" />
            <span>{stat.label}</span>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
);

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses
  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === "All" ? true : course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured courses
  const featuredCourses = coursesData.filter(course => course.featured);

  return (
    <section className="py-24 bg-white dark:bg-[color:var(--color-soma-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Learn & Grow
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
            Creative{' '}
            <span className="text-[color:var(--color-soma-cyan)]">
              Academy
            </span>
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Master in-demand skills with our professional courses. Learn from industry experts and advance your career.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 bg-white dark:bg-[color:var(--color-soma-card)] border border-zinc-200 dark:border-[color:var(--color-soma-border)] rounded-xl text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:border-[color:var(--color-soma-cyan)] transition-colors"
              />
              <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-3 rounded-xl font-medium transition-all
                  ${selectedCategory === category
                    ? 'bg-[color:var(--color-soma-cyan)] text-black'
                    : 'bg-white dark:bg-[color:var(--color-soma-card)] border border-zinc-200 dark:border-[color:var(--color-soma-border)] text-zinc-600 dark:text-zinc-400 hover:border-[color:var(--color-soma-cyan)] hover:text-[color:var(--color-soma-cyan)]'
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Courses */}
        {featuredCourses.length > 0 && searchQuery === "" && selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-[color:var(--color-soma-cyan)]" />
              Featured Courses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-zinc-400">No courses found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-[color:var(--color-soma-cyan)] hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Stats Section */}
        <StatsSection />

        {/* Why Choose Us */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: PlayCircle,
              title: "Self-Paced Learning",
              description: "Learn at your own pace with lifetime access to course materials"
            },
            {
              icon: Download,
              title: "Certificate Included",
              description: "Earn professional certificates to showcase your skills"
            },
            {
              icon: Target,
              title: "Project-Based",
              description: "Build real-world projects to add to your portfolio"
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[color:var(--color-soma-cyan)]" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-500">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[color:var(--color-soma-cyan)]/10 to-transparent rounded-3xl p-12 border border-[color:var(--color-soma-cyan)]/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
              Join thousands of students and transform your career with our professional courses.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[color:var(--color-soma-cyan)] text-black rounded-xl font-semibold hover:bg-[color:var(--color-soma-cyan)]/80 transition-all group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}