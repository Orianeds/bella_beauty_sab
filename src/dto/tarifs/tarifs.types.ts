export interface TarifItem {
  name: string;
  price: string;
  slug: string;
  mediaId: string;
}

export interface TarifTableProps {
  tarifs: TarifItem[];
}