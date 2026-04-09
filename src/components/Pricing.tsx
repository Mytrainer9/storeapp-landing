"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "1 сар",
    price: "150,000",
    period: "/сар",
    desc: "Богино хугацаат",
    features: ["Бүх функц", "Бүх суваг холболт", "AI борлуулагч", "24/7 дэмжлэг"],
    highlighted: false,
  },
  {
    name: "6 сар",
    price: "750,000",
    period: "/6 сар",
    desc: "Хамгийн түгээмэл сонголт",
    features: ["Бүх функц", "Бүх суваг холболт", "AI борлуулагч", "24/7 дэмжлэг", "Сард 125,000₮"],
    highlighted: true,
  },
  {
    name: "1 жил",
    price: "1,500,000",
    period: "/жил",
    desc: "Хамгийн хэмнэлттэй",
    features: ["Бүх функц", "Бүх суваг холболт", "AI борлуулагч", "24/7 дэмжлэг", "Сард 125,000₮"],
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="pricing" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Та өөрт тохирохыг <span className="text-gradient"></span>сонгоорой
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gray-900 text-white border border-gray-800 shadow-2xl shadow-gray-900/20 md:-translate-y-2"
                  : "bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50"
              }`}
            >
              <p className={`text-sm font-semibold mb-1 ${plan.highlighted ? "text-violet-400" : "text-violet-600"}`}>
                {plan.name}
              </p>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl md:text-5xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-gray-400" : "text-gray-400"}`}>₮{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check size={15} className={plan.highlighted ? "text-violet-400" : "text-violet-600"} />
                    <span className={`text-sm ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/register/"
                className={`flex items-center justify-center gap-2 w-full font-semibold text-sm py-3 rounded-xl transition-all ${
                  plan.highlighted
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Эхлэх <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
