export type Media =
  | {
      type: 'image';
      src: string;
      alt: string; // obligatoire pour accessibilité
    }
  | {
      type: 'video';
      src: string;
      poster?: string;
    };