import { motion } from 'motion/react';
import { HOTEL_DATA } from '../constants';
import { Wifi, Tv, Wind, Coffee, Bed, Users, Maximize2 } from 'lucide-react';

export default function Rooms() {
  const { room_types } = HOTEL_DATA.website_sections;

  const getIcon = (feature: string) => {
    const f = feature.toLowerCase();
    if (f.includes('wifi')) return <Wifi size={18} />;
    if (f.includes('tv')) return <Tv size={18} />;
    if (f.includes('air conditioning')) return <Wind size={18} />;
    if (f.includes('room service')) return <Coffee size={18} />;
    if (f.includes('bed')) return <Bed size={18} />;
    if (f.includes('pilgrims')) return <Users size={18} />;
    return <Maximize2 size={18} />;
  };

  return (
    <section id="rooms" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Accommodations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6"
          >
            Luxury Rooms & Suites
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 max-w-2xl mx-auto"
          >
            Choose from our range of thoughtfully designed rooms, perfect for pilgrims, business travelers, and families.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {room_types.map((room, index) => (
            <motion.div
              key={room.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-emerald-900 font-bold text-sm shadow-md">
                  {room.price_range}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-4">{room.type}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-500 text-sm">
                      <span className="text-gold-600">{getIcon(feature)}</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-emerald-900 font-bold hover:text-gold-600 transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300"
                  >
                    Book Now
                    <Maximize2 size={16} />
                  </a>
                  <span className="text-xs text-stone-400 uppercase tracking-widest font-medium">Per Night</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
