import { Pet } from "@domain/entities/Pet";

export interface PetRepository {
    getPets(limit?: number): Promise<Pet[]>;
    getPet(id: number): Promise<Pet>;
    getRandomPets(limit?: number): Promise<Pet[]>;
}
