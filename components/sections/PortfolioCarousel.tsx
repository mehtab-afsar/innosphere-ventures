const companies = [
  "Inochi Care",
  "Pragmatech",
  "Meine Electric",
  "CLUIX",
  "Gocarin Industries"
];

export function PortfolioCarousel() {
  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-12 border-y border-[#2a7fa6]/30">
      {/* Edge Alpha tagline */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 text-center">
        <p className="text-lg sm:text-xl md:text-2xl font-light text-[#0a1128]/80" style={{ letterSpacing: '0.02em' }}>
          <span className="text-[#ff6b5a]">Powered by</span> <span className="font-semibold text-[#2a9a8e]">Edge Alpha</span>
        </p>
        <p className="text-sm sm:text-base text-[#0a1128]/60 font-light mt-1" style={{ letterSpacing: '0.03em' }}>
          the signal engine behind India's next innovation frontier.
        </p>
      </div>

      {/* Infinite Logo Carousel - All screen sizes */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-mobile sm:animate-scroll items-center">
          {/* First set of logos */}
          <div className="flex min-w-full justify-around items-center gap-6 sm:gap-10 md:gap-16 px-4 sm:px-8">
            {companies.map((company) => (
              <span
                key={`first-${company}`}
                className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-[#0a1128]/70 hover:text-[#1a6f8f] transition-colors duration-300 whitespace-nowrap"
                style={{ letterSpacing: '0.05em' }}
              >
                {company}
              </span>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex min-w-full justify-around items-center gap-6 sm:gap-10 md:gap-16 px-4 sm:px-8">
            {companies.map((company) => (
              <span
                key={`second-${company}`}
                className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-[#0a1128]/70 hover:text-[#1a6f8f] transition-colors duration-300 whitespace-nowrap"
                style={{ letterSpacing: '0.05em' }}
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
