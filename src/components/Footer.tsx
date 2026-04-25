import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text text-surface">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-surface font-bold">
                SD
              </div>
              <div>
                <div className="text-lg font-bold">Sikhar Darshan</div>
                <div className="text-xs text-surface/70">Govardhan</div>
              </div>
            </div>
            <p className="text-surface/80 leading-relaxed">
              Your peaceful sanctuary in the sacred land of Govardhan. Experience spiritual tranquility with modern comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-surface/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/rooms" className="text-surface/80 hover:text-primary transition-colors">Our Rooms</Link></li>
              <li><Link to="/amenities" className="text-surface/80 hover:text-primary transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="text-surface/80 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-surface/80 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/attractions" className="text-surface/80 hover:text-primary transition-colors">Nearby Attractions</Link></li>
              <li><Link to="/faq" className="text-surface/80 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-surface/80 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/book" className="text-surface/80 hover:text-primary transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-surface/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>Near Govardhan Parikrama Marg, Govardhan, UP - 281502</span>
              </li>
              <li className="flex items-center gap-2 text-surface/80">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2 text-surface/80">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <a href="mailto:info@sikhardarshan.com" className="hover:text-primary transition-colors">info@sikhardarshan.com</a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface/10 text-center text-surface/60">
          <p>&copy; {new Date().getFullYear()} Sikhar Darshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}