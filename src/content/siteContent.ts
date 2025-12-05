// Centralized content configuration for the entire site
export interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { value: string; label: string }[];
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  features: string[];
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  business: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface CTAContent {
  title: string;
  titleHighlight: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface FooterContent {
  description: string;
  email: string;
  phone: string;
}

export interface SiteContent {
  hero: HeroContent;
  howItWorks: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    steps: Step[];
  };
  industries: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: Industry[];
  };
  benefits: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    stats: { value: string; label: string }[];
    items: Benefit[];
  };
  testimonials: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: Testimonial[];
  };
  pricing: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    plans: PricingPlan[];
  };
  cta: CTAContent;
  footer: FooterContent;
}

export const defaultContent: SiteContent = {
  hero: {
    badge: "Propulsé par l'IA",
    title: "Créez du contenu",
    titleHighlight: "captivant en quelques clics",
    description: "CréaVisuel génère automatiquement des textes percutants et des images attrayantes pour vos réseaux sociaux. Gagnez du temps et boostez votre présence en ligne.",
    ctaPrimary: "Demander une démo",
    ctaSecondary: "Découvrir les fonctionnalités",
    stats: [
      { value: "500+", label: "Entreprises" },
      { value: "10k+", label: "Posts générés" },
      { value: "95%", label: "Satisfaction" },
    ],
  },
  howItWorks: {
    badge: "Comment ça marche",
    title: "Créez du contenu pro en",
    titleHighlight: "3 étapes simples",
    description: "Plus besoin d'être un expert en marketing digital. CréaVisuel s'occupe de tout pour vous.",
    steps: [
      {
        step: "01",
        title: "Remplissez un formulaire simple",
        description: "Interface intuitive adaptée à votre métier avec les informations essentielles de votre contenu.",
      },
      {
        step: "02",
        title: "L'IA génère votre contenu",
        description: "En quelques secondes, obtenez un texte captivant ET une image attrayante parfaitement adaptés.",
      },
      {
        step: "03",
        title: "Publiez sur vos réseaux",
        description: "Partagez directement le contenu sur vos réseaux sociaux en quelques clics.",
      },
    ],
  },
  industries: {
    badge: "Pour votre métier",
    title: "Une solution adaptée à",
    titleHighlight: "votre activité",
    description: "CréaVisuel comprend les spécificités de votre secteur pour générer du contenu pertinent et engageant.",
    items: [
      { name: "Salons de coiffure", features: ["Promotions coupe/coloration", "Nouveautés tendances", "Avant/après transformations"] },
      { name: "Restaurants", features: ["Plats du jour", "Menus spéciaux", "Événements & soirées"] },
      { name: "Instituts de beauté", features: ["Soins & promotions", "Nouveaux traitements", "Conseils beauté"] },
      { name: "Boutiques", features: ["Nouveautés produits", "Soldes & promos", "Collections saisonnières"] },
      { name: "Artisans", features: ["Réalisations", "Savoir-faire", "Témoignages clients"] },
      { name: "Coachs & formateurs", features: ["Conseils & astuces", "Programmes", "Résultats clients"] },
    ],
  },
  benefits: {
    badge: "Pourquoi CréaVisuel",
    title: "Gagnez du temps,",
    titleHighlight: "gagnez en impact",
    description: "Découvrez comment CréaVisuel transforme votre communication digitale.",
    stats: [
      { value: "80%", label: "de temps gagné" },
      { value: "3x", label: "plus d'engagement" },
      { value: "24/7", label: "disponible" },
    ],
    items: [
      { title: "Gain de temps considérable", description: "Créez en 2 minutes ce qui prendrait normalement 30 minutes à un professionnel." },
      { title: "Contenu professionnel", description: "Des textes et images de qualité professionnelle, adaptés à votre secteur d'activité." },
      { title: "100% personnalisable", description: "Chaque contenu est unique et reflète l'identité de votre entreprise." },
      { title: "Simple à utiliser", description: "Aucune compétence technique requise. Interface intuitive pour tous." },
    ],
  },
  testimonials: {
    badge: "Témoignages",
    title: "Ils nous font",
    titleHighlight: "confiance",
    description: "Découvrez ce que nos clients pensent de CréaVisuel.",
    items: [
      { quote: "CréaVisuel a révolutionné ma communication. Je gagne un temps fou et mes posts sont bien plus engageants qu'avant !", author: "Marie L.", business: "Salon de coiffure", rating: 5 },
      { quote: "Enfin une solution simple et efficace pour gérer mes réseaux sociaux. Je recommande à 100% !", author: "Thomas B.", business: "Restaurant", rating: 5 },
      { quote: "Les images générées sont bluffantes. Mes clients me demandent souvent qui fait mes visuels !", author: "Sophie M.", business: "Institut de beauté", rating: 5 },
    ],
  },
  pricing: {
    badge: "Tarifs",
    title: "Des offres adaptées à",
    titleHighlight: "vos besoins",
    description: "Choisissez la formule qui correspond le mieux à votre activité.",
    plans: [
      {
        name: "Découverte",
        description: "Idéal pour tester",
        price: "Gratuit",
        features: ["5 créations par mois", "Textes uniquement", "1 réseau social", "Support par email"],
        highlighted: false,
        cta: "Commencer gratuitement",
      },
      {
        name: "Pro",
        description: "Le plus populaire",
        price: "29€/mois",
        features: ["50 créations par mois", "Textes + Images", "Tous les réseaux", "Support prioritaire", "Personnalisation avancée"],
        highlighted: true,
        cta: "Essai gratuit 14 jours",
      },
      {
        name: "Premium",
        description: "Pour les pros",
        price: "79€/mois",
        features: ["Créations illimitées", "Textes + Images + Vidéos", "Multi-établissements", "Account manager dédié", "API access"],
        highlighted: false,
        cta: "Contacter les ventes",
      },
    ],
  },
  cta: {
    title: "Prêt à transformer votre",
    titleHighlight: "communication digitale ?",
    description: "Rejoignez des centaines d'entreprises qui utilisent CréaVisuel pour créer du contenu engageant en quelques clics.",
    ctaPrimary: "Demander une démo",
    ctaSecondary: "Créer un compte gratuit",
  },
  footer: {
    description: "La solution IA pour créer du contenu captivant pour vos réseaux sociaux.",
    email: "contact@bsantos-communication.com",
    phone: "+33 1 23 45 67 89",
  },
};

// LocalStorage key
const STORAGE_KEY = "creavisuel_content";

export const getContent = (): SiteContent => {
  if (typeof window === "undefined") return defaultContent;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return { ...defaultContent, ...JSON.parse(stored) };
    } catch {
      return defaultContent;
    }
  }
  return defaultContent;
};

export const saveContent = (content: SiteContent): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
};

export const resetContent = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
