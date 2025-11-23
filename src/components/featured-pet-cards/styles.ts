import styled from "styled-components/native";

interface ContainerProps {
  horizontalPadding: number;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding: 0 ${({ horizontalPadding }: ContainerProps) => horizontalPadding / 2}px;
  margin-top: 16px;
  position: relative;
`;

interface BackgroundStripProps {
  horizontalPadding: number;
}

export const BackgroundStrip = styled.View<BackgroundStripProps>`
  position: absolute;
  top: 10%;
  left: ${({ horizontalPadding }: BackgroundStripProps) => -horizontalPadding / 2}px;
  right: ${({ horizontalPadding }: BackgroundStripProps) => -horizontalPadding / 2}px;
  width: auto;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 0;
`;

export const CardRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 1;
`;
