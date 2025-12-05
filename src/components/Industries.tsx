import { 
  Scissors, 
  UtensilsCrossed, 
  Sparkles, 
  Dumbbell, 
  Croissant, 
  Wine,
  Home,
  Stethoscope
} from "lucide-react";

const industries = [
  {
    icon: Scissors,
    name: "Salons de coiffure",
    features: ["Conseils beauté", "Horaires disponibles", "Tendances capillaires"],
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    features: ["Menu du jour", "Suggestion du chef", "Événements spéciaux"],
  },
  {
    icon: Sparkles,
    name: "Instituts de beauté",
    features: ["Soin du mois", "Conseils saisonniers", "Nouveaux produits"],
  },
  {
    icon: Dumbbell,
    name: "Salles de sport",
    features: ["Programmes d'entraînement", "Conseils nutrition", "Témoignages"],
  },
  {
    icon: Croissant,
    name: "Boulangeries",
    features: ["Spécialité du jour", "Offres fin de journée", "Processus artisanal"],
  },
  {
    icon: Wine,
    name: "Bars à cocktails",
    features: ["Cocktail de la semaine", "Soirées thématiques", "Happy Hours"],
  },
  {
    icon: Home,
    name: "Agences immobilières",
    features: ["Bien du jour", "Conseils achat/vente", "Tendances marché"],
  },
  {
    icon: Stethoscope,
    name: "Vétérinaires",
    features: ["Conseils santé animale", "Rappels vaccination", "Services spécialisés"],
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            +15 métiers supportés
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Une solution{" "}
            <span className="text-gradient">adaptée à votre métier</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Chaque secteur a ses propres codes. CréaVisuel propose des modèles spécifiques 
            avec des formulaires intuitifs adaptés à votre audience.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <industry.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">
                {industry.name}
              </h3>

              <ul className="space-y-2">
                {industry.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10">
          Et bien d'autres : fleuristes, librairies, auto-écoles, pharmacies, écoles de danse...
        </p>
      </div>
    </section>
  );
};

export default Industries;
