"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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
import Container from "@/app/shared/Container";
import BookingModal from "@/app/shared/BookingModal";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  tour: TourCard;
};

export function TourDetail({ tour }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dateError, setDateError] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "09:00",
    guests: "1-3",
  });

  const router = useRouter();
  const t = useTranslations("TourCard");
  const allGalleryImages = tour.gallery?.flatMap((g) => g.image) || [];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const currentPrice =
    tour?.pricing?.find((p) => p.range === bookingData.guests)?.price ||
    tour?.price;

  const handleBookClick = () => {
    if (!bookingData.date) {
      setDateError(true);

      setTimeout(() => setDateError(false), 3000);
      return;
    }

    setIsModalOpen(true);
  };

  const resetBookingForm = () => {
    setBookingData({
      date: "",
      time: "09:00",
      guests: "1-3",
    });
  };

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

  const handleBack = () => {
    router.back();
  };

  const getImageUrl = (url?: string) => {
    if (!url) return null;
    return url.startsWith("http")
      ? url
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
  };

  return (
    <>
      return (
      <div className="bg-gray-950 mt-20">
        <Container>
          <main className="mx-auto px-[20px] py-[32px]">
            <Button
              onClick={handleBack}
              styles="flex items-center gap-2 text-secondary/50 hover:text-secondary mb-6 transition-colors cursor-pointer"
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
                      src={getImageUrl(tour?.bgImg?.formats?.large?.url) || ""}
                      alt="Лувр"
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4">
                      {tour?.isRecommended && (
                        <span
                          className="px-[12px] py-[4px] bg-accent text-secondary text-[12px] font-[600] leading-[133%] rounded-full uppercase tracking-wider
                      "
                        >
                          {t("Recommendation")}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {allGalleryImages?.map((img, idx: number) => (
                      <div
                        key={img.id || idx}
                        className="relative h-32 rounded-[16px] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <ImageWithFallback
                          src={getImageUrl(img.url) || ""}
                          alt={img.alternativeText || `Gallery ${idx + 1}`}
                          className="w-full h-full object-cover"
                          unoptimized
                          fill
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="text-[24px] md:text-[36px] font-[700] leading-[111%] text-secondary mb-4">
                    {tour?.primaryText}
                  </h1>
                  <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <span className="text-secondary font-[600]">
                        {tour?.rating}
                      </span>
                      <span>{t("Reviews") + ": " + "2,847"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{tour?.category}</span>
                    </div>
                  </div>
                </div>

                <div className="md:grid grid-cols-3 gap-4 flex flex-wrap">
                  <div className="flex-1 flex md:block items-center gap-4 bg-secondary/2 border border-secondary/10 rounded-[14px] p-8 transition-all hover:border-secondary/20">
                    <Clock className="w-8 h-8 text-accent mb-3" />
                    <div>
                      <div className="text-[14px] font-[400] leading-[143%] text-secondary/50 mb-1">
                        {t("Duration")}
                      </div>
                      <div className="text-[20px] font-[600] leading-[140%] text-secondary">
                        {tour?.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex md:block items-center gap-4 bg-secondary/2 border border-secondary/10 rounded-[14px] p-8 transition-all hover:border-secondary/20">
                    <Users className="w-8 h-8 text-accent mb-3" />
                    <div>
                      <div className="text-[14px] font-[400] leading-[143%] text-secondary/50 mb-1">
                        {t("GroupSize")}
                      </div>
                      <div className="text-[20px] font-[600] leading-[140%] text-secondary">
                        {t("UpTo") + " " + "7" + " " + t("People")}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex md:block items-center gap-4 bg-secondary/2 border border-secondary/10 rounded-[14px] p-8 transition-all hover:border-secondary/20">
                    <Calendar className="w-8 h-8 text-accent mb-3" />
                    <div className="text-[14px] font-[400] leading-[143%] text-secondary/50 mb-1">
                      {t("Available")}
                      <div></div>
                      <div className="text-[20px] font-[600] leading-[140%] text-secondary">
                        {t("Daily")}
                      </div>
                    </div>
                  </div>
                </div>

                {tour?.contentSections?.length > 0 && (
                  <div className="space-y-6">
                    {tour?.contentSections?.map((section, idx: number) => (
                      <div
                        key={idx}
                        className="bg-secondary/2 border border-dark-gray/50 rounded-[16px] p-8 transition-all hover:border-gray-700"
                      >
                        {section?.title && (
                          <h2 className="text-[24px] font-[700] leading-[133%] text-secondary mb-6 flex items-center gap-3">
                            <div className="w-1 h-6 bg-accent rounded-full" />{" "}
                            {section?.title}
                          </h2>
                        )}

                        <div className="text-[16px] font-[400] leading-[163%] text-secondary space-y-4 whitespace-pre-line text-base">
                          {section?.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {tour?.highlights?.length > 0 && (
                  <div className="bg-secondary/2 border border-dark-gray/50 rounded-[16px] p-8 transition-all hover:border-gray-700">
                    <h2 className="text-[24px] font-[700] leading-[133%] text-secondary mb-6 flex items-center gap-3">
                      {t("KeyPoints")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tour?.highlights?.map((item, idx: number) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="mt-1 p-1 bg-accent/20 rounded-full">
                            <Check className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-[16px] font-[400] leading-[163%] text-secondary space-y-4 whitespace-pre-line text-base">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tour?.tourPlan?.length > 0 && (
                  <div className="bg-secondary/2 border border-dark-gray/50 rounded-2xl p-8 transition-all hover:border-gray-700">
                    <h2 className="text-[24px] font-[700] leading-[133%] text-secondary mb-6">
                      {t("Program")}
                    </h2>
                    <div className="space-y-6">
                      {tour &&
                        tour?.tourPlan?.map((item, idx: number) => (
                          <div key={idx} className="flex gap-6">
                            <div className="flex-shrink-0 w-16">
                              <div className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-lg text-accent font-semibold text-sm text-center">
                                {item?.time}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-[18px] font-[600] leading-[156%] text-secondary mb-1">
                                {item?.title}
                              </h3>
                              <p className="text-[16px] font-[400] leading-[150%] text-secondary/50 space-y-4 whitespace-pre-line text-base">
                                {item?.description}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {tour?.included?.length > 0 && (
                  <div className="bg-secondary/2 border border-dark-gray/50 rounded-2xl p-8 transition-all hover:border-gray-700">
                    <h2 className="text-[24px] font-[700] leading-[133%] text-secondary mb-6">
                      {t("WhatsIncluded")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tour?.included?.map((item, idx: number) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="p-1 bg-green-600/20 rounded-full">
                            <Check className="w-5 h-5 text-green-500" />
                          </div>
                          <span className="text-[16px] font-[400] leading-[163%] text-secondary space-y-4 whitespace-pre-line text-base">
                            {item?.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-secondary/2 border border-dark-gray/50 rounded-2xl p-8 transition-all hover:border-gray-700">
                  <h2 className="text-[24px] font-[700] leading-[133%] text-secondary mb-6">
                    {t("Reviews")}
                  </h2>
                  <div className="space-y-6">
                    {reviews.map((review, idx) => (
                      <div
                        key={idx}
                        className="border-b border-dark-gray pb-6 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{review?.avatar}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="text-secondary font-semibold">
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
                                    className="w-4 h-4 fill-accent text-accent"
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
                  <Button styles="mt-6 w-full py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-dark-gray transition-colors">
                    {t("ShowReviews")}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-secondary/2 border border-dark-gray/50 rounded-[16px] p-8 transition-all hover:border-dark-gray">
                    <div className="mb-6">
                      <div className="text-secondary/50 text-[14px] font-[400] leading-[143%] mb-2">
                        {t("PriceFrom")}
                      </div>
                      <div className="space-y-3 mb-6">
                        {tour &&
                          tour?.pricing.map((item, idx: number) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-4 bg-dark-gray/50 border border-gray-700 rounded-[10px] hover:border-accent/50 transition-colors cursor-pointer"
                            >
                              <div>
                                <div className="text-[14px] font-[400] leading-[143%] text-secondary/50">
                                  {item?.range + " " + t("People")}
                                </div>
                                <div className="text-[24px] font-[700] leading-[133%] text-accent">
                                  {item?.price ? `€ ${item?.price}` : "—"}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="relative">
                        <label className="block text-secondary/50 text-[14px] font-[400] leading-[143%] mb-2">
                          {t("Date")}
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={bookingData?.date}
                          onChange={(e) => {
                            handleChange(e);
                            if (dateError) setDateError(false);
                          }}
                          className={`appearance-none w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-[10px] text-secondary focus:outline-none focus:border-accent
                          ${
                            dateError
                              ? "border-red-500 animate-shake shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                              : "border-gray-700 focus:border-accent"
                          }`}
                        />
                        <AnimatePresence>
                          {dateError && (
                            <motion.span
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="absolute -bottom-6 left-0 text-[12px] text-red-500 font-medium"
                            >
                              {t("PleaseSelectDate")}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="relative">
                        <label className="block text-secondary/50 text-[14px] font-[400] leading-[143%] mb-2">
                          {t("Time")}
                        </label>
                        <select
                          name="time"
                          value={bookingData.time}
                          onChange={handleChange}
                          className="appearance-none w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-[10px] text-secondary focus:outline-none focus:border-accent cursor-pointer"
                        >
                          {["09:00", "10:00", "11:00", "12:00", "13:00"].map(
                            (time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ),
                          )}
                        </select>
                        <div className="pointer-events-none absolute w-[10px] h-[10px] right-4 top-[60%] -translate-y-1/2 text-accent">
                          ▼
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-secondary/50 text-[14px] font-[400] leading-[143%] mb-2">
                          {t("NumberOfPeople")}
                        </label>
                        <select
                          name="guests"
                          value={bookingData.guests}
                          onChange={handleChange}
                          className="appearance-none w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-[10px] text-secondary focus:outline-none focus:border-accent"
                        >
                          {tour?.pricing?.map((p) => (
                            <option key={p.id} value={p.range}>
                              {p.range} {t("People")}
                            </option>
                          )) || (
                            <>
                              <option value="1-3">1-3</option>
                              <option value="4-5">4-5</option>
                              <option value="6-7">6-7</option>
                            </>
                          )}
                        </select>
                        <div className="pointer-events-none absolute w-[10px] h-[10px] right-4 top-[60%] -translate-y-1/2 text-accent">
                          ▼
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handleBookClick}
                      styles="w-full py-4 bg-accent hover:bg-accent/50 text-secondary font-bold rounded-[10px] transition-colors mb-4 cursor-pointer"
                    >
                      {t("BookNow")}
                    </Button>

                    <div className="text-center text-secondary/50 text-[14px] font-[400] leading-[143%] mb-6">
                      {t("FreeCancel")}
                    </div>

                    <div className="border-t border-gray-700 pt-6 space-y-3">
                      <div className="flex items-center gap-3 text-[14px] font-[400] leading-[143%]">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-secondary/80">
                          {t("Confirmation")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[14px] font-[400] leading-[143%]">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-secondary/80">
                          {t("ElectronicTicket")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[14px] font-[400] leading-[143%]">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-secondary/80">
                          {t("RussianSpeakingGuide")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-secondary/2 border border-dark-gray/50 rounded-[16px] p-8 transition-all hover:border-gray-700">
                    <h3 className="text-[18px] font-[600] leading-[156%] text-secondary mb-4">
                      {t("NeedHelp")}
                    </h3>
                    <p className="text-secondary/50 text-[14px] font-[400] leading-[143%] mb-4">
                      {t("IndividualTours")}
                    </p>
                    <Button styles="w-full py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors">
                      {t("ContactUs")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Container>
      </div>
      );
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resetForm={resetBookingForm}
        tourData={{
          title: tour.primaryText,
          date: bookingData.date || t("NotSelected"),
          time: bookingData.time,
          guests: bookingData.guests,
          price: `€ ${currentPrice}`,
        }}
      />
    </>
  );
}
