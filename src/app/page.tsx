"use client";

import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import MeetSection   from "@/components/MeetSection";
import MarqueeStrip  from "@/components/MarqueeStrip";
import Features      from "@/components/Features";
import LogoStrip     from "@/components/LogoStrip";
import ContentBlocks from "@/components/ContentBlocks";
import Integrations  from "@/components/Integrations";
import Testimonials  from "@/components/Testimonials";
import Stats         from "@/components/Stats";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <MeetSection />
      <MarqueeStrip />
      <Features />
      <LogoStrip />
      <ContentBlocks />
      <Integrations />
      <Testimonials />
      <Stats />
      <Footer />
    </main>
  );
}
