import rawPets from "@database/json/pets.json";
import type { ListPetsParams, PetRepository } from "@domain/repositories/PetRepository";
import { MapPet, MapPets } from "@infraestructure/mappers/PetMapper";

export const InMemoryPetRepository: PetRepository = {
    async getPets(limit = 10) {
        return MapPets(rawPets.slice(0, limit));
    },

    async getPet(id: number) {
        return MapPet(rawPets.find((pet) => pet.id === id));
    },

    async getRandomPets(limit = 10) {
        return MapPets(rawPets.sort(() => Math.random() - 0.5).slice(0, limit));
    },

    async findById(id: string) {
        return MapPet(rawPets.find((pet) => pet.id === parseInt(id)));
    },

    async listPets(params?: ListPetsParams) {
        const { offset = 0, limit = 10, animalType } = params || {};
        
        let filteredPets = [...rawPets];
        
        // Aplicar filtro por tipo de animal
        if (animalType) {
            if (animalType === "dog") {
                filteredPets = filteredPets.filter((pet) => pet.animal === "dog");
            } else if (animalType === "cat") {
                filteredPets = filteredPets.filter((pet) => pet.animal === "cat");
            } else if (animalType === "other") {
                filteredPets = filteredPets.filter((pet) => pet.animal !== "dog" && pet.animal !== "cat");
            }
        }
        
        // Aplicar paginação
        const paginatedPets = filteredPets.slice(offset, offset + limit);
        
        return MapPets(paginatedPets);
    },
}