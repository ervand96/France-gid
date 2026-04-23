import { notFound } from "next/navigation";
import { fetchTourDetails } from "lib/api/strapi/fetchTourDetails";
import TourCardSlug from "@/app/features/tourDetails";

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
  const tour = data.data;

  if (!tour) notFound();

  console.log(tour, "tour");

  return <TourCardSlug tour={tour} />;
}
