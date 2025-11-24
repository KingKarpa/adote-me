import { AuthRepository } from "@domain/repositories/AuthRepository";
import { User } from "@domain/entities/User";

const db: User[] = [];

export class LocalAuthRepository implements AuthRepository {
    async register(user: User): Promise<void> {
        db.push(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        return db.find((u) => u.email === email) ?? null;
    }

    async login(email: string, senha: string): Promise<User | null> {
        const user = db.find((u) => u.email === email && u.senha === senha);
        return user ?? null;
    }
}
