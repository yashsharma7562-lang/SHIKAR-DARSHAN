import { Metadata } from 'next';
import { Calendar, Users, Bed, Phone } from 'lucide-react';
import { rooms } from '@/data/rooms';

export const metadata: Metadata = {
  title: 'Book Now - Sikhar Darshan Hotel Govardhan',
  description: 'Book your peaceful stay at Sikhar Darshan. Choose from our comfortable rooms and experience spiritual tranquility in Govardhan.',
};

export default function BookPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center spiritual-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center container-custom">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">Book Your Stay</h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">Reserve your peaceful sanctuary in Govardhan</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-4xl">
          <div className="bg-spiritual-light p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-text text-center">Reservation Details</h2>
            
            <form className="space-y-6">
              {/* Guest Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-text font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-text font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                  <label htmlFor="phone" className="block text-text font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Booking Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkIn" className="block text-text font-medium mb-2">
                    <Calendar className="inline w-5 h-5 mr-2" />
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-text font-medium mb-2">
                    <Calendar className="inline w-5 h-5 mr-2" />
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="roomType" className="block text-text font-medium mb-2">
                    <Bed className="inline w-5 h-5 mr-2" />
                    Room Type *
                  </label>
                  <select
                    id="roomType"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select room type</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} - ₹{room.price}/night
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-text font-medium mb-2">
                    <Users className="inline w-5 h-5 mr-2" />
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-text font-medium mb-2">Special Requests</label>
                <textarea
                  id="specialRequests"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Any special requirements or requests?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 gold-gradient text-surface font-semibold rounded-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
              >
                Complete Booking
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding spiritual-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Need Help With Your Booking?</h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 to assist you with reservations and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-text font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-text font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105">
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}