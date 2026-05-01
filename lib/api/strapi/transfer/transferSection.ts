import { TransferSectionData } from "lib/utils/transferType";

export async function fetchTransferData(
  locale: string,
): Promise<TransferSectionData | null> {
  const params = new URLSearchParams();
  params.set("locale", locale);
  params.append("populate", "features");
  params.append("populate", "sectionPopularRoute");
  params.append("populate", "carImage");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/transfer?${params.toString()}`,
    {
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    },
  );

  if (!res.ok) return null;
  const result = await res.json();
  return result.data;
}
