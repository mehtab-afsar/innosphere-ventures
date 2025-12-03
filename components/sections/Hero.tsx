import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import Link from "next/link";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden bg-gray-50 dark:bg-black py-24 md:py-0">
      {/* Video Background - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:block absolute top-0 right-0 w-[60%] md:w-[55%] lg:w-[50%] h-[50%] md:h-[60%] lg:h-[70%]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-bl-3xl"
        >
          <source src="/India_Illuminated_Earth_Video.mp4" type="video/mp4" />
        </video>
        {/* Gradient fade on left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 dark:from-black to-transparent w-[30%]" />
        {/* Gradient fade on bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-black to-transparent h-[30%] top-auto bottom-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000 md:-ml-8 lg:-ml-12">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extralight leading-[1.15] mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-gray-100"
          >
            Empowering
            <br />
            Innovators.
            <br />
            <span className="font-light">Elevating Futures.</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight text-gray-600 dark:text-gray-400 max-w-2xl mb-6 sm:mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150"
          >
            A new venture force for India's innovation frontier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 font-light text-sm sm:text-base group transition-all duration-300 hover:scale-105" asChild>
              <Link href="/thesis">
                Discover Our Thesis
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-light text-sm sm:text-base hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 hover:border-gray-400 dark:hover:border-white/50">
              Join the Movement
            </Button>
          </div>
        </div>
      </div>

      {/* Centered Edge Alpha Statement */}
      <div className="relative md:absolute md:bottom-24 left-0 right-0 text-center px-4 sm:px-6 mt-12 md:mt-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <p className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl font-extralight text-gray-900 dark:text-white leading-relaxed">
          Powered by <span className="font-medium">Edge Alpha</span> —
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>the signal engine
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>behind India's next innovation frontier.
        </p>
      </div>
    </section>
  );
}
