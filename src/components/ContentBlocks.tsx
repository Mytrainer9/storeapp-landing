"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blocks = [
  {
    tag: "Нэгдмэл AI", title: "Бүх ажлын хэрэгсэл нэг дор",
    desc: "Захиалга, агуулах, тайлан, харилцагч — бүгдийг нэг платформоос хянаарай.",
    bg: "bg-violet-50", reverse: false,
    mockup: (
      <div className="bg-white rounded-2xl border border-violet-100 shadow-xl overflow-hidden w-full max-w-md">
        <div className="bg-violet-600 px-4 py-3 flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"/><div className="w-3 h-3 rounded-full bg-yellow-400"/><div className="w-3 h-3 rounded-full bg-green-400"/>
          <span className="text-white/60 text-xs ml-2">ai.storeapp.us</span>
        </div>
        <div className="p-5 grid grid-cols-3 gap-3">
          {[["📦","632","Бараа"],["🛒","1,042","Захиалга"],["💰","₮2.4M","Орлого"]].map(([e,n,l])=>(
            <div key={l} className="bg-violet-50 rounded-xl p-3 text-center">
              <div className="text-xl mb-1">{e}</div>
              <div className="text-sm font-black text-violet-700">{n}</div>
              <div className="text-[10px] text-gray-500">{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: "Ухаалаг систем", title: "StoreApp-ын тагнуултай өс",
    desc: "AI таны бизнесийн зан байдал, борлуулалтын хэв маягийг сурч, тааруулан сайжирна.",
    bg: "bg-white", reverse: true,
    mockup: (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden w-full max-w-md">
        <div className="p-4 border-b border-gray-100"><p className="text-sm font-bold text-gray-700">AI Дүн шинжилгээ</p></div>
        <div className="p-5 space-y-3">
          {[["Telegram",85,"bg-blue-500"],["WhatsApp",12,"bg-green-500"],["Viber",3,"bg-purple-500"]].map(([ch,pct,cls])=>(
            <div key={ch as string} className="space-y-1">
              <div className="flex justify-between text-xs"><span className="font-bold text-gray-700">{ch as string}</span><span className="font-black">{pct}%</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className={`${cls} h-2 rounded-full`} style={{width:`${pct}%`}}/></div>
            </div>
          ))}
          <div className="bg-violet-50 rounded-xl p-3 mt-2">
            <p className="text-xs text-violet-700 font-bold">🤖 AI зөвлөмж</p>
            <p className="text-xs text-gray-600 mt-1">Facebook, Telegram суваг хамгийн идэвхтэй байна.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: "Мэргэжлийн дэмжлэг", title: "Мэргэжлийн AI туслалцаа",
    desc: "Бизнесийн шийдвэр гаргахад туслах мэргэжилтэн. Борлуулалтын стратеги, бараа байршуулалт.",
    bg: "bg-violet-50", reverse: false,
    mockup: (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden w-full max-w-md">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-sm">🤖</div>
          <span className="text-sm font-bold text-gray-700">StoreBot</span>
          <span className="ml-auto text-[10px] text-emerald-500 font-bold">● онлайн</span>
        </div>
        <div className="p-4 space-y-3 bg-gray-50">
          <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[85%]"><p className="text-xs text-gray-700">Сайн уу! 👋 Юу хайж байна вэ?</p></div>
          <div className="flex justify-end"><div className="bg-violet-600 rounded-xl rounded-tr-sm p-3 max-w-[85%]"><p className="text-xs text-white">Шкив 6PK байна уу?</p></div></div>
          <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[90%]">
            <p className="text-xs font-bold text-gray-800">🔩 Шкив 6PK-1870</p>
            <p className="text-sm font-black text-violet-600">₮ 45,000</p>
            <p className="text-[10px] text-gray-500 mt-1">⚙️ Загвар: JD1 · 🟢 Нөөцтэй</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ContentBlocks() {
  return (
    <section id="how" className="py-4">
      {blocks.map((b, i) => <Block key={i} b={b} />)}
    </section>
  );
}

function Block({ b }: { b: typeof blocks[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={`py-20 px-6 ${b.bg}`}>
      <div className={`max-w-6xl mx-auto flex flex-col ${b.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-14 items-center`}>
        <motion.div initial={{opacity:0,x:b.reverse?30:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6}} className="flex-1">
          <span className="inline-block text-xs font-bold text-violet-600 tracking-widest uppercase bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full mb-5">{b.tag}</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5">{b.title}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">{b.desc}</p>
          <a href="https://ai.storeapp.us/register" className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 border-2 border-violet-200 px-5 py-2.5 rounded-xl hover:bg-violet-50 transition-all">
            Дэлгэрэнгүй <ArrowRight size={14}/>
          </a>
        </motion.div>
        <motion.div initial={{opacity:0,x:b.reverse?-30:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.1}} className="flex-1 flex justify-center">
          {b.mockup}
        </motion.div>
      </div>
    </div>
  );
}
