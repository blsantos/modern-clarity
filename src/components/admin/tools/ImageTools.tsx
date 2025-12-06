import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ImageIcon, Maximize, RefreshCw, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ImageTools = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);
  const [quality, setQuality] = useState([80]);

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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Redimensionnement */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
            <Maximize className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Redimensionnement</h3>
            <p className="text-sm text-slate-400">Modifier les dimensions d'une image</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Image source</Label>
            <Input 
              type="file" 
              accept="image/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-green-500/20 file:text-green-400 file:border-0 file:rounded-md hover:border-green-500/30 transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Largeur</Label>
              <Input 
                type="number" 
                placeholder="1920"
                className="bg-slate-900/50 border-white/10 text-white hover:border-green-500/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Hauteur</Label>
              <Input 
                type="number" 
                placeholder="1080"
                className="bg-slate-900/50 border-white/10 text-white hover:border-green-500/30 transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Mode</Label>
            <Select defaultValue="contain">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-green-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="contain">Contenir</SelectItem>
                <SelectItem value="cover">Couvrir</SelectItem>
                <SelectItem value="fill">Remplir</SelectItem>
                <SelectItem value="crop">Recadrer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-400 border-green-500/30"
            onClick={() => handleAction("Redimensionnement")}
            disabled={loading === "Redimensionnement"}
          >
            {loading === "Redimensionnement" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Redimensionner
          </Button>
        </div>
      </div>

      {/* Conversion de formats */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
            <RefreshCw className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Conversion</h3>
            <p className="text-sm text-slate-400">Convertir entre formats d'image</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Image source</Label>
            <Input 
              type="file" 
              accept="image/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-purple-500/20 file:text-purple-400 file:border-0 file:rounded-md hover:border-purple-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Format cible</Label>
            <Select defaultValue="webp">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="jpg">JPEG</SelectItem>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="webp">WebP</SelectItem>
                <SelectItem value="gif">GIF</SelectItem>
                <SelectItem value="avif">AVIF</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-400 border-purple-500/30"
            onClick={() => handleAction("Conversion")}
            disabled={loading === "Conversion"}
          >
            {loading === "Conversion" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Convertir
          </Button>
        </div>
      </div>

      {/* Optimisation */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
            <ImageIcon className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Optimisation</h3>
            <p className="text-sm text-slate-400">Compresser et optimiser une image</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Image source</Label>
            <Input 
              type="file" 
              accept="image/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-cyan-500/20 file:text-cyan-400 file:border-0 file:rounded-md hover:border-cyan-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Qualité: {quality[0]}%</Label>
            <Slider
              value={quality}
              onValueChange={setQuality}
              min={10}
              max={100}
              step={5}
              className="py-2"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Options</Label>
            <Select defaultValue="balanced">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-cyan-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="lossless">Sans perte</SelectItem>
                <SelectItem value="balanced">Équilibré</SelectItem>
                <SelectItem value="aggressive">Agressif</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-400 border-cyan-500/30"
            onClick={() => handleAction("Optimisation")}
            disabled={loading === "Optimisation"}
          >
            {loading === "Optimisation" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Optimiser
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageTools;