import { PetApi } from "@infraestructure/repositories/PetRepositoryProvider";
import { ListPets } from "@services/use-case/ListPets";

export function makeListPets() {
    const repo = PetApi;
    return new ListPets(repo);
}

