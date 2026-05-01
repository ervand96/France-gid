import Image from "next/image";
import LightGallery from "lightgallery/react";
import { GalleryType } from "./type";

import "lightgallery/css/lightgallery.css";

export default function ImageExpander({ images }: GalleryType) {

    return (
        <LightGallery speed={500} elementClassNames="grid grid-cols-3 gap-4">
            {images.map((img, idx) => (
                <a
                    key={idx}
                    href={img.src}
                    className="relative block h-32 w-full rounded-[16px] overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
                >
                    <Image
                        src={img.src}
                        alt={img.alt || ""}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </a>
            ))}
        </LightGallery>
    );
}