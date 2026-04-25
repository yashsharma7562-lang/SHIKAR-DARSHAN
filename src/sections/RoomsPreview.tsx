'use client';

import { motion } from 'framer-motion';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RoomsPreview() {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">Our Rooms</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Choose from our comfortable and clean rooms, each designed to provide you with a peaceful retreat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <RoomCard room={room} />
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
            to="/rooms"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-text font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
          >
            View All Rooms
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}