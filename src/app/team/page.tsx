import Image from 'next/image';

export default function Team() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-[#050506] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#A58A5E]" data-aos="fade-down">Meet Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#0A0A0B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-[#A58A5E]/20 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-[#A58A5E]">{member.name}</h3>
                  <p className="text-[#A58A5E] font-medium mb-4">{member.position}</p>
                  <p className="text-[#EBEBED] mb-4 flex-1">{member.description}</p>
                  <div className="flex gap-4 mt-auto">
                    <a href={`tel:${member.phone}`} className="text-[#A58A5E] hover:text-[#EBEBED] underline underline-offset-4 transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const teamMembers = [
  {
    name: 'Dmitry Rushika',
    position: 'Managing Director',
    description: 'Dmitry is a professional with extensive industrial experience. With a deep understanding of the real estate market and trends, he is skilled in developing and implementing effective strategies that drive growth and profitability for the company. Dmitry’s expertise in property development, project management, and market analysis enables to identify and capitalize opportunities that maximize returns for clients and stakeholders.',
    image: '/images/team/dmitry.png',
    phone: '+971 54 431 3048 ',
  },
  {
    name: 'Negin Abdollah',
    position: 'Sales Advisor',
    description: 'With a strong foundation in finance, Negin expertly guides clients toward profitable real estate investments, helping them navigate the vast array of projects available in the UAE. Her passion for waterfront properties, combined with her experience as a hobby boat captain, gives her unique insight into the appeal of coastal living. Negin`s financial expertise and love for the water allow her to offer a distinct perspective, ensuring clients make informed, rewarding decisions in the ever-evolving real estate market. ',
    image: '/images/team/negin.png',
    phone: '+971 58 295 0658 ',
  },
  {
    name: 'Usman Shaukat',
    position: 'Administrator',
    description: 'Usman is a proficient office administrator with extensive experience in the real estate sector. He excels in managing daily operations, coordination`s, and supporting sales teams to ensure seamless transactions. Usman`s organizational skills, attention to detail, and ability to handle multiple tasks efficiently makes him a cornerstone of any real estate office. His dedication to providing top-notch administrative support enhances the productivity and success of the entire team.',
    image: '/images/team/usman.png',
    phone: '+971 56 595 9847',
  },
  {
    name: 'Nikolai Khairullin',
    position: 'Property Sales Advisor',
    description: 'A highly organized and professional Property Sales Advisor, specializing in all types of real estate transactions and operations. Committed to building trust, fostering strong partnerships, and delivering exceptional service. Dedicated to providing top-tier support and transparent guidance to clients while effectively managing brokers to exceed targets. ',
    image: '/images/team/nikolay.png',
    phone: '+971 56 503 2534',
  },
  {
    name: 'Mariia Gimranova',
    position: 'Property Sales Advisor',
    description: 'A detail-oriented and professional Property Sales Advisor with expertise in all aspects of real estate transactions and operations. Focused on building lasting trust, strong partnerships, and delivering outstanding results. Committed to offering seamless support and transparent services to clients while driving brokers to surpass their targets. ',
    image: '/images/team/mariia.png',
    phone: '+971 56 503 2534 ',
  },
  {
    name: 'Lysa Jarno',
    position: 'Property Sales Advisor',
    description: 'A highly organized and results-driven Property Sales Advisor, specializing in diverse real estate transactions and operations. Focused on building lasting client relationships, fostering trust, and delivering outstanding service. Committed to providing expert guidance and seamless support while efficiently managing brokers to surpass sales targets and achieve excellence. ',
    image: '/images/team/lysa.png',
    phone: '+971 55 710 2597 ',
  }
]; 