import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/dubai-marina.jpg"
            alt="Dubai Marina Skyline"
            fill
            className="object-cover transition-transform duration-1000 scale-105 opacity-80 animate-hero-fade"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#EBEBED]">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#EBEBED]">
                Rush Hour
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#EBEBED]">
                Innovative Real Estate Agency in Dubai
              </h2>
              <div className="flex gap-4">
                <Link
                  href="/listings"
                  className="bg-[#A58A5E] text-[#EBEBED] px-8 py-3 rounded-lg hover:bg-[#8B6F4A] transition-colors"
                >
                  View Properties
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#050506] text-[#EBEBED] border border-[#A58A5E] px-8 py-3 rounded-lg hover:bg-[#0A0A0B] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services + About Us Section */}
      <section className="py-20 bg-[#050506]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" data-aos="fade-up">
            {/* Our Services */}
            <div>
              <h2 className="text-3xl font-bold mb-12 text-[#A58A5E]" data-aos="fade-right">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-[#0A0A0B] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={index * 60}>
                    <h3 className="text-xl font-semibold mb-3 text-[#A58A5E]">{service.title}</h3>
                    <p className="text-[#EBEBED]">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* About Us */}
            <div className="flex flex-col justify-center text-[#EBEBED]" data-aos="fade-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#A58A5E]">About Us</h3>
              <h4 className="text-xl md:text-2xl font-medium mb-6">Grow your Real Estate business with Rush Hour.</h4>
              <p className="text-lg md:text-xl leading-relaxed">
                Our real estate brokerage company is dedicated to providing exceptional service to buyers and sellers of residential and commercial properties. We have a team of experienced and highly qualified real estate agents who work tirelessly to ensure that our clients achieve their real estate goals.
              </p>
              <div className="flex gap-4 mt-8">

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Playlist Section */}
      <section className="py-20 bg-[#050506] flex flex-col items-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-[#A58A5E]">Our YouTube Playlist</h2>
        <div className="w-full flex justify-center mb-8">
          <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg border border-[#A58A5E]/30">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/videoseries?list=PLSaP2HBKjp5hyCFFG1xAeZJqGy9-2wGVT"
              title="Rush Hour YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <a
          href="https://youtube.com/playlist?list=PLSaP2HBKjp5hyCFFG1xAeZJqGy9-2wGVT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#A58A5E] text-[#EBEBED] px-8 py-3 rounded-lg font-semibold hover:bg-[#8B6F4A] transition-colors text-lg shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Watch On Our YouTube Channel
        </a>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-[#050506]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#A58A5E]" data-aos="fade-down">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div key={index} className="bg-[#0A0A0B] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-aos="zoom-in" data-aos-delay={index * 80}>
                <div className="relative h-64">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#A58A5E]">{property.title}</h3>
                  <p className="text-[#EBEBED] mb-4">{property.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#A58A5E]">{property.price}</span>
                    <Link
                      href={`/listings/${property.id}`}
                      className="text-[#A58A5E] hover:text-[#8B6F4A]"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: 'Sell, buy & rent property',
    description: 'Comprehensive real estate services for selling, buying, and renting properties in Dubai.',
  },
  {
    title: 'Property management',
    description: 'Professional property management services to maximize your investment returns.',
  },
  {
    title: 'Settlement of real estate disputes',
    description: 'Expert assistance in resolving real estate conflicts and disputes.',
  },
  {
    title: 'Maintenance and renovation',
    description: 'Professional maintenance and renovation services for your properties.',
  },
  {
    title: 'Legal support',
    description: 'Professional legal assistance for all your real estate transactions.',
  },
  {
    title: 'Opening of bank accounts',
    description: 'Assistance with opening bank accounts in UAE banks.',
  },
  {
    title: 'Money transfer',
    description: 'Secure and efficient money transfer services for your real estate transactions.',
  },
  {
    title: '24/7 free customer service',
    description: 'Round-the-clock customer support to address all your real estate needs.',
  },
  {
    title: 'Residency',
    description: 'Complete support for obtaining UAE residency through property investment.',
  },
  {
    title: 'Other customized services',
    description: 'Tailored solutions to meet your specific real estate requirements.',
  },
];

const featuredProperties = [
  {
    id: 1,
    title: 'Luxury Villa in Palm Jumeirah',
    location: 'Palm Jumeirah, Dubai',
    price: 'AED 15M',
    image: '/images/property1.jpg',
  },
  {
    id: 2,
    title: 'Modern Apartment in Downtown',
    location: 'Downtown Dubai',
    price: 'AED 3.5M',
    image: '/images/property2.jpg',
  },
  {
    id: 3,
    title: 'Penthouse in Marina',
    location: 'Dubai Marina',
    price: 'AED 8.2M',
    image: '/images/property3.jpg',
  },
]; 