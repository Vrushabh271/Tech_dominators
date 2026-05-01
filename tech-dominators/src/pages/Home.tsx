import { motion } from 'motion/react';
import { useOutletContext, Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Zap, Layers } from 'lucide-react';
import { CONTACT_INFO, SERVICES, TEAM } from '../constants';

export default function Home() {
  const { setIsPopupOpen } = useOutletContext<{ setIsPopupOpen: (val: boolean) => void }>();

  return (
    <div id="home-page">
      {/* Sleek Hero Section */}
      <section id="hero" className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Left Side: Content */}
        <div className="w-full lg:w-3/5 p-8 md:p-16 flex flex-col justify-center bg-slate-50 relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-96 h-96 bg-brand/5 rounded-full blur-3xl opacity-50" />
          
          <div className="z-10 max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block"
            >
              Startup Solutions
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8"
            >
              Code.<br/>
              Innovate.<br/>
              <span className="text-brand">Dominate.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-500 mb-10 max-w-md yellow-border-l pl-6"
            >
              "{CONTACT_INFO.ctaLine}" We turn digital concepts into market-dominating realities.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-brand text-white px-8 py-4 rounded font-bold text-lg hover:bg-brand/90 transition-all shadow-xl shadow-brand/10 flex items-center gap-2 group"
              >
                Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                to="/services"
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded font-bold text-lg hover:border-brand transition-colors"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-8">
              {[
                { label: 'Fast Loading', color: 'bg-accent' },
                { label: 'Responsive Design', color: 'bg-brand' },
                { label: 'Secure Infrastructure', color: 'bg-slate-500' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Visual/Services/Team */}
        <div className="w-full lg:w-2/5 bg-slate-900 p-8 md:p-12 flex flex-col text-white relative">
          <div className="flex-1">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-bold border-b-2 border-accent pb-2">Core Services</h2>
              <Link to="/services" className="text-slate-400 text-sm hover:text-white transition-colors">View all &rarr;</Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.slice(0, 4).map((service, i) => (
                <div key={i} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer group border border-white/5">
                  <div className={`w-10 h-10 mb-4 rounded flex items-center justify-center ${i % 2 === 0 ? 'bg-brand/30 group-hover:bg-brand' : 'bg-accent/30 group-hover:bg-accent'} transition-colors`}>
                    <service.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Team Preview */}
          <div className="mt-12 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Leadership Team
            </h2>
            <div className="flex gap-4">
              {TEAM.slice(0, 3).map((member, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl mb-3 flex items-center justify-center border border-white/10">
                    <Star size={18} className="text-accent" />
                  </div>
                  <p className="text-[10px] font-bold truncate w-full">{member.name}</p>
                  <p className="text-[9px] text-slate-500 truncate w-full">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar (New for theme) */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center opacity-30 gap-8 grayscale">
          <span className="text-2xl font-black italic">REACT</span>
          <span className="text-2xl font-black italic">NODE.JS</span>
          <span className="text-2xl font-black italic">TAILWIND</span>
          <span className="text-2xl font-black italic">TYPESCRIPT</span>
          <span className="text-2xl font-black italic">VITE</span>
        </div>
      </section>

      {/* Intro Section - Updated Styling */}
      <section id="intro" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl font-black mb-8 text-slate-900 leading-tight">
                Empowering Digital <br/>
                <span className="text-brand">Transformation.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Tech Dominators is more than just a development team; we are a strategic engine for startups and students. We believe that technology should be accessible, high-performing, and transformative.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Responsive & Modern', desc: 'Interfaces that adapt to every user device.', icon: Zap },
                  { title: 'Secure by Design', desc: 'Protection built into every line of code.', icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="bg-brand/5 p-3 rounded-lg text-brand"><item.icon size={20} /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <div className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                 <img src="https://picsum.photos/seed/tech123/1200/800" alt="Tech" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent/20 rounded-[3rem] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Line Section - Refined */}
      <section className="py-32 bg-brand text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-8 block">Ready to start?</span>
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter leading-none">
            {CONTACT_INFO.ctaLine.toUpperCase()}
          </h2>
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="bg-accent text-brand px-12 py-5 rounded font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-accent/20"
          >
            CONTACT THE TEAM
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[30vw] font-black pointer-events-none select-none opacity-[0.02] whitespace-nowrap">
          DOMINATE
        </div>
      </section>
    </div>
  );
}
