interface AboutData {
  title: string;
  subTitle: string;
  description: string;
  stats: Array<{ id: number; value: string; label: string }>;
  gallery: Array<{ id: number; url: string }>;
}

interface AboutDataProps {
  aboutData: AboutData;
}
