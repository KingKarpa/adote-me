import { AuthApi } from "@infraestructure/repositories/AuthRepositoryProvider";
import { LoginUser } from "@services/use-case/LoginUser";

export function makeLoginUser() {
    const repo = AuthApi;
    return new LoginUser(repo);
}
