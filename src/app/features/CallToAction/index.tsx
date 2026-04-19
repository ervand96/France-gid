import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import whatsAppLogo from "@/assets/contacts/whatsapp.png";

export default function CallToAction() {

    const t = useTranslations("CallToAction");

    const [showCTA, setShowCTA] = useState(false);
    const message = encodeURIComponent(
        t("QuickOffer")
    );

    return (
        <div>
            <div
                onMouseEnter={() => setShowCTA(true)}
                onMouseLeave={() => setShowCTA(false)}
                className={`fixed lg:bottom-10 lg:right-10 bottom-[10px] right-[10px] z-[9999] font-body w-[270px] flex flex-col items-center gap-[12px] bg-[#fff] text-[#000] p-[16px] pr-[30px] rounded-lg transition-all duration-300 ease-out transform ${showCTA ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}`}
            >
                <button
                    className="absolute top-2 right-2 cursor-pointer text-xl"
                    onClick={() => setShowCTA(false)}
                >
                    ✕
                </button>
                <h3>
                    {t("ContactUs")}
                </h3>
                <Link
                    href={`https://wa.me/37477255204?text=${message}`}
                    target="_blank"
                    className="flex justify-center items-center gap-[12px] bg-[#4FCE5D] text-[#fff] px-[30px] py-[8px] rounded-lg hover:underline transition-all duration-300 hover:bg-[#2abf3a]"
                >
                    <Image src={whatsAppLogo} alt="WhatsApp Logo" className="w-[30px]" />
                    <p className="text-[16px]">Message Now</p>
                </Link>
                <p className="italic text-[14px]">{t("PlanYourTour")}</p>
            </div>

            {!showCTA && (
                <Image
                    src={whatsAppLogo}
                    alt="WhatsApp Logo"
                    className="w-[40px] md:w-[60px] bg-[#4FCE5D] p-[10px] rounded-[50px] z-[158] fixed bottom-[10px] right-[10px] lg:bottom-10 lg:right-10 transition-all duration-300 hover:bg-[#2abf3a] cursor-pointer"
                    onMouseEnter={() => setShowCTA(true)}
                />
            )}
        </div>
    );
}
