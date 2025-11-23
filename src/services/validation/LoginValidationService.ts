export interface LoginFormData {
    email: string;
    senha: string;
}

export interface ValidationResult {
    isValid: boolean;
    errorMessage: string;
}

export class LoginValidationService {
    static validateForm(data: LoginFormData): ValidationResult {
        if (!data.email.trim()) {
            return { isValid: false, errorMessage: "Informe o email." };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return { isValid: false, errorMessage: "Email inválido." };
        }

        if (!data.senha.trim()) {
            return { isValid: false, errorMessage: "Informe a senha." };
        }

        return { isValid: true, errorMessage: "" };
    }
}
