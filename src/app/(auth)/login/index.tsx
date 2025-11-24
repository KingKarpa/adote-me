import { useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { BackButton } from "@components/back-button";
import { Footer } from "@components/footer";
import { FormInput } from "@components/form-input";
import { FormSubmitButton } from "@components/form-submit-button";
import { useAuth } from "@contexts/AuthContext";
import { makeLoginUser } from "@services/factories/LoginUserFactory";
import { LoginValidationService } from "@services/validation/LoginValidationService";
import { Highlight } from "@styles/typography";

export default function Login() {
    const router = useRouter();
    const auth = useAuth();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async () => {
        setErrorMessage("");

        const validation = LoginValidationService.validateForm({email, senha});

        if (!validation.isValid) {
            setErrorMessage(validation.errorMessage);
            return;
        }

        // Se passou na validação, prosseguir com o cadastro
        console.log("Login:", { email, senha });
        try {
            const loginUser = makeLoginUser();
            const user = await loginUser.execute(email, senha);
            auth.login(user);
            router.push("/(drawer)/home");
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    return (
        <Container>
            <BackButton />
            <StyledScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                <TopPawContainer>
                    <TopPawImage
                        source={require("@assets/images/layout/BackgroundPaw-2.png")}
                        resizeMode="cover"
                    />
                </TopPawContainer>

                <FormContainer>
                    <Title>Login</Title>

                    {errorMessage ? (
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    ) : null}

                    <FormInput
                        label="Email"
                        placeholder="seu@melhoremail.com"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <FormInput
                        label="Senha"
                        placeholder="Sua senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />

                    <FormSubmitButton
                        title="Entrar"
                        onPress={handleLogin}
                    />

                    <RegisterLinkContainer>
                        <RegisterLinkText>Não possui conta? </RegisterLinkText>
                        <TouchableOpacity
                            onPress={() => router.push("/register" as any)}
                        >
                            <RegisterLinkHighlight>Cadastrar</RegisterLinkHighlight>
                        </TouchableOpacity>
                    </RegisterLinkContainer>
                </FormContainer>

                <BottomPawContainer>
                    <BottomPawImage
                        source={require("@assets/images/layout/backgroundPaw-3.png")}
                        resizeMode="cover"
                    />
                    </BottomPawContainer>
            </StyledScrollView>
            <Footer />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: transparent;
`;

const StyledScrollView = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.backgroundMain};
`;

const TopPawContainer = styled.View`
    width: 100%;
    height: 120px;
    overflow: hidden;
`;

const TopPawImage = styled.Image`
    width: 100%;
    max-width: 500px;
    height: 100%;
`;

const BottomPawContainer = styled.View`
    width: 100%;
    height: 260px;
    overflow: hidden;
`;

const BottomPawImage = styled.Image`
    width: 100%;
    max-width: 500px;
    height: 100%;
`;

const FormContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.backgroundMain};
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

const RegisterLinkContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const RegisterLinkText = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
`;

const RegisterLinkHighlight = styled(Highlight)`
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

