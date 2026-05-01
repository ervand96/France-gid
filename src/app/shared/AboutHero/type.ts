export interface AboutHeroProps {
  description: string;
  countExcursions: number;
  statistics: {
    id: number;
    value: string;
    label: string;
  }[];
  aboutPageImage: Array<{ id: number; url: string }>;
}
