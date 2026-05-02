import Container from "@/app/shared/Container";
import Carousel from "@/app/shared/Carousel";
import Education from "@/app/shared/Education";
import AboutHimself from "@/app/shared/AboutHimself";
import Principles from "@/app/shared/Principles";
import MyStory from "@/app/shared/MyStory";
import AboutHero from "@/app/shared/AboutHero";
import { AboutPageData } from "lib/utils/aboutPageType";

export default function AboutMe({ aboutData }: { aboutData: AboutPageData }) {
  return (
    <>
      <AboutHero
        countExcursions={aboutData?.countExcursions || 500}
        aboutPageImage={aboutData?.aboutPageImage || []}
        description={aboutData?.aboutPageDescription || ""}
        statistics={aboutData?.stats || []}
      />
      <main className="bg-secondary py-[50px] md:py-[100px]">
        <Container>
          <div className="py-[50px]">
            <AboutHimself
              data={aboutData?.myself || []}
              myselfTitle={aboutData?.myselfTitle || ""}
            />
            <Carousel data={aboutData?.carousel[0] || []} />

            <Education
              title={aboutData?.educationTitle || ""}
              subTitle={aboutData?.educationSubTitle || ""}
              items={aboutData?.educationItems || []}
            />

            <Principles
              title={aboutData?.principleTitle || ""}
              subTitle={aboutData?.principleSubTitle || ""}
              items={aboutData?.principles || []}
            />
            <MyStory
              title={aboutData.timelineEventTitle || ""}
              subTitle={aboutData.timelineEventSubTitle || ""}
              events={aboutData.timelineEventItem || []}
            />
            {/* <section>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <Header
              heading={t("GuestReviews")}
              headingStyles="font-[500]"
              subHeading={t("WhatTouristsSay")}
              isDark={true}
              blockStyles="flex items-center mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Александр - потрясающий гид! Его знания истории и искусства
                  поражают. Экскурсия по Лувру была незабываемой. Рекомендую
                  всем!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">👩</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Мария К.</div>
                    <div className="text-sm text-gray-600">Москва, Россия</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Профессионализм на высшем уровне! Александр показал нам Париж
                  с неожиданной стороны. Малая группа позволила задать все
                  вопросы."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">👨</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Дмитрий П.
                    </div>
                    <div className="text-sm text-gray-600">Киев, Украина</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Лучшая экскурсия в нашей жизни! Александр не просто
                  рассказывает факты, он влюбляет в Париж. Обязательно вернемся
                  снова!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">👩</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Елена С.</div>
                    <div className="text-sm text-gray-600">Минск, Беларусь</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Посмотреть все отзывы
              </button>
            </div>
          </div>
        </section> */}
          </div>
        </Container>
      </main>
    </>
  );
}
