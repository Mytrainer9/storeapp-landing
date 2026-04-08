"use client";

const text = "МАРГААШ ӨНӨӨДРИЙГ ДАХИН ТОДОРХОЙЛЖ БАЙНА • ТАНЫ БИЗНЕСИЙН ХЭМ ХЭРЭГСЭЛ • ";

export default function MarqueeStrip() {
  const repeated = text.repeat(4);
  return (
    <section className="py-12 overflow-hidden bg-brand-600 relative">
      {/* scrolling row */}
      <div className="flex whitespace-nowrap select-none">
        <div className="animate-marquee flex shrink-0">
          <span className="text-white/90 text-2xl md:text-3xl font-black tracking-widest uppercase">
            {repeated}
          </span>
        </div>
        <div className="animate-marquee flex shrink-0" aria-hidden>
          <span className="text-white/90 text-2xl md:text-3xl font-black tracking-widest uppercase">
            {repeated}
          </span>
        </div>
      </div>
    </section>
  );
}
