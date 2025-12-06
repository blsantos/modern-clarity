import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Cloud, HardDrive, FolderOpen, Upload, Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StorageTools = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState("s3");

  const handleAction = async (action: string) => {
    setLoading(action);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(null);
    toast({
      title: "Action terminée",
      description: `${action} a été exécuté avec succès.`
    });
  };

  const providers = [
    { id: "s3", name: "Amazon S3", icon: Cloud, color: "from-orange-500/20 to-yellow-500/20", borderColor: "border-orange-500", textColor: "text-orange-400" },
    { id: "gcs", name: "Google Cloud", icon: Cloud, color: "from-blue-500/20 to-cyan-500/20", borderColor: "border-blue-500", textColor: "text-blue-400" },
    { id: "gdrive", name: "Google Drive", icon: FolderOpen, color: "from-green-500/20 to-emerald-500/20", borderColor: "border-green-500", textColor: "text-green-400" },
    { id: "dropbox", name: "Dropbox", icon: HardDrive, color: "from-blue-600/20 to-indigo-500/20", borderColor: "border-blue-600", textColor: "text-blue-400" },
  ];

  const currentProvider = providers.find(p => p.id === selectedProvider);

  return (
    <div className="space-y-6">
      {/* Provider Selection */}
      <div className="grid gap-4 md:grid-cols-4">
        {providers.map((provider) => (
          <div 
            key={provider.id}
            className={`scifi-card p-4 cursor-pointer flex items-center gap-3 transition-all duration-300 ${
              selectedProvider === provider.id 
                ? `ring-2 ring-cyan-500/50 ${provider.borderColor}/30` 
                : 'hover:border-white/20'
            }`}
            onClick={() => setSelectedProvider(provider.id)}
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${provider.color} flex items-center justify-center border ${selectedProvider === provider.id ? provider.borderColor + '/50' : 'border-white/10'}`}>
              <provider.icon className={`w-5 h-5 ${selectedProvider === provider.id ? provider.textColor : 'text-slate-400'}`} />
            </div>
            <span className={`font-medium ${selectedProvider === provider.id ? 'text-white' : 'text-slate-400'}`}>
              {provider.name}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Upload */}
        <div className="scifi-card p-6 group">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentProvider?.color} flex items-center justify-center border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300`}>
              <Upload className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Upload vers {currentProvider?.name}</h3>
              <p className="text-sm text-slate-400">Téléverser des fichiers vers le cloud</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Fichiers à uploader</Label>
              <Input 
                type="file" 
                multiple
                className="bg-slate-900/50 border-white/10 text-white file:bg-cyan-500/20 file:text-cyan-400 file:border-0 file:rounded-md hover:border-cyan-500/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Bucket / Dossier</Label>
              <Input 
                placeholder="mon-bucket/dossier"
                className="bg-slate-900/50 border-white/10 text-white hover:border-cyan-500/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Accès</Label>
              <Select defaultValue="private">
                <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-cyan-500/30 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  <SelectItem value="private">Privé</SelectItem>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="authenticated">Authentifié</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              className="w-full scifi-button bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-400 border-cyan-500/30"
              onClick={() => handleAction("Upload")}
              disabled={loading === "Upload"}
            >
              {loading === "Upload" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
              Uploader
            </Button>
          </div>
        </div>

        {/* Download */}
        <div className="scifi-card p-6 group">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentProvider?.color} flex items-center justify-center border border-white/10 group-hover:border-green-500/40 transition-all duration-300`}>
              <Download className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Télécharger depuis {currentProvider?.name}</h3>
              <p className="text-sm text-slate-400">Récupérer des fichiers du cloud</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">URL ou chemin du fichier</Label>
              <Input 
                placeholder="s3://bucket/fichier.mp4"
                className="bg-slate-900/50 border-white/10 text-white hover:border-green-500/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300 text-sm">Destination locale</Label>
              <Input 
                placeholder="/downloads/"
                className="bg-slate-900/50 border-white/10 text-white hover:border-green-500/30 transition-colors"
              />
            </div>
            <Button 
              className="w-full scifi-button bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-400 border-green-500/30"
              onClick={() => handleAction("Download")}
              disabled={loading === "Download"}
            >
              {loading === "Download" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
              Télécharger
            </Button>
          </div>
        </div>

        {/* Configuration */}
        <div className="scifi-card p-6 group md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentProvider?.color} flex items-center justify-center border border-white/10 group-hover:border-purple-500/40 transition-all duration-300`}>
              <Cloud className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Configuration {currentProvider?.name}</h3>
              <p className="text-sm text-slate-400">Configurer les credentials et paramètres</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {selectedProvider === "s3" && (
              <>
                <div className="space-y-2">
                  <Label className="text-slate-300 text-sm">Access Key ID</Label>
                  <Input 
                    type="password"
                    placeholder="AKIAIOSFODNN7EXAMPLE"
                    className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300 text-sm">Secret Access Key</Label>
                  <Input 
                    type="password"
                    placeholder="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
                    className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300 text-sm">Région</Label>
                  <Select defaultValue="eu-west-1">
                    <SelectTrigger className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-white/10">
                      <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                      <SelectItem value="eu-west-1">EU (Ireland)</SelectItem>
                      <SelectItem value="eu-west-3">EU (Paris)</SelectItem>
                      <SelectItem value="ap-northeast-1">Asia Pacific (Tokyo)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300 text-sm">Bucket par défaut</Label>
                  <Input 
                    placeholder="mon-bucket"
                    className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors"
                  />
                </div>
              </>
            )}
            {(selectedProvider === "gdrive" || selectedProvider === "gcs") && (
              <div className="space-y-2 md:col-span-2">
                <Label className="text-slate-300 text-sm">Fichier de credentials JSON</Label>
                <Input 
                  type="file"
                  accept=".json"
                  className="bg-slate-900/50 border-white/10 text-white file:bg-purple-500/20 file:text-purple-400 file:border-0 file:rounded-md hover:border-purple-500/30 transition-colors"
                />
              </div>
            )}
            {selectedProvider === "dropbox" && (
              <div className="space-y-2 md:col-span-2">
                <Label className="text-slate-300 text-sm">Access Token</Label>
                <Input 
                  type="password"
                  placeholder="sl.xxxxx"
                  className="bg-slate-900/50 border-white/10 text-white hover:border-purple-500/30 transition-colors"
                />
              </div>
            )}
          </div>
          <Button 
            className="mt-4 scifi-button bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-400 border-purple-500/30"
            onClick={() => handleAction("Configuration")}
            disabled={loading === "Configuration"}
          >
            {loading === "Configuration" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Sauvegarder la configuration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StorageTools;