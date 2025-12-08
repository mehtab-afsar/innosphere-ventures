import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 lg:px-12 overflow-hidden border-t border-gray-200 dark:border-white/10">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <div className="mb-8">
            <Link href="/" className="group">
              <span className="text-2xl sm:text-3xl font-extralight text-gray-900 dark:text-white tracking-wide group-hover:opacity-80 transition-opacity">
                InnoSphere <span className="font-normal">Ventures</span>
              </span>
            </Link>
            <p className="mt-3 font-extralight text-gray-500 dark:text-white/50 text-sm">
              Empowering innovators. Elevating futures.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            <Link
              href="/join"
              className="font-extralight text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm tracking-wide"
            >
              Join
            </Link>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20" />
            <a
              href="https://www.linkedin.com/company/innosphere-vc/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extralight text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm tracking-wide"
            >
              LinkedIn
            </a>
          </div>

          {/* Decorative element */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent w-24" />
            <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-white/10" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent w-24" />
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs font-extralight text-gray-400 dark:text-white/30">
            <span>© 2025 InnoSphere Ventures</span>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-gray-600 dark:hover:text-white/50 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-gray-600 dark:hover:text-white/50 transition-colors duration-200"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
