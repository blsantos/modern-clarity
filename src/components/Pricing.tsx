import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Découverte",
    description: "Parfait pour débuter",
    price: "Nous contacter",
    features: [
      "Accès à 2 modèles de contenu",
      "IA entraînée pour votre métier",
      "Générations illimitées",
      "Accompagnement à la prise en main",
    ],
    highlighted: false,
    cta: "Commencer",
  },
  {
    name: "Pro",
    description: "Le plus populaire",
    price: "Nous contacter",
    features: [
      "Accès à tous les modèles de votre secteur",
      "IA entraînée pour votre métier",
      "Générations illimitées",
      "Accompagnement personnalisé",
      "Mises à jour régulières",
    ],
    highlighted: true,
    cta: "Choisir Pro",
  },
  {
    name: "Premium",
    description: "Pour les exigeants",
    price: "Nous contacter",
    features: [
      "Accès illimité à tous les modèles",
      "IA personnalisée avancée",
      "Générations illimitées",
      "Support prioritaire",
      "Personnalisation avancée",
      "Nouveaux modèles en avant-première",
    ],
    highlighted: false,
    cta: "Choisir Premium",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Tarification
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Des formules{" "}
            <span className="text-gradient">flexibles</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choisissez la formule qui correspond à vos besoins. 
            Toutes incluent un nombre illimité de générations.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-card border-primary shadow-xl shadow-primary/10 scale-105"
                  : "bg-card border-border hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  Populaire
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-extrabold text-foreground">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10">
          Chaque formule inclut un accompagnement personnalisé pour la prise en main.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
