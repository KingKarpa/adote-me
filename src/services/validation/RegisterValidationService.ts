export interface RegisterFormData {
    nome: string;
    email: string;
    telefone: string;
    senha: string;
}

export interface ValidationResult {
    isValid: boolean;
    errorMessage: string;
}

export class RegisterValidationService {
    /**
     * Valida o formato de email
     */
    static validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Valida o formato de telefone (10 ou 11 dígitos)
     */
    static validatePhone(telefone: string): boolean {
        const phoneRegex = /^\d{10,11}$/;
        const digitsOnly = telefone.replace(/\D/g, "");
        return phoneRegex.test(digitsOnly);
    }

    /**
     * Valida todos os campos do formulário de registro
     */
    static validateForm(data: RegisterFormData): ValidationResult {
        // Validar nome
        if (!data.nome.trim()) {
            return {
                isValid: false,
                errorMessage: "Por favor, preencha o nome.",
            };
        }

        // Validar email
        if (!data.email.trim()) {
            return {
                isValid: false,
                errorMessage: "Por favor, preencha o email.",
            };
        }

        if (!this.validateEmail(data.email)) {
            return {
                isValid: false,
                errorMessage: "Por favor, insira um email válido.",
            };
        }

        // Validar telefone
        if (!data.telefone.trim()) {
            return {
                isValid: false,
                errorMessage: "Por favor, preencha o telefone.",
            };
        }

        if (!this.validatePhone(data.telefone)) {
            return {
                isValid: false,
                errorMessage: "Telefone deve conter 10 ou 11 dígitos.",
            };
        }

        // Validar senha
        if (!data.senha.trim()) {
            return {
                isValid: false,
                errorMessage: "Por favor, preencha a senha.",
            };
        }

        if (data.senha.length < 6) {
            return {
                isValid: false,
                errorMessage: "A senha deve ter pelo menos 6 caracteres.",
            };
        }

        return {
            isValid: true,
            errorMessage: "",
        };
    }
}
