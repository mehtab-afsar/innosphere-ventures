import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "InnoSphere Ventures | Empowering Innovators. Elevating Futures.",
  description: "A new venture force for India's innovation frontier. Conviction capital meets Edge Alpha precision. Powered by Edge Alpha. Conviction sparks. Consensus amplifies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased font-light`}
      >
        {children}
      </body>
    </html>
  );
}
