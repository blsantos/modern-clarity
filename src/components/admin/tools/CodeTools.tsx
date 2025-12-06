import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Code, Terminal, Play, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CodeTools = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleExecute = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setOutput(">>> Exécution terminée\nRésultat: OK\n\nTemps d'exécution: 0.234s");
    setLoading(false);
    toast({
      title: "Code exécuté",
      description: "Le script a été exécuté avec succès."
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Éditeur de code */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
            <Code className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Éditeur Python</h3>
            <p className="text-sm text-slate-400">Écrivez et exécutez du code Python</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Langage</Label>
            <Select defaultValue="python">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-orange-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="python">Python 3.11</SelectItem>
                <SelectItem value="python39">Python 3.9</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Code</Label>
            <Textarea 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="# Votre code Python ici
print('Hello, World!')"
              className="bg-slate-900/80 border-white/10 text-white font-mono min-h-[300px] hover:border-orange-500/30 transition-colors"
            />
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 text-orange-400 border-orange-500/30"
            onClick={handleExecute}
            disabled={loading}
          >
            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Play className="w-4 h-4 mr-2" />}
            Exécuter
          </Button>
        </div>
      </div>

      {/* Console de sortie */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
            <Terminal className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Console</h3>
            <p className="text-sm text-slate-400">Sortie de l'exécution</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-slate-950 rounded-lg p-4 min-h-[400px] font-mono text-sm text-green-400 whitespace-pre-wrap border border-white/5 relative overflow-hidden">
            {/* Scan line effect */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,100,0.02)_2px,rgba(0,255,100,0.02)_4px)] pointer-events-none" />
            <div className="relative z-10">
              {output || "En attente d'exécution..."}
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline"
              className="flex-1 bg-slate-900/50 border-white/10 text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-white/20"
              onClick={() => setOutput("")}
            >
              Effacer
            </Button>
            <Button 
              variant="outline"
              className="flex-1 bg-slate-900/50 border-white/10 text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-white/20"
              onClick={() => {
                navigator.clipboard.writeText(output);
                toast({ title: "Copié", description: "Sortie copiée dans le presse-papier" });
              }}
            >
              Copier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeTools;