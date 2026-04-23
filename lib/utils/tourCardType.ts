export type TourCard = {
  id: number;
  primaryText: string;
  duration: string;
  category: string;
  slug?: string;
  filterCategory: string;
  bgImg: {
    url: string;
    formats?: {
      medium?: {
        url: string;
      };
      small?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  };
};
export interface StrapiResponse<T> {
  data: T[];
}
