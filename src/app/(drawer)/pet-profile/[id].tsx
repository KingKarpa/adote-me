import { FormSubmitButton } from "@components/form-submit-button";
import { Title } from "@styles/typography";
import { Header } from "@components/header";
import { Footer } from "@components/navigation-footer";
import { useAuth } from "@contexts/AuthContext";
import { Pet } from "@domain/entities/Pet";
import { Ionicons } from "@expo/vector-icons";
import { makeGetPetById } from "@services/factories/GetPetByIdFactory";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Modal, ScrollView } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

export default function Index() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { user } = useAuth();
    const [pet, setPet] = useState<Pet | null>(null);
    const [loading, setLoading] = useState(true);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                if (id) {
                    const getPetById = makeGetPetById();
                    const petData = await getPetById.execute(id);
                    setPet(petData);
                }
            } catch (error) {
                Alert.alert(
                    "Erro",
                    "Ocorreu um erro ao carregar o perfil do animal. Por favor, tente novamente."
                );
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [id]);

    const handleAdopt = () => {
        if (!user) {
            Alert.alert(
                "Erro",
                "Você precisa estar logado para adotar um animal. Por favor, faça login primeiro."
            );
            return;
        }

        setShowSuccessModal(true);
    };

    if (loading) {
        return (
            <Container>
                <Header />
                <LoadingContainer>
                    <ActivityIndicator size="large" color="#009700" />
                </LoadingContainer>
            </Container>
        );
    }

    if (!pet) {
        return (
            <Container>
                <Header />
                <ContentContainer>
                    <ErrorText>Pet não encontrado</ErrorText>
                </ContentContainer>
            </Container>
        );
    }

    return (
        <Container>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 70 }}
                showsVerticalScrollIndicator={false}
            >
                <Header />
                <ContentContainer>
                    <PageTitle>Perfil do Animal</PageTitle>

                    <InfoRow>
                        <PhotoContainer>
                            {pet.image ? (
                                <PetImage
                                    source={{ uri: pet.image }}
                                    resizeMode="cover"
                                />
                            ) : (
                                <PhotoPlaceholder>
                                    <PhotoText>Foto indisponível</PhotoText>
                                </PhotoPlaceholder>
                            )}
                        </PhotoContainer>

                        <DetailsContainer>
                            <FieldContainer>
                                <FieldLabel>Nome</FieldLabel>
                                <FieldValue>{pet.name}</FieldValue>
                            </FieldContainer>

                            <FieldContainer>
                                <FieldLabel>Idade (anos)</FieldLabel>
                                <FieldValue>{pet.age}</FieldValue>
                            </FieldContainer>
                        </DetailsContainer>
                    </InfoRow>

                    <DescriptionContainer>
                        <FieldLabel>Descrição</FieldLabel>
                        <DescriptionText>
                            {pet.description || "Nenhuma descrição disponível."}
                        </DescriptionText>
                    </DescriptionContainer>

                    <AdoptButtonContainer>
                        <ButtonWrapper>
                            <FormSubmitButton
                                title="Adote"
                                variant="accent"
                                onPress={handleAdopt}
                            />
                        </ButtonWrapper>
                    </AdoptButtonContainer>
                </ContentContainer>
            </ScrollView>
            <Footer />
            <Modal
                visible={showSuccessModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowSuccessModal(false)}
            >
                <ModalOverlay>
                    <ModalContent>
                        <CloseButton onPress={() => setShowSuccessModal(false)}>
                            <Ionicons name="close" size={24} color="#000" />
                        </CloseButton>
                        <ModalTitle>Candidatura Realizada!</ModalTitle>
                        <ModalText>
                            Agora, aguarde contato via{" "}
                            <HighlightedText>email</HighlightedText> e via{" "}
                            <HighlightedText>whatsapp</HighlightedText>
                        </ModalText>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.background};
`;

const ContentContainer = styled.View`
    flex: 1;
    padding: 16px;
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.background};
`;

const PageTitle = styled(Title)`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
`;

const InfoRow = styled.View`
    flex-direction: row;
    gap: 16px;
    margin-bottom: 24px;
    align-items: flex-start;
`;

const PhotoContainer = styled.View`
    flex: 1;
    min-width: 150px;
    max-width: 180px;
    align-items: flex-start;
    justify-content: center;
`;

const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 32px;
`;

const ErrorText = styled.Text`
    font-size: 18px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
    text-align: center;
    margin-top: 32px;
`;

const PhotoPlaceholder = styled.View`
    width: 100%;
    min-height: 200px;
    aspect-ratio: 2/3;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondary};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    border: 2px solid
        ${({ theme }: { theme: DefaultTheme }) => theme.colors.quaternary};
`;

const PetImage = styled.Image`
    width: 100%;
    min-height: 200px;
    aspect-ratio: 2/2.5;
    border-radius: 8px;
    border: 2px solid
        ${({ theme }: { theme: DefaultTheme }) => theme.colors.quaternary};
`;

const PhotoText = styled.Text`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textLight};
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;

const DetailsContainer = styled.View`
    flex: 1;
    gap: 16px;
`;

const FieldContainer = styled.View`
    width: 100%;
    margin-bottom: 8px;
`;

const FieldLabel = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.quaternary};
    margin-bottom: 8px;
`;

const FieldValue = styled.Text`
    font-size: 16px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
    padding: 12px;
    border-width: 2px;
    border-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.quaternary};
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.background};
    border-radius: 6px;
`;

const DescriptionContainer = styled.View`
    width: 100%;
    margin-bottom: 24px;
`;

const DescriptionText = styled.Text`
    width: 100%;
    min-height: 120px;
    border-width: 2px;
    border-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.quaternary};
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.background};
    border-radius: 6px;
    padding: 12px;
    font-size: 16px;
    color: #000;
`;

const AdoptButtonContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 24px;
`;

const ButtonWrapper = styled.View`
    width: 100%;
    max-width: 300px;
`;

const ModalOverlay = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const ModalContent = styled.View`
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
        theme.colors.background};
    border-radius: 12px;
    padding: 60px 24px;
    width: 100%;
    max-width: 400px;
    position: relative;
`;

const CloseButton = styled.TouchableOpacity`
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 6px;
`;

const ModalTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.accent};
    margin-bottom: 16px;
    text-align: center;
`;

const ModalText = styled.Text`
    font-size: 16px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
    line-height: 24px;
    text-align: center;
`;

const HighlightedText = styled.Text`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.accent};
    font-weight: 600;
`;
