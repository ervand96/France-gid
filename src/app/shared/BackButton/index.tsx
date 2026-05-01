"use client";

import { ArrowLeft } from "lucide-react";
import Button from "../Button";
import { BackButtonType } from "./type";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";


export default function BackButton({ styles, arrowStyles, textStyles, onClick }: BackButtonType) {
    const t = useTranslations("BackButton");
    const router = useRouter();

    return (
        <Button onClick={onClick || (() => router.back())} styles={`flex items-center gap-2 mb-6 cursor-pointer ${styles}`}>
            <ArrowLeft className={`w-4 h-4 transition-colors duration-300 ${arrowStyles}`} />
            <span className={`transition-colors duration-300 ${textStyles}`}>{t("Back")}</span>
        </Button>
    );
}