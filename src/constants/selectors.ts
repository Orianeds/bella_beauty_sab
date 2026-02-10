import { prestationsContent } from "./content";

export interface TarifItem {
    name: string;
    price: string;
    slug: string;
}

export function getTarifs(): TarifItem[] {
    return prestationsContent.categories.flatMap(category =>
        category.services.map(service => ({
            name: service.name,
            price: service.price,
            slug: service.slug,
        }))
    );
}