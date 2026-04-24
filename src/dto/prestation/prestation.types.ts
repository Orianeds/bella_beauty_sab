export interface PrestationServiceType {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: string;
}

export interface PrestationsCategoryType {
  id: string;
  title: string;
  services: PrestationServiceType[];
}

export interface PrestationsSectionProps {
  title: string;
  description: string;
  categories: PrestationsCategoryType[];
}