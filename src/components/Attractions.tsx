import { motion } from 'motion/react';
import { HOTEL_DATA } from '../constants';
import { MapPin, Navigation } from 'lucide-react';

export default function Attractions() {
  const { nearby_attractions } = HOTEL_DATA.website_sections;

  return (
    <section id="attractions" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              Explore Mathura
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6"
            >
              Nearby Spiritual Landmarks
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-stone-600"
            >
              Hotel B P Emerald is strategically located near the most sacred sites of Mathura and Vrindavan.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href={HOTEL_DATA.hotel_details.location.google_maps_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-emerald-900 text-white rounded-full font-bold hover:bg-emerald-950 transition-all shadow-lg"
            >
              <MapPin size={20} />
              View on Google Maps
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearby_attractions.map((attraction, index) => (
            <motion.div
              key={attraction.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-gold-500 mb-2">
                  <Navigation size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{attraction.distance}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 leading-tight">
                  {attraction.name}
                </h3>
                <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500">
                  <p className="text-stone-300 text-sm line-clamp-2">
                    A sacred destination for pilgrims and travelers seeking spiritual peace.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="mt-20 pt-12 border-t border-stone-100">
          <div className="flex flex-wrap justify-center gap-4">
            {HOTEL_DATA.website_sections.seo_keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-4 py-2 bg-stone-100 text-stone-500 text-xs font-medium rounded-full hover:bg-stone-200 transition-colors cursor-default"
              >
                #{keyword.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
