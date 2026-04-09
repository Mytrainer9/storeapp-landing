"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Бүтээгдэхүүн", href: "#features" },
  { label: "Шийдэл",       href: "#how" },
  { label: "Суваг",        href: "#integrations" },
  { label: "Блог",         href: "#" },
  { label: "Холбоо барих", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      {/* Top banner */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-center text-xs font-semibold py-1.5 px-4">
        🚀 StoreApp — Монголын анхны AI борлуулалтын платформ &nbsp;|&nbsp; Хязгааргүй боломж
      </div>

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-300/40 group-hover:scale-105 transition-transform">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="font-black text-xl text-gray-900">Store<span className="text-violet-600">App</span></span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className="text-[13px] font-semibold text-gray-600 hover:text-violet-600 transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://ai.storeapp.us/login" className="text-[13px] font-bold text-gray-700 hover:text-violet-600 transition-colors px-4 py-2">Нэвтрэх</a>
          <a href="https://ai.storeapp.us/register"
            className="text-[13px] font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 rounded-lg shadow-lg shadow-purple-300/30 hover:shadow-purple-400/40 hover:-translate-y-0.5 transition-all">
            Үнэгүй эхлэх →
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-gray-700 p-2">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 pb-6">
            <ul className="flex flex-col gap-3 pt-4">
              {links.map(l => (
                <li key={l.label}><a href={l.href} onClick={()=>setOpen(false)} className="text-gray-700 font-medium">{l.label}</a></li>
              ))}
              <li className="pt-3 flex flex-col gap-2">
                <a href="https://ai.storeapp.us/register" className="text-center bg-violet-600 text-white font-bold py-2.5 rounded-lg">Үнэгүй эхлэх</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
