import { motion } from 'motion/react';
import { HOTEL_DATA } from '../constants';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { hero_section } = HOTEL_DATA.website_sections;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
          alt="Hotel B P Emerald Exterior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-widest uppercase bg-gold-600 rounded-full"
        >
          {HOTEL_DATA.hotel_details.tagline}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
        >
          {hero_section.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto"
        >
          {hero_section.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-gold-600 hover:bg-gold-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            {hero_section.cta_button}
          </a>
          <a
            href="#rooms"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all"
          >
            View Rooms
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-medium opacity-70">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
