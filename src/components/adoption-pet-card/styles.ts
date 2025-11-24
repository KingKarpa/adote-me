import styled from "styled-components/native";

export const CardContainer = styled.View<{ cardHeight: number }>`
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 12px;
    margin-vertical: 8px;
    margin-horizontal: 16px;
    overflow: hidden;
    height: ${({ cardHeight }) => cardHeight}px;
`;

export const PetImageContainer = styled.View<{ imageSize: number }>`
    width: ${({ imageSize }) => imageSize}px;
    height: ${({ imageSize }) => imageSize}px;
    background-color: ${({ theme }) => theme.colors.quaternary};
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

export const PetImageWrapper = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
`;

export const PetInfoContainer = styled.View<{ showDescription?: boolean }>`
    flex: 1;
    padding: 16px;
    justify-content: ${({ showDescription }) => showDescription ? 'space-between' : 'center'};
    align-items: ${({ showDescription }) => showDescription ? 'stretch' : 'center'};
`;

export const PetName = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const PetCharacteristics = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 12px;
    flex: 1;
    max-height: 100px;
`;

export const SeeMoreButton = styled.View`
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 10px 20px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const SeeMoreButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: 600;
    font-size: 16px;
`;

