import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Get In Touch</h3>
              <p className="text-gray-500">Choose your preferred way to reach out to us.</p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-blue-900/20"
              >
                <Mail size={24} />
                Send an Email
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-secondary-text uppercase tracking-widest text-accent font-bold">
                {CONTACT_INFO.tagline}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
