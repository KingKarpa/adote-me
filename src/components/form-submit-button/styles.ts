import styled, { DefaultTheme } from "styled-components/native";

type ButtonContainerProps = {
    variant?: "default" | "accent";
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 100%;
    padding: 14px;
    border-radius: 6px;
    background-color: ${({
        theme,
        variant,
    }: {
        theme: DefaultTheme;
        variant?: "default" | "accent";
    }) => (variant === "accent" ? theme.colors.accent : theme.colors.tertiary)};
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 24px;
    shadow-color: #000;
    shadow-offset: 6px 6px;
    shadow-opacity: 0.4;
    shadow-radius: 4px;
    elevation: 6;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textLight};
    font-size: 18px;
    font-weight: 600;
    font-family: sans-serif;
`;
