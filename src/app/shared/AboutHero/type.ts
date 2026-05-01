export interface AboutHeroProps {
  description: string;
  statistics: {
    id: number;
    value: string;
    label: string;
  }[];
  gallery: Array<{ id: number; url: string }>;
}
