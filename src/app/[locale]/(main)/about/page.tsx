import AboutMe from "@/app/features/AboutMe";
import { fetchAboutPageData } from "lib/api/strapi/about/aboutPage";

export const revalidate = 3600;

export async function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await fetchAboutPageData(locale);

  if (!data) {
    return (
      <div style={{ padding: "150px", textAlign: "center" }}>
        <p>Страница временно недоступна. Попробуйте позже.</p>
      </div>
    );
  }

  return <AboutMe aboutData={data} />;
}
