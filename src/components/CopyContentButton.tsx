import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const CopyContentButton = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      const response = await fetch('/llms.txt');
      if (!response.ok) {
        throw new Error('Nao foi possivel carregar o conteudo');
      }
      const pageContent = await response.text();

      await navigator.clipboard.writeText(pageContent);
      setCopied(true);
      toast({
        title: "Conteudo copiado!",
        description: "Todo o conteudo da pagina foi copiado para a area de transferencia.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Nao foi possivel copiar o conteudo.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      onClick={handleCopy}
      size="icon"
      className="fixed top-20 right-4 z-40 bg-card hover:bg-amber/20 text-amber border border-amber/20 shadow-lg transition-all duration-300 rounded-sm"
      title="Copiar todo o conteudo da pagina"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
};
