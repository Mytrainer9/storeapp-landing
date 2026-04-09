"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Send } from "lucide-react";

const f = (d = 0) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d, ease: [0.22,1,0.36,1] } });

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white pt-32 pb-20">
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-violet-200/40 -top-40 -left-40" />
      <div className="orb w-[400px] h-[400px] bg-purple-200/30 top-20 right-0" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(#8b5cf6 1px,transparent 1px)",backgroundSize:"24px 24px"}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <motion.div {...f(0.05)} className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-bold text-violet-700">🤖 AI Борлуулалтын мэргэжилтэн</span>
          </motion.div>

          <motion.h1 {...f(0.15)} className="text-[42px] md:text-[54px] lg:text-[60px] font-black leading-[1.06] tracking-tight text-gray-900 mb-5">
            <span className="text-gradient">Та борлуулалтаа</span><br/>
               AI-д даатга,<br/>
            <br/>
          </motion.h1>

          <motion.p {...f(0.25)} className="text-gray-500 text-lg leading-relaxed max-w-md mb-8">
            Таны бизнесийг 24/7 ажиллуулах AI борлуулагч
Facebook, Telegram, WhatsApp, Viber дээр нэгэн зэрэг ажиллаж,
хэрэглэгчидтэй харилцаж, бараа санал болгож, захиалгыг шууд авна.
📦 Агуулахын үлдэгдэл
📊 Үнийн мэдээлэл
📊 Борлуулалтын тайлан
📍 Бүх мэдээлэл — таны гарт, хаанаас ч
          </motion.p>

          <motion.div {...f(0.35)} className="flex flex-wrap gap-3">
            <a href="https://ai.storeapp.us/register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-violet-300/40 hover:-translate-y-0.5 hover:shadow-violet-400/50 transition-all">
              Үнэгүй эхлэх <ArrowRight size={16}/>
            </a>
            <a href="#how"
              className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-bold text-sm px-6 py-3.5 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition-all">
              Хэрхэн ажилдаг →
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Robot + floating bubbles */}
        <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.7,delay:0.2}} className="relative flex justify-center">
          {/* Robot */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-violet-100 to-purple-50 flex items-center justify-center shadow-2xl shadow-violet-200/40 border border-violet-100">
              <span className="text-[120px] md:text-[150px] select-none filter drop-shadow-lg">🤖</span>
            </div>

            {/* Floating chat bubble — top right */}
            <motion.div
              initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:0.8}}
              className="absolute -top-2 -right-4 bg-white rounded-2xl rounded-tr-sm p-3 shadow-xl shadow-violet-100/50 border border-violet-100 max-w-[180px]"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center"><MessageCircle size={12} className="text-violet-600"/></div>
                <span className="text-[11px] font-bold text-gray-800">Сайн уу! Би StoreBot 👋</span>
              </div>
              <p className="text-[10px] text-gray-500">Танд юугаар туслах вэ?</p>
            </motion.div>

            {/* Floating bubble — bottom left */}
            <motion.div
              initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:1}}
              className="absolute -bottom-4 -left-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl rounded-bl-sm p-3 shadow-xl max-w-[160px]"
            >
              <div className="flex items-center gap-2">
                <Send size={12}/>
                <span className="text-[11px] font-bold">Шкив 6PK байна уу?</span>
              </div>
            </motion.div>

            {/* Badge — right center */}
            <motion.div
              initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:1.2}}
              className="absolute top-1/2 -right-14 -translate-y-1/2 bg-white rounded-xl p-2.5 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🛒</span>
                <div>
                  <p className="text-[10px] font-black text-gray-800">Захиалга #1042</p>
                  <p className="text-[9px] text-emerald-500 font-bold">✓ Баталгаажлаа</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute -top-8 left-1/2 w-3 h-3 rounded-full bg-violet-300 opacity-60 animate-bounce" />
            <div className="absolute top-1/4 -left-10 w-2 h-2 rounded-full bg-purple-400 opacity-40 animate-ping" />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
