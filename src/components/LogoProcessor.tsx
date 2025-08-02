import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const processLogo = async () => {
    setIsProcessing(true);
    try {
      // Load the current logo
      const response = await fetch('/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png');
      const blob = await response.blob();
      
      // Convert to image element
      const imageElement = await loadImage(blob);
      
      // Remove background
      toast.info('Processando logo... Isso pode levar alguns segundos.');
      const processedBlob = await removeBackground(imageElement);
      
      // Create download link
      const url = URL.createObjectURL(processedBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'hidrosphera-logo-transparent.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success('Logo processada com sucesso! Download iniciado.');
    } catch (error) {
      console.error('Error processing logo:', error);
      toast.error('Erro ao processar a logo. Tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={processLogo} 
        disabled={isProcessing}
        variant="default"
        size="sm"
      >
        {isProcessing ? 'Processando...' : 'Remover Fundo da Logo'}
      </Button>
    </div>
  );
};

export default LogoProcessor;