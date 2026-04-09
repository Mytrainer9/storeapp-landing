"use client";

import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import MeetSection  from "@/components/MeetSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <MeetSection />
      <MarqueeStrip />
      <Footer />
    </main>
  );
}
