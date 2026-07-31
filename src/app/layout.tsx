import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Manrope,
} from "next/font/google";
import { siteConfig } from "@/config/site";
import { profile } from "@/content/profile";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  applicationName: siteConfig.name,
  title: profile.metadata.title,
  description: profile.metadata.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: profile.metadata.socialTitle,
    description: profile.metadata.socialDescription,
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    locale: "en_CA",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shubham Patel — Software, AI, Data and Enterprise IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.metadata.socialTitle,
    description: profile.metadata.socialDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: "#151614",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
