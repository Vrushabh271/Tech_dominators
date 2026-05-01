import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactPopup from './ContactPopup';
import { MessageCircle } from 'lucide-react';

export default function Layout() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent/30 text-slate-800">
      <Navbar setIsPopupOpen={setIsPopupOpen} />
      
      <main className="flex-grow pt-20">
        <Outlet context={{ setIsPopupOpen }} />
      </main>

      <Footer />

      {/* Floating CTA Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-accent text-primary p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        aria-label="Contact Us"
      >
        <MessageCircle size={32} />
      </button>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
