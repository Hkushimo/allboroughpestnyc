import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "All Borough Pest Control | Jersey City Pest Control",
  description:
    "Residential and commercial pest control in Jersey City, NJ. Call 201-292-3456 for inspections, treatments, and prevention plans.",
  icons: {
    icon: "/allborough-logo.png",
    shortcut: "/allborough-logo.png",
  },
  openGraph: {
    title: "All Borough Pest Control",
    description:
      "Jersey City pest inspections, treatments, and prevention plans for homes and businesses.",
    images: ["/allborough-logo.png"],
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
