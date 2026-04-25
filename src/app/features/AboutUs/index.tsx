import { ImageWithFallback } from "@/app/shared/imageWithFallback/imageWithFallback";
import { Logo } from "@/app/shared/Logo";
import { Award, Clock, Users, Globe, Heart, Star, MapPin } from "lucide-react";

export function AboutUs() {
  const stats = [
    { icon: Users, value: "15,000+", label: "Довольных туристов" },
    { icon: Clock, value: "12 лет", label: "Опыта работы" },
    { icon: Award, value: "500+", label: "Проведенных туров" },
    { icon: Star, value: "4.9", label: "Средний рейтинг" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Любовь к Парижу",
      description:
        "Мы живем и дышим этим городом, и хотим поделиться этой страстью с вами",
    },
    {
      icon: Users,
      title: "Персональный подход",
      description:
        "Малые группы и индивидуальные туры для максимального комфорта",
    },
    {
      icon: Award,
      title: "Профессионализм",
      description:
        "Сертифицированные гиды с лицензиями и глубокими знаниями истории",
    },
    {
      icon: Globe,
      title: "Уникальные маршруты",
      description:
        "Не только классические достопримечательности, но и скрытые жемчужины",
    },
  ];

  const team = [
    {
      name: "Александр Дюма",
      role: "Основатель и главный гид",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      description:
        "Историк, влюбленный в Париж уже 15 лет. Специализируется на экскурсиях по Лувру и истории французской революции.",
    },
    {
      name: "Мария Бонапарт",
      role: "Старший гид",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      description:
        "Искусствовед с 10-летним опытом. Проводит авторские туры по музеям и художественным галереям Парижа.",
    },
    {
      name: "Пьер Лефевр",
      role: "Гид-эксперт",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      description:
        "Кулинарный эксперт и гид. Специализируется на гастрономических турах и винных дегустациях в регионах Франции.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Light */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          width={100}
          height={100}
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
          alt="Paris"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              О нас
            </h1>
            <p className="text-xl text-white drop-shadow-md leading-relaxed">
              Мы создаем незабываемые путешествия по Парижу и Франции, открывая
              красоту и историю этой удивительной страны
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Light */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition-all border border-gray-100"
            >
              <stat.icon className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section - Light */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
              О гиде
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ваш персональный гид по Парижу
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Elite Paris Guide был основан в 2014 году с любовью к Парижу и
                французской культуре. Я начинал с небольших пешеходных экскурсий
                по центру города, и за годы стал ведущим русскоязычным гидом в
                Париже.
              </p>
              <p>
                Моя миссия — показать Париж не как набор туристических
                достопримечательностей, а как живой, дышащий город с богатой
                историей, культурой и традициями. Я верю, что каждый гость
                должен почувствовать себя парижанином, хотя бы на несколько
                часов.
              </p>
              <p>
                Сегодня я предлагаю более 50 уникальных маршрутов и постоянно
                расширяю географию туров, охватывая не только Париж, но и
                живописные регионы Франции.
              </p>
            </div>
          </div>
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

      {/* Values Section - Light */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Мои принципы работы
            </h2>
            <p className="text-gray-600 text-lg">
              Ценности, которые определяют качество моих экскурсий
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all hover:transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section - Light */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Моя история</h2>
          <p className="text-gray-600 text-lg">
            Как я стал профессиональным гидом в Париже
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:transform hover:-translate-y-2"
            >
              <div className="h-80 overflow-hidden">
                <ImageWithFallback
                  width={100}
                  height={100}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-yellow-600 text-sm font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-3xl p-12 text-center shadow-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Готовы открыть Париж вместе со мной?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Забронируйте экскурсию прямо сейчас и получите незабываемые
            впечатления от города влюбленных
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg transition-colors shadow-md">
              Забронировать экскурсию
            </button>
            <button className="px-8 py-4 bg-white border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-bold rounded-lg transition-colors">
              Связаться со мной
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
