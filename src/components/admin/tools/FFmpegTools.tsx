import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clapperboard, Settings, Zap, Terminal, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FFmpegTools = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);
  const [customCommand, setCustomCommand] = useState("");
  const [commandOutput, setCommandOutput] = useState("");

  const handleAction = async (action: string) => {
    setLoading(action);
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (action === "Commande personnalisée") {
      setCommandOutput(`$ ffmpeg ${customCommand}
      
ffmpeg version 6.0 Copyright (c) 2000-2023 the FFmpeg developers
built with gcc 12.2.0
configuration: --enable-gpl --enable-libx264 --enable-libx265
Input #0, mp4, from 'input.mp4':
  Duration: 00:02:30.00, start: 0.000000, bitrate: 1500 kb/s
    Stream #0:0: Video: h264 (High)
    Stream #0:1: Audio: aac (LC)
Output #0, mp4, to 'output.mp4':
  Metadata:
    encoder: Lavf60.3.100
frame= 3750 fps=120 q=28.0 Lsize=   25000kB time=00:02:30.00 bitrate=1365.0kbits/s
video:22000kB audio:3000kB subtitle:0kB other streams:0kB global headers:0kB

Conversion terminée avec succès!`);
    }
    setLoading(null);
    toast({
      title: "Action terminée",
      description: `${action} a été exécuté avec succès.`
    });
  };

  const presets = [
    { name: "Compression Web", command: "-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k", color: "from-cyan-500/20 to-blue-500/20" },
    { name: "Qualité maximale", command: "-c:v libx265 -crf 18 -preset slow -c:a copy", color: "from-purple-500/20 to-pink-500/20" },
    { name: "Mobile (720p)", command: "-vf scale=1280:720 -c:v libx264 -crf 23 -c:a aac -b:a 128k", color: "from-green-500/20 to-emerald-500/20" },
    { name: "GIF animé", command: "-vf 'fps=10,scale=480:-1:flags=lanczos' -c:v gif", color: "from-yellow-500/20 to-amber-500/20" },
    { name: "Audio seulement", command: "-vn -c:a libmp3lame -b:a 320k", color: "from-orange-500/20 to-red-500/20" },
  ];

  return (
    <div className="space-y-6">
      {/* Presets rapides */}
      <div className="scifi-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center border border-yellow-500/20">
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Presets rapides</h3>
            <p className="text-sm text-slate-400">Conversions pré-configurées pour les cas d'usage courants</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-5">
          {presets.map((preset) => (
            <button
              key={preset.name}
              className={`scifi-card p-4 text-left hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br ${preset.color}`}
              onClick={() => {
                setCustomCommand(preset.command);
                toast({ title: "Preset appliqué", description: preset.name });
              }}
            >
              <span className="font-medium text-white text-sm block">{preset.name}</span>
              <span className="text-xs text-slate-400 mt-1 block truncate">{preset.command.slice(0, 25)}...</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Conversion de format */}
        <div className="scifi-card p-6 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
              <Clapperboard className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Conversion de format</h3>
              <p className="text-sm text-slate-400">Convertir entre différents formats vidéo</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Fichier source</Label>
              <Input 
                type="file" 
                accept="video/*,audio/*"
                className="bg-slate-900/50 border-white/10 text-white file:bg-indigo-500/20 file:text-indigo-400 file:border-0 file:rounded-md hover:border-indigo-500/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Format de sortie</Label>
              <Select defaultValue="mp4">
                <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-indigo-500/30 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  <SelectItem value="mp4">MP4 (H.264)</SelectItem>
                  <SelectItem value="webm">WebM (VP9)</SelectItem>
                  <SelectItem value="mov">MOV (ProRes)</SelectItem>
                  <SelectItem value="mkv">MKV</SelectItem>
                  <SelectItem value="avi">AVI</SelectItem>
                  <SelectItem value="gif">GIF</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Codec vidéo</Label>
              <Select defaultValue="libx264">
                <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-indigo-500/30 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  <SelectItem value="libx264">H.264 (libx264)</SelectItem>
                  <SelectItem value="libx265">H.265/HEVC (libx265)</SelectItem>
                  <SelectItem value="libvpx-vp9">VP9</SelectItem>
                  <SelectItem value="copy">Copier (sans ré-encodage)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              className="w-full scifi-button bg-gradient-to-r from-indigo-500/20 to-violet-500/20 hover:from-indigo-500/30 hover:to-violet-500/30 text-indigo-400 border-indigo-500/30"
              onClick={() => handleAction("Conversion format")}
              disabled={loading === "Conversion format"}
            >
              {loading === "Conversion format" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Convertir
            </Button>
          </div>
        </div>

        {/* Compression */}
        <div className="scifi-card p-6 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/20 group-hover:border-teal-500/40 transition-all duration-300">
              <Settings className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Compression avancée</h3>
              <p className="text-sm text-slate-400">Réduire la taille des fichiers</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Fichier source</Label>
              <Input 
                type="file" 
                accept="video/*"
                className="bg-slate-900/50 border-white/10 text-white file:bg-teal-500/20 file:text-teal-400 file:border-0 file:rounded-md hover:border-teal-500/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">CRF (Qualité: 0=lossless, 51=pire)</Label>
              <Input 
                type="number" 
                defaultValue="23"
                min="0"
                max="51"
                className="bg-slate-900/50 border-white/10 text-white hover:border-teal-500/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Preset</Label>
              <Select defaultValue="medium">
                <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-teal-500/30 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  <SelectItem value="ultrafast">Ultrafast</SelectItem>
                  <SelectItem value="fast">Fast</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="slow">Slow (meilleure qualité)</SelectItem>
                  <SelectItem value="veryslow">Very slow (qualité max)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Bitrate max (optionnel)</Label>
              <Input 
                placeholder="ex: 2M"
                className="bg-slate-900/50 border-white/10 text-white hover:border-teal-500/30 transition-colors"
              />
            </div>
            <Button 
              className="w-full scifi-button bg-gradient-to-r from-teal-500/20 to-cyan-500/20 hover:from-teal-500/30 hover:to-cyan-500/30 text-teal-400 border-teal-500/30"
              onClick={() => handleAction("Compression")}
              disabled={loading === "Compression"}
            >
              {loading === "Compression" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Compresser
            </Button>
          </div>
        </div>

        {/* Commande personnalisée */}
        <div className="scifi-card p-6 group lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
              <Terminal className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Commande FFmpeg personnalisée</h3>
              <p className="text-sm text-slate-400">Exécuter une commande FFmpeg personnalisée</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-300 text-sm">Fichier d'entrée</Label>
                <Input 
                  type="file" 
                  accept="video/*,audio/*,image/*"
                  className="bg-slate-900/50 border-white/10 text-white file:bg-green-500/20 file:text-green-400 file:border-0 file:rounded-md hover:border-green-500/30 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-300 text-sm">Arguments FFmpeg</Label>
                <Textarea 
                  value={customCommand}
                  onChange={(e) => setCustomCommand(e.target.value)}
                  placeholder="-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4"
                  className="bg-slate-900/80 border-white/10 text-white font-mono min-h-[120px] hover:border-green-500/30 transition-colors"
                />
              </div>
              <Button 
                className="w-full scifi-button bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-400 border-green-500/30"
                onClick={() => handleAction("Commande personnalisée")}
                disabled={loading === "Commande personnalisée"}
              >
                {loading === "Commande personnalisée" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Exécuter
              </Button>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Sortie</Label>
              <div className="bg-slate-950 rounded-lg p-4 min-h-[220px] font-mono text-xs text-green-400 whitespace-pre-wrap overflow-auto border border-white/5 relative">
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,100,0.02)_2px,rgba(0,255,100,0.02)_4px)] pointer-events-none" />
                <div className="relative z-10">
                  {commandOutput || "En attente d'exécution..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FFmpegTools;