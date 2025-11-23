import { User } from "@domain/entities/User";

export interface AuthRepository {
    register(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    login(email: string, senha: string): Promise<User | null>;
}
