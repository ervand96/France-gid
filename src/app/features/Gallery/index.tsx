"use client";

import { useTranslations } from "next-intl";
import { GalleryType } from "./type";
import Header from "@/app/shared/Header";
import Image from "next/image";

export default function Gallery({ images }: GalleryType) {
    if (!images || images.length === 0) return null;


    const [first, second, third, ...rest] = images;
    const t = useTranslations("DetailsPage");

    return (
        <div>
            <Header isDark={true} heading={t("Gallery")} />
            <div className="grid gap-[16px]">
                <div className="grid grid-cols-3 gap-[16px]">

                    <div className="col-span-2 h-[300px]">
                        {first && (
                            <img
                                src={first}
                                alt="Primary image of this tour"
                                className="w-full h-full object-cover rounded-[10px]"

                            />
                        )}
                    </div>

                    <div className="flex flex-col gap-[16px]">
                        {second && (
                            <img
                                src={second}
                                alt="Secondary image of this tour"
                                className="h-[145px] object-cover rounded-[10px]"

                            />
                        )}
                        {third && (
                            <img
                                src={third}
                                alt="Secondary image of this tour"
                                className="h-[145px] object-cover rounded-[10px]"

                            />
                        )}
                    </div>
                </div>

                {rest.length > 0 && (
                    <div className="grid grid-cols-3 gap-[16px]">
                        {rest.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt="Other images from this tour"
                                className="h-[150px] w-full object-cover rounded-[10px]"

                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}