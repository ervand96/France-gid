import { notFound } from "next/navigation";
import { fetchTourDetails } from "lib/api/strapi/fetchTourDetails";
import { TourDetail } from "@/app/features/tourDetails";

type Props = {
  params: Promise<{
    locale: string;
    category: string;
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { locale, category, slug } = await params;
  const data = await fetchTourDetails(locale, category, slug);

  if (!data) notFound(); 

  return <TourDetail tour={data} />;
}
