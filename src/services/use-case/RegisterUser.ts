import { User } from "@domain/entities/User";
import { AuthRepository } from "@domain/repositories/AuthRepository";

export class RegisterUser {
    constructor(private repo: AuthRepository) {}

    async execute(data: {
        nome: string;
        email: string;
        telefone: string;
        senha: string;
    }) {
        const exists = await this.repo.findByEmail(data.email);
        if (exists) {
            throw new Error("Esse email já está cadastrado.");
        }

        const user = new User(data.nome, data.email, data.telefone, data.senha);
        await this.repo.register(user);
    }
}
