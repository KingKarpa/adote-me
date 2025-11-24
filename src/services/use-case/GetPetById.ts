import { PetRepository } from "@domain/repositories/PetRepository";
import { Pet } from "@domain/entities/Pet";

export class GetPetById {
    constructor(private repo: PetRepository) {}

    async execute(id: string): Promise<Pet> {
        const pet = await this.repo.findById(id);

        if (!pet) {
            throw new Error("Pet não encontrado");
        }

        return pet;
    }
}
