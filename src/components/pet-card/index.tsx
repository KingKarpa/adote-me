import { Pet } from "@domain/entities/Pet";
import { TouchableOpacity } from "react-native";
import { CardContainer, PetImage } from "./styles";

type Props = {
  pet: Pet;
  onPress?: () => void;
  cardWidth: number;
};

export function PetCard({ pet, onPress, cardWidth }: Props) {
    console.log(pet);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <CardContainer cardWidth={cardWidth}>
        <PetImage source={{ uri: pet.image }} />

        {/* <PetName>
          {pet.name}
        </PetName> */}
      </CardContainer>
    </TouchableOpacity>
  );
}
