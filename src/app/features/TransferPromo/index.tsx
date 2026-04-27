"use client";

import { motion } from "framer-motion";
import { MoveRight, ShieldCheck, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/app/shared/Container";
import mercedes from "@/assets/transfer/vClass.webp";
import { useLocale } from "next-intl";

export default function TransferZenith() {
  const locale = useLocale();

  return (
    <section className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#F3E7D3]/30 blur-[150px] rounded-full pointer-events-none" />
      <Container>
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-accent text-[10px] font-black uppercase tracking-[8px]">
              Premium Private Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black text-slate-900 leading-none uppercase tracking-tighter italic"
          >
            Voyage <span className="text-accent">Elite</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.1, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={mercedes}
                alt="Mercedes V-Class Luxe"
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-black/10 blur-[60px] rounded-full -z-10" />
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:order-1 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <p className="text-slate-500 text-xl md:text-2xl leading-relaxed font-light">
                Безопасность и тишина. <br />
                Индивидуальные трансферы на
                <span className="text-slate-900 font-bold">
                  {" "}
                  Mercedes V-Class{" "}
                </span>
                с персональным водителем по всей Франции.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <ShieldCheck className="text-accent w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">
                      Лицензия
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Профессиональная страховка пассажиров и багажа.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Compass className="text-accent w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">
                      Сервис
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Встреча с табличкой и помощь в оформлении Tax Free.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-[40px] flex items-center justify-between group hover:bg-slate-900 transition-all duration-500"
            >
              <div>
                <p className="text-[10px] uppercase font-black text-accent tracking-[3px] mb-2">
                  Popular Route
                </p>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-white transition-colors">
                  CDG <span className="text-accent">→</span> PARIS
                </h3>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-slate-900 group-hover:text-accent transition-colors tracking-tighter">
                  €90
                </p>
                <p className="text-[9px] uppercase font-bold text-slate-400">
                  Fixed rate
                </p>
              </div>
            </motion.div>

            <Link
              href={`/${locale}/transfer`}
              className="group relative flex items-center w-fit py-2"
            >
              <div className="relative flex items-center bg-accent rounded-full h-16 w-16 transition-all duration-700 ease-[0.23,1,0.32,1] group-hover:w-[340px] shadow-lg shadow-accent/20 overflow-hidden">
                <div className="flex items-center justify-center min-w-[64px] shrink-0">
                  <MoveRight className="text-black w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" />
                </div>
              </div>

              <span className="absolute left-20 whitespace-nowrap text-[11px] uppercase font-black tracking-[4px] text-slate-900 border-b border-slate-200 transition-colors duration-500 group-hover:text-black group-hover:border-transparent">
                Посмотреть все тарифы
              </span>
            </Link>
          </div>
        </div>
      </Container>
      <div className="absolute -bottom-20 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03] select-none">
        <span className="text-[25vw] font-black italic uppercase">
          EXCELLENCE
        </span>
      </div>
    </section>
  );
}
