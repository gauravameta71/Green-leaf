import type { Metadata } from "next";
import "./globals.css";


import { Inter, Roboto_Mono } from "next/font/google";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Leaf",
  description:
    "PrivadoCare+ helps private clinics in the UK streamline admin, booking, and billing — so you can focus on patient care while we handle the paperwork.",
  metadataBase: new URL("https://www.privadocare.co.uk"),
  openGraph: {
    title: "PrivadoCare+ | Remote Admin & Billing for UK Clinics",
    description:
      "We support cosmetic, physio, and mental health clinics with expert admin, calendar, and billing solutions. GDPR-compliant and fast to launch.",
    url: "https://www.privadocare.co.uk",
    siteName: "PrivadoCare+",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrivadoCare+ | Remote Admin & Billing for UK Clinics",
    description:
      "Smart support for UK clinics — appointment booking, patient forms, billing, and follow-ups handled remotely.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}