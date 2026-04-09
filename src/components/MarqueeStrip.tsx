"use client";

const words = ["МАРГААШ ӨНӨӨДРИЙГ ДАХИН ТОДОРХОЙЛЖ", "AI ТАНЫ БИЗНЕСИЙГ ХӨГЖҮҮЛНЭ"];

export default function MarqueeStrip() {
  const line = words.join("  •  ") + "  •  ";
  const repeated = line.repeat(6);
  return (
    <section className="py-10 overflow-hidden border-y border-gray-100 bg-white">
      <div className="flex whitespace-nowrap select-none">
        <div className="animate-marquee flex shrink-0">
          <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-transparent" style={{WebkitTextStroke:"2px #d8b4fe"}}>
            {repeated}
          </span>
        </div>
        <div className="animate-marquee flex shrink-0" aria-hidden>
          <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-transparent" style={{WebkitTextStroke:"2px #d8b4fe"}}>
            {repeated}
          </span>
        </div>
      </div>
    </section>
  );
}
