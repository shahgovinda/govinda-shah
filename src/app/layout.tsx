import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

const poppins = Outfit({ weight: ['400','500','600','700','800','900'] ,subsets: ['latin'],});

export const metadata: Metadata = {
  title: "Govinda Shah",
  description: "Hello, I am Govinda Shah A Frontend dd Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        {children}
        <SpeedInsights />
        <Analytics/>
        </body>
    </html>
  );
}
