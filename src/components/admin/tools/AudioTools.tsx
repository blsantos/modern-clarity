import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, FileAudio, Video, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AudioTools = () => {
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Concaténation Audio */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-primary/20 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
            <Music className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Concaténation Audio</h3>
            <p className="text-sm text-slate-400">Fusionner plusieurs fichiers audio</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Fichiers audio</Label>
            <Input 
              type="file" 
              multiple 
              accept="audio/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-cyan-500/20 file:text-cyan-400 file:border-0 file:rounded-md hover:border-cyan-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Format de sortie</Label>
            <Select defaultValue="mp3">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-cyan-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="mp3">MP3</SelectItem>
                <SelectItem value="wav">WAV</SelectItem>
                <SelectItem value="ogg">OGG</SelectItem>
                <SelectItem value="flac">FLAC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-cyan-500/20 to-primary/20 hover:from-cyan-500/30 hover:to-primary/30 text-cyan-400 border-cyan-500/30"
            onClick={() => handleAction("Concaténation")}
            disabled={loading === "Concaténation"}
          >
            {loading === "Concaténation" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Fusionner
          </Button>
        </div>
      </div>

      {/* Conversion de formats */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
            <FileAudio className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Conversion de formats</h3>
            <p className="text-sm text-slate-400">Convertir entre différents formats audio</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Fichier source</Label>
            <Input 
              type="file" 
              accept="audio/*"
              className="bg-slate-900/50 border-white/10 text-white file:bg-purple-500/20 file:text-purple-400 file:border-0 file:rounded-md hover:border-purple-500/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Format cible</Label>
            <Select defaultValue="mp3">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="mp3">MP3</SelectItem>
                <SelectItem value="wav">WAV</SelectItem>
                <SelectItem value="ogg">OGG</SelectItem>
                <SelectItem value="flac">FLAC</SelectItem>
                <SelectItem value="aac">AAC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300 text-sm">Bitrate</Label>
            <Select defaultValue="192">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="128">128 kbps</SelectItem>
                <SelectItem value="192">192 kbps</SelectItem>
                <SelectItem value="256">256 kbps</SelectItem>
                <SelectItem value="320">320 kbps</SelectItem>
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

      {/* Extraction audio depuis vidéo */}
      <div className="scifi-card p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
            <Video className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Extraction Audio</h3>
            <p className="text-sm text-slate-400">Extraire l'audio d'une vidéo</p>
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
            <Label className="text-slate-300 text-sm">Format audio</Label>
            <Select defaultValue="mp3">
              <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-green-500/30 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="mp3">MP3</SelectItem>
                <SelectItem value="wav">WAV</SelectItem>
                <SelectItem value="aac">AAC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full scifi-button bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-400 border-green-500/30"
            onClick={() => handleAction("Extraction")}
            disabled={loading === "Extraction"}
          >
            {loading === "Extraction" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Extraire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioTools;