"use client";

import { useTranslations } from "next-intl";
import Button from "../Button";
import { useModals } from "@/context/ModalContext";

export default function ContactButtons() {
  const t = useTranslations("About");
  const { openContact } = useModals();

  const handleContactClick = () => {
    document
      .getElementById("getInTouch")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Button
        onClick={handleContactClick}
        styles="px-8 py-4 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all shadow-2xl font-semibold hover:scale-105"
      >
        {t("BookATour")}
      </Button>

      <Button
        onClick={openContact}
        styles="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-all font-semibold"
      >
        {t("Contact")}
      </Button>
    </>
  );
}
