export enum CategoryEnum {
  PARIS = "paris",
  SUBURBS = "suburb",
  REGIONS = "region",
}

export type CategoryPageProps = {
  params: Promise<{
    locale: string;
    category: string;
  }>;
};

export const categoryMap = {
  "excursions-in-paris": CategoryEnum.PARIS,
  "excursions-to-the-suburbs-of-paris": CategoryEnum.SUBURBS,
  "excursions-to-the-regions-of-france": CategoryEnum.REGIONS,
} as const;

export type CategoryKey = keyof typeof categoryMap;
