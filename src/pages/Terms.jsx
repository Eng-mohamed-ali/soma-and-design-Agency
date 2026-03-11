import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  FileText,
  Scale,
  Lock,
  Eye,
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
  ChevronRight
} from "lucide-react";

// Table of contents
const tableOfContents = [
  { id: "agreement", title: "1. Agreement to Terms" },
  { id: "services", title: "2. Description of Services" },
  { id: "eligibility", title: "3. Eligibility" },
  { id: "accounts", title: "4. User Accounts" },
  { id: "payments", title: "5. Payments & Fees" },
  { id: "intellectual", title: "6. Intellectual Property" },
  { id: "user-content", title: "7. User Content" },
  { id: "prohibited", title: "8. Prohibited Activities" },
  { id: "termination", title: "9. Termination" },
  { id: "disclaimers", title: "10. Disclaimers" },
  { id: "limitation", title: "11. Limitation of Liability" },
  { id: "indemnification", title: "12. Indemnification" },
  { id: "governing-law", title: "13. Governing Law" },
  { id: "changes", title: "14. Changes to Terms" },
  { id: "contact", title: "15. Contact Information" },
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
const TermsSection = ({ id, title, children }) => {
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
  const date = new Date("2024-03-15"); // Update this date when terms change
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
const TableOfContents = ({ activeSection }) => {
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
          Print Terms
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

// Acceptance Checkbox (for forms)
const AcceptanceCheckbox = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="mt-8 p-6 bg-zinc-50 dark:bg-[color:var(--color-soma-card)] rounded-2xl border border-zinc-200 dark:border-[color:var(--color-soma-border)]">
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-zinc-300 text-[color:var(--color-soma-cyan)] focus:ring-[color:var(--color-soma-cyan)]"
        />
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          I have read and agree to the Terms & Conditions and Privacy Policy.
        </span>
      </label>
      
      {accepted && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
        >
          <CheckCircle className="w-4 h-4" />
          Thank you for accepting our terms. You may proceed.
        </motion.div>
      )}
    </div>
  );
};

export default function Terms() {
  const [activeSection, setActiveSection] = useState("");

  // Track active section for highlighting in TOC
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
            <Scale className="w-4 h-4 text-[color:var(--color-soma-cyan)]" />
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Legal
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-4">
            Terms &{' '}
            <span className="text-[color:var(--color-soma-cyan)]">
              Conditions
            </span>
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
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
            <TableOfContents activeSection={activeSection} />
          </motion.div>

          {/* Terms Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 space-y-12"
          >
            <TermsSection id="agreement" title="1. Agreement to Terms">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Welcome to Soma Design & Marketing. By accessing or using our website, 
                services, or applications (collectively, the "Services"), you agree to be 
                bound by these Terms & Conditions ("Terms"). If you do not agree to these 
                Terms, you may not access or use our Services.
              </p>
            </TermsSection>

            <TermsSection id="services" title="2. Description of Services">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Soma Design & Marketing provides professional design, branding, web 
                development, digital marketing, and educational services (the "Services") 
                to businesses, organizations, and individuals. Our services are intended 
                for professional use and may be subject to additional terms and conditions 
                specific to each service offering.
              </p>
            </TermsSection>

            <TermsSection id="eligibility" title="3. Eligibility">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                By using our Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into binding contracts</li>
                <li>You are not located in a country that is subject to sanctions</li>
                <li>You will use our Services in compliance with all applicable laws</li>
              </ul>
            </TermsSection>

            <TermsSection id="accounts" title="4. User Accounts">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                When you create an account with us, you must provide accurate and complete 
                information. You are solely responsible for maintaining the confidentiality 
                of your account credentials and for all activities that occur under your 
                account. You agree to notify us immediately of any unauthorized use of your 
                account.
              </p>
            </TermsSection>

            <TermsSection id="payments" title="5. Payments & Fees">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Certain Services may require payment of fees. All fees are non-refundable 
                except as required by law or as expressly stated in a separate agreement. 
                We reserve the right to modify our fees at any time upon reasonable notice. 
                Payment terms will be specified at the time of purchase or in a separate 
                service agreement.
              </p>
            </TermsSection>

            <TermsSection id="intellectual" title="6. Intellectual Property">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                All content, designs, code, graphics, and materials created by Soma Design 
                & Marketing (collectively, the "Materials") are owned by or licensed to us 
                and are protected by intellectual property laws. Upon full payment, clients 
                receive a license to use the deliverables as specified in their service 
                agreement. Soma Design & Marketing retains the right to display completed 
                work in our portfolio.
              </p>
            </TermsSection>

            <TermsSection id="user-content" title="7. User Content">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                By submitting content to us (including feedback, suggestions, or materials), 
                you grant us a non-exclusive, worldwide, royalty-free license to use, 
                reproduce, and modify such content for the purpose of providing our Services. 
                You represent that you have all necessary rights to the content you submit.
              </p>
            </TermsSection>

            <TermsSection id="prohibited" title="8. Prohibited Activities">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                You may not use our Services to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Violate any laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Distribute malware or harmful code</li>
                <li>Engage in fraudulent activities</li>
                <li>Harass or harm others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </TermsSection>

            <TermsSection id="termination" title="9. Termination">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We may terminate or suspend your access to our Services immediately, 
                without prior notice, for any reason, including breach of these Terms. 
                Upon termination, your right to use the Services will cease immediately. 
                Provisions that by their nature should survive termination shall survive, 
                including ownership provisions and limitations of liability.
              </p>
            </TermsSection>

            <TermsSection id="disclaimers" title="10. Disclaimers">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES 
                OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICES 
                WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER 
                HARMFUL COMPONENTS.
              </p>
            </TermsSection>

            <TermsSection id="limitation" title="11. Limitation of Liability">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SOMA DESIGN & MARKETING SHALL NOT 
                BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR 
                INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, 
                RESULTING FROM YOUR USE OR INABILITY TO USE THE SERVICES.
              </p>
            </TermsSection>

            <TermsSection id="indemnification" title="12. Indemnification">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Soma Design & Marketing, 
                its officers, directors, employees, and agents, from and against any claims, 
                liabilities, damages, losses, and expenses arising out of or in any way 
                connected with your access to or use of the Services, your violation of 
                these Terms, or your violation of any third-party rights.
              </p>
            </TermsSection>

            <TermsSection id="governing-law" title="13. Governing Law">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                These Terms shall be governed by the laws of Somalia, without regard to its 
                conflict of law provisions. Any disputes arising under these Terms shall be 
                resolved in the courts of Mogadishu, Somalia.
              </p>
            </TermsSection>

            <TermsSection id="changes" title="14. Changes to Terms">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a 
                revision is material, we will try to provide at least 30 days' notice prior 
                to any new terms taking effect. By continuing to access or use our Services 
                after those revisions become effective, you agree to be bound by the revised 
                terms.
              </p>
            </TermsSection>

            <TermsSection id="contact" title="15. Contact Information">
              <div className="space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  If you have any questions about these Terms, please contact us:
                </p>
                
                <div className="bg-zinc-50 dark:bg-[color:var(--color-soma-card)] p-6 rounded-xl border border-zinc-200 dark:border-[color:var(--color-soma-border)]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                      <Mail className="w-5 h-5 text-[color:var(--color-soma-cyan)]" />
                      <a href="mailto:legal@soma.design" className="hover:text-[color:var(--color-soma-cyan)] transition-colors">
                        legal@soma.design
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
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[color:var(--color-soma-cyan)] hover:gap-3 transition-all group"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </TermsSection>

            {/* Acceptance Checkbox */}
            <AcceptanceCheckbox />
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