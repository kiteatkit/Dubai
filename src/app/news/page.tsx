import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  return (
    <>
      <main className="pt-20">
        <section className="py-20 bg-[#050506] min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#A58A5E]" data-aos="fade-down">Latest News & Insights</h1>
            
            {/* Featured Article */}
            <div className="mb-16" data-aos="fade-up">
              <div className="bg-[#0A0A0B] rounded-2xl overflow-hidden shadow-lg border border-[#A58A5E]/20">
                <div className="relative h-96 w-full">
                  <Image
                    src="/images/news/featured.jpg"
                    alt="Dubai Real Estate Market Trends"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#A58A5E] font-medium">Market Insights</span>
                    <span className="text-[#EBEBED]/70">March 15, 2024</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-[#A58A5E]">
                    Dubai Real Estate Market Shows Strong Growth in Q1 2024
                  </h2>
                  <p className="text-[#EBEBED] mb-6">
                    The Dubai real estate market continues to show remarkable resilience and growth in the first quarter of 2024. 
                    With increasing foreign investment and a growing demand for luxury properties, the market is experiencing 
                    unprecedented momentum...
                  </p>
                  <Link
                    href="/news/dubai-real-estate-market-trends"
                    className="text-[#A58A5E] hover:text-[#EBEBED] font-medium underline underline-offset-4 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-[#A58A5E]/20 flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[#A58A5E] text-sm font-medium">{article.category}</span>
                      <span className="text-[#EBEBED]/70 text-sm">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#A58A5E]">{article.title}</h3>
                    <p className="text-[#EBEBED] mb-4 flex-1">{article.excerpt}</p>
                    <Link
                      href={`/news/${article.slug}`}
                      className="text-[#A58A5E] hover:text-[#EBEBED] font-medium underline underline-offset-4 transition-colors mt-auto"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const newsArticles = [
  {
    title: 'New Luxury Development Announced in Palm Jumeirah',
    category: 'Development',
    date: 'March 10, 2024',
    excerpt: 'A new luxury residential project has been announced in Palm Jumeirah, featuring exclusive waterfront villas...',
    image: '/images/news/palm-development.jpg',
    slug: 'new-luxury-development-palm-jumeirah'
  },
  {
    title: 'Dubai Property Investment Guide 2024',
    category: 'Investment',
    date: 'March 5, 2024',
    excerpt: 'Comprehensive guide to investing in Dubai real estate, including market analysis and investment opportunities...',
    image: '/images/news/investment-guide.jpg',
    slug: 'dubai-property-investment-guide-2024'
  },
  {
    title: 'Sustainable Living in Dubai: Green Buildings on the Rise',
    category: 'Sustainability',
    date: 'February 28, 2024',
    excerpt: 'Dubai\'s real estate sector is embracing sustainable development with new green building initiatives...',
    image: '/images/news/green-buildings.jpg',
    slug: 'sustainable-living-dubai-green-buildings'
  },
  {
    title: 'Expo 2020 Legacy: Impact on Dubai Real Estate',
    category: 'Market Analysis',
    date: 'February 20, 2024',
    excerpt: 'How Expo 2020 continues to influence Dubai\'s real estate market and development landscape...',
    image: '/images/news/expo-impact.jpg',
    slug: 'expo-2020-legacy-dubai-real-estate'
  },
  {
    title: 'Top 5 Family-Friendly Communities in Dubai',
    category: 'Lifestyle',
    date: 'February 15, 2024',
    excerpt: 'Discover the best family-friendly communities in Dubai, featuring top schools and amenities...',
    image: '/images/news/family-communities.jpg',
    slug: 'top-family-friendly-communities-dubai'
  },
  {
    title: 'Dubai Real Estate Tax Guide 2024',
    category: 'Legal',
    date: 'February 10, 2024',
    excerpt: 'Everything you need to know about real estate taxes and regulations in Dubai...',
    image: '/images/news/tax-guide.jpg',
    slug: 'dubai-real-estate-tax-guide-2024'
  }
]; 