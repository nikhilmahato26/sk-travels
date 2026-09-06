import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sktravels-pupri.com"),
  title: "SK Tour and Travel | Train & Flight Ticket Booking, Four-Wheeler Services in Pupri, Bihar",
  description: "SK Tour and Travel provides reliable train ticket booking, domestic flight ticket booking assistance, and diverse four-wheeler travel services at Station Road, Near Krishna Complex, Pupri, Bihar.",
  keywords: [
    "SK Tour and Travel",
    "SK Tour & Travel Pupri",
    "Train Ticket Booking Pupri",
    "Flight Ticket Booking Pupri",
    "Travel Agency Pupri",
    "Ticket Booking Near Krishna Complex",
    "Travel Services Pupri",
    "Four Wheeler Service Pupri",
    "Travel Agency Station Road Pupri",
    "Pupri Bihar Travel Agent",
    "Car Rental Pupri",
  ],
  authors: [{ name: "SK Tour and Travel" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "SK Tour & Travel - Travel & Ticket Booking Partner in Pupri, Bihar",
    description: "Train Tickets • Flight Tickets • Four-Wheeler Travel Services. Located at Station Road, Near Krishna Complex, Pupri, Bihar.",
    url: "https://sktravels-pupri.com",
    siteName: "SK Tour and Travel",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "SK Tour and Travel Official Logo",
      },
      {
        url: "/images/hero_travel_montage.jpg",
        width: 1200,
        height: 630,
        alt: "SK Tour and Travel Pupri - Train, Flight and Four Wheeler Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "SK Tour and Travel",
    "alternateName": "SK Tour & Travel",
    "image": "https://sktravels-pupri.com/images/logo.png",
    "description": "Travel and ticket booking agency offering train tickets, flight bookings, and four-wheeler travel services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Krishna Complex, Station Road",
      "addressLocality": "Pupri",
      "addressRegion": "Bihar",
      "addressCountry": "India",
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Pupri and surrounding Bihar regions",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Travel Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Train Ticket Booking Assistance",
            "description": "Convenient assistance for train ticket booking and travel planning across Indian Railways routes.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flight Ticket Booking Assistance",
            "description": "Flight ticket booking assistance for domestic and other available travel requirements.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Four-Wheeler Travel Services",
            "description": "Diverse types of four-wheelers including Sedan, SUV, Premium Car, Family Car, and Large Travel Vehicles.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
