'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Listings() {
  const [sortBy, setSortBy] = useState<'date' | 'price'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: ''
  });

  // Add publication date to properties
  const propertiesWithDate = properties.map(property => ({
    ...property,
    publishedAt: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
  }));

  // Filter properties based on selected criteria
  const filteredProperties = propertiesWithDate.filter(property => {
    if (filters.type && property.type.toLowerCase() !== filters.type.toLowerCase()) {
      return false;
    }
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.bedrooms && property.bedrooms !== parseInt(filters.bedrooms)) {
      return false;
    }
    if (filters.bathrooms && property.bathrooms !== parseInt(filters.bathrooms)) {
      return false;
    }
    if (filters.priceRange) {
      const priceValue = parseFloat(property.price.replace(/[^0-9.]/g, ''));
      const priceInMillions = property.price.includes('M') ? priceValue : priceValue / 1000000;
      
      switch (filters.priceRange) {
        case '1-2':
          return priceInMillions >= 1 && priceInMillions < 2;
        case '2-5':
          return priceInMillions >= 2 && priceInMillions < 5;
        case '5-10':
          return priceInMillions >= 5 && priceInMillions < 10;
        case '10+':
          return priceInMillions >= 10;
        default:
          return true;
      }
    }
    return true;
  });

  // Sort filtered properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === 'date') {
      return sortOrder === 'asc' 
        ? a.publishedAt.getTime() - b.publishedAt.getTime()
        : b.publishedAt.getTime() - a.publishedAt.getTime();
    } else {
      const getPriceValue = (price: string) => {
        const value = parseFloat(price.replace(/[^0-9.]/g, ''));
        return price.includes('M') ? value * 1000000 : value;
      };
      
      return sortOrder === 'asc'
        ? getPriceValue(a.price) - getPriceValue(b.price)
        : getPriceValue(b.price) - getPriceValue(a.price);
    }
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Debug log to check price filtering
  console.log('Filtered Properties:', filteredProperties.map(p => ({
    title: p.title,
    price: p.price,
    priceInMillions: parseFloat(p.price.replace(/[^0-9.]/g, ''))
  })));

  return (
    <>
      <main className="pt-20">
        {/* Search Section */}
        <section className="py-12 bg-[#050506]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0A0A0B] rounded-xl shadow-lg p-6 border border-[#A58A5E]/20" data-aos="fade-down">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <select 
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#A58A5E]"
                >
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="townhouse">Townhouse</option>
                </select>
                <select 
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#A58A5E]"
                >
                  <option value="">Location</option>
                  <option value="downtown">Downtown Dubai</option>

                </select>
                <select 
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#A58A5E]"
                >
                  <option value="">Price Range</option>
                  <option value="1-2">1M - 2M AED</option>
                  <option value="2-5">2M - 5M AED</option>
                  <option value="5-10">5M - 10M AED</option>
                  <option value="10+">10M+ AED</option>
                </select>
                <select 
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  className="border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#A58A5E]"
                >
                  <option value="">Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
                <select 
                  value={filters.bathrooms}
                  onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                  className="border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#A58A5E]"
                >
                  <option value="">Bathrooms</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                  <option value="4">4+ Bathrooms</option>
                </select>
                <button 
                  onClick={() => setFilters({ type: '', location: '', priceRange: '', bedrooms: '', bathrooms: '' })}
                  className="bg-[#A58A5E] text-[#EBEBED] px-6 py-2 rounded-lg hover:bg-[#8B6F4A] transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="py-12 bg-[#050506] min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#A58A5E]" data-aos="fade-down">Property Listings</h1>
              
              {/* Sorting Controls */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'price')}
                  className="border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#A58A5E]"
                >
                  <option value="date">Sort by Date</option>
                  <option value="price">Sort by Price</option>
                </select>
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="bg-[#0A0A0B] text-[#EBEBED] px-4 py-2 rounded-lg border border-[#A58A5E]/40 hover:bg-[#A58A5E]/10 transition-colors"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>
            </div>

            {sortedProperties.length === 0 ? (
              <div className="text-center text-[#EBEBED] text-xl py-12">
                No properties found matching your criteria
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProperties.map((property, index) => (
                  <div
                    key={index}
                    className="bg-[#0A0A0B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-[#A58A5E]/20 flex flex-col"
                    data-aos="zoom-in"
                    data-aos-delay={index * 80}
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#A58A5E] text-[#EBEBED] px-3 py-1 rounded-full text-sm font-semibold shadow">
                        {property.type}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-[#A58A5E]">{property.title}</h3>
                      <p className="text-[#EBEBED] mb-4">{property.location}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-[#A58A5E]">{property.price}</span>
                        <div className="flex gap-4 text-[#EBEBED] text-sm">
                          <span>{property.bedrooms} beds</span>
                          <span>{property.bathrooms} baths</span>
                          <span>{property.area} sq.ft</span>
                        </div>
                      </div>
                      <div className="text-sm text-[#EBEBED]/70 mb-4">
                        Published: {property.publishedAt.toLocaleDateString()}
                      </div>
                      <Link
                        href={`/listings/${property.id}`}
                        className="block w-full text-center bg-[#A58A5E] text-[#EBEBED] px-6 py-2 rounded-lg hover:bg-[#8B6F4A] transition-colors font-semibold mt-auto"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

const properties = [
  {
    id: 1,
    title: 'Luxury Villa in Palm Jumeirah',
    location: 'Palm Jumeirah, Dubai',
    price: 'AED 15M',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 6,
    area: '8,500',
    image: '/images/property1.jpg',
  },
  {
    id: 2,
    title: 'Modern Apartment in Downtown',
    location: 'Downtown Dubai',
    price: 'AED 3.5M',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,200',
    image: '/images/property2.jpg',
  },
  {
    id: 3,
    title: 'Penthouse in Marina',
    location: 'Dubai Marina',
    price: 'AED 8.2M',
    type: 'Penthouse',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,800',
    image: '/images/property3.jpg',
  },
  {
    id: 4,
    title: 'Townhouse in Arabian Ranches',
    location: 'Arabian Ranches',
    price: 'AED 4.8M',
    type: 'Townhouse',
    bedrooms: 4,
    bathrooms: 4,
    area: '3,200',
    image: '/images/property4.jpg',
  },
  {
    id: 5,
    title: 'Waterfront Villa in Emirates Hills',
    location: 'Emirates Hills',
    price: 'AED 12M',
    type: 'Villa',
    bedrooms: 6,
    bathrooms: 7,
    area: '7,500',
    image: '/images/property5.jpg',
  },
  {
    id: 6,
    title: 'Luxury Apartment in Business Bay',
    location: 'Business Bay',
    price: 'AED 2.8M',
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 2,
    area: '950',
    image: '/images/property6.jpg',
  },
]; 