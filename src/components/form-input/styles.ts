import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin-bottom: 20px;
`;

export const LabelWrapper = styled.View`
    position: absolute;
    top: -10px;
    left: 12px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 4px;
    z-index: 2;
`;

export const Label = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.quaternary};
`;

export const InputContainer = styled.View`
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.quaternary};
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 6px;
    padding: 10px;
`;

export const Input = styled.TextInput`
    font-size: 16px;
    color: #000;
    background-color: ${({ theme }) => theme.colors.background};
`;
