import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const cookieStore = await cookies();
  const lastLocale = cookieStore.get("NEXT_LOCALE")?.value || "ru";

  redirect(`/${lastLocale}`);
}
