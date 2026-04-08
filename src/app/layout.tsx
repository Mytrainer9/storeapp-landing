import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="mn" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
