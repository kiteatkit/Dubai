import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or API
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
    description: 'Stunning luxury villa with panoramic views of the Dubai skyline. This magnificent property features high-end finishes, a private pool, and extensive outdoor living spaces. The interior boasts an open-concept design with floor-to-ceiling windows, allowing natural light to flood the space.',
    features: [
      'Private Swimming Pool',
      'Smart Home Technology',
      'Private Garden',
      'Security System',
      'Parking for 4 Cars',
      'Home Office',
      'Walk-in Closets',
      'Central Air Conditioning'
    ],
    amenities: [
      '24/7 Security',
      'Fitness Center',
      'Community Pool',
      'Tennis Courts',
      'Children\'s Play Area',
      'Walking Trails',
      'Beach Access'
    ],
    images: [
      '/images/property1.jpg',
      '/images/property2.jpg',
      '/images/property3.jpg',
      '/images/property4.jpg'
    ]
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
    description: 'Contemporary apartment in the heart of Downtown Dubai, offering breathtaking views of the Burj Khalifa. This modern residence features premium finishes and an efficient layout perfect for urban living.',
    features: [
      'Floor-to-Ceiling Windows',
      'Modern Kitchen',
      'Built-in Wardrobes',
      'Balcony',
      'Parking Space',
      'Storage Room'
    ],
    amenities: [
      'Concierge Service',
      'Fitness Center',
      'Swimming Pool',
      'Rooftop Garden',
      'Security',
      'Underground Parking'
    ],
    images: [
      '/images/property2.jpg',
      '/images/property1.jpg',
      '/images/property3.jpg',
      '/images/property4.jpg'
    ]
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
    description: 'Exclusive penthouse offering stunning views of Dubai Marina. This luxurious residence features high ceilings, premium finishes, and a private terrace perfect for entertaining.',
    features: [
      'Private Terrace',
      'High Ceilings',
      'Premium Finishes',
      'Smart Home System',
      'Private Elevator',
      'Wine Cellar',
      'Home Office',
      'Walk-in Closets'
    ],
    amenities: [
      'Concierge Service',
      'Fitness Center',
      'Infinity Pool',
      'Private Beach Access',
      'Security',
      'Underground Parking',
      'Rooftop Garden'
    ],
    images: [
      '/images/property3.jpg',
      '/images/property1.jpg',
      '/images/property2.jpg',
      '/images/property4.jpg'
    ]
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
    description: 'Spacious townhouse in the prestigious Arabian Ranches community. This family-friendly property offers modern living spaces and access to world-class amenities.',
    features: [
      'Private Garden',
      'Modern Kitchen',
      'Built-in Wardrobes',
      'Storage Room',
      'Parking for 2 Cars',
      'Maid\'s Room',
      'Study Room',
      'Central Air Conditioning'
    ],
    amenities: [
      'Community Pool',
      'Tennis Courts',
      'Golf Course',
      'Community Center',
      'Security',
      'Walking Trails',
      'Children\'s Play Area'
    ],
    images: [
      '/images/property4.jpg',
      '/images/property1.jpg',
      '/images/property2.jpg',
      '/images/property3.jpg'
    ]
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
    description: 'Magnificent waterfront villa in Emirates Hills with direct access to the lake. This luxurious property features high-end finishes and extensive outdoor living spaces.',
    features: [
      'Private Swimming Pool',
      'Waterfront Access',
      'Smart Home Technology',
      'Private Garden',
      'Security System',
      'Parking for 4 Cars',
      'Home Office',
      'Walk-in Closets'
    ],
    amenities: [
      '24/7 Security',
      'Fitness Center',
      'Community Pool',
      'Tennis Courts',
      'Children\'s Play Area',
      'Walking Trails',
      'Lake Access'
    ],
    images: [
      '/images/property5.jpg',
      '/images/property1.jpg',
      '/images/property2.jpg',
      '/images/property3.jpg'
    ]
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
    description: 'Modern luxury apartment in the heart of Business Bay. This contemporary residence offers stunning city views and premium amenities.',
    features: [
      'Floor-to-Ceiling Windows',
      'Modern Kitchen',
      'Built-in Wardrobes',
      'Balcony',
      'Parking Space',
      'Storage Room',
      'Smart Home System'
    ],
    amenities: [
      'Concierge Service',
      'Fitness Center',
      'Swimming Pool',
      'Rooftop Garden',
      'Security',
      'Underground Parking',
      'Business Center'
    ],
    images: [
      '/images/property6.jpg',
      '/images/property1.jpg',
      '/images/property2.jpg',
      '/images/property3.jpg'
    ]
  }
];

export default function PropertyDetails({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === parseInt(params.id));

  if (!property) {
    notFound();
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#EBEBED]">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{property.title}</h1>
              <p className="text-xl md:text-2xl mb-4">{property.location}</p>
              <div className="flex gap-4 items-center">
                <span className="text-3xl font-bold text-[#A58A5E]">{property.price}</span>
                <span className="text-lg">|</span>
                <span>{property.type}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16 bg-[#050506]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-[#0A0A0B] rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#A58A5E]">Description</h2>
                <p className="text-[#EBEBED] leading-relaxed">{property.description}</p>
              </div>

              <div className="bg-[#0A0A0B] rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#A58A5E]">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#EBEBED]">
                      <svg className="w-5 h-5 text-[#A58A5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0A0A0B] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#A58A5E]">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#EBEBED]">
                      <svg className="w-5 h-5 text-[#A58A5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0A0A0B] rounded-xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-[#A58A5E]">Property Details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[#EBEBED]">
                    <span>Bedrooms</span>
                    <span className="font-semibold">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#EBEBED]">
                    <span>Bathrooms</span>
                    <span className="font-semibold">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#EBEBED]">
                    <span>Area</span>
                    <span className="font-semibold">{property.area} sq.ft</span>
                  </div>
                  <div className="flex justify-between items-center text-[#EBEBED]">
                    <span>Type</span>
                    <span className="font-semibold">{property.type}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full bg-[#A58A5E] text-[#EBEBED] px-6 py-3 rounded-lg hover:bg-[#8B6F4A] transition-colors font-semibold mb-4">
                    Contact Agent
                  </button>
                  <button className="w-full bg-[#050506] text-[#EBEBED] border border-[#A58A5E] px-6 py-3 rounded-lg hover:bg-[#0A0A0B] transition-colors font-semibold">
                    Schedule Viewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-[#050506]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-[#A58A5E]">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {property.images.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${property.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 