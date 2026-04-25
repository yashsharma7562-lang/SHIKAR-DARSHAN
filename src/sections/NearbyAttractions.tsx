'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const attractions = [
  {
    name: 'Govardhan Parikrama',
    distance: '500m',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600'
  },
  {
    name: 'Radha Kund',
    distance: '2 km',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600'
  },
  {
    name: 'Kusum Sarovar',
    distance: '3 km',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600'
  }
];

export default function NearbyAttractions() {
  return (
    <section className="section-padding spiritual-gradient">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">Nearby Sacred Sites</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Explore the holy places that make Govardhan a cherished pilgrimage destination
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text via-text/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-surface">
                <h3 className="text-2xl font-bold mb-2">{attraction.name}</h3>
                <div className="flex items-center gap-2 text-surface/90">
                  <MapPin className="w-5 h-5" />
                  <span>{attraction.distance} away</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/attractions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-text font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
          >
            Explore All Attractions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}