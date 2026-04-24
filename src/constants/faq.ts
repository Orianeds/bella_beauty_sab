export interface FaqQuestion {
    question: string;
    answer: string;
}

export interface FaqCategory {
    slug: string,
    title: string,
    questions: FaqQuestion[];
}

export const faqCategories: FaqCategory[] = [
    {
        slug: "lissages",
        title: "Lissages",
        questions: [
            {
                question: "Quel type de lissage est le plus adapté à mes cheveux ?",
                answer: "A votre arrivée sur place, je procède à un diagnostic de vos cheveux et vous présente les options possibles.",
            },

            {
                question: "Comment entretenir mon lissage ?",
                answer: "Je vous conseille un rituel shampoing soin sérum sans sulfate disponible sur place.",
            },

            {
                question: "Puis-je colorer mes cheveux avant ou après un lissage ?",
                answer: "Moi je conseille de faire la couleur 10-15 jours après le lissage pour éviter d'altérer son effet.",
            },
            {
                question: "A partir de quel âge peut-on faire un lissage professionnel ?",
                answer: "Il est conseillé d'attendre à partir de 10 ans, car les cheveux jeunes sont plus fragiles",
            },
            {
                question: "Combien de temps les cheveux restent-ils lisses ?",
                answer: "La durée du lissage varie selon la nature des cheveux, mais elle est généralement estimée entre 4 et 6 mois. Un entretien régulier prolonge son effet. Pour un résultat optimal, utilisez mes produits disponibles sur place afin de maximiser la tenue de votre lissage.",
            },
        ]
    },

    {
        slug: "soins-botox",
        title: "Soins Botox capillaires",
        questions: [
            {
                question: "En quoi consiste un soin botox capillaire ?",
                answer: "Mes soins vont retirer les frisottis, donner de la brillance et hydrater, sans repasser forcément par la case lissage. Idéal entre deux lissages pour entretenir le lissage."
            },
            {
                question: "À quelle fréquence peut-on faire un soin botox ?",
                answer: "En moyenne toutes les 4 à 6 semaines selon l’état des cheveux.",
            },
        ],
    },
    {
        slug: "cils",
        title: "Réhaussement de cils",
        questions: [
        {
            question: "Combien de temps dure un réhaussement de cils ?",
            answer:
            "Le résultat dure entre 6 et 8 semaines selon le cycle naturel des cils.",
        },
        {
            question: "Le réhaussement abîme-t-il les cils ?",
            answer:
            "Non, à condition qu’il soit réalisé par une professionnelle et avec des produits adaptés.",
        },
        ],
    },

    {
        slug: "formations",
        title: "Formations",
        questions: [
        {
            question: "Les formations sont-elles certifiantes ?",
            answer:
            "Oui, une attestation de formation est remise à l’issue de la session.",
        },
        {
            question: "Les formations sont-elles accessibles aux débutantes ?",
            answer:
            "Oui, elles sont ouvertes aux débutantes comme aux professionnelles.",
        },
        ],
  },
]