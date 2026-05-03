import TransferPage from "@/app/features/TransferComponent";
import { fetchTransferPageData } from "lib/api/strapi/transfer/transferPage";

export default async function Transfer({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await fetchTransferPageData(locale);

  if (!data) return <div>Страница временно недоступна. Попробуйте позже.</div>;

  return <TransferPage data={data} />;
}
