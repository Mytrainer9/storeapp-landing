"use client";

const logos = [
  { name: "Telegram", emoji: "✈️" }, { name: "WhatsApp", emoji: "💬" }, { name: "Facebook", emoji: "📘" },
  { name: "Viber", emoji: "💜" }, { name: "ChatGPT", emoji: "🧠" }, { name: "Excel", emoji: "📊" },
];

export default function LogoStrip() {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">50+ бизнес манай системийг ашиглаж байна</p>
      <div className="flex justify-center items-center gap-10 flex-wrap max-w-4xl mx-auto px-6">
        {logos.map(l => (
          <div key={l.name} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <span className="text-2xl">{l.emoji}</span>
            <span className="text-sm font-bold text-gray-500">{l.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
