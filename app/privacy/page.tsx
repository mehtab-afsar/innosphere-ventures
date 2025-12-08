import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-lg font-extralight text-gray-600 dark:text-white/60 mb-12">
            Last updated: December 2024
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-8 font-extralight text-gray-700 dark:text-white/70 leading-relaxed">
              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  1. Information We Collect
                </h2>
                <p>
                  At InnoSphere Ventures, we collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, company name, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  2. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Respond to your inquiries and provide requested information</li>
                  <li>Send you updates about our fund and portfolio companies</li>
                  <li>Evaluate potential investment opportunities</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  3. Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services, comply with the law, or protect our rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  4. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  5. Your Rights
                </h2>
                <p>
                  You have the right to access, correct, or delete your personal information. You may also opt out of receiving communications from us at any time by contacting us at{" "}
                  <a
                    href="mailto:privacy@innosphereventures.com"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    privacy@innosphereventures.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  6. Cookies
                </h2>
                <p>
                  Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  7. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  8. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a
                    href="mailto:privacy@innosphereventures.com"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    privacy@innosphereventures.com
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
