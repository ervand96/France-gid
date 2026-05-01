import TransferPage from "@/app/features/TransferComponent";
import { fetchTransferPageData } from "lib/api/strapi/transfer/transferPage";
import { notFound } from "next/navigation";

export default async function Transfer({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await fetchTransferPageData(locale);

  if (!data) notFound();

  return <TransferPage data={data} />;
}
