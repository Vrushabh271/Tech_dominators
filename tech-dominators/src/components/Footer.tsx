import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Instagram, Rocket } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-white border-t border-slate-200 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Tech Dominators. All rights reserved.
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-brand font-bold flex items-center gap-2 text-sm hover:scale-105 transition-transform"
            >
              <div className="w-2 h-2 rounded-full bg-brand"></div>
              {CONTACT_INFO.email}
            </a>
            <a 
              href="https://instagram.com/techdominator_official"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-brand transition-colors text-sm font-semibold"
            >
              Instagram @techdominator_official
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
