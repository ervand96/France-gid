export async function fetchWithRetry(
  url: string,
  options: RequestInit & { next?: { revalidate?: number } },
  retries = 2,
): Promise<Response> {
  const res = await fetch(url, options);
  if (res.status === 503 && retries > 0) {
    console.warn(`Strapi 503 — повтор через 1с. Осталось попыток: ${retries}`);
    await new Promise((r) => setTimeout(r, 1000));
    return fetchWithRetry(url, options, retries - 1);
  }
  return res;
}
