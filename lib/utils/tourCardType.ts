export type TourItem = {
  id: number;
  text: string;
};

export type GalleryItem = {
  id: number;
  image: StrapiImage[];
  alt: string;
};

export type StrapiImage = {
  url: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
};

export type TourCard = {
  id: number;
  primaryText: string;
  duration: string;
  category: string;
  slug?: string;
  filterCategory: string;
  isRecommended: boolean;
  bgImg: StrapiImage;
  price: string;
  rating: string;
};

export type TourCardDetail = TourCard & {
  groupSize: string;
  nextTour: string;
  TourOverview: string;
  price: number;
  gallery: GalleryItem[];
  highlights: TourItem[];
  included: TourItem[];
  notIncluded: TourItem[];
};

export interface StrapiResponse<T> {
  data: T[];
}

export interface StrapiSingleResponse<T> {
  data: T;
}
