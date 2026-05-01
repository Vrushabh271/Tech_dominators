import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  setIsPopupOpen?: (val: boolean) => void;
}

export default function Navbar({ setIsPopupOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-200/0 ${
        scrolled ? 'bg-white shadow-sm border-slate-200 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand rounded flex items-center justify-center text-white font-black text-xl group-hover:scale-105 transition-transform">
              T
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">
              TECH <span className="text-slate-900/60 font-black">DOMINATORS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-wide transition-colors hover:text-brand ${
                    isActive ? 'text-brand border-b-2 border-accent' : 'text-slate-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button 
              onClick={() => setIsPopupOpen && setIsPopupOpen(true)}
              className="bg-brand text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand/20 hover:scale-105 transition-transform"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            id="mobile-menu-toggle"
            className="md:hidden text-primary hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold py-2 px-4 rounded-lg ${
                      isActive ? 'bg-primary text-white' : 'text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
