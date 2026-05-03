import AboutMe from "@/app/features/AboutMe";
import { fetchAboutPageData } from "lib/api/strapi/about/aboutPage";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await fetchAboutPageData(locale);

  if (!data) {
    return <div>Страница временно недоступна</div>;
  }

  return <AboutMe aboutData={data} />;
}
