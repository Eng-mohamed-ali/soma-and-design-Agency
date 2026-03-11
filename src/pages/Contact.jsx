import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  User,
  Briefcase,
  MessageSquare,
  Send,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  Loader2,
  Sparkles,
  Shield,
  MessageCircle,
  ChevronRight
} from "lucide-react";

// Import from constants
import { COMPANY_INFO, SOCIAL_LINKS } from "../data/constants";

const services = [
  "Graphic Design",
  "Business Branding",
  "Web & App Design",
  "Digital Marketing",
  "Creative Academy",
  "Custom Development",
  "Consulting",
];

// Animation variants
const formVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Validation functions
function validateName(value) {
  if (!value.trim()) return "Name is required.";
  if (value.trim().length < 2) return "Name must be at least 2 characters.";
  if (value.trim().length > 50) return "Name must be less than 50 characters.";
  return "";
}

function validateEmail(value) {
  if (!value.trim()) return "Email is required.";
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return ok ? "" : "Enter a valid email address.";
}

function validateService(value) {
  if (!value.trim()) return "Please select a service.";
  return "";
}

function validateMessage(value) {
  if (!value.trim()) return "Message is required.";
  if (value.trim().length < 12) return "Message should be at least 12 characters.";
  if (value.trim().length > 1000) return "Message must be less than 1000 characters.";
  return "";
}

// Input Field Component
function InputField({
  label,
  icon: Icon,
  error,
  touched,
  children,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-white/80">
        {label}
      </label>
      <div
        className={[
          "relative rounded-2xl border bg-white dark:bg-white/5 backdrop-blur-md transition-all",
          touched && error
            ? "border-red-400/60 ring-1 ring-red-400/20"
            : "border-zinc-200 dark:border-white/10 focus-within:border-[color:var(--color-soma-cyan)] focus-within:ring-1 focus-within:ring-[color:var(--color-soma-cyan)]/20",
        ].join(" ")}
      >
        <Icon className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-zinc-400 dark:text-white/35" />
        {children}
      </div>
      <div className="mt-2 min-h-[20px] text-sm">
        {touched && error ? (
          <span className="text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {error}
          </span>
        ) : null}
      </div>
    </div>
  );
}

// Success Modal
const SuccessModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed top-24 right-6 z-50 max-w-sm bg-white dark:bg-[color:var(--color-soma-card)] border border-[color:var(--color-soma-cyan)]/20 rounded-2xl shadow-2xl p-6"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h4 className="font-semibold text-black dark:text-white">Message Sent!</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    service: false,
    message: false,
  });

  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const errors = useMemo(
    () => ({
      name: validateName(form.name),
      email: validateEmail(form.email),
      service: validateService(form.service),
      message: validateMessage(form.message),
    }),
    [form]
  );

  const isValid = Object.values(errors).every((error) => !error);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitError("");
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const allTouched = {
      name: true,
      email: true,
      service: true,
      message: true,
    };
    setTouched(allTouched);

    if (!isValid) return;

    try {
      setSending(true);
      setSubmitError("");

      // UPDATED: Send to Formspree (free service that forwards to your email)
      // Replace with your actual Formspree endpoint after signing up at formspree.io
      const response = await fetch('https://formspree.io/f/mohacoder9168@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          _replyto: form.email,
          _subject: `New Contact Form Submission from ${form.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Success
      setShowSuccess(true);
      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        service: false,
        message: false,
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError("Failed to send message. Please try again or contact us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-[color:var(--color-soma-dark)] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[5%] top-24 h-72 w-72 rounded-full bg-[color:var(--color-soma-cyan)]/5 dark:bg-[color:var(--color-soma-cyan)]/10 blur-[120px]" />
          <div className="absolute right-[2%] top-40 h-96 w-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Contact Soma
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white">
              Let’s create something{' '}
              <span className="text-[color:var(--color-soma-cyan)]">
                extraordinary.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-white/60 leading-relaxed">
              Tell us what you need and we’ll help shape the right design, branding,
              website, or marketing solution for your organization.
            </p>

            {/* Contact Info Cards - UPDATED with new phone number */}
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-white/60 mb-4">
                  Quick Contact
                </h3>
                
                <div className="space-y-3">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 text-zinc-700 dark:text-white/80 hover:text-[color:var(--color-soma-cyan)] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                    </div>
                    <span className="flex-1">{COMPANY_INFO.email}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center gap-3 text-zinc-700 dark:text-white/80 hover:text-[color:var(--color-soma-cyan)] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                    </div>
                    <span className="flex-1">{COMPANY_INFO.phone}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <div className="flex items-center gap-3 text-zinc-700 dark:text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                    </div>
                    <span className="flex-1">{COMPANY_INFO.address}</span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-700 dark:text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-[color:var(--color-soma-cyan)]/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                    </div>
                    <span className="flex-1">Mon-Fri: 9:00 - 18:00</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card - UPDATED with new WhatsApp number */}
              <div className="rounded-2xl border border-[color:var(--color-soma-cyan)]/20 bg-gradient-to-r from-[color:var(--color-soma-cyan)]/10 to-transparent p-6 backdrop-blur-xl">
                <div className="text-sm text-zinc-600 dark:text-white/60 mb-3">
                  Prefer faster communication?
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--color-soma-cyan)] px-5 py-3 text-sm font-semibold text-black hover:bg-[color:var(--color-soma-cyan)]/80 transition-all group"
                >
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Shield className="w-3 h-3" />
                <span>Your information is secure and never shared</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.form
              variants={fieldVariants}
              onSubmit={handleSubmit}
              className="rounded-3xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 p-6 shadow-lg dark:shadow-[0_12px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8"
              noValidate
            >
              {/* Form Title */}
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                Send us a message
              </h2>

              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                <motion.div variants={fieldVariants}>
                  <InputField
                    label="Full Name"
                    icon={User}
                    error={errors.name}
                    touched={touched.name}
                  >
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      className="w-full rounded-2xl bg-transparent py-3.5 pl-11 pr-4 text-black dark:text-white outline-none placeholder:text-zinc-400 dark:placeholder:text-white/25"
                      disabled={sending}
                    />
                  </InputField>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <InputField
                    label="Email Address"
                    icon={Mail}
                    error={errors.email}
                    touched={touched.email}
                  >
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                      className="w-full rounded-2xl bg-transparent py-3.5 pl-11 pr-4 text-black dark:text-white outline-none placeholder:text-zinc-400 dark:placeholder:text-white/25"
                      disabled={sending}
                    />
                  </InputField>
                </motion.div>

                <motion.div variants={fieldVariants} className="md:col-span-2">
                  <InputField
                    label="Service Type"
                    icon={Briefcase}
                    error={errors.service}
                    touched={touched.service}
                  >
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full appearance-none rounded-2xl bg-transparent py-3.5 pl-11 pr-4 text-black dark:text-white outline-none"
                      disabled={sending}
                    >
                      <option value="" className="bg-white dark:bg-[color:var(--color-soma-card)]">
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option 
                          key={service} 
                          value={service} 
                          className="bg-white dark:bg-[color:var(--color-soma-card)]"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </InputField>
                </motion.div>

                <motion.div variants={fieldVariants} className="md:col-span-2">
                  <InputField
                    label="Project Message"
                    icon={MessageSquare}
                    error={errors.message}
                    touched={touched.message}
                  >
                    <textarea
                      name="message"
                      rows="6"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us about your project, audience, and goals..."
                      className="w-full resize-none rounded-2xl bg-transparent py-3.5 pl-11 pr-4 text-black dark:text-white outline-none placeholder:text-zinc-400 dark:placeholder:text-white/25"
                      disabled={sending}
                    />
                  </InputField>
                </motion.div>
              </motion.div>

              {/* Form Footer */}
              <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="min-h-[24px] text-sm">
                  {submitError ? (
                    <span className="text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {submitError}
                    </span>
                  ) : (
                    <span className="text-zinc-500 dark:text-white/40">
                      All fields are required for a strong project brief.
                    </span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: sending ? 1 : 1.02 }}
                  whileTap={{ scale: sending ? 1 : 0.98 }}
                  className={[
                    "inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all min-w-[140px] justify-center",
                    "bg-[color:var(--color-soma-cyan)] text-black",
                    sending ? "cursor-not-allowed opacity-70" : "hover:bg-[color:var(--color-soma-cyan)]/80 hover:shadow-lg",
                  ].join(" ")}
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
}