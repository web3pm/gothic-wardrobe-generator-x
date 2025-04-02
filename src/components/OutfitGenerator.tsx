
import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { generateRandomOutfit } from "@/utils/outfitGenerator";

interface OutfitGeneratorProps {
  onGenerateOutfit: () => void;
}

const OutfitGenerator: React.FC<OutfitGeneratorProps> = ({ onGenerateOutfit }) => {
  const { toast } = useToast();
  
  const handleGenerate = () => {
    onGenerateOutfit();
    toast({
      title: "New outfit generated",
      description: "Your Victorian goth ensemble awaits...",
      duration: 3000,
    });
  };
  
  return (
    <div className="flex flex-col items-center space-y-4">
      <Button 
        onClick={handleGenerate}
        className="gothic-button group"
      >
        <span className="ornament group-hover:opacity-70">❧</span>
        Generate New Outfit
        <span className="ornament group-hover:opacity-70">❧</span>
      </Button>
      <p className="text-muted-foreground text-sm italic px-4 text-center max-w-md">
        Discover unique Victorian goth ensembles perfect for your next haunting occasion
      </p>
    </div>
  );
};

export default OutfitGenerator;
