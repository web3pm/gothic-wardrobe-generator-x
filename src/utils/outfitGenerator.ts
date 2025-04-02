
import { Outfit, OutfitPart } from "@/types/outfit";
import { tops, bottoms, accessories, occasions, descriptionTemplates } from "@/data/outfitParts";

// Function to generate a unique ID
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
};

// Function to randomly select an item from an array
const getRandomItem = <T>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

// Function to get multiple random accessories without duplicates
const getRandomAccessories = (count: number): OutfitPart[] => {
  if (count >= accessories.length) {
    return [...accessories];
  }

  const shuffled = [...accessories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to generate a random outfit
export const generateRandomOutfit = (): Outfit => {
  const top = getRandomItem(tops);
  const bottom = getRandomItem(bottoms);
  const selectedAccessories = getRandomAccessories(3); // Select 3 random accessories
  const occasion = getRandomItem(occasions);
  const description = getRandomItem(descriptionTemplates);

  return {
    id: generateId(),
    top,
    bottom,
    accessories: selectedAccessories,
    occasion,
    description
  };
};
