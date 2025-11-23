import styled from "styled-components/native";

type CardContainerProps = {
  cardWidth: number;
};

export const CardContainer = styled.View<CardContainerProps>`
  max-width: ${({ cardWidth }: CardContainerProps) => cardWidth}px;
  width: ${({ cardWidth }: CardContainerProps) => cardWidth}px;
  height: ${({ cardWidth }: CardContainerProps) => cardWidth * 1.4}px;
  background-color: ${({ theme }: { theme: { colors: { secondary: string } } }) => theme.colors.secondary};
  border-radius: 10px;
  border: 1px solid;
  overflow: hidden;
  flex-shrink: 0;
`;

export const PetImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: center;
`;

// export const PetName = styled.Text`
//   padding: 6px;
//   text-align: center;
//   color: #fff;
//   font-size: 14px;
//   font-weight: bold;
// `;
