import { MetadataRoute } from "next";

const prestationsSlugs = [
  "lissages",
  "soins-botox",
  "rehaussement-de-cils",
  "browlift",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bellabeautysab.fr";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/prestations`,
      lastModified: new Date(),
      priority: 0.9,
    },

    ...prestationsSlugs.map((slug) => ({
      url: `${baseUrl}/prestations/${slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),

    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/produits`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/formations`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      priority: 0.6,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.6,
    },

    {
      url: `${baseUrl}/cgu`,
      lastModified: new Date(),
      priority: 0.3,
    },

    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      priority: 0.3,
    },

    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}