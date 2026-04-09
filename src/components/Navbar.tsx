"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Боломжууд", href: "#features" },
  { label: "Хэрхэн ажилладаг", href: "#how" },
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
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-md shadow-purple-300/30 group-hover:scale-105 transition-transform">
            <Zap size={14} className="text-white" fill="white" />
          </div>
          <span className="font-extrabold text-lg text-gray-900 tracking-tight">Store<span className="text-violet-600">App</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://ai.storeapp.us/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-2">Нэвтрэх</a>
          <a href="https://ai.storeapp.us/register"
            className="text-sm font-semibold text-white bg-gray-900 px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Эхлэх
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700 p-2">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 pb-6">
            <ul className="flex flex-col gap-3 pt-4">
              {links.map(l => (
                <li key={l.label}><a href={l.href} onClick={()=>setOpen(false)} className="text-gray-700 font-medium">{l.label}</a></li>
              ))}
              <li className="pt-3">
                <a href="https://ai.storeapp.us/register" className="block text-center bg-gray-900 text-white font-semibold py-2.5 rounded-lg">Эхлэх</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
