import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  return (
    <div id="contact-page" className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-accent font-bold uppercase tracking-widest mb-4 inline-block">Contact Us</span>
          <h1 className="text-6xl font-black text-primary mb-8">Let's Build Something <span className="text-accent">Dominant.</span></h1>
          <p className="text-lg text-gray-500 mb-12 max-w-lg leading-relaxed">
            Ready to start your project or need technical help? Our team is available to assist you with all your digital needs.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="bg-brand p-5 rounded-2xl group-hover:bg-accent transition-colors shadow-xl shadow-brand/10">
                <Mail className="text-accent group-hover:text-brand w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Email Us</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold text-slate-900 hover:text-brand transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="bg-[#25D366] p-5 rounded-2xl shadow-xl shadow-green-500/10 transition-transform group-hover:scale-110">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="text-xl font-bold text-slate-900 hover:text-brand transition-colors">
                  Join Our Tech Hub
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="bg-brand p-5 rounded-2xl group-hover:bg-accent transition-colors shadow-xl shadow-brand/10">
                <Instagram className="text-accent group-hover:text-brand w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Instagram</p>
                <a href={`https://instagram.com/techdominator_official`} target="_blank" rel="noreferrer" className="text-xl font-bold text-slate-900 hover:text-brand transition-colors">
                  @techdominator_official
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Placeholder */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           className="bg-brand p-12 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-8">Send A Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-accent uppercase tracking-widest">Your Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-accent uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-accent uppercase tracking-widest">Service Interested In</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors appearance-none">
                  <option className="bg-brand">Website Development</option>
                  <option className="bg-brand">UI/UX Design</option>
                  <option className="bg-brand">ML Project</option>
                  <option className="bg-brand">Technical Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-accent uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button 
                className="w-full bg-accent text-brand font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-black/20"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
          
          {/* Decorative background shape */}
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-32 max-w-7xl mx-auto px-4">
        <div className="bg-gray-100 h-[400px] rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 opacity-20" />
              <p className="font-bold uppercase tracking-widest opacity-20">Virtual Headquarters</p>
              <p className="max-w-xs mx-auto text-sm">Operating globally to provide high-quality digital solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
