"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Бүртгүүлэх",
    desc: "Үнэгүй бүртгэл үүсгээд бизнесийнхээ мэдээллийг оруулна.",
  },
  {
    num: "02",
    title: "Бараа оруулах",
    desc: "Excel файлаас эсвэл гараар барааны мэдээллээ оруулна.",
  },
  {
    num: "03",
    title: "Суваг холбох",
    desc: "Telegram, Facebook, WhatsApp ботоо холбоод AI-г ажиллуулна.",
  },
  {
    num: "04",
    title: "Борлуулалт эхлэх",
    desc: "AI 24/7 хэрэглэгчидтэй харилцаж, захиалга авч эхэлнэ.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="how" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Хэрхэн <span className="text-gradient">ажилладаг</span> вэ?
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            4 энгийн алхамаар AI борлуулагчаа ажиллуулаарай.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all"
            >
              <span className="text-3xl font-extrabold text-violet-200 shrink-0">{s.num}</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
