import type { Metadata, Viewport } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumiere.beauty"),
  title: "Lumiére — Where Beauty Meets Wellness",
  description:
    "Personalized aesthetic and wellness treatments tailored to you. Book a consultation with Lumiére's certified practitioners.",
  keywords: [
    "med spa",
    "aesthetic treatments",
    "facial",
    "micropeel",
    "skin wellness",
    "Lumiére",
  ],
  openGraph: {
    title: "Lumiére — Where Beauty Meets Wellness",
    description:
      "Personalized aesthetic and wellness treatments tailored to you.",
    type: "website",
    locale: "en_US",
    siteName: "Lumiére",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumiére — Where Beauty Meets Wellness",
    description: "Personalized aesthetic and wellness treatments tailored to you.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#e4eea6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
