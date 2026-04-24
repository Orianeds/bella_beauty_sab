export interface TarifItem {
  name: string;
  price: string;
  slug: string;
}

export interface TarifTableProps {
  tarifs: TarifItem[];
}