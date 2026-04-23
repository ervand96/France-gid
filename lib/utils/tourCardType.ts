export type TourCard = {
  id: number;
  primaryText: string;
  duration: string;
  category: string;
  filterCategory: string;
  slug: string;
  TourOverview?: string;
  bgImg: StrapiImage;
  highlights?: { id: number; text: string }[];
  included?: { id: number; text: string }[];
  notIncluded?: { id: number; text: string }[];
  gallery?: {
    id: number;
    image: StrapiImage;
  }[];
};
export type StrapiResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  url: string;
  formats?: {
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
};
