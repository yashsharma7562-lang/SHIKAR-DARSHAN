import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Sikhar Darshan Hotel Govardhan',
  description: 'Get in touch with Sikhar Darshan. Call us, email us, or visit us in Govardhan. We\'re here to help plan your spiritual journey.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center spiritual-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center container-custom">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">We're here to assist you with your spiritual journey</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-text">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-surface" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Phone</h3>
                    <p className="text-text-light">+91 98765 43210</p>
                    <p className="text-text-light">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-surface" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Email</h3>
                    <p className="text-text-light">info@sikhardarshan.com</p>
                    <p className="text-text-light">booking@sikhardarshan.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-surface" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Address</h3>
                    <p className="text-text-light">
                      Sikhar Darshan Hotel<br />
                      Near Govardhan Parikrama Marg<br />
                      Govardhan, Mathura District<br />
                      Uttar Pradesh - 281502, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-surface" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Reception Hours</h3>
                    <p className="text-text-light">24/7 - Always Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-spiritual-light p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-text">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-text font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-text font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 gold-gradient text-surface font-semibold rounded-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding spiritual-gradient">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-text">Find Us Here</h2>
          <div className="bg-surface rounded-xl shadow-xl p-4 md:p-8">
            <div className="aspect-video bg-accent/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-text-light">Google Maps integration</p>
                <p className="text-sm text-text-light mt-2">Sikhar Darshan, Govardhan, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}