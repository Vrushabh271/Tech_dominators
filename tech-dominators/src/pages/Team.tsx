import { motion } from 'motion/react';
import { TEAM } from '../constants';
import { Github, Linkedin, Twitter, Rocket } from 'lucide-react';

export default function Team() {
  return (
    <div id="team-page" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-6">Meet The Leaders</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            The visionary minds driving Tech Dominators forward. A blend of leadership, tech expertise, and creative design.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Core Leaders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white p-12 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-center">
                <div className="bg-brand/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="text-brand w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">
                  {member.name}
                </h3>
                <p className="text-brand font-bold tracking-widest text-sm uppercase mb-6">
                  {member.role}
                </p>
                <div className="flex justify-center gap-3">
                  <button className="bg-slate-50 p-3 rounded-xl hover:bg-accent transition-colors"><Linkedin size={18} /></button>
                  <button className="bg-slate-50 p-3 rounded-xl hover:bg-accent transition-colors"><Twitter size={18} /></button>
                  <button className="bg-slate-50 p-3 rounded-xl hover:bg-accent transition-colors"><Github size={18} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="mt-40 py-32 bg-brand text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center text-center">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-8xl font-black opacity-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none w-full whitespace-nowrap">
              ONE TEAM ONE VISION
            </h2>
            <p className="text-2xl md:text-4xl font-light italic leading-loose relative z-10 border-l-4 border-accent pl-10">
              "We believe in the power of collective intelligence. Every line of code and every design pixel is a collaborative step towards excellence."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
