import { motion } from 'motion/react';
import { useOutletContext } from 'react-router-dom';
import { SERVICES } from '../constants';

export default function Services() {
  const { setIsPopupOpen } = useOutletContext<{ setIsPopupOpen: (val: boolean) => void }>();

  return (
    <div id="services-page" className="py-20">
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 inline-block">Expertise Areas</span>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Our Services</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            From modern web design to advanced ML algorithms, we provide end-to-end technical solutions to help you dominate your market or your classroom.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-white p-10 rounded-2xl border border-slate-200 hover:border-brand shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-brand p-5 rounded-xl w-fit mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-brand/10">
              <service.icon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">{service.title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="text-brand font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Inquire Now <span className="text-accent">→</span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Support Section */}
      <section className="mt-32 max-w-7xl mx-auto px-4">
        <div className="bg-brand rounded-2xl p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Need Support for Student Projects?</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed border-l-4 border-accent pl-6">
              We specialize in providing high-quality technical support for academic projects. Whether it's guidance or end-to-end development, our mentors are here to help you excel.
            </p>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-white text-brand px-10 py-5 rounded font-black hover:scale-105 transition-transform"
            >
              Get Technical Help
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
