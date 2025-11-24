import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/20 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-extralight mb-4 text-white">
              InnoSphere <span className="font-normal">Ventures</span>
            </div>
            <p className="font-extralight text-white/60 max-w-md mb-4">
              Empowering innovators. Elevating futures.
              A new venture force for India's innovation frontier.
            </p>
            <p className="text-sm font-extralight text-white/50">
              Powered by Edge Alpha • InnoSphere Collective 1
            </p>
          </div>

          <div>
            <h4 className="font-light mb-4 text-white">Explore</h4>
            <ul className="space-y-2 font-extralight text-white/60">
              <li><a href="#why-india" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Why India</a></li>
              <li><a href="#why-now" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Why Now</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Why Us</a></li>
              <li><a href="#signals" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Edge Alpha Signals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-4 text-white">Connect</h4>
            <ul className="space-y-2 font-extralight text-white/60">
              <li><a href="#collective" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Join Collective</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">LP Inquiries</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">LinkedIn</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center font-extralight text-white/50 text-sm">
          <p>2025 InnoSphere Ventures. Conviction sparks. Consensus amplifies.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">Terms</a>
            <a href="#" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
