import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')
  ),
  title: "AutoMates | Done-For-You Outreach & Guaranteed Meetings",
  description: "We run your entire outreach so you can focus on delivering, not filling the pipeline. Guaranteed booked sales calls on your calendar.",
  openGraph: {
    title: "AutoMates | Done-For-You Outreach & Guaranteed Meetings",
    description: "We run your entire outreach so you can focus on delivering, not filling the pipeline. Guaranteed booked sales calls on your calendar.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "AutoMates Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoMates | Done-For-You Outreach & Guaranteed Meetings",
    description: "We run your entire outreach so you can focus on delivering, not filling the pipeline. Guaranteed booked sales calls on your calendar.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
