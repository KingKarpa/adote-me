import { Pet } from "@domain/entities/Pet";

export function MapPet(raw: any): Pet {
  return {
    id: Number(raw.id),
    name: String(raw.name).trim(),
    age: Number(raw.age) ?? 0,
    breed: String(raw.breed).trim() ?? "Desconhecido",
    image: raw.image,
    description: String(raw.description).trim() ?? "",
  };
}

export function MapPets(list: any[]): Pet[] {
  return list.map(MapPet);
}
