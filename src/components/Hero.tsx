"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 pb-20">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/60 via-white to-white" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fade(0.05)}>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-violet-700 bg-violet-50 border border-violet-100 rounded-full px-4 py-1.5 mb-8">
            AI борлуулалтын платформ
          </span>
        </motion.div>

        <motion.h1 {...fade(0.15)} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-6">
          Борлуулалтаа{" "}
          <span className="text-gradient">AI-д даатга</span>
        </motion.h1>

        <motion.p {...fade(0.25)} className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
          Facebook, Telegram, WhatsApp дээр 24/7 ажиллах AI борлуулагч.
          Бараа санал болгож, захиалга авч, агуулахыг удирдана.
        </motion.p>

        <motion.div {...fade(0.35)} className="flex flex-wrap justify-center gap-4">
          <a href="https://ai.storeapp.us/register"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-800 transition-colors">
            Үнэгүй эхлэх <ArrowRight size={16}/>
          </a>
          <a href="#how"
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 font-semibold text-sm px-7 py-3.5 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all">
            Хэрхэн ажилладаг
          </a>
        </motion.div>

        {/* Chat preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-sm">🤖</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">StoreBot</p>
                <p className="text-[11px] text-emerald-500 font-medium">Онлайн</p>
              </div>
            </div>
            <div className="p-5 space-y-3 bg-gray-50/50">
              <div className="bg-white rounded-2xl rounded-tl-md p-3.5 shadow-sm border border-gray-100 max-w-[80%]">
                <p className="text-sm text-gray-700">Сайн байна уу! Танд юугаар туслах вэ?</p>
              </div>
              <div className="flex justify-end">
                <div className="bg-violet-600 rounded-2xl rounded-tr-md p-3.5 max-w-[75%]">
                  <p className="text-sm text-white">Шкив 6PK байна уу?</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-md p-3.5 shadow-sm border border-gray-100 max-w-[85%]">
                <p className="text-sm font-semibold text-gray-800">Шкив 6PK-1870</p>
                <p className="text-base font-bold text-violet-600 mt-1">₮45,000</p>
                <p className="text-xs text-gray-400 mt-1">Нөөцтэй · JD1 загвар</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
