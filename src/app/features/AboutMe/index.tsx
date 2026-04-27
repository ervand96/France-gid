"use client"

import { useTranslations } from "next-intl";
import { Award, Users, Globe, Heart, Star, Quote, GraduationCap, CheckCircle, LucideIcon } from "lucide-react";
import { ImageWithFallback } from "@/app/shared/imageWithFallback/imageWithFallback";
import Header from "@/app/shared/Header";
import Container from "@/app/shared/Container";
import { AboutData } from "@/constants/aboutData";
import cuteSmile from "@/assets/about/cuteSmile.jpg";

export function AboutMe() {

  const t = useTranslations("About")

  // const text = "Впервые я приехал в Париж как турист в 2010 году, и это была любовь с первого взгляда. Город покорил меня своей атмосферой, архитектурой, историей. Я понял, что хочу здесь жить. Через год я уже учился в Сорбонне на факультете истории искусств. Параллельно с учебой я изучал город — бродил по улицам, посещал музеи, читал книги об истории Парижа. Каждый камень здесь имеет свою историю, и я хотел узнать их все. В 2014 году, после получения диплома и лицензии гида, я провел свою первую экскурсию. Я до сих пор помню волнение и радость, когда увидел, как люди слушают мои рассказы, задают вопросы, делятся впечатлениями. С тех пор прошло 12 лет, я провел более 500 экскурсий для 15,000+ туристов из разных стран. Для меня экскурсия — это не просто пересказ фактов из путеводителя. Это возможность показать Париж таким, каким я его вижу и чувствую: живым, многогранным, полным неожиданных открытий. Я люблю показывать не только знаменитые достопримечательности, но и скрытые уголки города, о которых знают только парижане. Каждая экскурсия для меня — это новая история, новые люди, новые эмоции. И моя главная цель — чтобы после экскурсии вы не только узнали много нового о Париже и Франции, но и по-настоящему полюбили эту страну, как когда-то полюбил ее я сам."
  const newText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, ipsa iure expedita, odit esse at tempore pariatur placeat quo error optio vel quam doloribus magnam obcaecati, rem neque earum saepe?"

  const splitText = (text: string) => {
    const words = text.split(" ");
    const mid = Math.ceil(words.length / 2);

    return {
      left: words.slice(0, mid).join(" "),
      right: words.slice(mid).join(" "),
    };
  };

  const { left, right } = splitText(newText);

  const principles = [
    {
      icon: Heart,
      title: 'LoveForParis',
      description: 'LivedAndBreathed'
    },
    {
      icon: Users,
      title: 'PersonalApproach',
      description: 'TailoredTours'
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'AnOfficialLicense'
    },
    {
      icon: Globe,
      title: 'UniqueRoutes',
      description: 'FamousPlace'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'MovingToParis',
      description: 'FellInLove'
    },
    {
      year: '2012',
      title: 'EducationAtTheSorbonne',
      description: 'Degree'
    },
    {
      year: '2014',
      title: 'FirstGuideLicense',
      description: 'ProfessionalCareer'
    },
    {
      year: '2019',
      title: 'Confession',
      description: 'Award'
    },
    {
      year: '2026',
      title: 'Today',
      description: 'SatisfiedTravelers'
    }
  ];


  const qualifications = [
    {
      icon: Award,
      title: "OfficialLicense",
      description: "GuideInterpreter"
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Diploma'
    },
    {
      icon: CheckCircle,
      title: 'Accreditation',
      description: 'AccreditationAtLouvre'
    }
  ];

  type Props = {
    value: number | string;
    label: string;
    icon: LucideIcon;
  };

  const AboutCard = ({ value, label, icon: Icon }: Props) => {
    return (
      <div className="flex-1 flex flex-col items-center bg-secondary/10 rounded-xl p-2 md:p-6 md:w-[160px] text-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="w-14 h-14 md:mx-auto md:mb-4 bg-accent/10 flex items-center justify-center rounded-xl">
          <Icon className="w-6 h-6 text-yellow-600" />
        </div>
        <div className="text-[28px] font-bold text-dark-gray mb-1">{value}</div>
        <div className="text-[14px] text-gray-transparent">{label}</div>
      </div>
    );
  };

  return (
    <main className="bg-secondary py-[50px] md:py-[100px]">
      <Container>
        <section className="py-20">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Header
                  heading={t("Name")}
                  headingStyles="text-5xl md:text-6xl font-[900]"
                  subHeading={t("YourGuide")}
                  subHeadingStyles="text-2xl text-accent font-semibold"
                  isDark={true}
                />
                <div className="flex flex-col gap-[20px] px-[10px] text-gray-transparent text-[16px] leading-[170%] my-[24px]">
                  <p>
                    {t("Greeting")} <b>{t("Name")}</b>, {t("Over12Years")}
                  </p>
                  <p>
                    {t("OverTheYears")} <b>{t("Atmoshpere")}</b>, {t("ItsHistory")}
                  </p>
                  <p>{t("InLoveWithParis")}</p>
                </div>
                <div className="w-full flex flex-row justify-between gap-2 md:gap-6 px-[10px]">
                  {AboutData &&
                    AboutData.map((item, index) => {
                      return (
                        <AboutCard
                          key={index}
                          value={item.title}
                          label={t(item.subTitle)}
                          icon={item.icon}
                        />
                      );
                    })}
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <ImageWithFallback
                    src={cuteSmile}
                    alt={`${t("Name")} - профессиональный гид`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-8">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                        <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                        <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                        <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                        <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                        <span className="ml-2 font-semibold">4.9</span>
                      </div>
                      <p className="text-lg">{t("CertifiedGuide")}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">{t("Conducted")}<br />{t("Excursions")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <Header
              heading={t("GuideAboutHimself")}
              headingStyles="font-[500]"
              isDark={true}
              blockStyles="flex items-center"
            />
            <div className="grid md:grid-cols-2 items-start gap-10 mt-[20px]">
              <div className="bg-gradient-to-br from-secondary-transparent to-secondary rounded-3xl p-10 shadow-lg border border-gray-100">
                <Quote className="w-12 h-12 text-accent mb-6" />
                <p className="text-gray-700 leading-relaxed text-lg">{left}</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-transparent to-secondary rounded-3xl p-10 shadow-lg border border-gray-100 md:mt-12">
                <Quote className="w-12 h-12 text-accent mb-6" />
                <p className="text-gray-700 leading-relaxed text-lg">{right}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    width={100}
                    height={100}
                    src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                    alt="Louvre"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    width={100}
                    height={100}
                    src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                    alt="Eiffel Tower"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    width={100}
                    height={100}
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                    alt="Paris Street"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    width={100}
                    height={100}
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                    alt="Seine River"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <Header
              heading={t("EducationAndQualifications")}
              headingStyles="font-[500]"
              subHeading={t("ProfessionalTraining")}
              isDark={true}
              blockStyles="flex items-center mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {qualifications.map((qual, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <qual.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t(qual.title)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(qual.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <Header
              heading={t("MyWorkingPrinciples")}
              headingStyles="font-[500]"
              subHeading={t("Values")}
              isDark={true}
              blockStyles="flex items-center mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center">
                      <principle.icon className="w-7 h-7 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t(principle.title)}</h3>
                      <p className="text-gray-600 leading-relaxed">{t(principle.description)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <Header
              heading={t("MyStory")}
              headingStyles="font-[500]"
              subHeading={t("ThePath")}
              isDark={true}
              blockStyles="flex items-center mb-12"
            />
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 hidden md:block"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 inline-block">
                        <div className="text-3xl font-bold text-yellow-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t(item.title)}</h3>
                        <p className="text-gray-600">{t(item.description)}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
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
                  "Александр - потрясающий гид! Его знания истории и искусства поражают. Экскурсия по Лувру была незабываемой. Рекомендую всем!"
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
                  "Профессионализм на высшем уровне! Александр показал нам Париж с неожиданной стороны. Малая группа позволила задать все вопросы."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">👨</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Дмитрий П.</div>
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
                  "Лучшая экскурсия в нашей жизни! Александр не просто рассказывает факты, он влюбляет в Париж. Обязательно вернемся снова!"
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
        </section>
      </Container>
    </main>
  );
}
