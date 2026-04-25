import { useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Govardhan Parikrama',
    excerpt: 'Everything you need to know about the sacred 21 km circumambulation of Govardhan Hill, including best times, what to bring, and spiritual significance.',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800',
    author: 'Admin',
    date: 'March 15, 2024',
    category: 'Pilgrimage Guide'
  },
  {
    id: 2,
    title: 'The Sacred History of Radha Kund',
    excerpt: 'Discover the divine pastimes and spiritual significance of Radha Kund, the holiest of all holy places in Vrindavan.',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
    author: 'Admin',
    date: 'March 10, 2024',
    category: 'Spiritual Heritage'
  },
  {
    id: 3,
    title: 'Best Time to Visit Govardhan',
    excerpt: 'Learn about the ideal seasons, festivals, and times to plan your spiritual journey to Govardhan for the most enriching experience.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
    author: 'Admin',
    date: 'March 5, 2024',
    category: 'Travel Tips'
  },
  {
    id: 4,
    title: 'Exploring Kusum Sarovar: Architecture and Spirituality',
    excerpt: 'A detailed look at the stunning architecture and spiritual importance of this magnificent monument near Govardhan.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800',
    author: 'Admin',
    date: 'February 28, 2024',
    category: 'Attractions'
  },
  {
    id: 5,
    title: 'Vegetarian Cuisine in Govardhan',
    excerpt: 'Explore the delicious pure vegetarian food traditions of Govardhan and where to find the best prasadam.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    author: 'Admin',
    date: 'February 20, 2024',
    category: 'Food & Culture'
  },
  {
    id: 6,
    title: 'Festivals and Celebrations in Govardhan',
    excerpt: 'A calendar of major festivals celebrated in Govardhan, including Govardhan Puja and other important spiritual events.',
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800',
    author: 'Admin',
    date: 'February 15, 2024',
    category: 'Festivals'
  }
];

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog - Sikhar Darshan Hotel Govardhan';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center spiritual-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549294413-26f195200c16?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center container-custom">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">Spiritual insights, travel guides, and stories from Govardhan</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-surface text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-text-light mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-text group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-light mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding spiritual-gradient">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-text-light mb-8">
            Get the latest travel tips, spiritual insights, and special offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 gold-gradient text-surface font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}