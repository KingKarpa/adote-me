import { Ionicons } from "@expo/vector-icons";
import { DarkButton, DarkButtonText, DarkHighlight, Highlight, Subtitle } from "@styles/typography";
import { useRouter, useSegments } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export function Header() {
    const segments = useSegments();
    const router = useRouter();
    const lastSegment = segments[segments.length - 1];
    const isHome = !segments.length || lastSegment === 'home';

    const logo = (
        <Subtitle>
            Adote-<Highlight>Me</Highlight>
        </Subtitle>
    );

    const loginButton = (
        <TouchableOpacity onPress={() => router.push("/login")}>
            <DarkHighlight>Entrar</DarkHighlight>
        </TouchableOpacity>
    );

    const registerButton = (
        <DarkButton onPress={() => router.push("/register")}>
            <DarkButtonText>Cadastre-se</DarkButtonText>
        </DarkButton>
    );
    
    return (
        <HeaderContainer>
            {isHome ? (
                <Text>{logo}</Text>
            ) : (
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={28} color="#333" />
                </TouchableOpacity>
            )}

            {true && (
                <ButtonsContainer>
                    {loginButton}
                    {registerButton}
                </ButtonsContainer>
            )}
        </HeaderContainer>
    );
}

const HeaderContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    padding-horizontal: 16;
    padding-vertical: 12;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
`;

const ButtonsContainer = styled.View`
    flex-direction: row;
    gap: 16px;
    align-items: center;
`;