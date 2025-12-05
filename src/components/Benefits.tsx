import { Clock, Award, Calendar, Settings, LayoutGrid, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gain de temps considérable",
    description: "Créez en quelques minutes ce qui vous prendrait des heures avec les méthodes traditionnelles.",
  },
  {
    icon: Award,
    title: "Contenu professionnel",
    description: "Des textes et images de qualité qui valorisent votre expertise et renforcent votre image.",
  },
  {
    icon: Calendar,
    title: "Régularité assurée",
    description: "Maintenez une présence constante sur les réseaux sociaux sans effort ni stress.",
  },
  {
    icon: Settings,
    title: "Personnalisation poussée",
    description: "Une IA spécifiquement entraînée pour les codes et besoins de votre secteur d'activité.",
  },
  {
    icon: LayoutGrid,
    title: "Flexibilité totale",
    description: "Des modèles variés adaptés à tous vos types de communication : promo, info, événement...",
  },
  {
    icon: TrendingUp,
    title: "Résultats prouvés",
    description: "Nos clients constatent jusqu'à +30% de nouveaux clients en 3 mois d'utilisation.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Pourquoi CréaVisuel
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Des outils dignes des{" "}
              <span className="text-gradient">grandes marques</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ne laissez plus le manque de temps ou d'inspiration freiner votre présence 
              sur les réseaux sociaux. CréaVisuel vous donne accès à des fonctionnalités 
              premium à une fraction du coût d'une agence traditionnelle.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-muted/50 rounded-2xl border border-border">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-extrabold text-primary">5min</div>
                <div className="text-sm text-muted-foreground">par publication</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-3xl lg:text-4xl font-extrabold text-primary">2x</div>
                <div className="text-sm text-muted-foreground">génération (texte+image)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-extrabold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">personnalisé</div>
              </div>
            </div>
          </div>

          {/* Right content - Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
