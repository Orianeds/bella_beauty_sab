import { prestationDetailsContent } from "@/constants/content";
import { notFound } from "next/navigation";
import { PrestationDetail } from "@/components/prestations/PrestationDetail";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
  searchParams: { media?: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prestation =
    prestationDetailsContent[
      params.slug as keyof typeof prestationDetailsContent
    ];

  if (!prestation) {
    return {};
  }

  return {
    title: `${prestation.title} | Bella Beauty Sab`,
    description: prestation.subtitle ?? prestation.introduction?.content,
    openGraph: {
      title: `${prestation.title} | Bella Beauty Sab`,
      description: prestation.subtitle,
      type: "article",
    },
  };
}

export default function PrestationPage({ params, searchParams }: Props) {
  const prestation =
    prestationDetailsContent[
      params.slug as keyof typeof prestationDetailsContent
    ];

  if (!prestation) {
    notFound();
  }

  return (
    <PrestationDetail
      prestation={prestation}
      defaultMedia={searchParams.media}
    />
  );
}