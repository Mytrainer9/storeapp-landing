"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    name: "Б. Мөнхбат",
    role: "Авто сэлбэг",
    text: "Telegram ботоо тохируулаад л барааны каталогоо оруулсан. Одоо шөнийн 2 цагт ч захиалга ирдэг болсон. Гайхалтай систем!",
  },
  {
    name: "О. Ариунаа",
    role: "Гэр ахуйн бараа",
    text: "Excel файлаасаа 500 гаруй барааг нэг дороо оруулсан. AI нь харилцагчдын асуулт бүрт хүний шиг хариулдаг. Хоёр ажилтны ажлыг хийж байна.",
  },
  {
    name: "Д. Батчулуун",
    role: "Электроник бараа",
    text: "Telegram-аа л ашигладаг манай харилцагчид захиалгаа бот-оор өгч байна. Маш хялбар, маш хурдан. Санал болгоно.",
  },
  {
    name: "Г. Номун",
    role: "Хувцас",
    text: "Хэдхэн цагт тохируулаад ажиллуулсан. Борлуулалт 40%-иар нэмэгдсэн. StoreApp-гүйгээр дэлгүүрээ санах ч боломжгүй болсон.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Хэрэглэгчдийн <span className="text-gradient">сэтгэгдэл</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
              ))}
            </div>
            <span className="font-bold text-gray-900">4.9</span>
            <span className="text-gray-400 text-sm">/5 дундаж үнэлгээ</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300 flex flex-col"
            >
              <div className="text-3xl text-violet-200 font-serif mb-3">&ldquo;</div>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-500">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
