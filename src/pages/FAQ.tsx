import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'Booking & Reservations',
    questions: [
      {
        q: 'How can I make a reservation?',
        a: 'You can book through our website, call us directly at +91 98765 43210, or WhatsApp us. We recommend booking in advance, especially during festival seasons.'
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Free cancellation up to 48 hours before check-in. Cancellations within 48 hours will incur a one-night charge. No-shows are charged the full booking amount.'
      },
      {
        q: 'Do you accept advance payments?',
        a: 'Yes, we accept advance payments through bank transfer, UPI, or card. A confirmation will be sent once payment is received.'
      },
      {
        q: 'What are the check-in and check-out times?',
        a: 'Check-in is from 12:00 PM and check-out is until 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability.'
      }
    ]
  },
  {
    category: 'Rooms & Amenities',
    questions: [
      {
        q: 'What amenities are included in the rooms?',
        a: 'All rooms include comfortable bedding, attached bathroom, hot/cold water, air conditioning, free Wi-Fi, TV, and daily housekeeping.'
      },
      {
        q: 'Is food available at the hotel?',
        a: 'Yes, we have a pure vegetarian restaurant serving breakfast, lunch, and dinner. Room service is also available.'
      },
      {
        q: 'Do you have parking facilities?',
        a: 'Yes, we provide free secure parking for all guests with 24/7 monitoring.'
      },
      {
        q: 'Is Wi-Fi available?',
        a: 'Yes, complimentary high-speed Wi-Fi is available throughout the property.'
      }
    ]
  },
  {
    category: 'Location & Transportation',
    questions: [
      {
        q: 'How far is the hotel from Govardhan Parikrama?',
        a: 'We are just 500 meters (5-minute walk) from the Govardhan Parikrama starting point, making us ideally located for pilgrims.'
      },
      {
        q: 'How do I reach the hotel from Mathura?',
        a: 'Govardhan is about 25 km from Mathura. You can take a taxi, auto-rickshaw, or local bus. We can also arrange pickup services upon request.'
      },
      {
        q: 'Are other holy sites nearby?',
        a: 'Yes! Radha Kund (2 km), Kusum Sarovar (3 km), and Mansi Ganga (1.5 km) are all easily accessible from our location.'
      },
      {
        q: 'Can you arrange local transportation?',
        a: 'Yes, we can help arrange taxis or auto-rickshaws for visiting nearby attractions and temples.'
      }
    ]
  },
  {
    category: 'General Information',
    questions: [
      {
        q: 'Is the hotel suitable for families?',
        a: 'Absolutely! We welcome families and provide a safe, comfortable environment suitable for guests of all ages.'
      },
      {
        q: 'Do you accommodate international guests?',
        a: 'Yes, we warmly welcome international spiritual tourists. Our staff can assist with basic English communication.'
      },
      {
        q: 'What is the best time to visit Govardhan?',
        a: 'October to March offers pleasant weather. Govardhan Puja (October/November) and Kartik month are especially auspicious but also very busy.'
      },
      {
        q: 'Is the hotel accessible for elderly or disabled guests?',
        a: 'We have ground floor rooms available and our staff is always ready to assist elderly and disabled guests with their needs.'
      }
    ]
  }
];

export default function FAQ() {
  useEffect(() => {
    document.title = 'FAQ - Sikhar Darshan Hotel Govardhan';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center spiritual-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center container-custom">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">Find answers to common questions about your stay</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group bg-spiritual-light rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-text">
                        <span className="pr-8">{faq.q}</span>
                        <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6 text-text-light leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding spiritual-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Still Have Questions?</h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Our team is here to help! Feel free to reach out to us anytime.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 gold-gradient text-surface font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}