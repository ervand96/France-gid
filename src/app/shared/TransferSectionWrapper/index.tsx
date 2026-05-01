import TransferPromo from "@/app/features/TransferPromo";
import { fetchTransferData } from "lib/api/strapi/transfer/transferSection";
import { notFound } from "next/navigation";

export default async function TransferSectionWrapper({
  locale,
}: {
  locale: string;
}) {
  const transferData = await fetchTransferData(locale);

  if (!transferData) notFound();

  return <TransferPromo data={transferData}/>;
}
