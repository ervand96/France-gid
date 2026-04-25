"use client";

import Link from "next/link";
import Container from "../Container";
import { ImageWithFallback } from "../imageWithFallback/imageWithFallback";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

import cuteSmile from "@/assets/about/cuteSmile.jpg";
import smile from "@/assets/about/smile.jpg";

export default function AboutGuideSection() {
  const locale = useLocale();

  return (
    <Container>
      <section className="to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-72 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    width={10000}
                    height={1000}
                    src={cuteSmile}
                    alt="Гид"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="h-72 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    width={10000}
                    height={100}
                    src={smile}
                    alt="Париж экскурсия"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
                О гиде
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ваш персональный гид по Парижу
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  Здравствуйте! Меня зовут Александр, и я профессиональный
                  русскоязычный гид по Парижу и регионам Франции с более чем
                  12-летним опытом работы.
                </p>
                <p>
                  За годы работы я провел более 500 экскурсий для туристов со
                  всего мира. Моя специализация — это не просто показ
                  достопримечательностей, а погружение в атмосферу города, его
                  историю и культуру.
                </p>
                <p>
                  Я влюблен в Париж и знаю его как свои пять пальцев. С
                  удовольствием поделюсь с вами секретными местами, интересными
                  фактами и покажу город с необычных ракурсов.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">12+</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    15,000+
                  </div>
                  <div className="text-sm text-gray-600">туристов</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-600">рейтинг</div>
                </div>
              </div>

              <Link
                href={`${locale}/about-us`}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-lg transition-all"
              >
                Узнать подробнее
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
