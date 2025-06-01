export default function Contact() {
  return (
    <>
      <main className="pt-20">
        <section className="py-20 bg-[#050506] min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#A58A5E]" data-aos="fade-down">Contact Us</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-[#0A0A0B] rounded-2xl shadow-lg p-8 border border-[#A58A5E]/20" data-aos="fade-right">
                <h2 className="text-2xl font-semibold mb-6 text-[#A58A5E]">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#A58A5E] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg focus:ring-2 focus:ring-[#A58A5E] focus:border-[#A58A5E]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#A58A5E] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg focus:ring-2 focus:ring-[#A58A5E] focus:border-[#A58A5E]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#A58A5E] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg focus:ring-2 focus:ring-[#A58A5E] focus:border-[#A58A5E]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#A58A5E] mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-[#A58A5E]/40 bg-[#050506] text-[#EBEBED] rounded-lg focus:ring-2 focus:ring-[#A58A5E] focus:border-[#A58A5E]"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#A58A5E] text-[#EBEBED] px-6 py-3 rounded-lg hover:bg-[#8B6F4A] transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8" data-aos="fade-left">
                <div className="bg-[#0A0A0B] rounded-2xl shadow-lg p-8 border border-[#A58A5E]/20">
                  <div className="space-y-4 text-[#EBEBED]">
                    <p>
                      <strong className="text-[#A58A5E]">Address:</strong><br />
                      Dubai, United Arab Emirates
                    </p>
                    <p>
                      <strong className="text-[#A58A5E]">Phone:</strong><br />
                      +971 56 595 9847
                    </p>
                    <p>
                      <strong className="text-[#A58A5E]">Email:</strong><br />
                      admin@rush-hour.ae
                    </p>
                  </div>
                </div>


                <div className="bg-[#0A0A0B] rounded-2xl shadow-lg p-8 border border-[#A58A5E]/20">
                  <h2 className="text-2xl font-semibold mb-6 text-[#A58A5E]">Follow Us</h2>
                  <div className="flex gap-4 text-[#EBEBED]">
                    <a
                      href="https://www.linkedin.com/company/rush-hour-real-estate-broker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A58A5E] hover:text-[#8B6F4A]"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.youtube.com/@rrushhour.properties"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A58A5E] hover:text-[#8B6F4A]"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://www.tiktok.com/@rushhourrealestate?_t=ZS-8uc0WkjibS5&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A58A5E] hover:text-[#8B6F4A]"
                    >
                      TikTok
                    </a>
                    <a
                      href="https://t.me/RushHourRealEstateBrokerage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A58A5E] hover:text-[#8B6F4A]"
                    >
                      Telegram
                    </a>
                    <a
                      href="https://www.instagram.com/rushhour.properties/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A58A5E] hover:text-[#8B6F4A]"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/p/Rush-Hour-Real-Estate-Brokerage-61556110214320/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A58A5E] hover:text-[#8B6F4A]"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 