import styled from "styled-components/native";

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.accent};
`;

export const Subtitle = styled.Text`
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 18px;
    font-weight: 600;
`;

export const Highlight = styled.Text`
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
`;

export const DarkHighlight = styled.Text<{ fontSize?: number }>`
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    font-size: ${({ fontSize }) => fontSize ? fontSize : 16}px;
`;

export const DarkButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.tertiary};
    padding: 8px 16px;
    border-radius: 4px;
`;

export const DarkButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: 600;
`;

export const LightButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 8px 16px;
    border-radius: 4px;
`;

export const LightButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: 600;
`;