import { Pet } from "@domain/entities/Pet";
import { ListPetsParams, PetRepository } from "@domain/repositories/PetRepository";

export class ListPets {
    constructor(private repo: PetRepository) {}

    async execute(params?: ListPetsParams): Promise<Pet[]> {
        return await this.repo.listPets(params);
    }
}

