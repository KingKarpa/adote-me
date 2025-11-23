import { User } from "@domain/entities/User";

export interface AuthRepository {
    register(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
}
