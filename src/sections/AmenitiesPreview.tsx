'use client';

import { motion } from 'framer-motion';
import { Wifi, Coffee, Car, Utensils, Clock, Shield } from 'lucide-react';

const amenities = [
  { icon: Clock, label: '24/7 Service' },
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Car, label: 'Free Parking' },
  { icon: Utensils, label: 'Restaurant' },
  { icon: Coffee, label: 'Tea/Coffee' },
  { icon: Shield, label: 'Safe & Secure' }
];

export default function AmenitiesPreview() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">Amenities</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Everything you need for a comfortable and peaceful stay
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-spiritual-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                <amenity.icon className="w-8 h-8 text-surface" />
              </div>
              <span className="text-text font-medium text-center">{amenity.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}