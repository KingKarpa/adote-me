import { FeaturedPetsCards } from "@/components/featured-pet-cards";
import { DarkHighlight, LightButton, LightButtonText } from "@/styles/typography";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Image, ScrollView } from "react-native";
import styled from "styled-components/native";

export default function Index() {
  return (
    <Container>
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 70 }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <BannerHomeContainer>
            <Image 
                source={require("@assets/images/layout/bannerHome.png")} 
                style={{ width: "100%", height: 260, borderRadius: 5 }} 
            />
        </BannerHomeContainer>
        <FeaturedPetsContainer>
            <FeaturedPetsTitle>
                <DarkHighlight>Adote seu Pet</DarkHighlight>
                <LightButton>
                    <LightButtonText>Veja Mais Animaizinhos</LightButtonText>
                </LightButton>
            </FeaturedPetsTitle>
            <FeaturedPetsCards></FeaturedPetsCards>
        </FeaturedPetsContainer>
        <DividerLine />
        <ContactContainer>
            <BackgroundPawImage 
                source={require("@assets/images/layout/backgroundPaw-1.png")}
                resizeMode="contain"
            />
            <ContactCard>
                <ContactName>Nícolas Oliveira</ContactName>
                <ContactRole>Responsável pelo Projeto</ContactRole>
                <PhotoPlaceholder>
                    <PhotoText>Foto de Maria</PhotoText>
                </PhotoPlaceholder>
                <ContactEmail>adoteme@email.com.br</ContactEmail>
            </ContactCard>
        </ContactContainer>
      </ScrollView>
      <Footer />
    </Container>
  );
}

const BannerHomeContainer = styled.View`
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    padding: 8px 8px 16px 8px;
`;

const FeaturedPetsContainer = styled.View`
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    padding: 8px 0px 8px 0px;
`;

const FeaturedPetsTitle = styled.View`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8px 0px 8px;
`;

const DividerLine = styled.View`
    width: 90%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.quaternary};
    margin-top: 8px;
    margin-bottom: 8px;
    align-self: center;
`;

const ContactContainer = styled.View`
    width: 100%;
    min-height: 250px;
    position: relative;
    padding: 16px;
    background-color: transparent;
`;

const BackgroundPawImage = styled.Image`
    position: absolute;
    top: 0%;
    left: 5%;
    width: 90%;
    opacity: 1;
    z-index: 0;
`;

const ContactCard = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 12px;
    padding: 16px;
    align-items: center;
    z-index: 1;
    margin: 0 auto;
    width: 50%;
    max-width: 180px;
`;

const ContactName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 4px;
`;

const ContactRole = styled.Text`
    font-size: 65%;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 12px;
`;

const PhotoPlaceholder = styled.View`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.text};
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`;

const PhotoText = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 11px;
`;

const ContactEmail = styled.Text`
    font-size: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

const Container = styled.View`
    flex: 1;
`;