export interface FormationDescriptionLine {
  text: string;
  center?: boolean;
}

export interface Formation {
  id: FormationKey;
  title: string;
  duration: string;
  description: readonly FormationDescriptionLine[] | string;
  price: FormationPrice;
}

export type FormationKey = "hair" | "lashes" | "browlift";

export type FormationsMap = Record<FormationKey, Formation>;

export interface FormationCardProps {
  formation: Formation;
}

export interface FormationsHeroContent {
  title: string;
  description: string;
}

export interface FormationsHeroProps {
  content: FormationsHeroContent;
}

export interface FormationSectionProps {
  formations: FormationsMap;
}

export interface TrainerContent {
  title: string;
  content: string;
  ndaNumber: string;
}

export interface TrainerSectionProps {
  content: TrainerContent;
}

export interface FormationPrice {
  withKit?: string;
  withoutKit: string;
  kitDescription: string;
  paymentInfo?: string | null;
}