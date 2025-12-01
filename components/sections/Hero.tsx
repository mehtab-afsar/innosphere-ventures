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
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden bg-black">
      {/* Video Background - Top Right Corner */}
      <div className="absolute top-0 right-0 w-[50%] h-[70%]">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent w-[30%]" />
        {/* Gradient fade on bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent h-[30%] top-auto bottom-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1
            className="text-6xl lg:text-8xl font-extralight leading-[1.1] mb-8 text-gray-100"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)' }}
          >
            Empowering
            <br />
            Innovators.
            <br />
            <span className="font-light">Elevating Futures.</span>
          </h1>
          <p
            className="text-xl lg:text-2xl font-extralight text-gray-400 max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}
          >
            A new venture force for India's innovation frontier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-light text-base group transition-all duration-300 hover:scale-105" asChild>
              <Link href="/thesis">
                Discover Our Thesis
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white font-light text-base hover:bg-white/10 transition-all duration-300 hover:border-white/50">
              Join the Movement
            </Button>
          </div>
        </div>
      </div>

      {/* Centered Edge Alpha Statement */}
      <div className="absolute bottom-24 left-0 right-0 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <p className="text-3xl lg:text-5xl font-extralight text-white leading-relaxed">
          Powered by <span className="font-medium">Edge Alpha</span> — the signal engine
          <br />
          behind India's next innovation frontier.
        </p>
      </div>
    </section>
  );
}
