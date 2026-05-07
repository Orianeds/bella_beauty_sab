
export const heroContent = {
    title: "✨ Bienvenue chez Bella Beauty Sab, l'expertise beauté à votre service ! ✨",
    subtitle_presentation: "Chez Bella Beauty Sab, je crois que chaque personne mérite de se sentir belle et bien dans sa peau. C’est pourquoi je vous offre des soins de qualité, personnalisés et efficaces, pour sublimer votre beauté naturelle.",
    
    services : {
      title: "💇‍♀️ Mes services :",
      list: [
        {
          name: "Lissages indiens, tanins et protéine de soie",
          description: "Offrez à vos cheveux une douceur et une brillance incomparables avec mes lissages professionnels adaptés à tous les types de cheveux."
        },
        {
          name: "Soins Botox capillaires (classique & lissant)",
          description: "Offrez à vos cheveux une réparation en profondeur et une brillance immédiate grâce à mes soins botox : un soin classique pour nourrir et revitaliser, et un soin lissant pour discipliner et réduire les frisottis."
        },
        {
          name: "Browlift",
          description: "Sublimez vos sourcils avec une technique de restructuration qui discipline, redessine et donne un effet naturellement fourni et soigné."
        },
        {
          name: "Réhaussement de cils",
          description: "Ouvrez et intensifiez votre regard grâce à des cils naturellement courbés, rehaussés et teintés pour un effet mascara sans maquillage."
        }
      ]
    },

    whyChooseMe: {
      title: "🔒 Pourquoi me choisir ? ",
      description: "Avec Bella Beauty Sab, vous bénéficiez de soins de haute qualité réalisés par une professionnelle passionnée. J'utilise des produits de renom, sûrs et adaptés à vos besoins, pour des résultats qui durent. Faites-moi confiance pour révéler la meilleure version de vous-même. \nPrenez rendez-vous dès maintenant et vivez l’expérience d’une beauté sublimée, en toute sérénité. 💖"
    }, 

    primaryCTA: {
        label: "Prendre rendez-vous"
    },
    secondaryCTA: {
        label: "Découvrir nos formations",
        href: "/formations"
    },
};

export const servicesContent = {
  title: 'Mes Prestations',
  description: 'Découvrez ma gamme de soins professionnels pour sublimer votre beauté.',
  categories: [
    {
      id: 'lissages',
      title: 'Lissages',
      slug: 'lissages',
      services: [
        {
          id: 'lissage-proteine-de-soie',
          name: 'Lissage Protéine de Soie',
          description: 'Un soin lissant riche en protéines pour des cheveux doux.',
          icon: 'cut'
        },
        {
          id: 'lissage-indien',
          name: 'Lissage Indien',
          description: 'Un lissage naturel inspiré des rituels indiens.',
          icon: 'cut'
        },
        {
          id: 'lissage-tanin',
          name: 'Lissage Tanin',
          description: 'Lissage végétal respectueux de la fibre capillaire.',
          icon: 'cut'
        },
      ]
    },
    {
      id: 'botox',
      title: 'Soins Botox',
      slug: 'soins-botox',
      services: [
        {
          id: 'soin-botox-classique',
          name: 'Soin Botox Classique',
          description: 'Réparation profonde et brillance immédiate.',
          icon: 'spa'
        },
        {
          id: 'soin-botox-lissant',
          name: 'Soin Botox Lissant',
          description: 'Nutrition intense avec effet lissant.',
          icon: 'spa'
        }
      ]
    },
    {
      id: 'rehaussement-de-cils',
      title: 'rehaussement-de-cils',
      slug: 'rehaussement-de-cils',
      services:
      [
        {
          id: 'rehaussement-de-cils',
          name: 'Rehaussement de Cils',
          description: 'Un regard magnifié avec des cils naturellement relevés.',
          icon: 'eye'
        }
      ],
    },
    {
      id: 'browlift',
      title: 'browlift',
      slug: 'browlift',
      services: 
      [
        {
          id: 'browlift',
          name: 'Browlift',
          description: 'Des sourcils sculptés et redessinés pour un regard sublimé.',
          icon: 'eye'
        }
      ],
    }
  ]
};

// Training Section
export const trainingContent = {
  title: 'Formations Professionnelles',
  description:
    'Je propose des formations complètes et certifiantes pour vous transmettre mon expertise.',
  highlights: [
    'Formation théorique et pratique',
    'Certification professionnelle',
    'Suivi personnalisé après formation',
  ],
  programs: [
    {
      name: 'Lissage',
      duration: '1 jour',
    },
    {
      name: 'Réhaussement de cils',
      duration: 'Demi-journée',
    },
    {
      name: 'Browlift',
      duration: 'Demi-journée',
    },
  ],
  cta: 'Découvrir les formations',
  link: '/formations',
};

// Testimonials Section
export const testimonialsContent = {
  title: 'Ils me font confiance',
  description: 'Découvrez les avis de mes clientes satisfaites',
  reviews: [
    {
      id: 1,
      author: 'Clara',
      rating: 5,
      text: 'Sabrina est tout simplement incroyable ! J\'ai fait mon lissage chez elle et le résultat dépasse largement mes attentes. Mes cheveux sont ultra doux, brillants et parfaitement lisses. Elle est très professionnelle, douce et prend vraiment le temps d\'expliquer chaque étape. On sent qu\'elle maîtrise parfaitement son travail. En plus de ça, l\'accueil est chaleureux et on se sent tout de suite à l\'aise. Je recommande Sabrina les yeux fermés — c\'est de loin la meilleure expérience que j\'ai eue !',
      date: 'Il y a 3 semaines',
      avatar: '',
    },
    {
      id: 2,
      author: 'Doriane',
      rating: 5,
      text: 'Prestation au top ! Je suis très satisfaite de mon lissage. Ayant les cheveux qui ont tendance à gonfler, le lissage a permis de les discipliner, quel gain de temps tous les matins ! Et ne plus les abîmer avec les plaques ! Sabrina est à l\'écoute, très professionnelle et met sa clientèle à l\'aise. Je recommande les filles ☺️ Foncez pour des cheveux soyeux et brillants !',
      date: 'Il y a 4 mois',
      avatar: '',
    },
    {
      id: 3,
      author: 'Caroline',
      rating: 5,
      text: 'J’ai passé un formidable moment chez Sabrina : accueil adorable, douceur et surtout efficacité dans le résultat mais pas étonnant vu le travail minutieux qu’elle effectue mèche a mèche. J’ai fait le lissage indien et le résultat est incroyable, tout le monde m’a fait des compliments et mon 1er shampoing a la maison n’a jamais été aussi facile de ma vie !!! Je recommande a 100 000 %. Merci encore Sabrina',
      date: 'Il y a 1 mois',
      avatar: '',
    },
    {
      id: 4,
      author: 'Claire',
      rating: 5,
      text: 'Sabrina est très professionnelle, c\'est la deuxième fois que je passe un super moment chez elle. Accueil chaleureux, très gentille et de très bon conseil ! Bref j\'ai passé un formidable moment n\'hésitez surtout pas à aller réaliser votre lissage chez Sabrina ! Je suis ravie !! :) Un grand merci pour ce bon moment et ton professionnalisme. A très bientôt. Claire',
      date: 'Il y a 3 semaines',
      avatar: '',
    },
        {
      id: 5,
      author: 'Marion',
      rating: 5,
      text: 'Je suis ravie du résultat ! Mes cheveux sont lisses et brillants. Plus de galère de brushing le matin 😅. Accueil très sympa par Sabrina je recommande vivement 👍',
      date: 'Il y a 3 semaines',
      avatar: '',
    },
  ],
};

// Portfolio Section
export const portfolioContent = {
  title: 'Mes Réalisations',
  description: 'Découvrez les transformations de mes clientes',
  featured: [
    {
      id: 1,
      title: 'Lissage',
      before: '/videos/portfolio/before-after/lissage-before.mp4',
      after: '/images/portfolio/before-after/lissage-after.jpeg',
    },
    {
      id: 2,
      title: 'Soin botox lissant',
      before: '/images/portfolio/before-after/soin-botox-lissant-before.jpeg',
      after: '/videos/portfolio/before-after/soin-botox-lissant-after.mp4',
    },
    {
      id: 3,
      title: 'Browlift',
      before: '/images/portfolio/before-after/browlift-before.jpeg',
      after: '/images/portfolio/before-after/browlift-after.jpeg',
    },
    {
      id: 4,
      title: 'Réhaussement de cils',
      before: '/images/portfolio/before-after/rehaussement-cils-before.jpeg',
      after: '/images/portfolio/before-after/rehaussement-cils-after.jpeg',
    },
  ],
  cta: 'Voir toutes les réalisations',
  link: 'https://www.instagram.com/bella_beauty_sab/',
};

export const prestationsContent = {
  title: 'Mes Prestations',
  description: 'Chaque type de cheveux est unique et nécessite une approche personnalisée pour obtenir les meilleurs résultats. Le lissage est une méthode populaire pour obtenir des cheveux lisses, brillants et faciles à entretenir, mais il est essentiel de prendre en compte les divers types de cheveux et leurs besoins spécifiques. C\'est pourquoi j\'offre un service de diagnostic personnalisé. Je commence par évaluer attentivement votre type de cheveux. Ce diagnostic détaillé est essentiel pour déterminer le traitement de lissage parmi le brésilien, Tanin, Indien qui vous convient le mieux. Ce diagnostic est compris dans le tarif. Pour préserver un résultat optimal, il est recommandé d\'utiliser des shampooings sans sulfate et de sécher les cheveux à l\'air chaud à chaque lavage. Mes traitements sont sans formol ni acide glyoxylique.',
  
  categories: [
    {
      id: 'lissages',
      title: 'LISSAGES',
      services: [
        {
          id: 'lissage-proteine-de-soie',
          slug: 'lissages',
          name: 'Lissage Protéine de soie',
          description: 'Le Lissage Protéine de soie est un soin capillaire innovant enrichi en protéine de soie, kératine et acide hyaluronique. Ce traitement sans formol ni acide glyoxylique offre un effet lissant visible dès la première utilisation, avec une tenue pouvant aller jusqu\'à six mois selon l\'entretien. La protéine de soie renforce et gaine la fibre capillaire, l\'acide hyaluronique l\'hydrate en profondeur et la kératine répare et protège pour la fibre capillaire, tandis que l\'acide hyaluronique maintient l\'hydratation, assurent des cheveux lisses, forts et éclatants.',
          price: 'à partir de 140 €',
        },
        {
          id: 'lissage-indien',
          slug: 'lissages',
          name: 'Lissage Indien',
          description: 'Le lissage indien est un traitement capillaire haut de gamme combinant les bienfaits de la kératine, du tanin, de l\'huile d\'arnia et des extraits de caviar. Cette synergie d\'ingrédients naturels sans formol ni acide glyoxylique vise à nourrir, renforcer et revitaliser les cheveux en profondeur, leur conférant douceur, brillance et souplesse. Particulièrement efficace pour les cheveux Indus ou ceux cherchant à réduire le volume, ce lissage offre une détente capillaire durable, avec des effets pouvant perdurer jusqu\'à 8 mois, selon l\'entretien.',
          price: 'à partir de 140 €',
        },
        {
          id: 'lissage-tanin',
          slug: 'lissages',
          name: 'Lissage Tanin',
          description: 'Le lissage au tanin est un soin capillaire innovant et naturel, conçu pour lisser les cheveux tout en respectant leur fibre. À base de tanins végétaux, ce traitement hydrate et nourrit en profondeur, réduisant le volume et les frisottis. Il offre un résultat lisse et soyeux, tout en préservant la santé des cheveux. Ce lissage est idéal pour les cheveux abîmés, crépus ou bouclés, et dure jusqu\'à 6 mois, avec un entretien adapté. Le produit est sans formol et sans acide glyoxylique, ce qui le rend doux et sûr pour tous les types de cheveux.',
          price: 'à partir 140 €',
        },
      ],
    },
    {
      id: 'botox',
      title: 'SOINS BOTOX',
      services: [
        {
          id: 'soin-botox-classique',
          slug: 'soins-botox',
          name: 'Soin Botox classique',
          description: 'Le Botox Classic est un soin réparateur profond qui hydrate, nourrit et régénère la fibre capillaire, pour des cheveux plus doux, brillants et disciplinés. Il réduit les frisottis tout en préservant le mouvement naturel du cheveu. Résultat : une chevelure souple, soyeuse et pleine de vitalité pendant 4 à 5 semaines.',
          price: 'à partir de 80 euros',
        },
        {
          id: 'soin-botox-lissant',
          slug: 'soins-botox',
          name: 'Soin Botox lissant',
          description: 'Le Soin Botox lissant offre la même action réparatrice que le botox classique, mais avec un effet lissant supplémentaire. Enrichi en kératine et actifs lissants, il restructure la fibre capillaire tout en relaxant et disciplinant la forme du cheveu, pour un résultat plus lisse, souple et soyeux. Il réduit fortement les frisottis et facilite le coiffage : un gagnant-gagnant pour les cheveux qui veulent être à la fois soignés et plus lisses, sans passer par un lissage permanent. Résultat : des cheveux plus lisses, brillants, réduits en volume et sans frisottis, pendant 8 à 10 semaines.',
          price: 'à partir de 90 euros',
        },
      ],
    },
    {
      id: 'beaute',
      title: 'BEAUTÉ DU REGARD',
      services: [
        {
          id: 'rehaussement-de-cils',
          slug: 'rehaussement-de-cils',
          name: 'Réhaussement de cils',
          description: 'Notre prestation Réhaussement de cils avec Teinture Noire et Lash Botox met en valeur vos cils naturels pour un regard sublimé, intense et élégant sans maquillage. Le réhaussement vient soulever et courber les cils dès la racine, ouvrant le regard de manière immédiate et donnant un effet recourbé-cils longue tenue. Nous complétons ce soin par : La Teinture Noire, pour un effet mascara naturel dès le réveil, sans maquillage. Le Lash Botox, un soin à base de kératine, vitamines et huiles nourrissantes, qui renforce, hydrate et épaissit les cils, tout en optimisant la courbure et la tenue du réhaussement. Ce combo 3-en-1 offre un résultat plus complet, plus intense et plus dense, pendant 5 et 6 semaines, selon le cycle naturel de vos cils.',
          price: '50 euros',
        },
        {
          id: 'browlift',
          slug: 'browlift',
          name: 'Browlift',
          description: 'Le Browlift est une technique de sculpture des sourcils qui permet de les redessiner, les structurer et les sublimer pour un regard plus ouvert et harmonieux. Ce soin combine lamination, teinture et soin nourrissant pour des sourcils parfaitement définis, denses et naturels. La lamination vient discipliner et fixer les poils dans la direction souhaitée pour un effet sourcils fournis et structurés longue tenue.',
          price: '50 euros',
        },
      ],
    },
  ],
};

export const prestationDetailsContent = {
  'lissages': {
    slug: 'lissages',
    title: 'Lissages Professionnels',
    subtitle: 'Des cheveux lisses, brillants et faciles à entretenir',
    duration: '3h',
    priceRange: 'à partir de 140 €',
    
    introduction: {
      title: 'Une approche personnalisée pour chaque type de cheveux',
      content: 'Chaque type de cheveux est unique et nécessite une approche personnalisée pour obtenir les meilleurs résultats. Le lissage est une méthode populaire pour obtenir des cheveux lisses, brillants et faciles à entretenir, mais il est essentiel de prendre en compte la diversité des textures capillaires. Les cheveux varient en termes de structure, de porosité, de densité, de résistance et de besoins spécifiques.'
    },

    diagnostic: {
      title: 'Diagnostic personnalisé inclus',
      content: 'C\'est pourquoi j\'offre un service de diagnostic personnalisé. Je commence par évaluer attentivement votre type de cheveux. Ce diagnostic détaillé est essentiel pour déterminer le traitement de lissage parmi le brésilien, Tanin, Indien qui vous convient le mieux. Ce diagnostic est compris dans le tarif.'
    },

    benefits: {
      title: 'Les bénéfices',
      list: [
        'Cheveux lisses et brillants pendant plusieurs mois',
        'Réduction significative du volume et des frisottis',
        'Gain de temps considérable le matin',
        'Protection et renforcement de la fibre capillaire',
        'Résultat naturel qui respecte le mouvement du cheveu',
        'Sans formol ni acide glyoxylique'
      ]
    },

    process: {
      title: 'Le processus',
      steps: [
        {
          title: 'Diagnostic capillaire',
          description: 'Analyse approfondie de votre type de cheveux pour choisir le traitement le plus adapté.'
        },
        {
          title: 'Préparation',
          description: 'Lavage avec un shampoing clarifiant pour ouvrir les écailles du cheveu.'
        },
        {
          title: 'Application',
          description: 'Application méticuleuse du produit mèche par mèche pour un résultat homogène.'
        },
        {
          title: 'Temps de pose',
          description: 'Le produit agit en profondeur pour restructurer la fibre capillaire.'
        },
        {
          title: 'Séchage et lissage',
          description: 'Séchage et passage au fer pour sceller le traitement.'
        },
        {
          title: 'Finition',
          description: 'Derniers ajustements et conseils personnalisés pour l\'entretien.'
        }
      ]
    },

    forWhom: {
      title: 'À qui s\'adresse ce soin ?',
      content: 'Ce traitement est idéal pour toutes les personnes qui souhaitent discipliner leurs cheveux, qu\'ils soient bouclés, frisés, ondulés ou simplement volumineux. Parfait pour celles qui veulent gagner du temps le matin tout en préservant la santé de leurs cheveux. Convient à tous les types de cheveux, même les plus abîmés.'
    },

    maintenance: {
      title: 'Conseils d\'entretien',
      tips: [
        'Utiliser des shampooings sans sulfate',
        'Sécher les cheveux à l\'air chaud à chaque lavage',
        'Éviter les élastiques trop serrés les premiers jours',
        'Protéger vos cheveux de l\'eau salée et du chlore',
        'Faire des soins nourrissants régulièrement'
      ]
    },

    variants: [
      {
        id: 'lissage-proteine-de-soie',
        name: 'Lissage Protéine de Soie',
        shortDescription: 'Enrichi en protéine de soie, kératine et acide hyaluronique',
        description: 'Le Lissage Protéine de soie est un soin capillaire innovant enrichi en protéine de soie, kératine et acide hyaluronique. Ce traitement sans formol ni acide glyoxylique offre un effet lissant visible dès la première utilisation, avec une tenue pouvant aller jusqu\'à six mois selon l\'entretien.',
        benefits: 'La protéine de soie renforce et gaine la fibre capillaire, l\'acide hyaluronique l\'hydrate en profondeur et la kératine répare et protège la fibre capillaire, assurant des cheveux lisses, forts et éclatants.',
        price: 'à partir de 140 €',
        duration: '6 mois'
      },
      {
        id: 'lissage-indien',
        name: 'Lissage Indien',
        shortDescription: 'Combinaison de kératine, tanin, huile d\'arnia et extraits de caviar',
        description: 'Le lissage indien est un traitement capillaire haut de gamme combinant les bienfaits de la kératine, du tanin, de l\'huile d\'arnia et des extraits de caviar. Cette synergie d\'ingrédients naturels sans formol ni acide glyoxylique vise à nourrir, renforcer et revitaliser les cheveux en profondeur.',
        benefits: 'Confère douceur, brillance et souplesse. Particulièrement efficace pour les cheveux indisciplinés ou ceux cherchant à réduire le volume, ce lissage offre une détente capillaire durable.',
        price: 'à partir de 140 €',
        duration: '8 mois'
      },
      {
        id: 'lissage-tanin',
        name: 'Lissage Tanin',
        shortDescription: 'Traitement végétal doux et naturel',
        description: 'Le lissage au tanin est un soin capillaire innovant et naturel, conçu pour lisser les cheveux tout en respectant leur fibre. À base de tanins végétaux, ce traitement hydrate et nourrit en profondeur, réduisant le volume et les frisottis.',
        benefits: 'Offre un résultat lisse et soyeux tout en préservant la santé des cheveux. Idéal pour les cheveux abîmés, crépus ou bouclés. Sans formol et sans acide glyoxylique.',
        price: 'à partir de 140 €',
        duration: '6 mois'
      }
    ],

    mediaGroups: [
      {
        id: "lissage-proteine-de-soie",
        title: "Lissage Protéine de Soie",
        items: [
          {
            type: "image" as const,
            src: "/images/portfolio/lissages/proteine/lissage-proteine-1.jpeg",
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/proteine/lissage-proteine-demo-1.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/proteine/lissage-proteine-demo-2.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/proteine/lissage-proteine-demo-3.mp4",
            poster: "/images/logo2.png"
          },
        ],
      },
      {
        id: "lissage-indien",
        title: "Lissage Indien",
        items: [
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/indien/lissage-indien-demo-1.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/indien/lissage-indien-demo-2.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/indien/lissage-indien-demo-3.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/indien/lissage-indien-demo-4.mp4",
            poster: "/images/logo2.png"
          },
        ],
      },
      {
        id: "lissage-tanin",
        title: "Lissage Tanin",
        items: [
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/tanin/lissage-tanin-demo-1.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/tanin/lissage-tanin-demo-2.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/tanin/lissage-tanin-demo-3.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/lissages/tanin/lissage-tanin-demo-4.mp4",
            poster: "/images/logo2.png"
          },
        ],
      },
    ],

    testimonials: testimonialsContent.reviews // Tous les avis pour les lissages
  },

  'soins-botox': {
    slug: 'soins-botox',
    title: 'Soins Botox Capillaire',
    subtitle: 'Réparation profonde et nutrition intense',
    duration: '45 min',
    priceRange: 'à partir de 80 €',

    introduction: {
      title: 'Des soins réparateurs pour sublimer vos cheveux',
      content: 'Les soins Botox capillaire sont des traitements réparateurs profonds qui redonnent vie aux cheveux abîmés, ternes ou fragilisés. Sans injection, ces soins utilisent des actifs puissants pour hydrater, nourrir et régénérer la fibre capillaire en profondeur.'
    },

    benefits: {
      title: 'Les bénéfices',
      list: [
        'Réparation intense de la fibre capillaire',
        'Brillance et douceur immédiates',
        'Réduction significative des frisottis',
        'Cheveux plus forts et résistants',
        'Effet lissant sans passer par un lissage permanent',
        'Résultats visibles dès la première application'
      ]
    },

    process: {
      title: 'Le processus',
      steps: [
        {
          title: 'Diagnostic',
          description: 'Évaluation de l\'état de vos cheveux et de vos besoins spécifiques.'
        },
        {
          title: 'Lavage',
          description: 'Nettoyage en douceur pour préparer les cheveux au soin.'
        },
        {
          title: 'Application du Botox',
          description: 'Application généreuse du soin sur toute la longueur des cheveux.'
        },
        {
          title: 'Temps de pose',
          description: 'Les actifs pénètrent en profondeur pour réparer la fibre.'
        },
        {
          title: 'Rinçage et séchage',
          description: 'Élimination du produit et mise en forme.'
        }
      ]
    },

    forWhom: {
      title: 'À qui s\'adresse ce soin ?',
      content: 'Idéal pour les cheveux abîmés, secs, colorés ou soumis à des traitements chimiques réguliers. Convient parfaitement aux personnes qui souhaitent réparer leurs cheveux sans engagement à long terme, ou en complément d\'un lissage pour maintenir la santé capillaire.'
    },

    variants: [
      {
        id: 'soin-botox-classique',
        name: 'Soin Botox Classique',
        shortDescription: 'Réparation profonde pour tous types de cheveux',
        description: 'Le Botox Classic est un soin réparateur profond qui hydrate, nourrit et régénère la fibre capillaire, pour des cheveux plus doux, brillants et disciplinés.',
        benefits: 'Réduit les frisottis tout en préservant le mouvement naturel du cheveu. Résultat : une chevelure souple, soyeuse et pleine de vitalité.',
        price: 'à partir de 80 €',
        duration: '4 à 5 semaines'
      },
      {
        id: 'soin-botox-lissant',
        name: 'Soin Botox Lissant',
        shortDescription: 'Réparation + effet lissant',
        description: 'Le Soin Botox lissant offre la même action réparatrice que le botox classique, mais avec un effet lissant supplémentaire. Enrichi en kératine et actifs lissants, il restructure la fibre capillaire tout en relaxant et disciplinant la forme du cheveu.',
        benefits: 'Résultat plus lisse, souple et soyeux. Réduit fortement les frisottis et facilite le coiffage. Parfait pour les cheveux qui veulent être à la fois soignés et plus lisses.',
        price: 'à partir de 90 €',
        duration: '8 à 10 semaines'
      }
    ],

    mediaGroups: [
      {
        id: "soin-botox-classique",
        title: "Soin Botox Classique",
        items: [
          {
            type: "image" as const,
            src: "/images/portfolio/soins-botox/classique/soin-botox-classique-1.jpeg",
          },
          {
            type: "image" as const,
            src: "/images/portfolio/soins-botox/classique/soin-botox-classique-2.jpeg",
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/soins-botox/classique/soin-botox-classique-demo-1.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/soins-botox/classique/soin-botox-classique-demo-2.mp4",
            poster: "/images/logo2.png"
          },
        ],
      },
      {
        id: "soin-botox-lissant",
        title: "Soin Botox Lissant",
        items: [
          {
            type: "video" as const,
            src: "/videos/portfolio/soins-botox/lissant/soin-botox-lissant-demo-1.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/soins-botox/lissant/soin-botox-lissant-demo-2.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/soins-botox/lissant/soin-botox-lissant-demo-3.mp4",
            poster: "/images/logo2.png"
          },
          {
            type: "video" as const,
            src: "/videos/portfolio/soins-botox/lissant/soin-botox-lissant-demo-4.mp4",
            poster: "/images/logo2.png"
          },
        ],
      },
    ],

    testimonials: [] // Pas d'avis spécifiques pour les soins botox pour le moment
  },

  'rehaussement-de-cils': {
    slug: 'rehaussement-de-cils',
    title: 'Réhaussement de Cils',
    subtitle: 'Un regard intense et magnifié',
    duration: '45 min',
    priceRange: '50 €',

    introduction: {
      title: 'Sublimez votre regard naturellement',
      content: 'Le réhaussement de cils est une technique qui permet de courber et relever vos cils naturels pour ouvrir le regard de manière spectaculaire. Associé à une teinture et un soin botox pour cils, ce traitement 3-en-1 offre un résultat durable et naturel.'
    },

    benefits: {
      title: 'Les bénéfices',
      list: [
        'Regard ouvert et intensifié',
        'Effet mascara naturel sans maquillage',
        'Cils courbés et relevés en permanence',
        'Cils renforcés et nourris',
        'Gain de temps au quotidien',
        'Tenue de 5 à 6 semaines'
      ]
    },

    process: {
      title: 'Le processus',
      steps: [
        {
          title: 'Nettoyage',
          description: 'Démaquillage et nettoyage complet des cils.'
        },
        {
          title: 'Pose des bigoudis',
          description: 'Application de bigoudis adaptés à la longueur de vos cils.'
        },
        {
          title: 'Réhaussement',
          description: 'Application de la lotion pour courber et fixer les cils.'
        },
        {
          title: 'Teinture noire',
          description: 'Coloration pour intensifier le regard.'
        },
        {
          title: 'Lash Botox',
          description: 'Soin nourrissant à base de kératine et vitamines.'
        },
        {
          title: 'Finition',
          description: 'Retrait des bigoudis et conseils d\'entretien.'
        }
      ]
    },

    forWhom: {
      title: 'À qui s\'adresse ce soin ?',
      content: 'Parfait pour toutes les personnes qui souhaitent un regard plus intense sans avoir recours aux extensions de cils ou au maquillage quotidien. Idéal pour les cils droits ou tombants qui manquent de courbure naturelle. Convient à tous les types de cils.'
    },

    details: {
      title: 'Le traitement complet 3-en-1',
      components: [
        {
          name: 'Le Réhaussement',
          description: 'Soulève et courbe les cils dès la racine pour un effet recourbé-cils longue tenue.'
        },
        {
          name: 'La Teinture Noire',
          description: 'Crée un effet mascara naturel dès le réveil, sans maquillage.'
        },
        {
          name: 'Le Lash Botox',
          description: 'Soin à base de kératine, vitamines et huiles nourrissantes qui renforce, hydrate et épaissit les cils.'
        }
      ]
    },

    maintenance: {
      title: 'Conseils d\'entretien',
      tips: [
        'Ne pas mouiller les cils pendant 24h après le soin',
        'Éviter les produits huileux sur les cils',
        'Brosser délicatement vos cils chaque matin',
        'Ne pas frotter les yeux',
        'Démaquiller en douceur si nécessaire'
      ]
    },

    mediaGroups: [
      {
        id: "rehaussement-de-cils",
        title: "Réhaussement de cils",
        items: [
          {
            type: 'image' as const,
            src: '/images/portfolio/rehaussement-cils/rehaussement-cils-1.jpeg',
            alt: 'Résultat réhaussement cils'
          },
          {
            type: 'image' as const,
            src: '/images/portfolio/rehaussement-cils/rehaussement-cils-2.jpeg',
            alt: 'Résultat réhaussement cils'
          },
          {
            type: 'image' as const,
            src: '/images/portfolio/rehaussement-cils/rehaussement-cils-3.jpeg',
            alt: 'Résultat réhaussement cils'
          },
          {
            type: 'image' as const,
            src: '/images/portfolio/rehaussement-cils/rehaussement-cils-4.jpeg',
            alt: 'Résultat réhaussement cils'
          },
        ],
      },
    ],

    testimonials: [] // Pas d'avis spécifiques pour le réhaussement pour le moment
  },
  'browlift': {
    slug: 'browlift',
    title: 'Browlift',
    subtitle: 'Des sourcils sculptés pour un regard sublimé',
    duration: '45 min',
    priceRange: '25 euros',
 
    introduction: {
      title: 'Redessinez et sublimez vos sourcils',
      content: 'Le Browlift est une technique de sculpture des sourcils qui combine lamination, teinture et soin nourrissant pour des sourcils parfaitement définis, denses et naturels. Ce soin permet de corriger, restructurer et embellir vos sourcils pour un regard plus ouvert et harmonieux, sans maquillage.'
    },
 
    benefits: {
      title: 'Les bénéfices',
      list: [
        'Sourcils redéfinis et structurés',
        'Regard plus ouvert et harmonieux',
        'Effet sourcils fournis et naturels',
        'Tenue longue durée',
        'Gain de temps au quotidien',
        'Résultat naturel et personnalisé'
      ]
    },
 
    process: {
      title: 'Le processus',
      steps: [
        {
          title: 'Diagnostic',
          description: 'Analyse de la forme de votre visage et de vos sourcils pour déterminer la forme idéale.'
        },
        {
          title: 'Nettoyage',
          description: 'Démaquillage et nettoyage complet de la zone sourcils.'
        },
        {
          title: 'Lamination',
          description: 'Application de la lotion pour discipliner et fixer les poils dans la direction souhaitée.'
        },
        {
          title: 'Teinture',
          description: 'Coloration adaptée à votre carnation pour intensifier et définir les sourcils.'
        },
        {
          title: 'Soin nourrissant',
          description: 'Application d\'un soin à base de kératine et vitamines pour nourrir et fortifier les poils.'
        },
        {
          title: 'Mise en forme finale',
          description: 'Épilation des poils superflus et finitions pour un résultat impeccable.'
        }
      ]
    },
 
    forWhom: {
      title: 'À qui s\'adresse ce soin ?',
      content: 'Idéal pour toutes les personnes qui souhaitent des sourcils plus définis et structurés sans avoir recours au maquillage permanent. Parfait pour les sourcils clairsemés, irréguliers ou indisciplinés. Convient à tous les types de sourcils.'
    },
 
    maintenance: {
      title: 'Conseils d\'entretien',
      tips: [
        'Ne pas mouiller les sourcils pendant 24h après le soin',
        'Éviter les produits huileux sur la zone sourcils',
        'Brosser délicatement les sourcils chaque matin',
        'Ne pas frotter les yeux',
        'Utiliser un sérum sourcils pour prolonger les résultats'
      ]
    },
 
    mediaGroups: [
      {
        id: "browlift",
        title: "Browlift",
        items: [
          {
            type: 'image' as const,
            src: '/images/portfolio/browlift/browlift-1.jpeg',
            alt: 'Résultat browlift'
          },
          {
            type: 'image' as const,
            src: '/images/portfolio/browlift/browlift-2.jpeg',
            alt: 'Résultat browlift'
          },
          {
            type: 'image' as const,
            src: '/images/portfolio/browlift/browlift-3.jpeg',
            alt: 'Résultat browlift'
          },
          {
            type: 'image' as const,
            src: '/images/portfolio/browlift/browlift-4.jpeg',
            alt: 'Résultat browlift'
          },
        ],
      },
    ],
 
    testimonials: []
  }
};

export const formationsPageContent = {
  hero: {
    title: "Formations Professionnelles Beauté",
    description:
      "Je propose des formations professionnelles en présentiel pour transmettre mon savoir-faire"
  },

  trainer: {
    title: "Votre formatrice",
    content: 
      "Professionnelle passionnée et expérimentée, je vous accompagne pas à pas dans l’apprentissage des techniques de lissage capillaire et de la beauté du regard. Mes formations sont axées sur la pratique, la qualité du geste et la réussite de chaque élève.",
    ndaNumber: "524 412 589 44"
  },

  formations: {
    hair: {
      id: "hair",
      title: "Formation Lissage & Soin botox capillaire",
      duration: "1 jour (présentiel)",
      price: {
        withKit: "800 €",
        withoutKit: "600 €",
        kitDescription: "Kit inclus : 1L de lissage + lisseur professionnel",
        paymentInfo: "Paiement en plusieurs fois possible",
      },
      description: [
        { text: "Jour 1 :", center: true },
        { text: "Matin :", center: true },
        { text: "Présentation des produits et protocoles" },
        { text: "Partie théorique avec remise de livret" },
        { text: "Méthodes d'application" },
        { text: "Apprentissage de la fibre capillaire, contre-indications, ..." },
        { text: "Démonstration sur tête à coiffer" },

        { text: "Après-midi:", center: true },
        { text: "Initiation au lissage sur modèle" },
        { text: "Debrief et stratégies marketing réseaux sociaux" },
        { text: "Pratique sur modèle en totale autonomie" },
        { text: "Remise du diplôme et photo souvenir avec élève et modèle (sur autorisation)" },
        { text: "Debrief fin de formation" },
        { text: "Remise du kit complet afin de démarrer directement votre activité" },
      ],
    },

    lashes: {
      id: "lashes",
      title: "Formation Réhaussement de Cils & Teinture",
      duration: "demi-journée (présentiel)",
      price: {
        withoutKit: "450 €",
        kitDescription: "Les produits pour démarrer votre activité ne sont pas fournis",
        paymentInfo: null,
      },
      description: 
        "Formation complète pour maîtriser le réhaussement de cils et la teinture. Apprentissage théorique et pratique (sur modèle) avec accompagnement personnalisé.",
    },
    browlift: {
      id: "browlift",
      title: "Formation Browlift",
      duration: "demi-journée (présentiel)",
      price: {
        withoutKit: "450 €",
        kitDescription: "Les produits pour démarrer votre activité ne sont pas fournis",
        paymentInfo: null,
      },
      description: 
        "Formation complète pour maîtriser le browlift. Apprentissage théorique et pratique (sur modèle) avec accompagnement personnalisé.",
    },
  },
} as const;

export const siteInfo = {
  name: "Bella Beauty Sab",
  tagline: "Formations",
  phone: "+33 6 47 90 09 26",
  whatsapp: "33647900926",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  address: {
    street: "26 Allée des Lauriers",
    city: "44260 Savenay",
    fullAddress: "26 Allée des Lauriers, 44260 Savenay",
  },
  schedule: {
    monday: "Lun : 8h45 - 17h00",
    tuesday: "Mar : 12h - 18h30",
    wednesday: "Mer : 9h - 19h30",
    thursday: "Jeu : 8h45 - 18h00",
    friday: "Ven : 12h - 17h00",
    saturday: "Sam : 9h00 - 18h00",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/bella_beauty_sab/",
    facebook: "https://www.facebook.com/p/Sabrina-Sabrina-100012471105313/?_rdr",
    whatsappLink: "https://wa.me/33647900926",
  },
};

export const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "Formations", href: "/formations" },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Produits', href: '/produits' },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const bookingLink = 
  "https://calendar.app.google/UXTr26gmDSDziNG36";

export const footerLinks = {
  quick: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "CGU", href: "/cgu" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
};

export const copyright = {
  year: new Date().getFullYear(),
  text: "Bella Beauty Sab - Site réalisé par Oriane Da Silva",
};

