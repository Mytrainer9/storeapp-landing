"use client";

import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import MeetSection  from "@/components/MeetSection";
import Dashboard    from "@/components/Dashboard";
import HowItWorks   from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing      from "@/components/Pricing";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <MeetSection />
      <Dashboard />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
