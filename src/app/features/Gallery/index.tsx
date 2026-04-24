"use client";

import { useTranslations } from "next-intl";
import { GalleryType } from "./type";
import Header from "@/app/shared/Header";
import Image from "next/image";

export default function Gallery({ images }: GalleryType) {
  const t = useTranslations("DetailsPage");

  if (!images || images.length === 0) return null;

  const [first, second, third, ...rest] = images;

  return (
    <div>
      <Header isDark={true} heading={t("Gallery")} />
      <div className="grid gap-[16px]">
        <div className="grid grid-cols-3 gap-[16px]">
          <div className="col-span-2 h-[300px]">
            {first && (
              <Image
                width={100}
                height={100}
                src={first}
                alt="Primary image of this tour"
                className="w-full h-full object-cover rounded-[10px]"
              />
            )}
          </div>

          <div className="flex flex-col gap-[16px]">
            {second && (
              <Image
                width={100}
                height={100}
                src={second}
                alt="Secondary image of this tour"
                className="h-[145px] w-full object-cover rounded-[10px]"
              />
            )}
            {third && (
              <Image
                width={100}
                height={100}
                src={third}
                alt="Secondary image of this tour"
                className="h-[145px] w-full object-cover rounded-[10px]"
              />
            )}
          </div>
        </div>

        {rest.length > 0 && (
          <div className="grid grid-cols-3 gap-[16px]">
            {rest.map((img, i) => (
              <Image
                width={100}
                height={100}
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
