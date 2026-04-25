'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-padding spiritual-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-spiritual rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">
            Begin Your Spiritual Journey
          </h2>
          <p className="text-lg text-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Reserve your peaceful sanctuary at Sikhar Darshan and experience the divine tranquility of Govardhan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/book"
              className="px-8 py-4 gold-gradient text-surface font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
            >
              Book Your Stay Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-surface text-text font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-text">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <a href="mailto:info@sikhardarshan.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@sikhardarshan.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}