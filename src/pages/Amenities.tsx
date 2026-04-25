import { useEffect } from 'react';
import { Wifi, Coffee, Car, Utensils, Clock, Shield, Droplets, Wind } from 'lucide-react';

const amenities = [
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Round-the-clock assistance for all your needs during your spiritual journey'
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'Stay connected with complimentary high-speed internet throughout the property'
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Secure parking space for your vehicles with 24/7 monitoring'
  },
  {
    icon: Utensils,
    title: 'Restaurant',
    description: 'Pure vegetarian meals prepared with devotion and hygiene'
  },
  {
    icon: Coffee,
    title: 'Tea/Coffee',
    description: 'Complimentary refreshments available throughout the day'
  },
  {
    icon: Droplets,
    title: 'Hot Water',
    description: '24-hour hot water supply in all rooms for your comfort'
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Climate-controlled rooms for comfort in all seasons'
  },
  {
    icon: Shield,
    title: 'Safety & Security',
    description: 'CCTV surveillance and secure environment for peaceful stay'
  }
];

export default function Amenities() {
  useEffect(() => {
    document.title = 'Amenities - Sikhar Darshan Hotel Govardhan';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center spiritual-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center container-custom">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">Our Amenities</h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">Everything you need for a comfortable and peaceful stay</p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-background p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <amenity.icon className="w-8 h-8 text-surface" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text">{amenity.title}</h3>
                <p className="text-text-light">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding spiritual-gradient">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-text">Parikrama Guidance</h3>
              <p className="text-text-light">Local guides available to accompany you on the sacred Govardhan Parikrama</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-text">Travel Assistance</h3>
              <p className="text-text-light">Help with local transportation and visiting nearby holy sites</p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-text">Early Check-in/Late Check-out</h3>
              <p className="text-text-light">Flexible timing based on availability to suit your pilgrimage schedule</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}