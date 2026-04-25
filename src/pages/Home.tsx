import { useEffect } from 'react';
import Hero from '../sections/Hero';
import Highlights from '../sections/Highlights';
import RoomsPreview from '../sections/RoomsPreview';
import AmenitiesPreview from '../sections/AmenitiesPreview';
import NearbyAttractions from '../sections/NearbyAttractions';
import Testimonials from '../sections/Testimonials';
import CTASection from '../sections/CTASection';

export default function Home() {
  useEffect(() => {
    document.title = 'Sikhar Darshan - Peaceful Stay Near Govardhan Parikrama';
  }, []);

  return (
    <>
      <Hero />
      <Highlights />
      <RoomsPreview />
      <AmenitiesPreview />
      <NearbyAttractions />
      <Testimonials />
      <CTASection />
    </>
  );
}