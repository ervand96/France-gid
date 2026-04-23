import NewStrapiCard from "@/app/features/newStrapiCard";
import { CategoryEnum, CategoryPageProps } from "@/constants/categoryEnum";

export default async function ExcursionsInParis({ params }: CategoryPageProps) {
  const { locale } = await params;

  return (
    <>
  <NewStrapiCard locale={locale} category={CategoryEnum.PARIS} />
    </>
);
}
