import { Metadata } from 'next';
import RoomCard from '@/components/RoomCard';
import { rooms } from '@/data/rooms';

export const metadata: Metadata = {
  title: 'Our Rooms - Sikhar Darshan Hotel Govardhan',
  description: 'Choose from our comfortable and clean rooms - Deluxe, Super Deluxe, and Suite. All rooms feature modern amenities for a peaceful spiritual stay.',
};

export default function RoomsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center spiritual-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center container-custom">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">Our Rooms</h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">Comfortable sanctuaries designed for your spiritual journey</p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Room Features */}
      <section className="section-padding spiritual-gradient">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text">All Rooms Include</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Comfortable Bedding',
              'Attached Bathroom',
              'Hot & Cold Water',
              'Air Conditioning',
              'Free Wi-Fi',
              'Daily Housekeeping',
              'Room Service',
              'Spiritual Ambiance'
            ].map((feature, index) => (
              <div key={index} className="bg-surface p-6 rounded-lg shadow-md text-center">
                <p className="text-text font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}