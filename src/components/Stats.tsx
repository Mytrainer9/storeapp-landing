"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: 500,  suffix: "+", label: "Бизнест хэрэглэгдэж байна",    sub: "Монгол дахь дэлгүүрүүд"      },
  { num: 24,   suffix: "/7", label: "Тасралтгүй ажиллагаа",         sub: "Жилийн 365 хоног"            },
  { num: 98,   suffix: "%",  label: "Харилцагчдын сэтгэл ханамж",   sub: "Дундаж үнэлгээ 4.9/5"        },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-6xl md:text-7xl font-black text-white tracking-tight">
      {count}
      <span className="text-brand-300 text-5xl">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-dark-gradient py-24 px-6 relative overflow-hidden">
      <div className="orb w-[600px] h-[400px] bg-brand-700/15 top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-brand-300 text-sm font-bold tracking-widest uppercase mb-14"
        >
          Тоон мэдээлэл
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center glass-dark rounded-2xl p-8 border border-brand-700/20"
            >
              <Counter target={s.num} suffix={s.suffix} />
              <h3 className="text-lg font-black text-white mt-3 mb-1">{s.label}</h3>
              <p className="text-sm text-gray-400">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Борлуулалтаа{" "}
            <span className="text-gradient">AI-д Даат</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Бүртгэл үнэгүй. Кредит карт шаардахгүй. Хэдий ч цуцалж болно.
          </p>
          <a href="https://ai.storeapp.us/register" className="btn-primary inline-flex text-base px-8 py-4">
            Үнэгүй бүртгэл үүсгэх →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
