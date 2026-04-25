import { Users, Wifi, Wind, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    description: string;
    price: number;
    capacity: number;
    image: string;
    features: string[];
  };
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary text-surface px-4 py-2 rounded-full font-semibold">
          ₹{room.price}/night
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-text">{room.name}</h3>
        <p className="text-text-light mb-4">{room.description}</p>
        
        <div className="flex items-center gap-2 text-text-light mb-4">
          <Users className="w-5 h-5 text-primary" />
          <span>Up to {room.capacity} guests</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="flex flex-col items-center gap-1 text-text-light">
            <Wifi className="w-5 h-5 text-primary" />
            <span className="text-xs">Wi-Fi</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-text-light">
            <Wind className="w-5 h-5 text-primary" />
            <span className="text-xs">AC</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-text-light">
            <Coffee className="w-5 h-5 text-primary" />
            <span className="text-xs">Tea/Coffee</span>
          </div>
        </div>

        <Link
          to="/book"
          className="block w-full py-3 gold-gradient text-surface font-semibold rounded-lg hover:shadow-xl transition-all hover:scale-105 text-center"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}