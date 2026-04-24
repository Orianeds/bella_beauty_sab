export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: string;
}

export interface ServiceCardProps {
  service: Service;
}