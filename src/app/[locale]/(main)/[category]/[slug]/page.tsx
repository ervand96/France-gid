import { fetchTourDetails } from "lib/api/strapi/tour/fetchTourDetails";
import { fetchTourCards } from "lib/api/strapi/tour/toursCard";
import { categoryMap } from "@/constants/categoryEnum";
import { TourDetail } from "@/app/features/tourDetails";

export const revalidate = 3600;

export async function generateStaticParams() {
  const locales = ["ru", "en"];
  const paths: { locale: string; category: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const [categorySlug, dbCategory] of Object.entries(categoryMap)) {
      const tours = await fetchTourCards(locale, dbCategory);
      if (!tours?.data) continue;

      for (const tour of tours.data) {
        if (tour.slug) {
          paths.push({ locale, category: categorySlug, slug: tour.slug });
        }
      }
    }
  }

  return paths;
}

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

  if (!data) {
    return (
      <div style={{ padding: "150px", textAlign: "center" }}>
        <p>Страница временно недоступна. Попробуйте позже.</p>
      </div>
    );
  }

  return <TourDetail tour={data} />;
}
