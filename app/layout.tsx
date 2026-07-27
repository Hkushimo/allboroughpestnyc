import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All Borough Pest Control",
  description:
    "Residential and commercial pest control services including termites, rodents, bed bugs, mosquitoes, roaches, ants, inspections, and exclusion.",
  openGraph: {
    title: "All Borough Pest Control",
    description:
      "Residential and commercial pest control services across inspections, treatment, and prevention.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "All Borough Pest Control residential and commercial service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Borough Pest Control",
    description:
      "Residential and commercial pest control services across inspections, treatment, and prevention.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
