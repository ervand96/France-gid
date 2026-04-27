"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Users, Car, Check } from "lucide-react";
import Container from "@/app/shared/Container";
import { ImageWithFallback } from "@/app/shared/imageWithFallback/imageWithFallback";
import mercedes from "@/assets/transfer/vClass.webp";

export default function TransferPage() {
  const transfers = [
    { from: "Аэропорт ШДГ", to: "Париж", p1: "90", p2: "120", p3: "150" },
    { from: "Аэропорт ШДГ", to: "Диснейленд", p1: "150", p2: "180", p3: "220" },
    {
      from: "Аэропорт ШДГ",
      to: "Аэропорт Орли",
      p1: "150",
      p2: "180",
      p3: "220",
    },
    { from: "Аэропорт Бовэ", to: "Париж", p1: "250", p2: "270", p3: "300" },
    { from: "Париж", to: "Диснейленд", p1: "120", p2: "150", p3: "180" },
    { from: "Париж", to: "Парк Астерикс", p1: "120", p2: "150", p3: "180" },
    { from: "Ж/Д Вокзал", to: "Отель в Париже", p1: "70", p2: "80", p3: "90" },
  ];

  return (
    <main className="bg-[#0B0D11] min-h-screen pt-32 pb-24 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full -z-10" />

      <Container>
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-accent mb-4"
          >
            <div className="h-[1px] w-12 bg-accent" />
            <span className="uppercase tracking-[4px] text-[10px] font-bold">
              Premium Transport
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase leading-tight italic"
          >
            Первоклассные <br /> <span className="text-accent">Трансферы</span>
          </motion.h1>
        </div>

        <div className="relative mb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-8 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-[40px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
              <div className="relative rounded-[32px] overflow-hidden border border-white/5 bg-[#161920]">
                <ImageWithFallback
                  src={mercedes}
                  width={1000}
                  height={1000}
                  alt="Mercedes V Class"
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-accent" />{" "}
                      <span>7 мест</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-5 h-5 text-accent" />{" "}
                      <span>Classe V Luxe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-accent" />{" "}
                      <span>VIP Страховка</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-3xl font-bold italic tracking-tighter uppercase underline decoration-accent decoration-2 underline-offset-8">
                Mercedes V-Class
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Профессиональный сервис с лицензией. Встречаем в зоне выхода с
                табличкой, помогаем с багажом и оформлением Tax Free.
                Безупречность в каждой детали.
              </p>
              <ul className="space-y-4">
                {[
                  "Профессиональный водитель",
                  "Детские кресла бесплатно",
                  "Вода и Wi-Fi в салоне",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <div className="bg-accent/20 p-1 rounded-full">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-accent/30 to-transparent rounded-[40px] blur opacity-20" />
          <div className="relative bg-[#161920]/80 backdrop-blur-2xl rounded-[40px] border border-white/5 overflow-hidden">
            <div className="grid grid-cols-12 p-8 border-b border-white/5 bg-white/5 items-center">
              <div className="col-span-6 text-[14px] uppercase tracking-[3px] font-bold text-gray-500">
                Направление
              </div>
              <div className="col-span-2 text-center text-[14px] uppercase font-bold text-gray-500">
                1-3 чел с группы
              </div>
              <div className="col-span-2 text-center text-[14px] uppercase font-bold text-gray-500">
                4-5 чел с группы
              </div>
              <div className="col-span-2 text-center text-[14px] uppercase font-bold text-gray-500">
                6-7 чел с группы
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {transfers.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                  className="grid grid-cols-12 p-8 items-center transition-all group/row"
                >
                  <div className="col-span-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 group-hover/row:border-accent transition-colors">
                        <MapPin className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <div className="text-[10px] text-accent font-bold uppercase tracking-widest">
                          {item.from}
                        </div>
                        <div className="text-xl font-bold flex items-center gap-2 italic">
                          {item.to}
                        </div>
                      </div>
                    </div>
                  </div>

                  <PriceCell price={item.p1} />
                  <PriceCell price={item.p2} />
                  <PriceCell price={item.p3} highlight />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

function PriceCell({
  price,
  highlight,
}: {
  price: string;
  highlight?: boolean;
}) {
  return (
    <div className="col-span-2 text-center">
      <div
        className={`text-2xl font-black ${highlight ? "text-accent drop-shadow-[0_0_10px_rgba(202,138,4,0.3)]" : "text-white/80"}`}
      >
        €{price}
      </div>
    </div>
  );
}
