import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/creavisuel-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <Sparkles className="w-4 h-4" />
              <span>Propulsé par l'Intelligence Artificielle</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <span className="text-gradient">CréaVisuel</span>
              <br />
              <span className="text-secondary">L'IA qui propulse votre</span>
              <br />
              <span className="text-foreground">communication digitale</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
              Créez du contenu professionnel pour vos réseaux sociaux en quelques clics. 
              Texte captivant + image attrayante, générés instantanément par notre IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
              <Button variant="hero" size="xl">
                Demander une démo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Découvrir les fonctionnalités
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
              <p className="text-sm text-muted-foreground mb-4">Déjà adopté par de nombreux professionnels</p>
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground">Métiers</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">∞</div>
                  <div className="text-xs text-muted-foreground">Générations</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">+30%</div>
                  <div className="text-xs text-muted-foreground">Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl scale-75" />
              <img
                src={heroImage}
                alt="CréaVisuel - Assistant IA pour réseaux sociaux"
                className="relative w-full max-w-lg lg:max-w-xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
