import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Conture Media - Premium Content Creation, Video Editing & Marketing",
  description:
    "Elevate your brand with Conture Medias expert content creation, video production, marketing services & community engagement. Crafted by industry leaders for unparalleled quality and results.",
  keywords: [
    "Conture Media",
    "Content Creation",
    "Video Editing",
    "Marketing",
    "Digital Marketing",
    "Social Media Marketing",
    "Community",
    "New York",
  ],
  openGraph: {
    title:
      "Conture Media - Premium Content Creation, Video Editing & Marketing",
    description:
      "Elevate your brand with Conture Medias expert content creation, video production, marketing services & community engagement. Crafted by industry leaders for unparalleled quality and results.",
    images: [
      {
        url: "https://www.conturemedia.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Conture Media - Premium Content Creation, Video Editing & Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Conture Media",
    url: "https://www.conturemedia.com",
    logo: "https://www.conturemedia.com/logo.png",
    sameAs: [
      "https://www.instagram.com/conture_media",
      "https://www.linkedin.com/company/conture-media/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "Contureai1@gmail.com",
    },
    founders: [
      {
        "@type": "Person",
        name: "Manthan Gupta",
      },
    ],
  },
  metadataBase: "https://www.conturemedia.com/",
  icons: {
    shortcut: "/favicon.ico",
  },
  twitter: {
    site: "@conture_media",
    cardType: "summary_large_image",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SocialLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
