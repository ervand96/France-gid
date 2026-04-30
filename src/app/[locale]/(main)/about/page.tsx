import AboutMe from "@/app/features/AboutMe";
import { fetchAboutPageData } from "lib/api/strapi/about/aboutPage";
import { notFound } from "next/navigation";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await fetchAboutPageData(locale);

  if (!data) return notFound();

  return <AboutMe aboutData={data} />;
}
