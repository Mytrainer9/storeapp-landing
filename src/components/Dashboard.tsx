"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const orders = [
  { id: "#1042", name: "Шкив 6PK", price: "₮45,000", status: "bg-emerald-400" },
  { id: "#1041", name: "Мотор JD1", price: "₮120,000", status: "bg-amber-400" },
  { id: "#1040", name: "Бэлт B2", price: "₮28,000", status: "bg-emerald-400" },
];

export default function Dashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold text-violet-600 tracking-widest uppercase bg-violet-50 border border-violet-100 px-3 py-1.5 rounded-full mb-5">
              Нэгдмэл AI
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Бүх ажлын хэрэгсэл нэг дор
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              Захиалга, агуулах, тайлан, харилцагч — бүгдийг нэг платформоос хянаарай. Олон систем хооронд шилжих хэрэггүй.
            </p>
            <a
              href="https://ai.storeapp.us/register"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 border border-violet-200 px-5 py-2.5 rounded-xl hover:bg-violet-50 transition-all"
            >
              Дэлгэрэнгүй үзэх <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/40 overflow-hidden">
              {/* Browser bar */}
              <div className="bg-gray-900 px-5 py-3.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-gray-400 text-xs ml-3">ai.storeapp.us — Дашбоард</span>
              </div>

              {/* Stats row */}
              <div className="p-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Бараа", value: "632", icon: "📦" },
                  { label: "Захиалга", value: "1,042", icon: "🛒" },
                  { label: "Орлого", value: "₮2.4M", icon: "💰" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-lg mb-1">{s.icon}</div>
                    <div className="text-lg font-extrabold text-gray-900">{s.value}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Orders table */}
              <div className="px-5 pb-5">
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500">Сүүлийн захиалгууд</p>
                  </div>
                  {orders.map((o) => (
                    <div key={o.id} className="flex items-center justify-between px-4 py-3 border-b border-gray-50 last:border-0">
                      <span className="text-xs text-gray-400 w-14">{o.id}</span>
                      <span className="text-sm font-medium text-gray-700 flex-1">{o.name}</span>
                      <span className="text-sm font-bold text-gray-900 mr-3">{o.price}</span>
                      <div className={`w-2.5 h-2.5 rounded-full ${o.status}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
