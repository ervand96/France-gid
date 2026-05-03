import TransferPage from "@/app/features/TransferComponent";
import { fetchTransferPageData } from "lib/api/strapi/transfer/transferPage";

export const revalidate = 3600;

export async function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

export default async function Transfer({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await fetchTransferPageData(locale);

  if (!data) {
    return (
      <div style={{ padding: "150px", textAlign: "center" }}>
        <p>Страница временно недоступна. Попробуйте позже.</p>
      </div>
    );
  }

  return <TransferPage data={data} />;
}
