import { FeaturedPetsCards } from "@/components/featured-pet-cards";
import { Header } from "@/components/header";
import { Footer } from "@/components/navigation-footer";
import { DarkHighlight, LightButton, LightButtonText } from "@styles/typography";
import { useRouter } from "expo-router";
import { Image, ScrollView } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

export default function Index() {
    const router = useRouter();

    function handleSeeMorePets() {
        router.push({
            pathname: "/(drawer)/adoption-list",
        });
    }

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
                        <LightButton onPress={handleSeeMorePets}>
                            <LightButtonText>
                                Veja Mais Animaizinhos
                            </LightButtonText>
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
                        <ContactRole>Líder do Projeto</ContactRole>
                        <PhotoPlaceholder>
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
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.quaternary};
    margin-top: 8px;
    margin-bottom: 8px;
    align-self: center;
`;

const ContactContainer = styled.View`
    width: 100%;
    min-height: 350px;
    position: relative;
    padding: 16px;
    background-color: transparent;
`;

const BackgroundPawImage = styled.Image`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    opacity: 1;
    z-index: 0;
`;

const ContactCard = styled.View`
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
    border-radius: 12px;
    padding: 24px;
    align-items: center;
    z-index: 1;
    margin: 0 auto;
    width: 70%;
    max-width: 200px;
    min-height: 250px;
`;

const ContactName = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
    margin-bottom: 6px;
`;

const ContactRole = styled.Text`
    font-size: 14px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
    margin-bottom: 16px;
`;

const PhotoPlaceholder = styled.View`
    width: 100px;
    height: 100px;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`;

const PhotoText = styled.Text`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textLight};
    font-size: 14px;
`;

const ContactEmail = styled.Text`
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
`;

const Container = styled.View`
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.backgroundMain};
    flex: 1;
`;
