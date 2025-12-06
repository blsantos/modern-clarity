import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundVideo from "@/components/BackgroundVideo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

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
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <BackgroundVideo 
            src="/videos/robot-wave.mp4" 
            position="bottom-right" 
            opacity={0.4} 
            size="md"
            className="hidden lg:block"
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-semibold text-sm mb-6 backdrop-blur-sm">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6">
              Parlons de votre <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">projet</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins en communication visuelle
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="scifi-card p-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-100 mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Nom</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Votre nom"
                        required
                        className="bg-slate-800/50 border-white/10 text-slate-100 placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-purple-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="votre@email.com"
                        required
                        className="bg-slate-800/50 border-white/10 text-slate-100 placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-purple-500/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Entreprise</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Nom de votre entreprise"
                      className="bg-slate-800/50 border-white/10 text-slate-100 placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-purple-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Décrivez votre projet..."
                      rows={5}
                      required
                      className="bg-slate-800/50 border-white/10 text-slate-100 placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-purple-500/20 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full scifi-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100 mb-6">Informations de contact</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    N'hésitez pas à nous contacter pour toute question ou demande de devis. 
                    Notre équipe est à votre disposition pour vous accompagner.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "contact@b2santos.com", href: "mailto:contact@b2santos.com", color: "purple" },
                    { icon: Phone, label: "Téléphone", value: "+33 6 00 00 00 00", href: "tel:+33600000000", color: "cyan" },
                    { icon: MapPin, label: "Localisation", value: "France", href: null, color: "purple" }
                  ].map((item, index) => (
                    <div key={index} className="scifi-glass flex items-start gap-4 p-4 rounded-xl">
                      <div className={`w-12 h-12 rounded-full bg-${item.color}-500/10 border border-${item.color}-500/30 flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-100 mb-1">{item.label}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-slate-400 hover:text-cyan-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-400">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-white/10">
                  <h3 className="font-semibold text-slate-100 mb-4">Suivez-nous</h3>
                  <div className="flex gap-4">
                    {['twitter', 'instagram', 'linkedin'].map((social, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <svg className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          {social === 'twitter' && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>}
                          {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>}
                          {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
