
import React from "react";
import { Outfit } from "@/types/outfit";
import OutfitCard from "./OutfitCard";

interface OutfitListProps {
  outfits: Outfit[];
}

const OutfitList: React.FC<OutfitListProps> = ({ outfits }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {outfits.map((outfit, index) => (
        <OutfitCard 
          key={outfit.id} 
          outfit={outfit} 
          className={`transition-all duration-300`}
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
      {outfits.length === 0 && (
        <div className="col-span-3 text-center p-8 text-muted-foreground">
          No outfits found. Generate some Victorian goth inspirations.
        </div>
      )}
    </div>
  );
};

export default OutfitList;
