import type { PetRepository } from "@domain/repositories/PetRepository";
import rawPets from "@database/json/pets.json";
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
}