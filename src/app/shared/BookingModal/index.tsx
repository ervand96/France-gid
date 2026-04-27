"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, Send } from "lucide-react";
import { BookingFormValues, BookingSchema } from "lib/schemas/bookingSchema";
import Button from "../Button";
import { useTranslations } from "next-intl";
import { useScrollLock } from "@/lib/hooks/useScrollLock";
import { SEND_EMAIL_API } from "@/app/api/contact/api";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  resetForm: () => void;
  tourData: {
    title: string;
    date: string;
    time: string;
    guests: string;
    price: string;
  };
}

export default function BookingModal({
  isOpen,
  onClose,
  tourData,
  resetForm,
}: Props) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const t = useTranslations("BookingModal");
  useScrollLock(isOpen);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(BookingSchema),
    defaultValues: { ...tourData },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setStatus("loading");

    try {
      const response = await fetch(SEND_EMAIL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.comment || "Заявка из формы бронирования",
          tourTitle: tourData.title,
          date: tourData.date,
          time: tourData.time,
          guests: tourData.guests,
          price: tourData.price,
          honeypot: "",
        }),
      });

      const result = await response.json();

      if (!result.success) throw new Error("API Error");

      setStatus("success");
    } catch (error) {
      console.error("Booking submission failed:", error);
      setStatus("error");
    }
  };

  const handleFullClose = () => {
    onClose();

    setTimeout(() => {
      setStatus("idle");
      reset();
      resetForm();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-[20px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleFullClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-[550px] bg-[#0F1115] border-t md:border border-gray-800 rounded-t-[24px] md:rounded-[24px] p-6 md:p-10 overflow-hidden"
          >
            <Button
              onClick={onClose}
              styles="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </Button>

            {status === "success" ? (
              <SuccessState onClose={handleFullClose} />
            ) : (
              <>
                <div className="mb-2 md:mb-8">
                  <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
                    {t("BookATour")}
                  </h2>
                  <p className="text-gray-400 text-sm">{tourData.title}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-1 md:gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800 text-xs mb-2 xl:mb-6">
                    {[
                      { label: t("Date"), value: tourData.date },
                      { label: t("Time"), value: tourData.time },
                      { label: t("Guests"), value: tourData.guests },
                      {
                        label: t("ToBePaid"),
                        value: tourData.price,
                        isPrice: true,
                      },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <span className="text-gray-500 block mb-1 uppercase tracking-widest">
                          {item.label}
                        </span>
                        <span
                          className={`font-bold ${item.isPrice ? "text-yellow-600" : "text-white"}`}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="xl:space-y-4">
                    <InputGroup
                      label={t("YourName")}
                      error={errors.name?.message}
                    >
                      <input
                        {...register("name")}
                        placeholder={t("AlexanderPushkin")}
                        className={inputStyles}
                      />
                    </InputGroup>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mt-2">
                      <InputGroup label="Email" error={errors.email?.message}>
                        <input
                          {...register("email")}
                          placeholder="example@gmail.com"
                          className={inputStyles}
                        />
                      </InputGroup>
                      <InputGroup label="Телефон" error={errors.phone?.message}>
                        <input
                          {...register("phone")}
                          placeholder="+33 X XX XX XX"
                          className={inputStyles}
                        />
                      </InputGroup>
                    </div>

                   <div className="mt-2">
                     <InputGroup label={t("CommentOnTheOrder")}>
                      <textarea
                        {...register("comment")}
                        rows={3}
                        placeholder={t("SpecialWishes")}
                        className={inputStyles}
                      />
                    </InputGroup>
                   </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    styles="w-full md:mt-6 py-2 md:py-4 disabled:bg-gray-700 font-bold rounded-xl flex items-center justify-center gap-2 group"
                    designType="gold"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />{" "}
                        {t("ConfirmYourBooking")}
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

const inputStyles =
  "w-full bg-[#161920] border border-gray-800 rounded-xl px-4 py-2 md:py-3 text-white text-sm focus:border-yellow-600 outline-none transition-all placeholder:text-gray-600";

function InputGroup({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] uppercase font-bold tracking-widest text-gray-500 ml-1">
        {label}
      </label>
      {children}
      {error && (
        <span className="text-[10px] text-red-500 ml-1 font-medium italic">
          {error}
        </span>
      )}
    </div>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  const t = useTranslations("BookingModal");
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="py-10 text-center flex flex-col items-center"
    >
      <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="w-10 h-10 text-green-500" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">
        {t("ApplicationAccepted")}!
      </h3>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed">
        {t("WeHaveReceivedYourReservation")}
      </p>
      <Button
        onClick={onClose}
        styles="w-full py-4 font-bold rounded-xl"
        designType="white"
      >
        {t("Great")}
      </Button>
    </motion.div>
  );
}
