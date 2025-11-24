import { createContext, useContext, useState } from "react";
import { User } from "@domain/entities/User";

type AuthContextType = {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    updateUser: (user: User) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    function login(user: User) {
        setUser(user);
    }

    function logout() {
        setUser(null);
    }

    function updateUser(updatedUser: User) {
        setUser(updatedUser);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
