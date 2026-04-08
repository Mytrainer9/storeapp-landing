"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0 },
  transition:{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-brand-400/20 -top-40 -left-20" />
      <div className="orb w-[400px] h-[400px] bg-brand-300/15 top-1/3 right-0" />
      <div className="orb w-[300px] h-[300px] bg-cyan-400/10 bottom-0 left-1/3" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#7c3aed 1px,transparent 1px),linear-gradient(90deg,#7c3aed 1px,transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT */}
        <div>
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-brand-100 border border-brand-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
            <span className="text-brand-700 text-sm font-bold">AI-д суурилсан борлуулалтын шинэ үе</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-6xl lg:text-[64px] font-black leading-[1.05] tracking-tight text-dark mb-6">
            <span className="text-gradient-hero">Бодож,</span> Сурч,{" "}
            <br className="hidden md:block" />
            Хүн Шиг{" "}
            <span className="text-gradient">Зарна</span>
          </motion.h1>

          {/* Sub */}
          <motion.p {...fadeUp(0.3)} className="text-lg text-gray-500 max-w-lg leading-relaxed mb-8">
            Telegram, WhatsApp, Viber дээр ажиллах ChatGPT-д суурилсан AI борлуулагч.
            24/7 тасралтгүй бараа зарж, захиалга авч, харилцагчдад хариулна.
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-10">
            <a href="https://ai.storeapp.us/register" className="btn-primary text-base px-7 py-3.5">
              Үнэгүй эхлэх <ArrowRight size={18} />
            </a>
            <button className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border-2 border-brand-400 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                <Play size={16} className="text-brand-600 ml-0.5" fill="currentColor" />
              </div>
              <span className="text-gray-700 font-semibold group-hover:text-brand-600 transition-colors">
                Видео үзэх
              </span>
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div {...fadeUp(0.5)} className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {["🧑‍💼","👩‍💼","👨‍💻","👩‍💻"].map((e, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-brand-100 flex items-center justify-center text-base shadow-sm">
                  {e}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-bold text-gray-700">500+</span> бизнест хэрэглэгдэж байна
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Robot + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22,1,0.36,1] }}
          className="relative flex justify-center items-center"
        >
          {/* Main robot card */}
          <div className="relative">
            {/* Glow behind robot */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-400/30 to-brand-600/20 blur-3xl scale-110" />

            {/* Robot container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50 border border-brand-200/60 shadow-2xl shadow-brand-200/30 flex items-center justify-center animate-float">
              {/* Inner glow */}
              <div className="absolute inset-6 rounded-2xl bg-gradient-to-br from-brand-200/40 to-transparent" />
              {/* Robot emoji */}
              <span className="text-[130px] leading-none filter drop-shadow-lg relative z-10 select-none">🤖</span>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-3xl border-2 border-brand-300/20 scale-110 animate-ping opacity-20" />
            </div>

            {/* Floating badge — top left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -left-8 glass rounded-2xl p-3 shadow-lg shadow-brand-100/50 border border-brand-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-brand-100 flex items-center justify-center">
                  <Zap size={14} className="text-brand-600" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-800">AI хариулж байна</p>
                  <p className="text-[10px] text-gray-500">0.3 секундад</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -right-8 glass rounded-2xl p-3 shadow-lg shadow-brand-100/50 border border-brand-100"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛒</span>
                <div>
                  <p className="text-xs font-black text-gray-800">Захиалга #1042</p>
                  <p className="text-[10px] text-green-500 font-bold">✓ Баталгаажлаа</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge — right middle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-1/2 -right-16 -translate-y-1/2 glass rounded-2xl px-3 py-2 shadow-lg border border-brand-100"
            >
              <p className="text-xs font-black text-gray-800">📦 500+ бараа</p>
              <div className="w-full bg-brand-100 rounded-full h-1 mt-1">
                <div className="bg-brand-500 h-1 rounded-full w-3/4" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
