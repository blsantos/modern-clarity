import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Film, Image, Subtitles, Layers, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VideoTools = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);

  const handleAction = async (action: string) => {
    setLoading(action);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(null);
    toast({
      title: "Action terminée",
      description: `${action} a été exécuté avec succès.`
    });
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Combinaison de vidéos */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
            <Layers className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Combinaison de vidéos</h3>
            <p className="text-sm text-slate-400">Fusionner plusieurs vidéos en une seule</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Fichiers vidéo</Label>
            <Input 
              type="file" 
              multiple 
              accept="video/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-purple-500/20 file:text-purple-400 file:border-0 file:rounded-md hover:border-purple-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Transition</Label>
            <Select defaultValue="none">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="none">Aucune</SelectItem>
                <SelectItem value="fade">Fondu</SelectItem>
                <SelectItem value="dissolve">Dissolution</SelectItem>
                <SelectItem value="wipe">Balayage</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-400 border-purple-500/30"
            onClick={() => handleAction("Combinaison")}
            disabled={loading === "Combinaison"}
          >
            {loading === "Combinaison" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Combiner
          </Button>
        </div>
      </div>

      {/* Extraction de frames clés */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
            <Image className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Extraction de frames</h3>
            <p className="text-sm text-slate-400">Extraire les images clés d'une vidéo</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Fichier vidéo</Label>
            <Input 
              type="file" 
              accept="video/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-green-500/20 file:text-green-400 file:border-0 file:rounded-md hover:border-green-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Intervalle (secondes)</Label>
            <Input 
              type="number" 
              defaultValue="1"
              min="0.1"
              step="0.1"
              className="bg-slate-900/50 border-white/10 text-white hover:border-green-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Format image</Label>
            <Select defaultValue="jpg">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-green-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="jpg">JPEG</SelectItem>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="webp">WebP</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-400 border-green-500/30"
            onClick={() => handleAction("Extraction frames")}
            disabled={loading === "Extraction frames"}
          >
            {loading === "Extraction frames" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Extraire
          </Button>
        </div>
      </div>

      {/* Ajout de sous-titres */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center border border-yellow-500/20 group-hover:border-yellow-500/40 transition-all duration-300">
            <Subtitles className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Sous-titres</h3>
            <p className="text-sm text-slate-400">Ajouter des sous-titres à une vidéo</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Fichier vidéo</Label>
            <Input 
              type="file" 
              accept="video/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-yellow-500/20 file:text-yellow-400 file:border-0 file:rounded-md hover:border-yellow-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Fichier SRT/VTT</Label>
            <Input 
              type="file" 
              accept=".srt,.vtt"
              className="bg-slate-900/50 border-white/10 text-white file:bg-yellow-500/20 file:text-yellow-400 file:border-0 file:rounded-md hover:border-yellow-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Style</Label>
            <Select defaultValue="default">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-yellow-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="default">Par défaut</SelectItem>
                <SelectItem value="bold">Gras</SelectItem>
                <SelectItem value="outline">Contour</SelectItem>
                <SelectItem value="shadow">Ombre</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-yellow-500/20 to-amber-500/20 hover:from-yellow-500/30 hover:to-amber-500/30 text-yellow-400 border-yellow-500/30"
            onClick={() => handleAction("Sous-titres")}
            disabled={loading === "Sous-titres"}
          >
            {loading === "Sous-titres" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Ajouter
          </Button>
        </div>
      </div>

      {/* Image vers vidéo */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
            <Film className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Image vers Vidéo</h3>
            <p className="text-sm text-slate-400">Créer une vidéo à partir d'images</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Images</Label>
            <Input 
              type="file" 
              multiple 
              accept="image/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-cyan-500/20 file:text-cyan-400 file:border-0 file:rounded-md hover:border-cyan-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Durée par image (sec)</Label>
            <Input 
              type="number" 
              defaultValue="2"
              min="0.5"
              step="0.5"
              className="bg-slate-900/50 border-white/10 text-white hover:border-cyan-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">FPS</Label>
            <Select defaultValue="30">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-cyan-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="24">24 fps</SelectItem>
                <SelectItem value="30">30 fps</SelectItem>
                <SelectItem value="60">60 fps</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-400 border-cyan-500/30"
            onClick={() => handleAction("Image vers vidéo")}
            disabled={loading === "Image vers vidéo"}
          >
            {loading === "Image vers vidéo" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Créer vidéo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoTools;