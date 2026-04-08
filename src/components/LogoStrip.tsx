"use client";

const logos = [
  { name:"Telegram",  emoji:"✈️" },
  { name:"WhatsApp",  emoji:"💬" },
  { name:"Facebook",  emoji:"📘" },
  { name:"Viber",     emoji:"💜" },
  { name:"ChatGPT",   emoji:"🧠" },
  { name:"Excel",     emoji:"📊" },
  { name:"Supabase",  emoji:"🗄️" },
  { name:"Instagram", emoji:"📸" },
];

export default function LogoStrip() {
  const items = [...logos, ...logos];
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
        Интеграцчлагдсан суваг болон үйлчилгээнүүд
      </p>
      <div className="flex whitespace-nowrap select-none">
        <div className="animate-marquee flex shrink-0 gap-8 items-center">
          {items.map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-brand-200 hover:bg-brand-50 transition-colors group"
            >
              <span className="text-2xl">{l.emoji}</span>
              <span className="text-sm font-bold text-gray-600 group-hover:text-brand-600 transition-colors">
                {l.name}
              </span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 gap-8 items-center" aria-hidden>
          {items.map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-100 bg-gray-50"
            >
              <span className="text-2xl">{l.emoji}</span>
              <span className="text-sm font-bold text-gray-600">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
