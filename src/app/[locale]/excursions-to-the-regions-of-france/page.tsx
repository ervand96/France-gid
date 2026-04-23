import React from "react";
import NewStrapiCard from "@/app/features/newStrapiCard";
import { CategoryEnum, CategoryPageProps } from "@/constants/categoryEnum";

export default async function ExcursionsToTheRegionsOfFrance({
  params,
}: CategoryPageProps) {
  const { locale } = await params;
  return <NewStrapiCard locale={locale} category={CategoryEnum.REGIONS} />;
}
