import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pavilion Infra | Engineering Landmark Spaces",
  description: "Pavilion Infra delivers premium infrastructure and luxury construction projects, specializing in high-end residential and commercial developments.",
  keywords: ["Luxury Construction", "Infrastructure", "Real Estate", "Pavilion Infra", "Premium Villas", "Commercial Infrastructure"],
  authors: [{ name: "Pavilion Infra" }],
  openGraph: {
    title: "Pavilion Infra | Engineering Landmark Spaces",
    description: "Premium infrastructure and luxury construction excellence.",
    url: "https://pavilioninfra.com",
    siteName: "Pavilion Infra",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} scroll-smooth`}
    >
      <body className="bg-white text-navy font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
