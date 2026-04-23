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
