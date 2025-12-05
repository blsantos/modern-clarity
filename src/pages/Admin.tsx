import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useContent } from "@/contexts/ContentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Lock, Home, Save, Eye, Monitor, Tablet, Smartphone, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GrapesEditor from "@/components/admin/GrapesEditor";
import "@/components/admin/GrapesEditorStyles.css";

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
  const { content } = useContent();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [editorKey, setEditorKey] = useState(0);

  const handleSave = (html: string, css: string) => {
    localStorage.setItem("creavisuel-gjs-html", html);
    localStorage.setItem("creavisuel-gjs-css", css);
    toast({ 
      title: "Page sauvegardée", 
      description: "Vos modifications ont été enregistrées localement." 
    });
  };

  const handleReset = () => {
    localStorage.removeItem("creavisuel-gjs-html");
    localStorage.removeItem("creavisuel-gjs-css");
    localStorage.removeItem("creavisuel-gjs-components");
    localStorage.removeItem("creavisuel-gjs-styles");
    setEditorKey(prev => prev + 1);
    toast({ 
      title: "Éditeur réinitialisé", 
      description: "Le contenu original a été restauré." 
    });
  };

  const handlePreview = () => {
    window.open("/", "_blank");
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#1a1a1a]">
      {/* Top Toolbar */}
      <header className="h-12 bg-[#2a2a2a] border-b border-[#3a3a3a] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-white font-semibold text-sm">CréaVisuel Editor</h1>
          <div className="h-4 w-px bg-[#4a4a4a]" />
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-2 text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
              title="Desktop"
            >
              <Monitor className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-2 text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
              title="Tablet"
            >
              <Tablet className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-2 text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
              title="Mobile"
            >
              <Smartphone className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-gray-300 hover:text-white hover:bg-[#3a3a3a]"
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4 mr-2" />
            Site
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-gray-300 hover:text-white hover:bg-[#3a3a3a]"
            onClick={handlePreview}
          >
            <Eye className="w-4 h-4 mr-2" />
            Aperçu
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-orange-400 hover:text-orange-300 hover:bg-[#3a3a3a]"
            onClick={handleReset}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button 
            size="sm" 
            className="h-8 bg-primary hover:bg-primary/90"
            onClick={() => {
              toast({ 
                title: "Sauvegarde", 
                description: "Utilisez Ctrl+S pour sauvegarder vos modifications." 
              });
            }}
          >
            <Save className="w-4 h-4 mr-2" />
            Publier
          </Button>
          <div className="h-4 w-px bg-[#4a4a4a] mx-2" />
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-gray-400 hover:text-white hover:bg-[#3a3a3a]"
            onClick={logout}
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Editor */}
      <div className="flex-1 overflow-hidden">
        <GrapesEditor key={editorKey} onSave={handleSave} initialContent={content} />
      </div>
    </div>
  );
};

const Admin = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AdminDashboard /> : <AdminLogin />;
};

export default Admin;
