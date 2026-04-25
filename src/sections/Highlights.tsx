'use client';

import { motion } from 'framer-motion';
import { MapPin, Sparkles, Clock } from 'lucide-react';

const highlights = [
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Walking distance from Govardhan Parikrama starting point'
  },
  {
    icon: Sparkles,
    title: 'Clean & Hygienic',
    description: 'Spotless rooms maintained to the highest standards'
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Round-the-clock assistance for all your needs'
  }
];

export default function Highlights() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 gold-gradient"></div>
      
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                <highlight.icon className="w-10 h-10 text-surface" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-text">{highlight.title}</h3>
              <p className="text-text-light leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}