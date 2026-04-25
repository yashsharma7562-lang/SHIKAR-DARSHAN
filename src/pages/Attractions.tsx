import { useEffect } from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

const attractions = [
  {
    name: 'Govardhan Parikrama',
    distance: '500 meters',
    time: '5 min walk',
    description: 'The sacred 21 km circumambulation of Govardhan Hill, one of the most important pilgrimages for devotees. Our hotel is perfectly located at the starting point.',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800'
  },
  {
    name: 'Radha Kund',
    distance: '2 km',
    time: '10 min drive',
    description: 'The most sacred kund (pond) in Vrindavan, where Radha and Krishna performed divine pastimes. A must-visit for all pilgrims.',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800'
  },
  {
    name: 'Kusum Sarovar',
    distance: '3 km',
    time: '12 min drive',
    description: 'A stunning sandstone monument and bathing tank, known for its architectural beauty and spiritual significance in Krishna\'s pastimes.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800'
  },
  {
    name: 'Mansi Ganga',
    distance: '1.5 km',
    time: '8 min walk',
    description: 'A sacred lake created by Lord Krishna, where devotees perform rituals and take holy baths during festivals.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'
  },
  {
    name: 'Govardhan Hill',
    distance: 'Walking distance',
    time: '3 min walk',
    description: 'The sacred hill lifted by Lord Krishna to protect the residents of Vrindavan. Pilgrims offer prayers and perform parikrama.',
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800'
  },
  {
    name: 'Mathura',
    distance: '25 km',
    time: '45 min drive',
    description: 'The birthplace of Lord Krishna, featuring numerous temples including Krishna Janmabhoomi and Dwarkadhish Temple.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800'
  }
];

export default function Attractions() {
  useEffect(() => {
    document.title = 'Nearby Attractions - Sikhar Darshan Hotel Govardhan';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center spiritual-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center container-custom">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">Nearby Attractions</h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">Explore the sacred sites of Govardhan and beyond</p>
        </div>
      </section>

      {/* Attractions List */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="space-y-8">
            {attractions.map((attraction, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h2 className="text-3xl font-bold mb-4 text-text">{attraction.name}</h2>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-text-light">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{attraction.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-light">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>{attraction.time}</span>
                    </div>
                  </div>
                  <p className="text-text-light leading-relaxed mb-6">{attraction.description}</p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors">
                    <Navigation className="w-5 h-5" />
                    Get Directions
                  </a>
                </div>
                <div className={`relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding spiritual-gradient">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-text">Location & Directions</h2>
          <div className="bg-surface rounded-xl shadow-xl p-4 md:p-8">
            <div className="aspect-video bg-accent/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-text-light">Interactive map will be integrated here</p>
                <p className="text-sm text-text-light mt-2">Sikhar Darshan, Govardhan, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}