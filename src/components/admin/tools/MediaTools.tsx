import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mic, Languages, Captions, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MediaTools = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);
  const [transcription, setTranscription] = useState("");

  const handleAction = async (action: string) => {
    setLoading(action);
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (action === "Transcription") {
      setTranscription("Ceci est un exemple de transcription générée automatiquement à partir de votre fichier audio ou vidéo. Le texte sera formaté avec les timestamps correspondants.");
    }
    setLoading(null);
    toast({
      title: "Action terminée",
      description: `${action} a été exécuté avec succès.`
    });
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Transcription */}
      <div className="scifi-card p-6 group lg:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center border border-yellow-500/20 group-hover:border-yellow-500/40 transition-all duration-300">
            <Mic className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Transcription Audio/Vidéo</h3>
            <p className="text-sm text-slate-400">Convertir l'audio en texte avec IA</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Fichier média</Label>
              <Input 
                type="file" 
                accept="audio/*,video/*"
                className="bg-slate-900/50 border-white/10 text-white file:bg-yellow-500/20 file:text-yellow-400 file:border-0 file:rounded-md hover:border-yellow-500/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Langue</Label>
              <Select defaultValue="fr">
                <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-yellow-500/30 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">Anglais</SelectItem>
                  <SelectItem value="es">Espagnol</SelectItem>
                  <SelectItem value="de">Allemand</SelectItem>
                  <SelectItem value="auto">Auto-détection</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Modèle</Label>
              <Select defaultValue="whisper">
                <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-yellow-500/30 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  <SelectItem value="whisper">Whisper (OpenAI)</SelectItem>
                  <SelectItem value="whisper-large">Whisper Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              className="w-full scifi-button bg-gradient-to-r from-yellow-500/20 to-amber-500/20 hover:from-yellow-500/30 hover:to-amber-500/30 text-yellow-400 border-yellow-500/30"
              onClick={() => handleAction("Transcription")}
              disabled={loading === "Transcription"}
            >
              {loading === "Transcription" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Transcrire
            </Button>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Résultat</Label>
            <Textarea 
              value={transcription}
              readOnly
              placeholder="La transcription apparaîtra ici..."
              className="bg-slate-900/80 border-white/10 text-white min-h-[200px]"
            />
          </div>
        </div>
      </div>

      {/* Traduction */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
            <Languages className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Traduction</h3>
            <p className="text-sm text-slate-400">Traduire du contenu média</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Fichier source</Label>
            <Input 
              type="file" 
              accept="audio/*,video/*,.srt,.vtt"
              className="bg-slate-900/50 border-white/10 text-white file:bg-cyan-500/20 file:text-cyan-400 file:border-0 file:rounded-md hover:border-cyan-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Langue source</Label>
            <Select defaultValue="auto">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-cyan-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="auto">Auto-détection</SelectItem>
                <SelectItem value="en">Anglais</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="es">Espagnol</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Langue cible</Label>
            <Select defaultValue="fr">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-cyan-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="en">Anglais</SelectItem>
                <SelectItem value="es">Espagnol</SelectItem>
                <SelectItem value="de">Allemand</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-400 border-cyan-500/30"
            onClick={() => handleAction("Traduction")}
            disabled={loading === "Traduction"}
          >
            {loading === "Traduction" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Traduire
          </Button>
        </div>
      </div>

      {/* Génération de captions */}
      <div className="scifi-card p-6 group lg:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
            <Captions className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Génération de Captions</h3>
            <p className="text-sm text-slate-400">Générer automatiquement des sous-titres</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Fichier vidéo</Label>
            <Input 
              type="file" 
              accept="video/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-purple-500/20 file:text-purple-400 file:border-0 file:rounded-md hover:border-purple-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Format de sortie</Label>
            <Select defaultValue="srt">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="srt">SRT</SelectItem>
                <SelectItem value="vtt">VTT</SelectItem>
                <SelectItem value="ass">ASS</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Options</Label>
            <Select defaultValue="timestamps">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="timestamps">Avec timestamps</SelectItem>
                <SelectItem value="speakers">Avec locuteurs</SelectItem>
                <SelectItem value="both">Timestamps + Locuteurs</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button 
          className="mt-4 scifi-button bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-400 border-purple-500/30"
          onClick={() => handleAction("Génération captions")}
          disabled={loading === "Génération captions"}
        >
          {loading === "Génération captions" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
          Générer les captions
        </Button>
      </div>
    </div>
  );
};

export default MediaTools;