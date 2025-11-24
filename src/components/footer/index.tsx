import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export function Footer() {
  return (
    <FooterContainer>
        <FooterBar />
    </FooterContainer>
  );
}

const FooterContainer = styled.View`
  width: 100%;
`;

const FooterBar = styled.View`
  width: 100%;
  min-height: 30px;
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

