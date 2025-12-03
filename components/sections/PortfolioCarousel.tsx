const companies = [
  "Inochi Care",
  "Pragmatech",
  "Meine Electric",
  "CLUIX",
  "Gocarin Industries"
];

export function PortfolioCarousel() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 border-y border-gray-200 dark:border-white/10">
      {/* Infinite Logo Carousel - All screen sizes */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-mobile sm:animate-scroll items-center">
          {/* First set of logos */}
          <div className="flex min-w-full justify-around items-center gap-6 sm:gap-10 md:gap-16 px-4 sm:px-8">
            {companies.map((company) => (
              <span
                key={`first-${company}`}
                className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extralight text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white/80 transition-colors duration-300 whitespace-nowrap"
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
                className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extralight text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white/80 transition-colors duration-300 whitespace-nowrap"
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
