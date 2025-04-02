
import React, { useState } from "react";
import OutfitList from "@/components/OutfitList";
import OutfitGenerator from "@/components/OutfitGenerator";
import { Outfit } from "@/types/outfit";
import initialOutfits from "@/data/outfits";
import { generateRandomOutfit } from "@/utils/outfitGenerator";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [outfits, setOutfits] = useState<Outfit[]>(initialOutfits);

  const handleGenerateOutfit = () => {
    const newOutfit = generateRandomOutfit();
    setOutfits(prevOutfits => [newOutfit, ...prevOutfits]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-8 px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-2 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary animate-pulse-slow">
            Victorian Gothic Wardrobe
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the dark elegance of Victorian gothic fashion. Generate unique outfit combinations for your next macabre occasion.
          </p>
        </div>
      </header>
      
      <Separator className="max-w-4xl mx-auto bg-border/30" />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-8">
          <OutfitGenerator onGenerateOutfit={handleGenerateOutfit} />
        </section>
        
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif">
              <span className="ornament">❧</span>
              Your Outfits
              <span className="ornament">❧</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              {outfits.length} ensembles
            </p>
          </div>
          <OutfitList outfits={outfits} />
        </section>
      </main>
      
      <footer className="py-6 px-4 border-t border-border/30 text-center text-muted-foreground">
        <p className="text-sm">Victorian Gothic Wardrobe Generator</p>
      </footer>
    </div>
  );
};

export default Index;
