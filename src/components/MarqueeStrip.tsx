"use client";

const words = ["AI БОРЛУУЛАЛТ", "24/7 АЖИЛЛАГАА", "TELEGRAM", "FACEBOOK", "WHATSAPP", "АВТОМАТ ЗАХИАЛГА", "УХААЛАГ СИСТЕМ"];

export default function MarqueeStrip() {
  const line = words.join("  \u00b7  ") + "  \u00b7  ";
  const repeated = line.repeat(4);
  return (
    <section className="py-8 overflow-hidden border-y border-gray-100 bg-white">
      <div className="flex whitespace-nowrap select-none">
        <div className="animate-marquee flex shrink-0">
          <span className="text-3xl md:text-4xl font-extrabold tracking-wider text-gray-100">
            {repeated}
          </span>
        </div>
        <div className="animate-marquee flex shrink-0" aria-hidden>
          <span className="text-3xl md:text-4xl font-extrabold tracking-wider text-gray-100">
            {repeated}
          </span>
        </div>
      </div>
    </section>
  );
}
