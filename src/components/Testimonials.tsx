"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const items = [
  { name:"Б. Мөнхбат", role:"Автозапчасть дэлгүүр", avatar:"👨‍💼", text:"Telegram ботоо тохируулаад л барааны каталогоо оруулсан. Одоо шөнийн 2 цагт ч захиалга ирдэг болсон." },
  { name:"О. Ариунаа",  role:"Гэр ахуйн бараа",     avatar:"👩‍💼", text:"Excel файлаасаа 500 гаруй барааг нэг дороо оруулсан. AI нь хүний шиг хариулдаг. Хоёр ажилтны ажлыг хийж байна." },
  { name:"Д. Батчулуун",role:"Электроник бараа",      avatar:"👨‍💻", text:"Telegram-аа л ашигладаг манай харилцагчид захиалгаа бот-оор өгч байна. Маш хялбар!" },
  { name:"Г. Номун",    role:"Хувцасны дэлгүүр",     avatar:"👩",  text:"Хэдхэн цагт тохируулаад ажиллуулсан. Борлуулалт 40%-иар нэмэгдсэн. Гайхалтай!" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="bg-violet-50/50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-violet-600 tracking-widest uppercase bg-violet-100 border border-violet-200 px-3 py-1.5 rounded-full mb-5">Хэрэглэгчдийн сэтгэгдэл</span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black text-gray-900 leading-tight mb-4">
            Манай Хүчтэй Амлалтыг <span className="text-gradient">Тусгах Сэтгэгдлүүд</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_,i)=><Star key={i} size={16} className="text-amber-400" fill="currentColor"/>)}
            <span className="ml-2 font-black text-gray-700">4.9</span><span className="text-gray-400 text-sm">/5</span>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((t,i)=>(
            <motion.div key={t.name} initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.55,delay:i*0.1}}
              className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm hover:shadow-lg hover:shadow-violet-100/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <Quote size={22} className="text-violet-200 mb-3" fill="currentColor"/>
              <div className="flex mb-3">{[...Array(5)].map((_,j)=><Star key={j} size={12} className="text-amber-400" fill="currentColor"/>)}</div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-xl">{t.avatar}</div>
                <div><p className="text-sm font-black text-gray-900">{t.name}</p><p className="text-xs text-gray-500">{t.role}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
