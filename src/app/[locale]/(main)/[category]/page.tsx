import NewStrapiCard from "@/app/features/newStrapiCard";
import { CategoryEnum, CategoryPageProps } from "@/constants/categoryEnum";
import NotFound from "../../not-found";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;

  const categoryMap: Record<string, CategoryEnum> = {
    "excursions-in-paris": CategoryEnum.PARIS,
    "excursions-to-the-suburbs-of-paris": CategoryEnum.SUBURBS,
    "excursions-to-the-regions-of-france": CategoryEnum.REGIONS,
  };

  const selectedCategory = categoryMap[category as keyof typeof categoryMap];

  if (!selectedCategory) {
    return (
      <div className="flex justify-center items-center h-screen">
        <NotFound />
      </div>
    );
  }

  return (
    <main>
      <NewStrapiCard
        locale={locale}
        category={selectedCategory}
        categorySlug={category}
      />
    </main>
  );
}
