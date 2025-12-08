import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navigation />

      <section className="pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 group absolute left-6 lg:left-12 top-28"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-extralight text-sm">Back</span>
          </Link>

          <Badge className="mb-6 font-light bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90">
            Legal
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-8 text-gray-900 dark:text-white">
            Terms of Use
          </h1>
          <p className="text-lg font-extralight text-gray-600 dark:text-white/60 mb-12">
            Last updated: December 2024
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-8 font-extralight text-gray-700 dark:text-white/70 leading-relaxed">
              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  2. Use of Website
                </h2>
                <p>
                  This website is provided for informational purposes only. The content on this website does not constitute an offer to sell or a solicitation of an offer to buy any securities or investment products.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  3. No Investment Advice
                </h2>
                <p>
                  The information provided on this website is not intended to be, and should not be construed as, investment advice. You should consult with qualified professionals before making any investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  4. Intellectual Property
                </h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property of InnoSphere Ventures and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  5. Disclaimer of Warranties
                </h2>
                <p>
                  This website is provided "as is" without any warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  6. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, InnoSphere Ventures shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  7. External Links
                </h2>
                <p>
                  This website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  8. Governing Law
                </h2>
                <p>
                  These Terms of Use shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  9. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms of Use at any time. Your continued use of the website after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  10. Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms of Use, please contact us at{" "}
                  <a
                    href="mailto:legal@innosphereventures.com"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    legal@innosphereventures.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
