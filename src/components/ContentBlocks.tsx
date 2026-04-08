"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blocks = [
  {
    tag:    "Нэгдмэл AI",
    title:  "Бүх ажлын хэрэгсэл нэг дор",
    desc:   "Захиалга, агуулах, тайлан, харилцагч — бүгдийг нэг платформоос хянаарай. Олон систем хооронд шилжих хэрэггүй.",
    cta:    "Дэлгэрэнгүй үзэх",
    bg:     "from-brand-50 to-white",
    reverse: false,
    mockup: (
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl border border-brand-100 shadow-xl overflow-hidden">
          <div className="bg-brand-600 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400"/><div className="w-3 h-3 rounded-full bg-yellow-400"/><div className="w-3 h-3 rounded-full bg-green-400"/></div>
            <span className="text-white/70 text-xs ml-2">ai.storeapp.us — Дашбоард</span>
          </div>
          <div className="p-5 space-y-3">
            <div className="grid grid-cols-3 gap-3">
              {[["📦","632","Бараа"],["🛒","1,042","Захиалга"],["💰","₮2.4M","Орлого"]].map(([e,n,l]) => (
                <div key={l} className="bg-brand-50 rounded-xl p-3 text-center">
                  <div className="text-xl mb-1">{e}</div>
                  <div className="text-sm font-black text-brand-700">{n}</div>
                  <div className="text-[10px] text-gray-500">{l}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs font-bold text-gray-600 mb-2">Сүүлийн захиалгууд</p>
              {[["#1042","Шкив 6PK","₮45,000","🟢"],["#1041","Мотор JD1","₮120,000","🟡"],["#1040","Бэлт B2","₮28,000","🟢"]].map(([id,name,price,st]) => (
                <div key={id} className="flex justify-between text-xs py-1.5 border-b border-gray-100 last:border-0">
                  <span className="text-gray-500">{id}</span>
                  <span className="font-medium">{name}</span>
                  <span className="font-bold text-brand-600">{price}</span>
                  <span>{st}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    tag:    "Ухаалаг систем",
    title:  "StoreApp-ын тагнуулын ажиллагаатай өс",
    desc:   "Системийн суулт хийснээс хойш таны бизнесийн зан байдал, борлуулалтын хэв маягийг AI сурч, тааруулан шийдвэрлэнэ.",
    cta:    "Хэрхэн ажилдагийг үзэх",
    bg:     "from-white to-brand-50",
    reverse: true,
    mockup: (
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <p className="text-sm font-bold text-gray-700">AI Чат дүн шинжилгээ</p>
          </div>
          <div className="p-5 space-y-3">
            {[["Telegram",85,"text-blue-500 bg-blue-50"],["WhatsApp",12,"text-green-600 bg-green-50"],["Viber",3,"text-purple-600 bg-purple-50"]].map(([ch,pct,cls]) => (
              <div key={ch as string} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className={`font-bold px-2 py-0.5 rounded-md text-[11px] ${cls}`}>{ch as string}</span>
                  <span className="font-black text-gray-700">{pct}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-brand-500 h-2 rounded-full transition-all" style={{width:`${pct}%`}} />
                </div>
              </div>
            ))}
            <div className="bg-brand-50 rounded-xl p-3 mt-2">
              <p className="text-xs text-brand-700 font-bold">🤖 AI зөвлөмж</p>
              <p className="text-xs text-gray-600 mt-1">Telegram суваг хамгийн идэвхтэй. Мессежийн давтамж нэмэгдүүлэхийг зөвлөж байна.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    tag:    "Мэргэжлийн дэмжлэг",
    title:  "Мэргэжлийн AI туслалцаа",
    desc:   "Зөвхөн бот биш — бизнесийн шийдвэр гаргахад туслах мэргэжилтэн. Борлуулалтын стратеги, бараа байршуулалт, үнэ тогтоолт.",
    cta:    "Дэмжлэг авах",
    bg:     "from-brand-50 to-white",
    reverse: false,
    mockup: (
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center text-sm">🤖</div>
            <span className="text-sm font-bold text-gray-700">StoreBot</span>
            <span className="ml-auto text-[10px] text-green-500 font-bold bg-green-50 px-2 py-0.5 rounded-full">● онлайн</span>
          </div>
          <div className="p-4 space-y-3 bg-gray-50 min-h-[180px]">
            <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
              <p className="text-xs text-gray-700">Сайн уу! 👋 Юу хайж байна вэ?</p>
            </div>
            <div className="flex justify-end">
              <div className="bg-brand-600 rounded-xl rounded-tr-sm p-3 max-w-[85%]">
                <p className="text-xs text-white">Шкив 6PK байна уу?</p>
              </div>
            </div>
            <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[90%]">
              <p className="text-xs font-bold text-gray-800">🔩 Шкив 6PK-1870</p>
              <p className="text-sm font-black text-brand-600">₮ 45,000</p>
              <p className="text-[10px] text-gray-500 mt-1">⚙️ Загвар: JD1 · 🟢 Нөөцтэй</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ContentBlocks() {
  return (
    <section id="how" className="py-6 bg-white">
      {blocks.map((b, i) => (
        <Block key={i} block={b} index={i} />
      ))}
    </section>
  );
}

function Block({ block: b, index }: { block: typeof blocks[0]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={`py-20 px-6 bg-gradient-to-br ${b.bg}`}>
      <div className={`max-w-6xl mx-auto flex flex-col ${b.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-14 items-center`}>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: b.reverse ? 30 : -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="flex-1"
        >
          <span className="inline-block text-xs font-bold text-brand-600 tracking-widest uppercase bg-brand-100 px-3 py-1.5 rounded-full mb-5">
            {b.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dark leading-tight mb-5">
            {b.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">{b.desc}</p>
          <a href="https://ai.storeapp.us/register" className="btn-outline inline-flex">
            {b.cta} <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, x: b.reverse ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex-1 flex justify-center"
        >
          {b.mockup}
        </motion.div>
      </div>
    </div>
  );
}
