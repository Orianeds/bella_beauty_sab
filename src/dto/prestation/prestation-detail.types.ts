import { Media } from '@/dto/media/media.types';

export interface PrestationVariantType {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string;
  price: string;
  duration: string;
}

export interface PrestationTestimonialType {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface PrestationDetailType {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  priceRange: string;

  introduction: {
    title: string;
    content: string;
  };

  diagnostic?: {
    title: string;
    content: string;
  };

  benefits: {
    title: string;
    list: string[];
  };

  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };

  forWhom: {
    title: string;
    content: string;
  };

  maintenance?: {
    title: string;
    tips: string[];
  };

  variants?: PrestationVariantType[];
  media: Media[];
  testimonials: PrestationTestimonialType[];
}

export interface PrestationDetailProps {
  prestation: PrestationDetailType;
}