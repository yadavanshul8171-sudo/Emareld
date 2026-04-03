import { motion } from 'motion/react';
import { HOTEL_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const { about_us } = HOTEL_DATA.website_sections;

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-2 gap-4 h-[500px]"
          >
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Mathura Temple"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Hotel Lobby"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Mathura Culture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-900/10 rounded-full blur-3xl z-0" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-8 leading-tight">
              A Blend of Comfort and Spiritual Serenity
            </h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              {about_us.description}
            </p>

            <div className="space-y-6">
              {about_us.usp.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 p-1 bg-emerald-900/10 rounded-full text-emerald-900">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg">{item}</h4>
                    <p className="text-stone-500">Experience the best of Mathura with our dedicated services.</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-emerald-900">10+</span>
                <span className="text-sm text-stone-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-stone-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-emerald-900">5k+</span>
                <span className="text-sm text-stone-500 uppercase tracking-wider">Happy Guests</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
