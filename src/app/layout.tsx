import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StoreApp — AI-д суурилсан борлуулалтын систем",
  description:
    "Telegram, WhatsApp-аар AI чат-бот ашиглан бараа зарж, захиалга авч, агуулахаа удирда. 24/7 унтахгүй ажиллах борлуулагч.",
  keywords: ["AI", "chatbot", "Telegram bot", "Монгол", "борлуулалт", "StoreApp"],
  openGraph: {
    title: "StoreApp — AI борлуулагч",
    description: "Telegram дээр AI-тай зарж борлуул",
    url: "https://storeapp.us",
    siteName: "StoreApp",
    locale: "mn_MN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
