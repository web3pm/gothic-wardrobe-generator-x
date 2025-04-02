
export interface OutfitPart {
  name: string;
  description: string;
}

export interface Outfit {
  id: string;
  top: OutfitPart;
  bottom: OutfitPart;
  accessories: OutfitPart[];
  occasion: string;
  description: string;
}
