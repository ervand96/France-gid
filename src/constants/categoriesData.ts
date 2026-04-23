

import { StaticImageData } from "next/image";
import { PathnameEnum } from "./pathName";
import sample from "@/assets/elements/placeholder.jpg"

export type CategoryItem = {
    id: number,
    title: string;
    description: string,
    image: string | StaticImageData;
    href?: string;
    duration?: string;
    group?: string;
    rating?: string;
    category?: string;
    isLarge?: boolean;
};

export const CategoriesData: CategoryItem[] = [
    {
        id: 1,
        title: "ExcursionsInParis",
        description:
            "Откройте для себя магию ночного Парижа, величие Лувра и богемный дух Монмартра в индивидуальном формате.",
        image: sample,
        duration: "4-8 Часов",
        group: "1-6 чел.",
        rating: "5.0",
        category: "Популярное",
        isLarge: true,
        href: PathnameEnum.ExcursionsInParis
    },
    {
        id: 2,
        title: "ExcursionsToTheSuburbsOfParis",
        description:
            "Роскошь Версаля, сады Живерни и величие замков в окрестностях столицы.",
        image: sample,
        duration: "6 Часов",
        group: "1-4 чел.",
        rating: "4.9",
        category: "История",
        href: PathnameEnum.ExcursionsToTheSuburbsOfParis
    },
    {
        id: 3,
        title: "ToursOfFrance",
        description:
            "Винные туры, лавандовые поля и океанское побережье Нормандии.",
        image: sample,
        duration: "1-2 Дня",
        group: "Инд.",
        rating: "4.8",
        category: "Путешествие",
        href: PathnameEnum.ToursOfFrance

    },
];
