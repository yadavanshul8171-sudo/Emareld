import { motion } from 'motion/react';
import { HOTEL_DATA } from '../constants';
import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Twitter, Send } from 'lucide-react';

export default function Footer() {
  const { hotel_details } = HOTEL_DATA;

  return (
    <footer id="contact" className="bg-stone-100 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          {/* Brand & Newsletter */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold text-emerald-950 leading-none">
                B P EMERALD
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-gold-600 mt-1">
                Mathura
              </span>
            </div>
            <p className="text-stone-500 leading-relaxed max-w-sm">
              Experience the perfect blend of modern luxury and traditional hospitality in the heart of the holy city of Mathura.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 bg-white rounded-full text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all shadow-sm">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white rounded-full text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white rounded-full text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all shadow-sm">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-emerald-950 mb-6 uppercase tracking-widest text-sm">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-stone-500 hover:text-gold-600 transition-colors">Home</a></li>
                <li><a href="#about" className="text-stone-500 hover:text-gold-600 transition-colors">About Us</a></li>
                <li><a href="#rooms" className="text-stone-500 hover:text-gold-600 transition-colors">Rooms</a></li>
                <li><a href="#amenities" className="text-stone-500 hover:text-gold-600 transition-colors">Amenities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-emerald-950 mb-6 uppercase tracking-widest text-sm">Support</h4>
              <ul className="space-y-4">
                <li><a href="#contact" className="text-stone-500 hover:text-gold-600 transition-colors">Contact</a></li>
                <li><a href="#attractions" className="text-stone-500 hover:text-gold-600 transition-colors">Attractions</a></li>
                <li><a href="#" className="text-stone-500 hover:text-gold-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-stone-500 hover:text-gold-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
            <h4 className="font-bold text-emerald-950 mb-8 uppercase tracking-widest text-sm">Contact Details</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-900/10 rounded-lg text-emerald-900">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">Address</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{hotel_details.location.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-900/10 rounded-lg text-emerald-900">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">Phone</p>
                  <p className="text-sm text-stone-500">{hotel_details.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-900/10 rounded-lg text-emerald-900">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">Email</p>
                  <p className="text-sm text-stone-500">{hotel_details.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-900/10 rounded-lg text-emerald-900">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">Website</p>
                  <p className="text-sm text-stone-500">{hotel_details.contact.website}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} Hotel B P Emerald. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-stone-400 text-sm">
            <span>Designed with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-red-500"
            >
              ❤
            </motion.span>
            <span>for Mathura</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
