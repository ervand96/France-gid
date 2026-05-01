export interface CarouselItemProps {
  id: number;
  alt: string;
  image: {
    url: string;
    name?: string;
    formats?: {
      medium?: { url: string };
      large?: { url: string };
    };
  }[];
}
