'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'Sikhar Darshan provided the perfect peaceful retreat for our family pilgrimage. The location is ideal, rooms are spotless, and the staff is incredibly helpful. Highly recommended!'
  },
  {
    name: 'Sarah Johnson',
    location: 'USA',
    rating: 5,
    text: 'As an international visitor, I felt completely at home. The spiritual atmosphere combined with modern amenities made my stay memorable. The proximity to Govardhan Hill is unbeatable.'
  },
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Wonderful experience! The hotel maintains high standards of cleanliness and the food is delicious. Perfect base for exploring all the sacred sites around Govardhan.'
  }
];

export default function Testimonials() {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">Guest Experiences</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Hear from pilgrims who have stayed with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-spiritual-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 relative"
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-text-light mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-semibold text-text">{testimonial.name}</p>
                <p className="text-sm text-text-light">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}