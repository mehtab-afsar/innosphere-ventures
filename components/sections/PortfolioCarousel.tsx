const companies = [
  "Inochi Care",
  "Pragmatech",
  "Meine Electric",
  "CLUIX",
  "Gocarin Industries"
];

export function PortfolioCarousel() {
  return (
    <section className="py-24 px-6 lg:px-12 border-y border-white/10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-3xl lg:text-4xl font-extralight text-white/80 animate-in fade-in duration-1000">
          Conviction sparks. Consensus amplifies.
        </p>
      </div>

      {/* Infinite Logo Carousel */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll items-center">
          {/* First set of logos */}
          <div className="flex min-w-full justify-around items-center gap-16 px-8">
            {companies.map((company) => (
              <span
                key={`first-${company}`}
                className="text-2xl font-extralight text-white/50 hover:text-white/80 transition-colors duration-300 whitespace-nowrap"
              >
                {company}
              </span>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex min-w-full justify-around items-center gap-16 px-8">
            {companies.map((company) => (
              <span
                key={`second-${company}`}
                className="text-2xl font-extralight text-white/50 hover:text-white/80 transition-colors duration-300 whitespace-nowrap"
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
