import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.fullName,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: "Friendly, local dog walking in Midsomer Norton, Radstock, Paulton and nearby villages, for busy owners who want happy, well-exercised dogs.",
  openGraph: {
    siteName: siteConfig.fullName,
    type: "website",
    locale: "en_GB",
    images: [{ url: "/dog-walk-group.png", alt: "A happy group of dogs out on a walk" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
