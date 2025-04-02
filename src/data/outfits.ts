
import { Outfit } from "@/types/outfit";
import { tops, bottoms, accessories, occasions, descriptionTemplates } from "./outfitParts";
import { generateRandomOutfit } from "@/utils/outfitGenerator";

// Generate some initial outfits
const initialOutfits: Outfit[] = [
  {
    id: "1",
    top: tops[0],
    bottom: bottoms[0],
    accessories: [accessories[0], accessories[4], accessories[8]],
    occasion: occasions[0],
    description: descriptionTemplates[0]
  },
  {
    id: "2",
    top: tops[1],
    bottom: bottoms[2],
    accessories: [accessories[1], accessories[5], accessories[7]],
    occasion: occasions[2],
    description: descriptionTemplates[1]
  },
  {
    id: "3",
    top: tops[3],
    bottom: bottoms[4],
    accessories: [accessories[2], accessories[3], accessories[6]],
    occasion: occasions[4],
    description: descriptionTemplates[3]
  }
];

export default initialOutfits;
