"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Brain, Sparkles } from "lucide-react";

const cards = [
  {
    icon:  Globe,
    color: "from-blue-50 to-blue-100",
    icolor:"text-blue-600 bg-blue-100",
    title: "Дэлхийтэй холбогдоорой",
    desc:  "Telegram, WhatsApp, Viber, Facebook — бүх сувгаар харилцагчдаа олоорой.",
  },
  {
    icon:  Brain,
    color: "from-brand-50 to-brand-100",
    icolor:"text-brand-600 bg-brand-100",
    title: "Хамгийн хэцүү асуудлыг шийдэ",
    desc:  "AI борлуулагч таны бараа бүтээгдэхүүний мэдээллийг сурч, ямар ч асуулганд хариулна.",
  },
  {
    icon:  Sparkles,
    color: "from-amber-50 to-amber-100",
    icolor:"text-amber-600 bg-amber-100",
    title: "Бүтээлч боломжоо нэмэгдүүл",
    desc:  "AI тайлан, зөвлөмж, борлуулалтын стратеги — бизнесийг хөгжүүлэх хэрэгсэл.",
  },
];

export default function MeetSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top center */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Robot icon */}
          <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 border border-brand-200/60 items-center justify-center mb-6 shadow-lg shadow-brand-100/50">
            <span className="text-4xl">🤖</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight mb-4">
            StoreApp-тай танилц —{" "}
            <span className="text-gradient">Таны Шинэ AI Хамтрагч!</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Чат хийж, асуулт хариулж, бизнесийг тань илүү хялбараар ажиллуулахад тусална.
          </p>
        </motion.div>

        {/* 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`rounded-2xl bg-gradient-to-br ${c.color} border border-white shadow-sm p-7 card-hover cursor-default`}
            >
              <div className={`inline-flex w-12 h-12 rounded-xl items-center justify-center mb-5 ${c.icolor}`}>
                <c.icon size={22} />
              </div>
              <h3 className="text-lg font-black text-dark mb-3">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
