import { fetchTourDetails } from "lib/api/strapi/tour/fetchTourDetails";
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

  if (!data) return <div>Страница временно недоступна. Попробуйте позже.</div>;

  return <TourDetail tour={data} />;
}
