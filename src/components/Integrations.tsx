"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const platforms = [
  { name:"Telegram",   emoji:"✈️",  tag:"Мессенжер" },
  { name:"WhatsApp",   emoji:"💬",  tag:"Мессенжер" },
  { name:"Viber",      emoji:"💜",  tag:"Мессенжер" },
  { name:"Facebook",   emoji:"📘",  tag:"Сошиал" },
  { name:"ChatGPT AI", emoji:"🧠",  tag:"AI" },
  { name:"Excel",      emoji:"📊",  tag:"Импорт" },
  { name:"Supabase",   emoji:"🗄️", tag:"Мэдээлэл сан" },
  { name:"Instagram",  emoji:"📸",  tag:"Удахгүй" },
  { name:"Twitter/X",  emoji:"🐦",  tag:"Удахгүй" },
];

export default function Integrations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} id="integrations" className="bg-[#0a0a1a] py-28 px-6 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-violet-900/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(#8b5cf6 1px,transparent 1px)",backgroundSize:"24px 24px"}} />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-violet-300 tracking-widest uppercase bg-violet-900/50 border border-violet-700/40 px-3 py-1.5 rounded-full mb-5">Платформ Интеграц</span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Тасралтгүй Платформ <span className="text-gradient">Интеграцаар</span> Үйл Ажиллагааг Хувиргана
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Таны харилцагчид ашигладаг бүх суваг дэмжигдэнэ.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {platforms.map((p, i) => (
            <motion.div key={p.name} initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:i*0.06}}
              className="glass-dark rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-1 hover:border-violet-500/30 transition-all duration-300">
              <div className="text-3xl flex-shrink-0">{p.emoji}</div>
              <div>
                <h3 className="font-bold text-white mb-1">{p.name}</h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300">{p.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:0.6}} className="text-center">
          <a href="https://ai.storeapp.us/register" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-violet-500/30 hover:-translate-y-0.5 transition-all">
            Бүгдийг харах <ArrowRight size={14}/>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
