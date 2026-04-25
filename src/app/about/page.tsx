import { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Sikhar Darshan Hotel Govardhan',
  description: 'Learn about Sikhar Darshan, your spiritual home in Govardhan. Dedicated to providing peaceful, hygienic accommodation for pilgrims and spiritual seekers.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center spiritual-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center container-custom">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">About Sikhar Darshan</h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">A sanctuary of peace in the heart of Govardhan</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Our Story</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Nestled in the sacred land of Govardhan, Sikhar Darshan was founded with a singular vision: to provide pilgrims and spiritual seekers with a tranquil haven that honors the sanctity of this holy region.
                </p>
                <p>
                  Our name, "Sikhar Darshan," reflects our commitment to offering guests a glimpse of the divine peak—a spiritual elevation through comfort, cleanliness, and heartfelt service.
                </p>
                <p>
                  For years, we have welcomed travelers from across India and around the world, each seeking connection with Govardhan's timeless spiritual heritage. We understand that your journey here is more than a visit—it's a pilgrimage of the soul.
                </p>
                <p>
                  Every aspect of Sikhar Darshan, from our thoughtfully designed rooms to our attentive staff, is crafted to support your spiritual practice and provide the peace you seek.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
                alt="Sikhar Darshan Hotel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding spiritual-gradient">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Devotion to Service',
                description: 'We serve with love and dedication, treating every guest as family'
              },
              {
                icon: Sparkles,
                title: 'Purity & Cleanliness',
                description: 'Maintaining the highest standards of hygiene and sanctity'
              },
              {
                icon: Users,
                title: 'Community Spirit',
                description: 'Fostering connections among spiritual seekers from all backgrounds'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Committed to providing exceptional experiences for every pilgrim'
              }
            ].map((value, index) => (
              <div key={index} className="bg-surface p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-surface" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text">{value.title}</h3>
                <p className="text-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Our Mission</h2>
          <p className="text-lg text-text-light leading-relaxed mb-8">
            To be the most trusted and beloved accommodation for pilgrims visiting Govardhan, providing a harmonious blend of spiritual atmosphere, modern comfort, and genuine hospitality that supports each guest's sacred journey.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
        </div>
      </section>
    </div>
  );
}