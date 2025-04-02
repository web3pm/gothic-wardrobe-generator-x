
import React from "react";
import { Outfit } from "@/types/outfit";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface OutfitCardProps {
  outfit: Outfit;
  className?: string;
}

const OutfitCard: React.FC<OutfitCardProps> = ({ outfit, className }) => {
  return (
    <Card className={`gothic-card animate-fade-in ${className}`}>
      <CardHeader className="border-b border-border pb-2 bg-black/20">
        <Badge className="mb-2 bg-accent hover:bg-accent w-fit">{outfit.occasion}</Badge>
        <CardTitle className="text-xl font-serif">{outfit.top.name} & {outfit.bottom.name}</CardTitle>
        <CardDescription className="italic text-muted-foreground">{outfit.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4 space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-1 text-accent">Top</h3>
          <p>{outfit.top.description}</p>
        </div>
        
        <Separator className="bg-border/50" />
        
        <div>
          <h3 className="text-lg font-semibold mb-1 text-accent">Bottom</h3>
          <p>{outfit.bottom.description}</p>
        </div>
        
        <Separator className="bg-border/50" />
        
        <div>
          <h3 className="text-lg font-semibold mb-1 text-accent">Accessories</h3>
          <ul className="list-disc pl-5 space-y-2">
            {outfit.accessories.map((accessory, index) => (
              <li key={index}>
                <span className="font-medium">{accessory.name}</span>: {accessory.description}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OutfitCard;
