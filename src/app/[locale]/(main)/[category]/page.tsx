import NewStrapiCard from "@/app/features/newStrapiCard";
import { categoryMap, CategoryPageProps } from "@/constants/categoryEnum";
import Container from "@/app/shared/Container";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;

  const selectedCategory = categoryMap[category as keyof typeof categoryMap];

  if (!selectedCategory) {
    return notFound();
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
