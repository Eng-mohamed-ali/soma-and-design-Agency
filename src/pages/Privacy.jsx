import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  Cookie,
  Database,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Calendar,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Download,
  Printer,
  ChevronRight,
  Globe,
  UserCheck,
  Trash2,
  FileText,
  Bell,
  Settings
} from "lucide-react";

// Table of contents
const tableOfContents = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-collection", title: "2. Information We Collect" },
  { id: "usage", title: "3. How We Use Your Information" },
  { id: "sharing", title: "4. Information Sharing" },
  { id: "cookies", title: "5. Cookies & Tracking" },
  { id: "data-security", title: "6. Data Security" },
  { id: "your-rights", title: "7. Your Rights (GDPR/CCPA)" },
  { id: "children", title: "8. Children's Privacy" },
  { id: "international", title: "9. International Transfers" },
  { id: "retention", title: "10. Data Retention" },
  { id: "changes", title: "11. Changes to Policy" },
  { id: "contact", title: "12. Contact Us" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Section Component
const PrivacySection = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      variants={itemVariants}
      className="scroll-mt-24"
    >
      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
        {title}
      </h2>
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {children}
      </div>
    </motion.section>
  );
};

// Last Updated Date
const LastUpdated = () => {
  const date = new Date("2024-03-15"); // Update this date when policy changes
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-[color:var(--color-soma-card)] p-4 rounded-xl mb-8">
      <Calendar className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
      <span>Last Updated: {formattedDate}</span>
    </div>
  );
};

// Table of Contents Component
const TableOfContents = () => {
  return (
    <div className="bg-white dark:bg-[color:var(--color-soma-card)] rounded-2xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-[color:var(--color-soma-cyan)]" />
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {tableOfContents.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-sm text-zinc-600 dark:text-zinc-400 hover:text-[color:var(--color-soma-cyan)] transition-colors py-1"
          >
            {item.title}
          </a>
        ))}
      </nav>
      
      {/* Action Buttons */}
      <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-[color:var(--color-soma-border)] space-y-3">
        <button
          onClick={() => window.print()}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print Policy
        </button>
        <button
          onClick={() => {
            // Download as PDF functionality
            window.print(); // For now, print. Replace with actual PDF generation
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>
    </div>
  );
};

// Cookie Preferences Component
const CookiePreferences = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    // Save to localStorage or cookie
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  };

  return (
    <div className="mt-8 p-6 bg-zinc-50 dark:bg-[color:var(--color-soma-card)] rounded-2xl border border-zinc-200 dark:border-[color:var(--color-soma-border)]">
      <h3 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
        <Settings className="w-5 h-5 text-[color:var(--color-soma-cyan)]" />
        Cookie Preferences
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-black dark:text-white">Necessary</p>
            <p className="text-xs text-zinc-500">Required for basic site functionality</p>
          </div>
          <input
            type="checkbox"
            checked={preferences.necessary}
            disabled
            className="w-4 h-4 rounded border-zinc-300 text-[color:var(--color-soma-cyan)]"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-black dark:text-white">Functional</p>
            <p className="text-xs text-zinc-500">Enhanced features and personalization</p>
          </div>
          <input
            type="checkbox"
            checked={preferences.functional}
            onChange={(e) => setPreferences(prev => ({ ...prev, functional: e.target.checked }))}
            className="w-4 h-4 rounded border-zinc-300 text-[color:var(--color-soma-cyan)]"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-black dark:text-white">Analytics</p>
            <p className="text-xs text-zinc-500">Help us improve with anonymous data</p>
          </div>
          <input
            type="checkbox"
            checked={preferences.analytics}
            onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
            className="w-4 h-4 rounded border-zinc-300 text-[color:var(--color-soma-cyan)]"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-black dark:text-white">Marketing</p>
            <p className="text-xs text-zinc-500">Personalized ads and offers</p>
          </div>
          <input
            type="checkbox"
            checked={preferences.marketing}
            onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
            className="w-4 h-4 rounded border-zinc-300 text-[color:var(--color-soma-cyan)]"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full mt-4 px-4 py-2 bg-[color:var(--color-soma-cyan)] text-black rounded-xl font-medium hover:bg-[color:var(--color-soma-cyan)]/80 transition-colors"
        >
          Save Preferences
        </button>

        {saved && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 text-sm text-green-600"
          >
            <CheckCircle className="w-4 h-4" />
            Preferences saved successfully!
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Data Request Form (GDPR/CCPA)
const DataRequestForm = () => {
  const [requestType, setRequestType] = useState("access");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Send request to backend
    console.log("Data request:", { requestType, email });
  };

  return (
    <div className="mt-8 p-6 bg-zinc-50 dark:bg-[color:var(--color-soma-card)] rounded-2xl border border-zinc-200 dark:border-[color:var(--color-soma-border)]">
      <h3 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
        <UserCheck className="w-5 h-5 text-[color:var(--color-soma-cyan)]" />
        Request Your Data
      </h3>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6"
        >
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <p className="text-black dark:text-white font-medium mb-2">Request Submitted</p>
          <p className="text-sm text-zinc-500">
            We'll process your request within 30 days and contact you at {email}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Request Type
            </label>
            <select
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-[color:var(--color-soma-card)] text-black dark:text-white"
            >
              <option value="access">Access My Data</option>
              <option value="delete">Delete My Data</option>
              <option value="correct">Correct My Data</option>
              <option value="export">Export My Data</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-[color:var(--color-soma-card)] text-black dark:text-white placeholder:text-zinc-400"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-[color:var(--color-soma-cyan)] text-black rounded-xl font-medium hover:bg-[color:var(--color-soma-cyan)]/80 transition-colors"
          >
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};

export default function Privacy() {
  return (
    <section className="bg-white dark:bg-[color:var(--color-soma-dark)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[color:var(--color-soma-border)] bg-white dark:bg-white/5 px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Privacy & Security
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
            Privacy{' '}
            <span className="text-[color:var(--color-soma-cyan)]">
              Policy
            </span>
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We respect your privacy and are committed to protecting your personal data.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <LastUpdated />
        </motion.div>

        {/* Main Content with Sidebar */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <TableOfContents />
            
            {/* Cookie Preferences (Mobile) */}
            <div className="lg:hidden mt-6">
              <CookiePreferences />
            </div>
            
            {/* Data Request Form (Mobile) */}
            <div className="lg:hidden mt-6">
              <DataRequestForm />
            </div>
          </motion.div>

          {/* Privacy Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 space-y-12"
          >
            <PrivacySection id="introduction" title="1. Introduction">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Soma Design & Marketing ("we," "our," or "us") respects your privacy 
                and is committed to protecting your personal data. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </PrivacySection>

            <PrivacySection id="information-collection" title="2. Information We Collect">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We collect several types of information from and about users of our services:
              </p>
              
              <h3 className="text-lg font-semibold text-black dark:text-white mt-4 mb-2">
                Personal Data
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Name and contact information (email, phone number)</li>
                <li>Company or organization details</li>
                <li>Billing and payment information</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-black dark:text-white mt-4 mb-2">
                Usage Data
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
                <li>Click patterns and interactions</li>
              </ul>
            </PrivacySection>

            <PrivacySection id="usage" title="3. How We Use Your Information">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Provide and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Communicate with you about updates and offers</li>
                <li>Improve and personalize user experience</li>
                <li>Monitor usage and detect technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </PrivacySection>

            <PrivacySection id="sharing" title="4. Information Sharing">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Service providers and business partners</li>
                <li>Payment processors for transactions</li>
                <li>Analytics providers (Google Analytics, etc.)</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </PrivacySection>

            <PrivacySection id="cookies" title="5. Cookies & Tracking">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our 
                website and hold certain information. Cookies are files with small amount 
                of data which may include an anonymous unique identifier.
              </p>
              
              <div className="bg-zinc-50 dark:bg-[color:var(--color-soma-card)] p-4 rounded-xl mb-4">
                <h4 className="font-medium text-black dark:text-white mb-2 flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
                  Types of Cookies We Use
                </h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li><span className="font-medium">Essential:</span> Required for basic functionality</li>
                  <li><span className="font-medium">Functional:</span> Remember your preferences</li>
                  <li><span className="font-medium">Analytics:</span> Understand how visitors use our site</li>
                  <li><span className="font-medium">Marketing:</span> Deliver relevant advertisements</li>
                </ul>
              </div>

              {/* Cookie Preferences (Desktop) */}
              <div className="hidden lg:block">
                <CookiePreferences />
              </div>
            </PrivacySection>

            <PrivacySection id="data-security" title="6. Data Security">
              <div className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-[color:var(--color-soma-card)] rounded-xl mb-4">
                <Lock className="w-8 h-8 text-[color:var(--color-soma-cyan)] flex-shrink-0" />
                <div>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We implement appropriate technical and organizational security measures 
                    to protect your personal data against unauthorized access, alteration, 
                    disclosure, or destruction. These include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-zinc-600 dark:text-zinc-400">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure servers and firewalls</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>
              </div>
            </PrivacySection>

            <PrivacySection id="your-rights" title="7. Your Rights (GDPR/CCPA)">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding 
                your personal data:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Eye, title: "Right to Access", desc: "Request copies of your data" },
                  { icon: Trash2, title: "Right to Deletion", desc: "Request data erasure" },
                  { icon: FileText, title: "Right to Rectification", desc: "Correct inaccurate data" },
                  { icon: Database, title: "Right to Portability", desc: "Receive data in usable format" },
                  { icon: Bell, title: "Right to Object", desc: "Opt-out of processing" },
                  { icon: Shield, title: "Right to Restrict", desc: "Limit data processing" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="p-4 bg-zinc-50 dark:bg-[color:var(--color-soma-card)] rounded-xl">
                      <Icon className="w-5 h-5 text-[color:var(--color-soma-cyan)] mb-2" />
                      <h4 className="font-medium text-black dark:text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Data Request Form (Desktop) */}
              <div className="hidden lg:block">
                <DataRequestForm />
              </div>
            </PrivacySection>

            <PrivacySection id="children" title="8. Children's Privacy">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not 
                knowingly collect personal information from children. If you become aware that 
                a child has provided us with personal data, please contact us immediately.
              </p>
            </PrivacySection>

            <PrivacySection id="international" title="9. International Transfers">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Your information may be transferred to and maintained on servers located 
                outside your country of residence. We ensure appropriate safeguards are in 
                place to protect your data in accordance with this Privacy Policy.
              </p>
            </PrivacySection>

            <PrivacySection id="retention" title="10. Data Retention">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We retain your personal data only as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required 
                or permitted by law. When we no longer need your data, we will securely delete 
                or anonymize it.
              </p>
            </PrivacySection>

            <PrivacySection id="changes" title="11. Changes to Policy">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new policy on this page with an updated "Last Updated" 
                date. You are advised to review this policy periodically for any changes.
              </p>
            </PrivacySection>

            <PrivacySection id="contact" title="12. Contact Us">
              <div className="space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy or our data 
                  practices, please contact us:
                </p>
                
                <div className="bg-zinc-50 dark:bg-[color:var(--color-soma-card)] p-6 rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                      <Mail className="w-5 h-5 text-[color:var(--color-soma-cyan)]" />
                      <a href="mailto:privacy@soma.design" className="hover:text-[color:var(--color-soma-cyan)] transition-colors">
                        privacy@soma.design
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                      <Phone className="w-5 h-5 text-[color:var(--color-soma-cyan)]" />
                      <span>+252 61 234 5678</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                      <MapPin className="w-5 h-5 text-[color:var(--color-soma-cyan)]" />
                      <span>Mogadishu, Somalia · Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                      <Globe className="w-5 h-5 text-[color:var(--color-soma-cyan)]" />
                      <span>Data Protection Officer: dpo@soma.design</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[color:var(--color-soma-cyan)] hover:gap-3 transition-all group"
                >
                  Contact Our DPO
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </PrivacySection>

            {/* Data Request Form (Mobile) - Already in sidebar */}
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-[color:var(--color-soma-cyan)] text-black flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronRight className="w-5 h-5 rotate-[-90deg]" />
        </motion.button>
      </div>
    </section>
  );
}