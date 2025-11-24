import { Pet } from "@domain/entities/Pet";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { CardContainer, PetImage } from "./styles";

type Props = {
    pet: Pet;
    onPress?: () => void;
    cardWidth: number;
};

export function PetCard({ pet, cardWidth }: Props) {
    const router = useRouter();

    function handlePress() {
        router.push({
            pathname: "/(drawer)/pet-profile/[id]",
            params: { id: pet.id },
        });
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
            <CardContainer cardWidth={cardWidth}>
                <PetImage source={{ uri: pet.image }} />
            </CardContainer>
        </TouchableOpacity>
    );
}

