import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundVideo from "@/components/BackgroundVideo";
import { Heart, Shield, Lightbulb, Users } from "lucide-react";
import brunoProfile from "@/assets/bruno-profile.jpg";

const values = [
  {
    icon: Heart,
    title: "Engagement Client",
    description: "Une collaboration ouverte pour comprendre et répondre à vos besoins, en maintenant une qualité de service élevée."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous utilisons les dernières technologies d'automatisation et d'IA pour optimiser votre communication visuelle."
  },
  {
    icon: Shield,
    title: "Qualité",
    description: "Chaque visuel est conçu avec soin pour refléter votre identité et engager votre audience."
  },
  {
    icon: Users,
    title: "Diversité & Inclusion",
    description: "B2Santos s'engage contre le racisme et la xénophobie, promouvant un environnement inclusif et respectueux."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Decorative orbs */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Robot mascot video */}
          <BackgroundVideo 
            src="/videos/robot-animation.mp4" 
            position="right" 
            opacity={0.35} 
            size="md"
            className="hidden lg:block"
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-semibold text-sm mb-6 backdrop-blur-sm">
                  À Propos
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6 leading-tight">
                  B2Santos{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Communication</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed mb-6">
                  B2Santos propose des services numériques divers, avec une approche client centrée 
                  et un engagement envers la qualité, l'innovation et la diversité.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  CréaVisuel est notre solution phare pour automatiser et personnaliser la création 
                  de contenus visuels pour les réseaux sociaux, en fournissant un service complet 
                  de la conception à la publication.
                </p>
              </div>
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-3xl blur-3xl group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all duration-500"></div>
                  <img 
                    src={brunoProfile} 
                    alt="Bruno - Fondateur B2Santos" 
                    className="relative w-full max-w-md rounded-3xl shadow-2xl border border-white/10 group-hover:border-purple-500/30 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                Nos <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Valeurs</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Ce qui guide notre travail au quotidien
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="scifi-card text-center p-6 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-6 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-20 bg-slate-900/50 overflow-hidden">
          <BackgroundVideo 
            src="/videos/robot-dancing.mp4" 
            position="bottom-left" 
            opacity={0.3} 
            size="lg"
            className="hidden md:block"
          />

          {/* Decorative ring */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[200px] h-[200px] opacity-20 pointer-events-none hidden lg:block">
            <div className="absolute inset-0 border border-dashed border-purple-500/50 rounded-full animate-globe-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-6 border border-dashed border-cyan-500/50 rounded-full animate-globe-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8">
                Notre <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Offrir une solution complète de création de contenus visuels pour les réseaux sociaux, 
                en automatisant les processus tout en maintenant une qualité créative exceptionnelle. 
                Nous croyons que chaque entreprise mérite une présence digitale professionnelle et engageante.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { value: "250+", label: "Visuels créés par mois", color: "from-purple-400 to-cyan-400" },
                  { value: "50+", label: "Clients satisfaits", color: "from-cyan-400 to-purple-400" },
                  { value: "98%", label: "Taux de satisfaction", color: "from-purple-400 to-cyan-400" }
                ].map((stat, index) => (
                  <div key={index} className="scifi-glass p-6 rounded-xl animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
