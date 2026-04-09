"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Headphones, Globe2, Brain, Sliders, CheckCircle2 } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "Хүний шиг харилцлага", desc: "AI нь харилцагчдын санааг ойлгож, байгалийн хэлээр хариулна." },
  { icon: Headphones,    title: "24/7 Дэмжлэг",        desc: "Хэзээ ч, хаана ч — шөнийн 3 цагт ч захиалга авч, асуулт хариулна." },
  { icon: Globe2,        title: "Олон суваг интеграц",  desc: "facebook, Telegram, WhatsApp, Viber, Facebook — нэг дашбоардаас бүгдийг хянана." },
  { icon: Brain,         title: "AI сурах чадвар",      desc: "Систем хэрэглэгчийн зан байдлаас суран, цаг хугацаанд тааруулан сайжирна." },
  { icon: Sliders,       title: "Хялбар тохируулга",    desc: "Код бичихгүйгээр бизнесийнхаа мэдлэгийн санг тохируулж, дүрэм нэм." },
  { icon: CheckCircle2,  title: "Excel импорт",         desc: "Файлаасаа хэдэн зуун барааг нэг дороо оруулах ухаалаг импорт систем." },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="features" className="py-24 px-6 bg-violet-50/50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT — sticky with robot overlay */}
        <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6}} className="lg:sticky lg:top-28">
          <span className="inline-block text-xs font-bold text-violet-600 tracking-widest uppercase bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full mb-5">Хүчирхэг функцүүд</span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-gray-900 leading-tight mb-5">
            StoreApp-ыг <span className="text-gradient">тусгай болгох</span> онцлогууд
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">Хамгийн тохиромжтой AI борлуулагч.</p>

          {/* Robot illustration */}
          <div className="relative w-64 h-64 mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-200/50 to-purple-100/30 blur-2xl" />
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-violet-100 to-purple-50 border border-violet-200/50 flex items-center justify-center shadow-xl shadow-violet-100/50">
              <span className="text-[100px] select-none filter drop-shadow-md">🤖</span>
            </div>
            <div className="absolute -top-3 -right-3 bg-white rounded-xl p-2 shadow-lg border border-violet-100 text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Онлайн
            </div>
          </div>
        </motion.div>

        {/* RIGHT — feature list */}
        <div className="flex flex-col gap-4">
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}}
              transition={{duration:0.5,delay:i*0.08}}
              className="flex gap-4 p-5 bg-white rounded-2xl border border-violet-100/80 shadow-sm hover:shadow-lg hover:shadow-violet-100/40 hover:-translate-y-1 hover:border-violet-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center">
                <f.icon size={20} className="text-violet-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-[15px]">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
          <motion.a href="https://ai.storeapp.us/register"
            initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:0.6}}
            className="inline-flex items-center gap-2 text-violet-600 font-bold text-sm mt-2 hover:text-violet-800 transition-colors">
            Бүгдийг харах →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
