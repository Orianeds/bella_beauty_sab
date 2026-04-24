export type MediaType = 'image' | 'video';

export interface Media {
  type: MediaType;
  src: string;
  poster?: string;
  alt?: string;
}