import { AuthApi } from "@infraestructure/repositories/AuthRepositoryProvider";
import { RegisterUser } from "@services/use-case/RegisterUser";

export function makeRegisterUser() {
    const repo = AuthApi;
    return new RegisterUser(repo);
}
