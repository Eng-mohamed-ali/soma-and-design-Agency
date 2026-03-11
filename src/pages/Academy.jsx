import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  MessageCircle,
  Star,
  ChevronRight,
  CheckCircle,
  PlayCircle,
  Download,
  Globe,
  Target,
  Zap,
  Sparkles,
  GraduationCap,
  User,
  Mail,
  Phone
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { ACADEMY_COURSES, TESTIMONIALS } from '../data/constants';

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// FAQ Data
const faqs = [
  {
    question: "Is this course really taught in Af-Somali?",
    answer: "Yes! All our courses are taught entirely in Af-Somali by native speakers, making complex topics accessible to Somali professionals."
  },
  {
    question: "Do I need prior experience with AI?",
    answer: "No prior experience needed. The course starts from basics and progresses to advanced topics."
  },
  {
    question: "What's the time commitment?",
    answer: "The course requires 4-6 hours per week, including live sessions and self-paced exercises."
  },
  {
    question: "Is there a certificate?",
    answer: "Yes, you'll receive a professional certificate upon completion, recognized by partner institutions."
  }
];

/**
 * Academy page - detailed course information and enrollment
 */
const Academy = () => {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Use courses from constants or fallback
  const courses = ACADEMY_COURSES?.length ? ACADEMY_COURSES : [
    {
      id: 1,
      title: "AI & ChatGPT Mastery",
      description: "Master AI tools and ChatGPT to automate work, research faster, and build AI-powered solutions.",
      language: "Af-Somali",
      level: "Beginner to Advanced",
      duration: "8 weeks",
      format: "Live Online",
      price: "$299",
      students: 1250,
      rating: 4.8,
      highlights: [
        "Master prompt engineering",
        "Build AI-powered tools",
        "Automate workflows",
        "Create content 10x faster"
      ],
      curriculum: [
        {
          week: 1,
          title: "Introduction to AI",
          topics: ["What is AI?", "Types of AI", "Real-world applications"]
        },
        {
          week: 2,
          title: "ChatGPT Fundamentals",
          topics: ["Setting up ChatGPT", "Basic prompts", "Best practices"]
        },
        {
          week: 3,
          title: "Advanced Prompt Engineering",
          topics: ["Complex prompts", "Chain-of-thought", "Role prompting"]
        },
        {
          week: 4,
          title: "Automation with AI",
          topics: ["Workflow automation", "API integration", "Custom tools"]
        },
        {
          week: 5,
          title: "AI for Business",
          topics: ["Content creation", "Data analysis", "Decision making"]
        },
        {
          week: 6,
          title: "Capstone Project",
          topics: ["Build your own AI tool", "Presentations", "Feedback"]
        }
      ],
      instructor: {
        name: "Ahmed Hassan",
        title: "AI Specialist",
        bio: "10+ years in AI and machine learning. Previously led AI teams at tech companies.",
        students: 1250,
        rating: 4.9,
        courses: 3
      },
      testimonials: [
        {
          name: "Fatima Ahmed",
          role: "Program Manager, UNDP",
          content: "This course transformed how our team works. We're now using AI daily.",
          rating: 5
        },
        {
          name: "Mohamed Omar",
          role: "CTO, Somali Tech",
          content: "Excellent curriculum. The Af-Somali instruction made complex topics accessible.",
          rating: 5
        }
      ]
    }
  ];

  const course = courses[selectedCourse];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-[color:var(--color-soma-dark)] py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Navigation (if multiple courses) */}
        {courses.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {courses.map((c, index) => (
              <button
                key={c.id}
                onClick={() => setSelectedCourse(index)}
                className={`
                  px-6 py-3 rounded-xl font-medium transition-all
                  ${selectedCourse === index
                    ? 'bg-[color:var(--color-soma-cyan)] text-black'
                    : 'bg-white dark:bg-[color:var(--color-soma-card)] border border-zinc-200 dark:border-[color:var(--color-soma-border)] text-zinc-600 dark:text-zinc-400 hover:border-[color:var(--color-soma-cyan)]'
                  }
                `}
              >
                {c.title}
              </button>
            ))}
          </motion.div>
        )}

        {/* Hero section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="primary" size="lg" icon={Sparkles} className="mb-4">
              {course.level}
            </Badge>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-4"
          >
            {course.title}{' '}
            <span className="text-[color:var(--color-soma-cyan)]">
              ({course.language})
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            {course.description}
          </motion.p>

          {/* Rating */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mt-6"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
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
            <span className="text-sm text-zinc-500">
              ({course.students} students)
            </span>
          </motion.div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - course details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { icon: Clock, label: "Duration", value: course.duration },
                { icon: Users, label: "Format", value: course.format },
                { icon: Award, label: "Certificate", value: "Included" },
                { icon: Globe, label: "Language", value: course.language },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="bg-white dark:bg-[color:var(--color-soma-card)] border border-zinc-200 dark:border-[color:var(--color-soma-border)] rounded-xl p-4 text-center"
                  >
                    <Icon className="w-6 h-6 text-[color:var(--color-soma-cyan)] mx-auto mb-2" />
                    <div className="font-semibold text-black dark:text-white text-sm">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-500">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Tab Navigation */}
            <Card>
              <div className="flex gap-4 mb-6 border-b border-zinc-200 dark:border-[color:var(--color-soma-border)]">
                {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      pb-2 px-1 text-sm font-medium capitalize transition-all relative
                      ${activeTab === tab 
                        ? 'text-[color:var(--color-soma-cyan)]' 
                        : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-white'
                      }
                    `}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[color:var(--color-soma-cyan)]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                          What you'll learn:
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {course.highlights.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-[color:var(--color-soma-cyan)] flex-shrink-0 mt-0.5" />
                              <span className="text-zinc-600 dark:text-zinc-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'curriculum' && (
                    <div className="space-y-4">
                      {course.curriculum?.map((module, index) => (
                        <div
                          key={index}
                          className="border border-zinc-200 dark:border-[color:var(--color-soma-border)] rounded-lg overflow-hidden"
                        >
                          <div className="bg-zinc-50 dark:bg-white/5 p-4">
                            <h4 className="font-semibold text-black dark:text-white">
                              Week {module.week}: {module.title}
                            </h4>
                          </div>
                          <div className="p-4 space-y-2">
                            {module.topics.map((topic, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-soma-cyan)]" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'instructor' && (
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-24 h-24 rounded-full bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center">
                        <User className="w-12 h-12 text-[color:var(--color-soma-cyan)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                          {course.instructor.name}
                        </h3>
                        <p className="text-[color:var(--color-soma-cyan)] mb-3">
                          {course.instructor.title}
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                          {course.instructor.bio}
                        </p>
                        <div className="flex gap-6 text-sm">
                          <div>
                            <span className="font-bold text-black dark:text-white">
                              {course.instructor.students}+
                            </span>
                            <span className="text-zinc-500 ml-1">students</span>
                          </div>
                          <div>
                            <span className="font-bold text-black dark:text-white">
                              {course.instructor.rating}
                            </span>
                            <span className="text-zinc-500 ml-1">rating</span>
                          </div>
                          <div>
                            <span className="font-bold text-black dark:text-white">
                              {course.instructor.courses}
                            </span>
                            <span className="text-zinc-500 ml-1">courses</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-4">
                      {course.testimonials?.map((testimonial, index) => (
                        <div key={index} className="border border-zinc-200 dark:border-[color:var(--color-soma-border)] rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < testimonial.rating
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-zinc-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-zinc-600 dark:text-zinc-300 mb-3 italic">
                            "{testimonial.content}"
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center">
                              <User className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                            </div>
                            <div>
                              <p className="font-medium text-black dark:text-white text-sm">
                                {testimonial.name}
                              </p>
                              <p className="text-xs text-zinc-500">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* FAQ Section */}
            <Card>
              <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-zinc-200 dark:border-[color:var(--color-soma-border)] rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <span className="font-medium text-black dark:text-white">
                        {faq.question}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-[color:var(--color-soma-cyan)] transition-transform ${
                          expandedFaq === index ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 pb-4 text-zinc-600 dark:text-zinc-400"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right column - enrollment card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                Enroll Now
              </h3>
              
              <div className="text-4xl font-bold text-[color:var(--color-soma-cyan)] mb-2">
                {course.price}
              </div>
              <p className="text-sm text-zinc-500 mb-6">
                Special rates available for NGOs and government institutions.
              </p>
              
              {/* Next cohort */}
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6 p-3 bg-zinc-50 dark:bg-white/5 rounded-lg">
                <Calendar className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                Next cohort starts March 15, 2024
              </div>
              
              <Button fullWidth size="lg" className="mb-3">
                Register for Course
              </Button>
              
              <Button variant="outline" fullWidth>
                Request Institutional Pricing
              </Button>
              
              {/* Money-back guarantee */}
              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-[color:var(--color-soma-border)]">
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Award className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                  14-day money-back guarantee
                </div>
              </div>

              {/* Contact options */}
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:academy@soma.design"
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-[color:var(--color-soma-cyan)] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  academy@soma.design
                </a>
                <a
                  href="tel:+252612345678"
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-[color:var(--color-soma-cyan)] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +252 61 234 5678
                </a>
              </div>
            </Card>

            {/* Related Courses */}
            {courses.length > 1 && (
              <Card className="mt-6">
                <h4 className="font-semibold text-black dark:text-white mb-4">
                  Other Courses
                </h4>
                <div className="space-y-3">
                  {courses.filter((_, i) => i !== selectedCourse).slice(0, 2).map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCourse(courses.indexOf(c))}
                      className="w-full text-left p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <p className="font-medium text-black dark:text-white text-sm">
                        {c.title}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">{c.duration}</p>
                    </button>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Academy;