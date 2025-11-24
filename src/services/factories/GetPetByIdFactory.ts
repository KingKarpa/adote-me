import { PetApi } from "@infraestructure/repositories/PetRepositoryProvider";
import { GetPetById } from "@services/use-case/GetPetById";

export function makeGetPetById() {
    const repo = PetApi;
    return new GetPetById(repo);
}
