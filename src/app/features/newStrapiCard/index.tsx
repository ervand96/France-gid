import { fetchTourCards } from "lib/api/strapi/toursCard";
import { TourCardNew } from "../TourCardNew";
import { TourCard } from "lib/utils/tourCardType";
import Container from "@/app/shared/Container";

export default async function NewStrapiCard({
  locale,
  category,
}: {
  locale: string;
  category: string;
  categorySlug?: string;
}) {
  const tours = await fetchTourCards(locale, category);

  return (
    <div className="bg-primary ">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-30">
          {tours?.data ? (
            tours.data.map((tour: TourCard) => (
              <TourCardNew key={tour.id} tour={tour} locale={locale} />
            ))
          ) : (
            <div>No Data</div>
          )}
        </div>
      </Container>
    </div>
  );
}
