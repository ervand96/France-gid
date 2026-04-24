"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  Star,
  Clock,
  Users,
  MapPin,
  Check,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { ImageWithFallback } from "@/app/shared/imageWithFallback/imageWithFallback";
import { TourCard } from "lib/utils/tourCardType";
import Button from "@/app/shared/Button";

type Props = {
  tour: TourCard;
};

export function TourDetail({ tour }: Props) {
  const router = useRouter();
  const t = useTranslations("TourCard");

  const tourImages = [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1541253354-f7e1c81b8e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  ];

  const schedule = [
    {
      time: "09:00",
      title: "Встреча у входа",
      description: "Сбор группы у пирамиды Лувра",
    },
    {
      time: "09:30",
      title: "Древний Египет",
      description: "Экскурсия по египетской коллекции",
    },
    {
      time: "10:30",
      title: "Античные шедевры",
      description: "Венера Милосская, Ника Самофракийская",
    },
    {
      time: "11:30",
      title: "Мона Лиза",
      description: "Знаменитая картина Леонардо да Винчи",
    },
    {
      time: "12:00",
      title: "Свободное время",
      description: "Самостоятельный осмотр музея",
    },
  ];

  const reviews = [
    {
      name: "Мария К.",
      rating: 5,
      date: "15 марта 2026",
      text: "Потрясающая экскурсия! Гид Анна рассказала множество интересных фактов. Без очереди - это огромный плюс!",
      avatar: "👩",
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      date: "10 марта 2026",
      text: "Отличная организация, профессиональный гид. Три часа пролетели незаметно. Рекомендую!",
      avatar: "👨",
    },
    {
      name: "Елена С.",
      rating: 4,
      date: "5 марта 2026",
      text: "Очень понравилось! Единственное - хотелось бы больше времени для самостоятельного осмотра.",
      avatar: "👩",
    },
  ];

  console.log(tour?.gallery[0], "tourrr s");

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-950 mt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          onClick={handleBack}
          styles="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t("BackToExcursions")}</span>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  width={100}
                  height={100}
                  src={tourImages[0]}
                  alt="Лувр"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  {tour?.isRecommended && (
                    <span className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-full text-sm">
                      {t("Recommendation")}
                    </span>
                  )}
                </div>
                {/* <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-gray-800 transition-colors">
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-gray-800 transition-colors">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div> */}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {tour?.gallery[0]?.image?.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <ImageWithFallback
                      width={100}
                      height={100}
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Title and Rating */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                {tour?.primaryText}
              </h1>
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">
                    {tour.rating}
                  </span>
                  <span>(2,847 отзывов)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Париж, Франция</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <Clock className="w-8 h-8 text-yellow-600 mb-3" />
                <div className="text-sm text-gray-400 mb-1">
                  Продолжительность
                </div>
                <div className="text-xl font-semibold text-white">
                  {tour?.duration}
                </div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <Users className="w-8 h-8 text-yellow-600 mb-3" />
                <div className="text-sm text-gray-400 mb-1">Размер группы</div>
                <div className="text-xl font-semibold text-white">
                  До 15 чел
                </div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <Calendar className="w-8 h-8 text-yellow-600 mb-3" />
                <div className="text-sm text-gray-400 mb-1">Доступно</div>
                <div className="text-xl font-semibold text-white">
                  Ежедневно
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Описание</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                {tour?.TourOverview}
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Основные моменты
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour?.highlights.map((item, idx: number) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="mt-1 p-1 bg-yellow-600/20 rounded-full">
                      <Check className="w-4 h-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Программа экскурсии
              </h2>
              <div className="space-y-6">
                {schedule.map((item, idx: number) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-16">
                      <div className="px-3 py-1 bg-yellow-600/20 border border-yellow-600/30 rounded-lg text-yellow-600 font-semibold text-sm text-center">
                        {item?.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Что включено
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour?.included?.map((item, idx: number) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-1 bg-green-600/20 rounded-full">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-gray-300">{item?.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Отзывы</h2>
              <div className="space-y-6">
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-800 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{review.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="text-white font-semibold">
                              {review.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {review.date}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-500 text-yellow-500"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-300">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
                Показать все отзывы
              </button>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="mb-6">
                  <div className="text-gray-400 text-sm mb-2">Цена от</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-yellow-600">
                      {tour.price ? `€ ${tour.price}` : "—"}
                    </span>
                    <span className="text-gray-400">/ чел</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Дата
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Время
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-600">
                      <option>09:00</option>
                      <option>14:00</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Количество человек
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-600">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                </div>

                <button className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg transition-colors mb-4">
                  Забронировать сейчас
                </button>

                <div className="text-center text-sm text-gray-400 mb-6">
                  Бесплатная отмена за 24 часа
                </div>

                <div className="border-t border-gray-700 pt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">
                      Мгновенное подтверждение
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Электронный билет</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Русскоязычный гид</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Нужна помощь?
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Свяжитесь с нами для индивидуальных туров
                </p>
                <button className="w-full py-3 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600/10 transition-colors">
                  Связаться с нами
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900/50 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2026 Elite Paris Guide. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
