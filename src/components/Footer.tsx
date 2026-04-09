"use client";
import { Zap, Mail } from "lucide-react";

const cols = [
  { title: "Бүтээгдэхүүн", links: [["AI Борлуулагч", "#features"], ["Агуулах удирдлага", "#features"], ["Захиалгын систем", "#how"]] },
  { title: "Суваг", links: [["Facebook", "#"], ["WhatsApp", "#"], ["VIBER", "#"], ["Telegram", "#"]] },
  { title: "Компани", links: [["Нөхцөл", "#"], ["Нууцлал", "#"], ["Холбоо барих", "mailto:info@storeapp.us"]] },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-950">
      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
          AI борлуулагчаа <span className="text-gradient">өнөөдөр</span> эхлүүлээрэй
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Бүртгэл үнэгүй. Кредит карт шаардахгүй.</p>
        <a href="/register/"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors">
          Үнэгүй эхлэх →
        </a>
      </div>

      <div className="border-t border-white/5" />

      {/* Links */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center">
                <Zap size={12} className="text-white" fill="white" />
              </div>
              <span className="text-white font-extrabold text-base tracking-tight">Store<span className="text-violet-400">App</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">AI-д суурилсан борлуулалтын платформ.</p>
            <a href="mailto:info@storeapp.us" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <Mail size={13}/> info@storeapp.us
            </a>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <h5 className="text-gray-400 font-semibold text-xs uppercase tracking-widest mb-4">{c.title}</h5>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}><a href={href} className="text-gray-500 hover:text-white text-sm transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">&copy; 2026 StoreApp. Бүх эрх хуулиар хамгаалагдсан.</p>
          <a href="https://ai.storeapp.us" className="text-gray-500 hover:text-white text-xs transition-colors">ai.storeapp.us →</a>
        </div>
      </div>
    </footer>
  );
}
