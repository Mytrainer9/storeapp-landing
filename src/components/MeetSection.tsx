"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Brain, Sparkles } from "lucide-react";

const cards = [
  { icon: Globe, title: "Бүх сувгаар борлуулалт хий", desc: "Telegram, Facebook, WhatsApp — хаанаас ч хэрэглэгч орж ирсэн AI тань шууд зарна.", color: "bg-blue-50 border-blue-100", ic: "text-blue-600 bg-blue-100" },
  { icon: Brain, title: "Хэрэглэгчийг худалдан авагч болго", desc: "AI таны бүх барааг танилцуулаж тохирох бүтээгдэхүүн санал болгож, шийдвэр гаргуулна.  ", color: "bg-violet-50 border-violet-100", ic: "text-violet-600 bg-violet-100" },
  { icon: Sparkles, title: "Захиалгыг автомат болго", desc: "Хэрэглэгчийн нэр, утас, хаяг авч — захиалгыг шууд бүртгэнэ.", color: "bg-amber-50 border-amber-100", ic: "text-amber-600 bg-amber-100" },
];

export default function MeetSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-6">
          <span className="inline-block text-xs font-bold text-violet-600 tracking-widest uppercase bg-violet-50 border border-violet-100 px-4 py-1.5 rounded-full mb-4"></span>
          <div className="inline-flex w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-100 to-purple-50 border border-violet-200 items-center justify-center mb-6 shadow-lg shadow-violet-100/50">
            <span className="text-4xl">🤖</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black text-gray-900 leading-tight mb-4">
            Таны бизнесийн— <span className="text-gradient">шинэ AI хамтрагч!</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">Бизнесийг тань илүү хялбараар болгоход тусална.</p>
        </motion.div>

        {/* 3 cards with connector lines */}
        <div className="relative mt-16">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-200 via-violet-200 to-amber-200 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:0.6,delay:i*0.15}}
                className="text-center"
              >
                {/* Circle node */}
                <div className={`w-24 h-24 rounded-full ${c.color} border-2 flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                  <div className={`w-14 h-14 rounded-2xl ${c.ic} flex items-center justify-center`}>
                    <c.icon size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mx-auto">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
