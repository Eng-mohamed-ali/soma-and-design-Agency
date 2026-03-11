import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../../data/constants'; // Import from constants

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Use constants from COMPANY_INFO
  const WHATSAPP_NUMBER = COMPANY_INFO.whatsapp; // Now using the correct number from constants
  const WHATSAPP_MESSAGE = COMPANY_INFO.whatsappMessage;
  const COMPANY_NAME = COMPANY_INFO.name;

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    console.log('WhatsApp button clicked');
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      '_blank'
    );
  };

  const quickMessages = [
    "I need a website",
    "Tell me about your services",
    "I have a project in mind",
    "Schedule a call"
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Floating Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }}
            className="fixed bottom-6 right-6 z-50"
          >
            {/* Tooltip/Prompt */}
            <AnimatePresence>
              {showTooltip && !isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute bottom-16 right-0 bg-white dark:bg-soma-card text-black dark:text-white px-4 py-3 rounded-xl shadow-lg border border-zinc-200 dark:border-soma-border whitespace-nowrap"
                >
                  <p className="text-sm font-medium">Chat with us on WhatsApp</p>
                  <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white dark:bg-soma-card border-r border-b border-zinc-200 dark:border-soma-border transform rotate-45"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative group w-16 h-16 rounded-full flex items-center justify-center
                bg-gradient-to-r from-green-500 to-green-600
                text-white shadow-xl cursor-pointer
                transition-shadow duration-300
                ${isOpen ? 'shadow-2xl' : 'hover:shadow-2xl'}
              `}
              aria-label="Chat on WhatsApp"
              aria-expanded={isOpen}
            >
              {/* Pulse Animation */}
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
              
              {/* Icon */}
              <motion.div
                animate={{ rotate: isHovered ? 10 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <MessageCircle className="w-7 h-7" />
                )}
              </motion.div>

              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-soma-card"></span>
            </motion.button>

            {/* Expanded Chat Panel */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute bottom-20 right-0 w-80 bg-white dark:bg-soma-card rounded-2xl shadow-2xl border border-zinc-200 dark:border-soma-border overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Chat with us</h3>
                        <p className="text-xs text-white/80">Typically replies within 1 hour</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                      Hi! How can we help you today? Choose a quick option or type your message.
                    </p>

                    {/* Quick Messages */}
                    <div className="space-y-2 mb-4">
                      {quickMessages.map((msg, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ x: 5 }}
                          onClick={() => {
                            window.open(
                              `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                msg + " - " + WHATSAPP_MESSAGE
                              )}`,
                              '_blank'
                            );
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors text-sm text-zinc-700 dark:text-zinc-300 flex items-center justify-between group"
                        >
                          <span>{msg}</span>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                      ))}
                    </div>

                    {/* Start Chat Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleClick}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Start WhatsApp Chat
                    </motion.button>

                    {/* Footer */}
                    <p className="text-xs text-center text-zinc-500 mt-4">
                      {COMPANY_NAME} · We're here 24/7
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Backdrop for mobile when panel is open */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
          )}
        </>
      )}
    </AnimatePresence>
  );
}