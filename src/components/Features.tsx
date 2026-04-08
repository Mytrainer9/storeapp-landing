"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare, Headphones, Globe2,
  Brain, Sliders, CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Хүний шиг харилцлага",
    desc:  "ChatGPT-д суурилсан AI нь харилцагчдын аялгуу, санааг ойлгож, байгалийн хэлээр хариулна.",
  },
  {
    icon: Headphones,
    title: "24/7 Дэмжлэг",
    desc:  "Хэзээ ч, хаана ч — шөнийн 3 цагт ч захиалга авч, асуулт хариулна.",
  },
  {
    icon: Globe2,
    title: "Олон суваг интеграц",
    desc:  "Telegram, WhatsApp, Viber, Facebook — нэг дашбоардаас бүгдийг хянана.",
  },
  {
    icon: Brain,
    title: "AI сурах чадвар",
    desc:  "Систем хэрэглэгчийн зан байдлаас суран, цаг хугацаанд тааруулан сайжирна.",
  },
  {
    icon: Sliders,
    title: "Drag-and-drop тохируулга",
    desc:  "Код бичихгүйгээр бизнесийнхаа мэдлэгийн санг тохируулж, дүрэм нэм.",
  },
  {
    icon: CheckCircle2,
    title: "Excel импорт",
    desc:  "Файлаасаа хэдэн зуун барааг нэг дороо оруулах ухаалаг импорт систем.",
  },
];

export default function Features() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="features" className="bg-brand-50/60 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-xs font-bold text-brand-600 tracking-widest uppercase bg-brand-100 px-3 py-1.5 rounded-full mb-5">
              Хүчирхэг функцүүд
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-6">
              StoreApp-ыг{" "}
              <span className="text-gradient">тусгай болгох</span>{" "}
              онцлогууд
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Хамгийн тохиромжтой AI борлуулагч болон виртуал туслагч.
              Таны бизнесийн хэрэгцээнд зориулсан цогц шийдэл.
            </p>
            <a href="https://ai.storeapp.us/register" className="btn-primary inline-flex">
              Одоо туршиж үзэх →
            </a>
          </motion.div>

          {/* RIGHT — feature list */}
          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-brand-100 shadow-sm card-hover"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center">
                  <f.icon size={20} className="text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
