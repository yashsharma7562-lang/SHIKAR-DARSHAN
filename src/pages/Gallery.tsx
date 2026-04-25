import { useEffect } from 'react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800', alt: 'Deluxe Room Interior' },
  { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800', alt: 'Hotel Exterior' },
  { src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800', alt: 'Temple View' },
  { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800', alt: 'Reception Area' },
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', alt: 'Hotel Lobby' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', alt: 'Suite Room' },
  { src: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800', alt: 'Bathroom' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800', alt: 'Restaurant Area' },
  { src: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800', alt: 'Spiritual Decor' },
  { src: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800', alt: 'Govardhan Hill' },
  { src: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800', alt: 'Sacred Lake' },
  { src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', alt: 'Evening View' }
];

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery - Sikhar Darshan Hotel Govardhan';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center spiritual-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center container-custom">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">Gallery</h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">Glimpses of serenity and spiritual beauty</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-surface font-medium p-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="section-padding spiritual-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Experience Sikhar Darshan</h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Pictures capture moments, but the true essence of Sikhar Darshan is best experienced in person. We invite you to visit and feel the spiritual tranquility yourself.
          </p>
          <a href="/book" className="inline-block px-8 py-4 gold-gradient text-surface font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105">
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
}