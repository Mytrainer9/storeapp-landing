"use client";

import { Zap, Mail, ExternalLink } from "lucide-react";

const cols = [
  {
    title: "Бүтээгдэхүүн",
    links: [
      { label:"AI Борлуулагч",    href:"#features" },
      { label:"Агуулах удирдлага",href:"#features" },
      { label:"Захиалгын систем", href:"#features" },
      { label:"Тайлан",           href:"#features" },
    ],
  },
  {
    title: "Суваг",
    links: [
      { label:"Telegram",  href:"#integrations" },
      { label:"WhatsApp",  href:"#integrations" },
      { label:"Viber",     href:"#integrations" },
      { label:"Facebook",  href:"#integrations" },
    ],
  },
  {
    title: "Компани",
    links: [
      { label:"Бидний тухай",        href:"#" },
      { label:"Нийтлэлийн бодлого",  href:"#" },
      { label:"Нөхцөл",              href:"#" },
      { label:"Холбоо барих",        href:"mailto:hello@storeapp.us" },
    ],
  },
  {
    title: "Тусламж",
    links: [
      { label:"Гарын авлага",   href:"#" },
      { label:"API баримт",     href:"#" },
      { label:"Онлайн дэмжлэг",href:"#" },
      { label:"Нийгэмлэг",     href:"#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-nav border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-600/30">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="text-white font-black text-lg tracking-tight">
                Store<span className="text-brand-400">App</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              AI-д суурилсан борлуулалтын платформ. Telegram болон бусад суваг дээр хялбараар зарж борлуул.
            </p>
            <a
              href="mailto:hello@storeapp.us"
              className="flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors"
            >
              <Mail size={14} />
              hello@storeapp.us
            </a>
          </div>

          {/* Links */}
          {cols.map((c) => (
            <div key={c.title}>
              <h5 className="text-white font-black text-sm uppercase tracking-widest mb-4">{c.title}</h5>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                    >
                      {l.label}
                      {l.href.startsWith("mailto") && (
                        <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 StoreApp. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Нууцлалын бодлого</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Ашиглах нөхцөл</a>
            <a href="https://ai.storeapp.us" className="text-brand-400 hover:text-brand-300 text-sm font-bold transition-colors">
              ai.storeapp.us →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
