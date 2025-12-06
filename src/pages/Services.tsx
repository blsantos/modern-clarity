import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Sparkles, Zap, Calendar, BarChart3, Users, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Sparkles,
    title: "Visuels Automatisés",
    description: "Génération automatique de visuels basés sur vos données grâce à notre technologie IA.",
    features: [
      "12 visuels automatisés par mois",
      "Templates personnalisés",
      "Intégration données client",
      "Formats réseaux sociaux"
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-400",
    glowColor: "shadow-cyan-500/20"
  },
  {
    icon: Palette,
    title: "Visuels Créatifs",
    description: "Création sur mesure pour vos sujets spécifiques avec une approche design élaborée.",
    features: [
      "8 visuels créatifs par mois",
      "Design personnalisé",
      "Identité visuelle respectée",
      "Révisions incluses"
    ],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500",
    textColor: "text-purple-400",
    glowColor: "shadow-purple-500/20"
  },
  {
    icon: Calendar,
    title: "Gestion & Publication",
    description: "Coordination complète de l'approbation à la publication sur vos réseaux.",
    features: [
      "Processus d'approbation fluide",
      "Planification optimisée",
      "Multi-plateformes",
      "Calendrier éditorial"
    ],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500",
    textColor: "text-green-400",
    glowColor: "shadow-green-500/20"
  },
  {
    icon: BarChart3,
    title: "Stratégie & Analyse",
    description: "Développement d'une stratégie de contenu alignée sur vos objectifs.",
    features: [
      "Ligne éditoriale définie",
      "Analyse de performance",
      "Rapports mensuels",
      "Ajustements stratégiques"
    ],
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-400",
    glowColor: "shadow-yellow-500/20"
  },
  {
    icon: Zap,
    title: "Automatisation",
    description: "Mise en place des outils et plateformes pour une gestion efficace.",
    features: [
      "Configuration initiale",
      "Hub de gestion dédié",
      "Workflows automatisés",
      "Formation incluse"
    ],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500",
    textColor: "text-orange-400",
    glowColor: "shadow-orange-500/20"
  },
  {
    icon: Users,
    title: "Accompagnement",
    description: "Support continu et collaboration ouverte pour répondre à vos besoins.",
    features: [
      "Interlocuteur dédié",
      "Réunions de suivi",
      "Support réactif",
      "Évolution continue"
    ],
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-400",
    glowColor: "shadow-indigo-500/20"
  }
];

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <Header />
      
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/3 to-transparent rounded-full" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated rings in background */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 perspective-container hidden lg:block">
            <div className="w-96 h-96 border-2 border-dashed border-cyan-500/20 rounded-full animate-ring-slow" />
            <div className="absolute inset-12 border border-dashed border-primary/20 rounded-full animate-ring-medium" />
            <div className="absolute inset-24 border border-dashed border-cyan-400/30 rounded-full animate-ring-fast" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-primary to-cyan-600 animate-pulse-core" />
            </div>
          </div>
          
          <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold text-sm mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              Nos Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Solutions complètes pour vos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-cyan-400">
                réseaux sociaux
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              CréaVisuel automatise et personnalise la création de contenus visuels, 
              de la conception à la publication, adapté à vos besoins spécifiques.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`group scifi-card p-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Icon with glow */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 border ${service.borderColor}/20 group-hover:${service.borderColor}/50 transition-all duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.textColor}`} />
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 border ${service.borderColor}/30`}>
                          <Check className={`w-3 h-3 ${service.textColor}`} />
                        </div>
                        <span className="text-slate-300 group-hover/item:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
              <div className="absolute inset-0 border-2 border-dashed border-cyan-500/10 rounded-full animate-ring-slow" />
              <div className="absolute inset-12 border border-dashed border-primary/10 rounded-full animate-ring-medium" />
            </div>
          </div>
          
          <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="scifi-glass rounded-2xl p-12 text-center max-w-4xl mx-auto backdrop-blur-xl">
              {/* Scan line effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute inset-0 animate-scan-line bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-primary to-cyan-600 animate-pulse-core mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Prêt à transformer votre{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">
                    présence digitale
                  </span> ?
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour discuter de vos besoins et découvrir comment CréaVisuel peut vous aider.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="scifi-button bg-gradient-to-r from-cyan-500/20 to-primary/20 hover:from-cyan-500/30 hover:to-primary/30 text-cyan-400 border-cyan-500/30 font-semibold px-8 group"
                  >
                    Demander un devis
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;