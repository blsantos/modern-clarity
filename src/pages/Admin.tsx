import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useContent } from "@/contexts/ContentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Save, RotateCcw, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setError("");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Admin CréaVisuel</CardTitle>
          <p className="text-muted-foreground">Connectez-vous pour gérer le contenu</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button type="submit" className="w-full">Se connecter</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const AdminDashboard = () => {
  const { logout } = useAuth();
  const { content, updateContent, resetToDefault } = useContent();
  const [editedContent, setEditedContent] = useState(content);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSave = () => {
    updateContent(editedContent);
    toast({ title: "Contenu sauvegardé", description: "Les modifications ont été enregistrées." });
  };

  const handleReset = () => {
    resetToDefault();
    setEditedContent(content);
    toast({ title: "Contenu réinitialisé", description: "Le contenu par défaut a été restauré." });
  };

  const updateField = (section: string, field: string, value: any) => {
    setEditedContent((prev) => ({
      ...prev,
      [section]: { ...prev[section as keyof typeof prev], [field]: value },
    }));
  };

  const updateNestedField = (section: string, index: number, field: string, value: any) => {
    setEditedContent((prev) => {
      const sectionData = prev[section as keyof typeof prev] as any;
      const items = [...(sectionData.items || sectionData.steps || sectionData.plans || sectionData.stats)];
      items[index] = { ...items[index], [field]: value };
      
      const key = sectionData.items ? "items" : sectionData.steps ? "steps" : sectionData.plans ? "plans" : "stats";
      return { ...prev, [section]: { ...sectionData, [key]: items } };
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Admin CréaVisuel</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate("/")}>
              Voir le site
            </Button>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" /> Réinitialiser
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" /> Sauvegarder
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="flex flex-wrap gap-2">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="howItWorks">Comment ça marche</TabsTrigger>
            <TabsTrigger value="industries">Métiers</TabsTrigger>
            <TabsTrigger value="benefits">Avantages</TabsTrigger>
            <TabsTrigger value="testimonials">Témoignages</TabsTrigger>
            <TabsTrigger value="pricing">Tarifs</TabsTrigger>
            <TabsTrigger value="cta">CTA</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
          </TabsList>

          {/* Hero Tab */}
          <TabsContent value="hero">
            <Card>
              <CardHeader><CardTitle>Section Hero</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Badge</label>
                  <Input value={editedContent.hero.badge} onChange={(e) => updateField("hero", "badge", e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium">Titre</label>
                  <Input value={editedContent.hero.title} onChange={(e) => updateField("hero", "title", e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium">Titre (surligné)</label>
                  <Input value={editedContent.hero.titleHighlight} onChange={(e) => updateField("hero", "titleHighlight", e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea value={editedContent.hero.description} onChange={(e) => updateField("hero", "description", e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">CTA Principal</label>
                    <Input value={editedContent.hero.ctaPrimary} onChange={(e) => updateField("hero", "ctaPrimary", e.target.value)} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">CTA Secondaire</label>
                    <Input value={editedContent.hero.ctaSecondary} onChange={(e) => updateField("hero", "ctaSecondary", e.target.value)} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* How It Works Tab */}
          <TabsContent value="howItWorks">
            <Card>
              <CardHeader><CardTitle>Comment ça marche</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Badge</label>
                    <Input value={editedContent.howItWorks.badge} onChange={(e) => updateField("howItWorks", "badge", e.target.value)} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Titre</label>
                    <Input value={editedContent.howItWorks.title} onChange={(e) => updateField("howItWorks", "title", e.target.value)} />
                  </div>
                </div>
                {editedContent.howItWorks.steps.map((step, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-2">
                    <h4 className="font-medium">Étape {step.step}</h4>
                    <Input value={step.title} onChange={(e) => updateNestedField("howItWorks", i, "title", e.target.value)} placeholder="Titre" />
                    <Textarea value={step.description} onChange={(e) => updateNestedField("howItWorks", i, "description", e.target.value)} placeholder="Description" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Industries Tab */}
          <TabsContent value="industries">
            <Card>
              <CardHeader><CardTitle>Métiers</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium">Titre</label>
                  <Input value={editedContent.industries.title} onChange={(e) => updateField("industries", "title", e.target.value)} />
                </div>
                {editedContent.industries.items.map((industry, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-2">
                    <Input value={industry.name} onChange={(e) => updateNestedField("industries", i, "name", e.target.value)} placeholder="Nom du métier" />
                    <Textarea value={industry.features.join("\n")} onChange={(e) => updateNestedField("industries", i, "features", e.target.value.split("\n"))} placeholder="Fonctionnalités (une par ligne)" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Benefits Tab */}
          <TabsContent value="benefits">
            <Card>
              <CardHeader><CardTitle>Avantages</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium">Titre</label>
                  <Input value={editedContent.benefits.title} onChange={(e) => updateField("benefits", "title", e.target.value)} />
                </div>
                {editedContent.benefits.items.map((benefit, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-2">
                    <Input value={benefit.title} onChange={(e) => updateNestedField("benefits", i, "title", e.target.value)} placeholder="Titre" />
                    <Textarea value={benefit.description} onChange={(e) => updateNestedField("benefits", i, "description", e.target.value)} placeholder="Description" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <Card>
              <CardHeader><CardTitle>Témoignages</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                {editedContent.testimonials.items.map((testimonial, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-2">
                    <Textarea value={testimonial.quote} onChange={(e) => updateNestedField("testimonials", i, "quote", e.target.value)} placeholder="Citation" />
                    <div className="grid grid-cols-2 gap-2">
                      <Input value={testimonial.author} onChange={(e) => updateNestedField("testimonials", i, "author", e.target.value)} placeholder="Auteur" />
                      <Input value={testimonial.business} onChange={(e) => updateNestedField("testimonials", i, "business", e.target.value)} placeholder="Entreprise" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing">
            <Card>
              <CardHeader><CardTitle>Tarifs</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                {editedContent.pricing.plans.map((plan, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <Input value={plan.name} onChange={(e) => updateNestedField("pricing", i, "name", e.target.value)} placeholder="Nom" />
                      <Input value={plan.price} onChange={(e) => updateNestedField("pricing", i, "price", e.target.value)} placeholder="Prix" />
                      <Input value={plan.cta} onChange={(e) => updateNestedField("pricing", i, "cta", e.target.value)} placeholder="CTA" />
                    </div>
                    <Input value={plan.description} onChange={(e) => updateNestedField("pricing", i, "description", e.target.value)} placeholder="Description" />
                    <Textarea value={plan.features.join("\n")} onChange={(e) => updateNestedField("pricing", i, "features", e.target.value.split("\n"))} placeholder="Fonctionnalités (une par ligne)" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* CTA Tab */}
          <TabsContent value="cta">
            <Card>
              <CardHeader><CardTitle>Section CTA</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Titre</label>
                  <Input value={editedContent.cta.title} onChange={(e) => updateField("cta", "title", e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium">Titre (surligné)</label>
                  <Input value={editedContent.cta.titleHighlight} onChange={(e) => updateField("cta", "titleHighlight", e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea value={editedContent.cta.description} onChange={(e) => updateField("cta", "description", e.target.value)} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Footer Tab */}
          <TabsContent value="footer">
            <Card>
              <CardHeader><CardTitle>Footer</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea value={editedContent.footer.description} onChange={(e) => updateField("footer", "description", e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input value={editedContent.footer.email} onChange={(e) => updateField("footer", "email", e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium">Téléphone</label>
                  <Input value={editedContent.footer.phone} onChange={(e) => updateField("footer", "phone", e.target.value)} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

const Admin = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AdminDashboard /> : <AdminLogin />;
};

export default Admin;
