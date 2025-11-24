import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { BackButton } from "@components/back-button";
import { Footer } from "@components/footer";
import { FormInput } from "@components/form-input";
import { FormSubmitButton } from "@components/form-submit-button";
import { makeRegisterUser } from "@services/factories/RegisterUserFactory";
import { RegisterValidationService } from "@services/validation/RegisterValidationService";
import { Highlight } from "@styles/typography";

export default function Register() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async () => {
        setErrorMessage("");

        const validation = RegisterValidationService.validateForm({
            nome,
            email,
            telefone,
            senha,
        });

        if (!validation.isValid) {
            setErrorMessage(validation.errorMessage);
            return;
        }

        try {
            const registerUser = makeRegisterUser();
            await registerUser.execute({ nome, email, telefone, senha });
            router.push("/login" as any);
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    return (
        <Container>
            <BackButton />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: "transparent" }}
            >
                <BannerContainer>
                    <BannerImage
                        source={require("@assets/images/layout/bannerRegister.png")}
                        resizeMode="cover"
                    />
                </BannerContainer>

                <FormContainer>
                    <Title>Cadastro</Title>

                    {errorMessage ? (
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    ) : null}

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
                    />
                    <FormInput
                        label="Telefone"
                        placeholder="27999999999"
                        value={telefone}
                        onChangeText={setTelefone}
                        keyboardType="phone-pad"
                    />
                    <FormInput
                        label="Senha"
                        placeholder="Nova senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />

                    <FormSubmitButton
                        title="Cadastrar"
                        onPress={handleRegister}
                    />

                    <LoginLinkContainer>
                        <LoginLinkText>Já possui conta? </LoginLinkText>
                        <TouchableOpacity
                            onPress={() => router.push("/login" as any)}
                        >
                            <LoginLinkHighlight>Entrar</LoginLinkHighlight>
                        </TouchableOpacity>
                    </LoginLinkContainer>
                </FormContainer>
            </ScrollView>
            <Footer />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: transparent;
`;

const FooterWrapper = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
`;

const BannerContainer = styled.View`
    width: 100%;
    height: 260px;
    overflow: hidden;
`;

const BannerImage = styled.Image`
    width: 100%;
    height: 100%;
`;

const FormContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.backgroundForm};
    padding: 24px 20px;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 5%;
    font-family: sans-serif;
`;

const LoginLinkContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const LoginLinkText = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
`;

const LoginLinkHighlight = styled(Highlight)`
    font-size: 16px;
    font-weight: 600;
`;

const ErrorMessage = styled.Text`
    width: 100%;
    color: #c62828;
    margin-bottom: 8%;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
`;
