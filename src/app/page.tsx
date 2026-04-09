"use client";

import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import MeetSection  from "@/components/MeetSection";
import HowItWorks   from "@/components/HowItWorks";
import Pricing      from "@/components/Pricing";
import MarqueeStrip from "@/components/MarqueeStrip";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <MeetSection />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
