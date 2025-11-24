import { Pet } from "@domain/entities/Pet";
import { useRouter } from "expo-router";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { CardContainer, PetCharacteristics, PetImageContainer, PetImageWrapper, PetInfoContainer, PetName, SeeMoreButton, SeeMoreButtonText } from "./styles";

type Props = {
    pet: Pet;
};

export function AdoptionPetCard({ pet }: Props) {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const showDescription = width > 500;

    // Calcular tamanho da imagem baseado na largura da tela
    // Em telas menores, a imagem será proporcionalmente menor
    const imageSize = width < 500 ? Math.min(150, width * 0.35) : 200;
    const cardHeight = width < 500 ? Math.min(150, imageSize) : 200;

    function handlePress() {
        router.push({
            pathname: "/(drawer)/pet-profile/[id]",
            params: { id: pet.id },
        });
    }

    // Calcular idade em anos e meses
    const years = Math.floor(pet.age / 12);
    const months = pet.age % 12;
    const ageText = years > 0 
        ? `${years} ${years === 1 ? 'ano' : 'anos'}${months > 0 ? ` e ${months} ${months === 1 ? 'mês' : 'meses'}` : ''}`
        : `${months} ${months === 1 ? 'mês' : 'meses'}`;

    // Limitar descrição a 100 caracteres
    const maxDescriptionLength = 100;
    const description = pet.description || `Características do ${pet.breed}`;
    const truncatedDescription = description.length > maxDescriptionLength
        ? `${description.substring(0, maxDescriptionLength)}...`
        : description;

    return (
        <CardContainer cardHeight={cardHeight}>
            <PetImageContainer imageSize={imageSize}>
                <PetImageWrapper>
                    <Image 
                        source={{ uri: pet.image }} 
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="cover"
                    />
                </PetImageWrapper>
            </PetImageContainer>
            <PetInfoContainer showDescription={showDescription}>
                <PetName>{pet.name}, {ageText}</PetName>
                {showDescription && (
                    <PetCharacteristics>
                        {truncatedDescription}
                    </PetCharacteristics>
                )}
                <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                    <SeeMoreButton>
                        <SeeMoreButtonText>Veja Mais</SeeMoreButtonText>
                    </SeeMoreButton>
                </TouchableOpacity>
            </PetInfoContainer>
        </CardContainer>
    );
}

