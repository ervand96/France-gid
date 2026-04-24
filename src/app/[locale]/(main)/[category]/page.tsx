import NewStrapiCard from "@/app/features/newStrapiCard";
import { categoryMap, CategoryPageProps } from "@/constants/categoryEnum";
import NotFound from "../../not-found";
import Container from "@/app/shared/Container";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;

  const selectedCategory = categoryMap[category as keyof typeof categoryMap];

  if (!selectedCategory) {
    return (
      <div className="flex justify-center items-center h-screen">
        <NotFound />
      </div>
    );
  }

  return (
    <Container>
      <NewStrapiCard
        locale={locale}
        category={selectedCategory}
        categorySlug={category}
      />
    </Container>
  );
}
