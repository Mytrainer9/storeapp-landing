"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: 14, suffix: "", label: "Интеграцчлагдсан суваг", color: "from-blue-500 to-blue-600" },
  { num: 25, suffix: "", label: "Хийсвэр хэрэгслүүд", color: "from-violet-500 to-purple-600" },
  { num: 83, suffix: "%", label: "Бизнесийн амжилт нэмэгдсэн", color: "from-emerald-500 to-teal-600" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); } else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}} className="text-center mb-6">
          <span className="inline-block text-xs font-bold text-violet-600 tracking-widest uppercase bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full mb-4">Тоон мэдээлэл</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            StoreApp ашиглах <span className="text-gradient">салбаруудыг</span> судал
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {stats.map((s,i) => (
            <motion.div key={s.label} initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:i*0.12}}
              className="relative rounded-3xl overflow-hidden group">
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-90`} />
              <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(white 1px,transparent 1px)",backgroundSize:"16px 16px"}} />
              <div className="relative p-8 text-center">
                <div className="text-6xl md:text-7xl font-black text-white tracking-tight mb-3">
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <p className="text-white/80 text-sm font-semibold">{s.label}</p>
              </div>
              {/* Corner decoration */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/10" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
