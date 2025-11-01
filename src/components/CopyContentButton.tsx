import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const CopyContentButton = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      // Busca o conteúdo do arquivo llm.txt
      const response = await fetch('/llm.txt');
      if (!response.ok) {
        throw new Error('Não foi possível carregar o conteúdo');
      }
      const pageContent = await response.text();
      
      await navigator.clipboard.writeText(pageContent);
      setCopied(true);
      toast({
        title: "Conteúdo copiado!",
        description: "Todo o conteúdo da página foi copiado para a área de transferência.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o conteúdo.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      onClick={handleCopy}
      size="icon"
      className="fixed top-4 right-4 z-50 bg-matrix/80 hover:bg-matrix text-terminal border border-matrix shadow-lg hover:shadow-[var(--glow-green)] transition-all duration-300 backdrop-blur-sm"
      title="Copiar todo o conteúdo da página"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
};