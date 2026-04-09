"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-violet-100/80 via-violet-50/40 to-white pt-28 pb-10">
      {/* Decorative circles */}
      <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] rounded-full border border-violet-200/40 pointer-events-none" />
      <div className="absolute top-[25%] left-[12%] w-[400px] h-[400px] rounded-full border border-violet-200/30 pointer-events-none" />
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] rounded-full border border-violet-200/30 pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#7c3aed 1px,transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top section: heading left */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT — Tag + Heading */}
          <div>
            <motion.div {...fade(0.05)}>
              <span className="inline-block text-[11px] font-bold text-violet-700 tracking-[0.2em] uppercase mb-5">
                StoreApp — Таны ухаалаг AI борлуулагч
              </span>
            </motion.div>

            <motion.h1 {...fade(0.15)} className="text-[38px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-gray-900">
              Борлуулалтаа<br />
              <span className="text-gradient">StoreApp-д даатга.</span><br />
              <span className="text-gray-400 font-medium text-[28px] md:text-[36px] lg:text-[42px]">Бодож, ярьж, зарна.</span>
            </motion.h1>
          </div>

          {/* RIGHT — Chat bubble top */}
          <motion.div {...fade(0.6)} className="hidden lg:flex justify-end items-start pt-8">
            <div className="flex items-center gap-3 bg-white rounded-full pl-4 pr-6 py-3 shadow-lg shadow-violet-100/50 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-800">Сайн байна уу! Би StoreApp. танд юугаар туслах вэ?</span>
            </div>
          </motion.div>
        </div>

        {/* Center — Robot + bubbles */}
        <div className="relative flex justify-center mt-8 lg:-mt-4">
          {/* Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] flex items-center justify-center">
              <img src="/robot.png" alt="StoreApp AI Robot" className="w-full h-full object-contain drop-shadow-xl" />
            </div>

            {/* Decorative dots around robot */}
            <div className="absolute top-8 left-4 w-4 h-4 rounded-full bg-violet-300/50" />
            <div className="absolute top-16 -left-4 w-2.5 h-2.5 rounded-full bg-violet-400/40" />
            <div className="absolute bottom-20 -left-2 w-3 h-3 rounded-full bg-violet-300/60" />
            <div className="absolute top-4 right-8 w-3 h-3 rounded-full bg-violet-400/40" />
            <div className="absolute bottom-16 right-0 w-2 h-2 rounded-full bg-violet-300/50" />

            {/* Bottom left chat bubble */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-2 -left-16 md:-left-28"
            >
              <div className="flex items-center gap-3 bg-white rounded-full pl-3 pr-5 py-2.5 shadow-lg shadow-violet-100/50 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
                  <MessageCircle size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700">Таны ажлын алхам бүрт</p>
                  <p className="text-xs text-gray-400">туслахад бэлэн.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom right — Description + CTA */}
        <motion.div {...fade(0.5)} className="flex justify-end mt-4 lg:-mt-32">
          <div className="max-w-sm">
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
              StoreApp бол AI-д суурилсан чатбот бөгөөд бизнесийн харилцааг бүрэн өөрчлөх зорилготой. Хэрэглэгчдэд шуурхай, бодит хүн мэт хариу өгч, борлуулалтыг автоматжуулна.
            </p>
            <a
              href="/register/"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
            >
              Үнэгүй эхлэх <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
