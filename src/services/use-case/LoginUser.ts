import { AuthRepository } from "@domain/repositories/AuthRepository";
import { User } from "@domain/entities/User";

export class LoginUser {
    constructor(private repo: AuthRepository) {}

    async execute(email: string, senha: string): Promise<User> {
        const user = await this.repo.login(email, senha);
        if (!user) {
            throw new Error("Email ou senha incorretos.");
        }

        return user;
    }
}
