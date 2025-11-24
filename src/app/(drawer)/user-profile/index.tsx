import { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import styled from "styled-components/native";

import { FormInput } from "@components/form-input";
import { FormSubmitButton } from "@components/form-submit-button";
import { Header } from "@components/header";
import { Footer } from "@components/navigation-footer";
import { useAuth } from "@contexts/AuthContext";
import { UpdateUserValidationService } from "@/services/validation/UpdateUserValidationService";

export default function UserProfile() {
    const { user, updateUser } = useAuth();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    useEffect(() => {
        if (user) {
            setNome(user.nome);
            setEmail(user.email);
            setTelefone(user.telefone);
        }
    }, [user]);

    const handleSave = () => {
        if (!user) {
            return;
        }

        const validation = UpdateUserValidationService.validateForm({
            nome: nome.trim(),
            email: email.trim(),
            telefone: telefone.trim(),
        });

        if (!validation.isValid) {
            Alert.alert("Erro", validation.errorMessage);
            return;
        }

        updateUser({
            ...user,
            nome: nome.trim(),
            email: email.trim(),
            telefone: telefone.trim(),
        });

        Alert.alert("Sucesso", "Alterações salvas com sucesso!");
    };

    if (!user) {
        return (
            <Container>
                <FormContainer>
                    <Title>Perfil do Usuário</Title>
                    <EmptyMessage>Nenhum usuário logado</EmptyMessage>
                </FormContainer>
            </Container>
        );
    }

    return (
        <Container>
            <Header />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                <FormContainer>
                    <Title>Perfil do Usuário</Title>

                    <FormInput
                        label="Nome"
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <FormInput
                        label="Email"
                        placeholder="seu@melhoremail.com"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <FormInput
                        label="Telefone"
                        placeholder="(27) 99999-9999"
                        value={telefone}
                        onChangeText={setTelefone}
                        keyboardType="phone-pad"
                    />

                    <FormSubmitButton
                        title="Salvar Alterações"
                        onPress={handleSave}
                    />
                </FormContainer>
            </ScrollView>
            <Footer />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: { theme: any }) => theme.colors.background};
`;

const FormContainer = styled.View`
    background-color: ${({ theme }: { theme: any }) => theme.colors.background};
    padding: 24px 20px;
    align-items: center;
    min-height: 100%;
`;

const Title = styled.Text`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }: { theme: any }) => theme.colors.accent};
    margin-bottom: 5%;
    font-family: sans-serif;
`;

const EmptyMessage = styled.Text`
    font-size: 16px;
    color: ${({ theme }: { theme: any }) => theme.colors.text};
    margin-top: 20px;
`;

