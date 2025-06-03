"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const teamSlider = document.getElementById('teamSlider');
    const prevBtn = document.getElementById('teamPrevBtn');
    const nextBtn = document.getElementById('teamNextBtn');
    
    if (!teamSlider || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const totalCards = 6; // Fixed number of team members
    
    const getResponsiveSettings = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) return { cardsToShow: 3, cardWidth: 33.333 };
      if (screenWidth >= 768) return { cardsToShow: 2, cardWidth: 50 };
      return { cardsToShow: 1, cardWidth: 100 };
    };
    
    let { cardsToShow, cardWidth } = getResponsiveSettings();
    let maxIndex = Math.max(0, totalCards - cardsToShow);
    
    const updateSlider = () => {
      const translateX = -(currentIndex * cardWidth);
      teamSlider.style.transform = `translateX(${translateX}%)`;
    };
    
    const nextSlide = () => {
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      updateSlider();
    };
    
    const prevSlide = () => {
      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      updateSlider();
    };
    
    const handleResize = () => {
      const newSettings = getResponsiveSettings();
      cardsToShow = newSettings.cardsToShow;
      cardWidth = newSettings.cardWidth;
      maxIndex = Math.max(0, totalCards - cardsToShow);
      
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }
      updateSlider();
    };
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    window.addEventListener('resize', handleResize);
    
    // Initialize
    updateSlider();
    
    // YouTube Playlist functionality
    const youtubeMainFrame = document.getElementById('youtubeMainFrame') as HTMLIFrameElement;
    const playlistItems = document.querySelectorAll('.playlist-item');
    
    if (youtubeMainFrame && playlistItems.length > 0) {
      playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
          const videoId = item.getAttribute('data-video-id');
          if (videoId && youtubeMainFrame) {
            youtubeMainFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            
            // Update active state
            playlistItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
          }
        });
      });
    }
    
    return () => {
      nextBtn.removeEventListener('click', nextSlide);
      prevBtn.removeEventListener('click', prevSlide);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                  <div key={index} className="bg-[#0A0A0B] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4" data-aos="fade-up" data-aos-delay={index * 60}>
                    <div className="flex-shrink-0 w-12 h-12 text-[#A58A5E]">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#EBEBED]">{service.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            {/* About Us */}
            <div className="flex flex-col justify-center text-[#EBEBED]" data-aos="fade-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#A58A5E]">About us</h3>
              <h4 className="text-xl md:text-2xl font-medium mb-6">Grow your Real Estate business with Rush Hour.</h4>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Our real estate brokerage company is dedicated to providing exceptional service to buyers and sellers of residential and commercial properties. We have a team of experienced and highly qualified real estate agents who work tirelessly to ensure that our clients achieve their real estate goals.
              </p>
              
              {/* Video Container */}
              <div className="w-full flex justify-center" data-aos="fade-up" data-aos-delay={200}>
                <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg border border-[#A58A5E]/30">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9CaUbvo2lLE"
                    title="About Rush Hour Real Estate"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Gallery Section */}
      <section className="py-20 bg-[#0A0A0B]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#A58A5E]" data-aos="fade-down">Property Gallery</h2>
            <p className="text-lg text-[#EBEBED] max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay={100}>
              Explore our exclusive collection of premium properties in Dubai's most prestigious locations
            </p>
          </div>
          
          <div className="relative mb-12" data-aos="fade-up" data-aos-delay={200}>
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-scroll hover:pause-animation">
                {/* First set of images */}
                {galleryImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-80 h-64 relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm">{image.location}</p>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {galleryImages.map((image, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 h-64 relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm">{image.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay={300}>
            <a
              href="/files/rush-hour-catalog.pdf"
              download="Rush Hour Properties Catalog.pdf"
              className="bg-[#A58A5E] text-[#EBEBED] px-8 py-4 rounded-lg font-semibold hover:bg-[#8B6F4A] transition-colors duration-300 flex items-center gap-3 mx-auto text-lg shadow-lg hover:shadow-xl inline-flex"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"/>
                <path d="M12 12H8V14H12V17L16 13L12 9V12Z"/>
              </svg>
              Download Brochure
            </a>

          </div>
        </div>
      </section>

      {/* Luxury Villa Presentation Section */}
      <section className="py-20 bg-[#050506]" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#A58A5E]" data-aos="fade-down">
            We are proud to present
          </h2>
          


          {/* Styled Description */}
          <div className="bg-[#0A0A0B] p-6 rounded-xl border border-[#A58A5E]/20 mb-12" data-aos="fade-up" data-aos-delay={200}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#A58A5E]"></div>
              <svg className="w-5 h-5 text-[#A58A5E]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div className="w-8 h-0.5 bg-[#A58A5E]"></div>
            </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#EBEBED] leading-relaxed">
              <span className="text-[#A58A5E]">Inside 15M luxury</span> Ritz-Carlton Villa,<br className="hidden md:block"/>
              <span className="text-[#A58A5E]">Ras Al Khaimah</span> | own your desert oasis!<br className="hidden md:block"/>
              <span className="text-[#A58A5E]">2-Bed Villa Tour</span>
            </h3>
            <p className="text-lg md:text-xl text-[#EBEBED] leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-[#A58A5E]">Step into luxury desert living</span> with this exclusive tour of a private two-bedroom villa at 
              <span className="font-semibold text-[#A58A5E]"> The Ritz-Carlton Al Wadi Desert Resort</span> in Ras Al Khaimah, UAE. 
              This stunning property offers a <span className="font-semibold text-[#A58A5E]">truly unique lifestyle and investment opportunity.</span>
            </p>
          </div>
          
          {/* Video Container */}
          <div className="w-full flex justify-center mb-12" data-aos="fade-up" data-aos-delay={300}>
            <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg border border-[#A58A5E]/30">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9K3ndJvdi8c"
                title="Luxury Ritz-Carlton Villa Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Villa Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay={400}>
            {/* Villa Highlights */}
            <div className="bg-[#0A0A0B] p-8 rounded-xl border border-[#A58A5E]/20">
              <h4 className="text-2xl font-bold mb-6 text-[#A58A5E] flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-9-7z"/>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg>
                Villa Highlights
              </h4>
              <ul className="space-y-3 text-[#EBEBED] text-left">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A58A5E] mt-2 flex-shrink-0"></div>
                  <span>Spacious living area with cozy fireplace</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A58A5E] mt-2 flex-shrink-0"></div>
                  <span>Elegant dining space and outdoor terrace</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A58A5E] mt-2 flex-shrink-0"></div>
                  <span>Private pool with breathtaking desert and starry night views</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A58A5E] mt-2 flex-shrink-0"></div>
                  <span>Master bedroom with panoramic desert vistas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A58A5E] mt-2 flex-shrink-0"></div>
                  <span>Luxurious bathroom with a unique outdoor shower experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A58A5E] mt-2 flex-shrink-0"></div>
                  <span>Additional guest bedroom and bathroom for comfort and convenience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A58A5E] mt-2 flex-shrink-0"></div>
                  <span>Surrounded by serene nature and absolute privacy</span>
                </li>
              </ul>
            </div>

            {/* Investment Opportunity */}
            <div className="bg-[#0A0A0B] p-8 rounded-xl border border-[#A58A5E]/20">
              <h4 className="text-2xl font-bold mb-6 text-[#A58A5E] flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                </svg>
                Investment Opportunity
              </h4>
              <div className="space-y-4 text-[#EBEBED]">
                <div className="bg-[#050506] p-4 rounded-lg border border-[#A58A5E]/10">
                  <p className="text-lg font-semibold text-[#A58A5E] mb-2">Starting Price</p>
                  <p className="text-2xl font-bold">AED 15 Million</p>
                  <p className="text-sm opacity-75">Two-bedroom villa</p>
                </div>
                <div className="bg-[#050506] p-4 rounded-lg border border-[#A58A5E]/10">
                  <p className="text-lg font-semibold text-[#A58A5E] mb-2">Premium Options</p>
                  <p className="text-2xl font-bold">Up to AED 25 Million</p>
                  <p className="text-sm opacity-75">Five-bedroom villas available</p>
                </div>
                <p className="text-center italic border-t border-[#A58A5E]/20 pt-4 mt-6">
                  Perfect for buyers seeking a private retreat or a trophy asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Playlist Section */}
      <section className="py-20 bg-[#050506]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#A58A5E]">Our YouTube Playlist</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-[#A58A5E]/30 bg-[#0A0A0B]">
            <iframe
                  id="youtubeMainFrame"
              width="100%"
              height="100%"
                  src="https://www.youtube.com/embed/F486LR7j5rs"
                  title="Rush Hour Real Estate Main Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
            
            {/* Playlist */}
            <div className="lg:col-span-1">
              <div className="bg-[#0A0A0B] rounded-lg border border-[#A58A5E]/20 p-4 h-full max-h-[500px] overflow-y-auto">
                <h3 className="text-lg font-semibold text-[#A58A5E] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 16.74l-7-4a1 1 0 0 0-1 1.73l7 4a1 1 0 0 0 1-1.73z"/>
                    <path d="M8 12.74l7-4A1 1 0 0 0 14 7l-7 4a1 1 0 0 0 1 1.73z"/>
                    <path d="M8 17.74l7-4a1 1 0 0 0-1-1.73l-7 4a1 1 0 0 0 1 1.73z"/>
                  </svg>
                  Playlist (6 Videos)
                </h3>
                
                <div className="space-y-3">
                  {youtubeVideos.map((video, index) => (
                    <div
                      key={index}
                      className={`playlist-item flex gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#050506] border border-transparent hover:border-[#A58A5E]/30 ${index === 0 ? 'active bg-[#050506] border-[#A58A5E]/30' : ''}`}
                      data-video-id={video.id}
                    >
                      <div className="flex-shrink-0 w-20 h-14 rounded overflow-hidden bg-[#A58A5E]/20 relative">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-[#EBEBED] line-clamp-2 leading-tight mb-1">
                          {video.title}
                        </h4>
                        <p className="text-xs text-[#A58A5E] opacity-75">{video.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
        <a
          href="https://youtube.com/playlist?list=PLSaP2HBKjp5hyCFFG1xAeZJqGy9-2wGVT"
          target="_blank"
          rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#A58A5E] text-[#EBEBED] px-8 py-3 rounded-lg font-semibold hover:bg-[#8B6F4A] transition-colors text-lg shadow-md mx-auto w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch Full Playlist on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-[#050506]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Social Stats */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#A58A5E]" data-aos="fade-down">
              Meet Our Team
            </h2>
            <div className="flex justify-center gap-8 mb-8" data-aos="fade-up" data-aos-delay={100}>
              <a 
                href="https://www.youtube.com/@rrushhour.properties"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0A0A0B] px-6 py-3 rounded-lg hover:bg-[#0F0F10] transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-[#EBEBED] font-semibold">52,9K subscribers</span>
              </a>
              <a 
                href="https://www.instagram.com/rushhour.properties/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0A0A0B] px-6 py-3 rounded-lg hover:bg-[#0F0F10] transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.162c3.204 0 3.584.012 4.849.07 1.308.06 2.655.358 3.608 1.311.953.953 1.251 2.3 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.06 1.308-.358 2.655-1.311 3.608-.953.953-2.3 1.251-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.308-.06-2.655-.358-3.608-1.311-.953-.953-1.251-2.3-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.06-1.308.358-2.655 1.311-3.608.953-.953 2.3-1.251 3.608-1.311 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                <span className="text-[#EBEBED] font-semibold">11K subscribers</span>
              </a>
            </div>
          </div>

          {/* Team Cards with Navigation */}
          <div className="relative" data-aos="fade-up" data-aos-delay={200}>
            {/* Navigation Arrows */}
            <button 
              id="teamPrevBtn"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#A58A5E] hover:bg-[#8B6F4A] w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 text-[#EBEBED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              id="teamNextBtn"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#A58A5E] hover:bg-[#8B6F4A] w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 text-[#EBEBED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Team Cards Container */}
            <div className="overflow-hidden mx-14">
              <div id="teamSlider" className="flex transition-transform duration-500 ease-in-out items-stretch">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex-shrink-0 px-4">
                    <div className="bg-[#0A0A0B] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#A58A5E] flex-shrink-0">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#EBEBED]">{member.name}</h3>
                          <p className="text-[#A58A5E] font-medium">{member.position}</p>
                        </div>
                      </div>
                      <p className="text-[#EBEBED] leading-relaxed flex-1">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
  },
  {
    title: 'Property management',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: 'Settlement of real estate disputes',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V0h-2v2H8V0H6v2H2.5C1.12 2 0 3.12 0 4.5v15C0 20.88 1.12 22 2.5 22h19c1.38 0 2.5-1.12 2.5-2.5v-15C24 3.12 22.88 2 21.5 2z"/>
      </svg>
    ),
  },
  {
    title: 'Maintenance and renovation',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
  },
  {
    title: 'Legal support',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
  {
    title: 'Opening of bank accounts',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
  },
  {
    title: 'Money transfer',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
      </svg>
    ),
  },
  {
    title: '24/7 free customer service',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
      </svg>
    ),
  },
  {
    title: 'Residency',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9H21M12 8C8.69 8 6 10.69 6 14S8.69 20 12 20 18 17.31 18 14 15.31 8 12 8ZM12 18C9.79 18 8 16.21 8 14S9.79 10 12 10 16 11.79 16 14 14.21 18 12 18Z"/>
      </svg>
    ),
  },
  {
    title: 'Other customized services',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
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

const galleryImages = [
  {
    src: '/images/gallery/1.png',
    alt: '',
    title: '',
    location: ''
  },
  {
    src: '/images/gallery/2.png', 
    alt: '',
    title: '',
    location: ''
  },
  {
    src: '/images/gallery/3.png',
    alt: '',
    title: '',
    location: ''
  },
  {
    src: '/images/gallery/4.png',
    alt: '',
    title: '',
    location: ''
  },
  {
    src: '/images/gallery/5.png',
    alt: '',
    title: '',
    location: ''
  },
  {
    src: '/images/gallery/6.png',
    alt: '',
    title: '',
    location: ''
  },
  {
    src: '/images/gallery/7.png',
    alt: '',
    title: '',
    location: ''
  },
  {
    src: '/images/gallery/8.png',
    alt: '',
    title: '',
    location: ''
  }
];

const teamMembers = [
  {
    name: 'Dmitry Rushika',
    position: 'Managing Director',
    avatar: '/images/team/dmitry.png',
    description: 'Dmitry is a professional with extensive industrial experience. With a deep understanding of the real estate market and trends, he is skilled in developing and implementing effective strategies that drive growth and profitability for the company.'
  },
  {
    name: 'Negin Abdollah',
    position: 'Sales Advisor',
    avatar: '/images/team/negin.png',
    description: 'With a strong foundation in finance, Negin expertly guides clients toward profitable real estate investments, helping them navigate the vast array of projects available in the UAE.'
  },
  {
    name: 'Usman Shaukat',
    position: 'Administrator',
    avatar: '/images/team/usman.png',
    description: 'Usman is a proficient office administrator with extensive experience in the real estate sector. He excels in managing daily operations, coordination`s, and supporting sales teams to ensure seamless transactions.'
  },
  {
    name: 'Nikolai Khairullin',
    position: 'Property Sales Advisor',
    avatar: '/images/team/nikolay.png',
    description: 'A highly organized and professional Property Sales Advisor, specializing in all types of real estate transactions and operations. Committed to building trust, fostering strong partnerships, and delivering exceptional service.'
  },
  {
    name: 'Mariia Gimranova',
    position: 'Property Sales Advisor',
    avatar: '/images/team/mariia.png',
    description: 'A detail-oriented and professional Property Sales Advisor with expertise in all aspects of real estate transactions and operations. Focused on building lasting trust, strong partnerships, and delivering outstanding results.'
  },
  {
    name: 'Lysa Jarno',
    position: 'Property Sales Advisor',
    avatar: '/images/team/lysa.png',
    description: 'A highly organized and results-driven Property Sales Advisor, specializing in diverse real estate transactions and operations. Focused on building lasting client relationships, fostering trust, and delivering outstanding service.'
  }
];

const youtubeVideos = [
  {
    id: 'c_QO3DzwVeU',
    title: 'Rush Hour Real Estate Podcast Ep. 3: Negin`s Journey from Investor to Real Estate Broker',
    duration: '49:45'
  },
  {
    id: 'GSKzDdHiXUw',
    title: 'Rush Hour Real Estate Podcast Ep. 2: Is the 2024 Real Estate Market a Flop?!',
    duration: '55:57'
  },
  {
    id: 'JgwRUjkcLEk',
    title: 'Inside Luca Ferrari’s Dubai Property Journey: Investor Visa, Reinvestment Plans & More ',
    duration: '31:16'
  },
  {
    id: 'QW8IBRQzsnE',
    title: 'Inside a Luxurious Triplex Penthouse at Mr. C Residences',
    duration: '16:57'
  },
  {
    id: 'y0AxlHhtj8g',
    title: 'Inside Devmark: Dubai’s Leading Project Sales & Marketing Firm',
    duration: '56:47'
  },
  {
    id: '1uMPNsbL_SM',
    title: 'Inside AED 30M Mega Villa in Jumeirah Golf Estates',
    duration: '12:05'
  }
]; 