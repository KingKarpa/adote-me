import { Pet } from "@domain/entities/Pet";

export interface ListPetsParams {
    offset?: number;
    limit?: number;
    animalType?: "dog" | "cat" | "other";
}

export interface PetRepository {
    getPets(limit?: number): Promise<Pet[]>;
    getPet(id: number): Promise<Pet>;
    getRandomPets(limit?: number): Promise<Pet[]>;
    findById(id: string): Promise<Pet>;
    listPets(params?: ListPetsParams): Promise<Pet[]>;
}
