"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowRight } from "lucide-react";

const links = [
  { label: "Нүүр", href: "#" },
  { label: "Боломжууд", href: "#features" },
  { label: "Хэрхэн ажилладаг", href: "#how" },
  { label: "Үнэ", href: "#pricing" },
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
    <>
      {/* Top banner */}
      <div className="bg-violet-600 text-white text-center text-xs font-medium py-2 px-4">
        StoreApp-аар борлуулалтаа AI-д даатгаарай — Үнэгүй туршилт эхлүүлэх!{" "}
        <a href="https://ai.storeapp.us/register" className="font-bold underline underline-offset-2 hover:text-violet-200 transition-colors">
          Эхлэх <span className="inline-block">→</span>
        </a>
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap size={14} className="text-white" fill="white" />
            </div>
            <span className="font-extrabold text-lg text-gray-900 tracking-tight">Store<span className="text-violet-600">App</span></span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all px-4 py-2 rounded-full">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://ai.storeapp.us/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Нэвтрэх</a>
            <a href="https://ai.storeapp.us/register"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-gray-900 px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
              Эхлэх <ArrowRight size={14} />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-gray-700 p-2">
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
              className="lg:hidden bg-white border-t border-gray-100 px-6 pb-6">
              <ul className="flex flex-col gap-1 pt-4">
                {links.map(l => (
                  <li key={l.label}><a href={l.href} onClick={()=>setOpen(false)} className="block text-gray-700 font-medium py-2">{l.label}</a></li>
                ))}
                <li className="pt-3">
                  <a href="https://ai.storeapp.us/register" className="block text-center bg-gray-900 text-white font-semibold py-2.5 rounded-full">Эхлэх</a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
