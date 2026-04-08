"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Үйлчилгээ",  href: "#features"  },
  { label: "Хэрхэн ажилдаг", href: "#how"   },
  { label: "Суваг",      href: "#integrations" },
  { label: "Үнэ",        href: "#pricing"   },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-nav/90 backdrop-blur-xl border-b border-brand-800/20 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-600/30 group-hover:scale-105 transition-transform">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="text-white font-black text-lg tracking-tight">
            Store<span className="text-brand-400">App</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-400 rounded group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://ai.storeapp.us/login"
            className="text-sm font-bold text-white/80 hover:text-white px-4 py-2 rounded-lg transition-colors"
          >
            Нэвтрэх
          </a>
          <a
            href="https://ai.storeapp.us/register"
            className="btn-primary text-sm py-2.5 px-5 rounded-xl"
          >
            Үнэгүй эхлэх
            <Zap size={14} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-nav/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/80 font-medium hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex flex-col gap-3">
                <a href="https://ai.storeapp.us/login"
                   className="text-center border border-white/20 text-white font-bold py-2.5 rounded-xl hover:bg-white/5 transition">
                  Нэвтрэх
                </a>
                <a href="https://ai.storeapp.us/register"
                   className="text-center bg-brand-600 text-white font-bold py-2.5 rounded-xl hover:bg-brand-700 transition">
                  Үнэгүй эхлэх
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
