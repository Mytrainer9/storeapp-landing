"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Brain, Sparkles, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Бүх сувгаар борлуулалт хий",
    desc: "Telegram, Facebook, WhatsApp — хаанаас ч хэрэглэгч орж ирсэн AI шууд зарна.",
  },
  {
    icon: Brain,
    title: "Хэрэглэгчийг худалдан авагч болго",
    desc: "AI таны бүх барааг танилцуулж, тохирох бүтээгдэхүүн санал болгож, шийдвэр гаргуулна.",
  },
  {
    icon: Sparkles,
    title: "Захиалгыг автомат болго",
    desc: "Хэрэглэгчийн нэр, утас, хаяг авч захиалгыг шууд бүртгэнэ.",
  },
];

export default function MeetSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="features" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Таны бизнесийн <span className="text-gradient">шинэ AI хамтрагч</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Бизнесийг тань илүү хялбар, илүү хурдан ажиллуулахад тусална.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-5">
                <c.icon size={22} className="text-violet-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="https://ai.storeapp.us/register"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors">
            Бүгдийг харах <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
