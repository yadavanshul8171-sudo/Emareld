import { motion } from 'motion/react';
import { HOTEL_DATA } from '../constants';
import { Wifi, Utensils, Coffee, Car, Zap, Map, ShieldCheck, Clock } from 'lucide-react';

export default function Amenities() {
  const { amenities } = HOTEL_DATA.website_sections;

  const getIcon = (amenity: string) => {
    const a = amenity.toLowerCase();
    if (a.includes('wi-fi')) return <Wifi size={32} />;
    if (a.includes('restaurant')) return <Utensils size={32} />;
    if (a.includes('room service')) return <Coffee size={32} />;
    if (a.includes('parking')) return <Car size={32} />;
    if (a.includes('power backup')) return <Zap size={32} />;
    if (a.includes('travel desk')) return <Map size={32} />;
    return <ShieldCheck size={32} />;
  };

  return (
    <section id="amenities" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Facilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Amenities for a Perfect Stay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-emerald-100/70 max-w-2xl mx-auto"
          >
            We provide modern amenities combined with traditional hospitality to ensure your stay is comfortable and memorable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-gold-600/20 rounded-2xl text-gold-500 inline-block group-hover:scale-110 transition-transform duration-300">
                {getIcon(amenity)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{amenity}</h3>
              <p className="text-emerald-100/60 leading-relaxed">
                Experience world-class service with our dedicated {amenity.toLowerCase()} facilities.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quick Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 bg-gold-600 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full">
              <Clock className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">24/7 Support</h4>
              <p className="text-white/80">Always here to assist you</p>
            </div>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">Safe & Secure</h4>
              <p className="text-white/80">Your safety is our priority</p>
            </div>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <a
            href="#contact"
            className="px-10 py-4 bg-white text-emerald-950 rounded-full font-bold hover:bg-emerald-50 transition-all transform hover:scale-105"
          >
            Contact Travel Desk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
