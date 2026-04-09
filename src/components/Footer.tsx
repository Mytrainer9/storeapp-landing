"use client";
import { Zap, Mail } from "lucide-react";

const cols = [
  { title: "Бүтээгдэхүүн", links: [["AI Борлуулагч","#features"],["Агуулах удирдлага","#features"],["Захиалгын систем","#how"],["Тайлан","#how"]] },
  { title: "Суваг", links: [["Telegram","#integrations"],["WhatsApp","#integrations"],["Viber","#integrations"],["Facebook","#integrations"]] },
  { title: "Компани", links: [["Бидний тухай","#"],["Нөхцөл","#"],["Нууцлал","#"],["Холбоо барих","mailto:hello@storeapp.us"]] },
  { title: "Тусламж", links: [["Гарын авлага","#"],["API баримт","#"],["Дэмжлэг","#"],["Нийгэмлэг","#"]] },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#07071a] border-t border-white/5">
      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
          Ухаалаг стратеги, <span className="text-gradient">AI-д суурилсан</span> инсайт
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Бүртгэл үнэгүй. Кредит карт шаардахгүй.</p>
        <a href="https://ai.storeapp.us/register"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-violet-500/30 hover:-translate-y-0.5 transition-all">
          Үнэгүй бүртгэл үүсгэх →
        </a>
      </div>

      <div className="border-t border-white/5" />

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-600/30">
                <Zap size={14} className="text-white" fill="white" />
              </div>
              <span className="text-white font-black text-lg">Store<span className="text-violet-400">App</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">AI-д суурилсан борлуулалтын платформ.</p>
            <a href="mailto:hello@storeapp.us" className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors">
              <Mail size={13}/> hello@storeapp.us
            </a>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-4">{c.title}</h5>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}><a href={href} className="text-gray-500 hover:text-white text-sm transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2025 StoreApp. Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Нууцлал</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Нөхцөл</a>
            <a href="https://ai.storeapp.us" className="text-violet-400 hover:text-violet-300 text-xs font-bold transition-colors">ai.storeapp.us →</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
