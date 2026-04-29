interface Formats {
  thumbnail: Thumbnail;
  medium: Medium;
  small: Small;
  large: Large;
}

interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: Formats;
}

interface StatisticItem {
  id: number;
  value: string;
  label: string;
}

interface AboutMyself {
  id: number;
  aboutMyself: string;
}

interface CarouselItem {
  id: number;
  alt: string;
  image: StrapiImage[];
}

interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

interface TimelineEventItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface AboutPageData {
  id: number;
  documentId: string;
  title: string;
  subTitle: string;
  description: string;
  stats: StatisticItem[];
  gallery: StrapiImage[];
  myself: AboutMyself[];
  myselfTitle: string;
  carousel: CarouselItem[];
  educationTitle: string;
  educationSubTitle: string;
  educationItems: FeatureItem[];
  principleTitle: string;
  principleSubTitle: string;
  principles: FeatureItem[];
  timelineEventTitle: string;
  timelineEventSubTitle: string;
  timelineEventItem?: TimelineEventItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface AboutPageResponse {
  data: AboutPageData;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
