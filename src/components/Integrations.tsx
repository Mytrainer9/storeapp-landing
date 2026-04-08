"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const platforms = [
  { name:"Telegram",   emoji:"✈️",  tag:"Мессенжер",  color:"bg-blue-500/10 border-blue-500/20 text-blue-400"  },
  { name:"WhatsApp",   emoji:"💬",  tag:"Мессенжер",  color:"bg-green-500/10 border-green-500/20 text-green-400"},
  { name:"Viber",      emoji:"💜",  tag:"Мессенжер",  color:"bg-purple-500/10 border-purple-500/20 text-purple-400"},
  { name:"Facebook",   emoji:"📘",  tag:"Сошиал",    color:"bg-blue-600/10 border-blue-600/20 text-blue-400"   },
  { name:"ChatGPT AI", emoji:"🧠",  tag:"AI",         color:"bg-brand-500/10 border-brand-500/20 text-brand-400"},
  { name:"Excel",      emoji:"📊",  tag:"Импорт",     color:"bg-green-600/10 border-green-600/20 text-green-400"},
  { name:"Supabase",   emoji:"🗄️", tag:"Мэдээлэл сан",color:"bg-emerald-500/10 border-emerald-500/20 text-emerald-400"},
  { name:"Instagram",  emoji:"📸",  tag:"Удахгүй",    color:"bg-rose-500/10 border-rose-500/20 text-rose-400"  },
  { name:"Twitter/X",  emoji:"🐦",  tag:"Удахгүй",    color:"bg-sky-500/10 border-sky-500/20 text-sky-400"     },
];

export default function Integrations() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="integrations" className="bg-dark-gradient py-28 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="orb w-[500px] h-[500px] bg-brand-700/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-brand-300 tracking-widest uppercase bg-brand-900/50 border border-brand-700/40 px-3 py-1.5 rounded-full mb-5">
            Платформ Интеграц
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Тасралтгүй Платформ{" "}
            <span className="text-gradient">Интеграцаар</span>{" "}
            Үйл Ажиллагааг Хувиргана
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Таны харилцагчид ашигладаг бүх суваг дэмжигдэж байна.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-dark rounded-2xl p-5 flex items-start gap-4 card-hover"
            >
              <div className="text-3xl flex-shrink-0">{p.emoji}</div>
              <div>
                <h3 className="font-bold text-white mb-1">{p.name}</h3>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${p.color}`}>
                  {p.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a href="https://ai.storeapp.us/register" className="btn-primary inline-flex">
            Бүгдийг харах <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
