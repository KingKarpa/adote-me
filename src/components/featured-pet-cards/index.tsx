import { Pet } from "@domain/entities/Pet";
import { PetCard } from "@/components/pet-card";
import { PetApi } from "@infraestructure/repositories/PetRepositoryProvider";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { BackgroundStrip, CardRow, Container } from "./styles";

export function FeaturedPetsCards() {
    const [pets, setPets] = useState<Pet[]>([]);
    const { width: screenWidth } = useWindowDimensions();

    const horizontalPadding = 40;
    const minCardWidth = 100;
    const availableWidth = screenWidth - horizontalPadding;
    const maxCards = Math.floor(availableWidth / minCardWidth);
    const numberOfCards = Math.min(maxCards, 6);
    // 90% da largura disponível para os cards e 10% para os espaços entre os cards
    const cardWidth = (availableWidth * 0.9) / numberOfCards;

  useEffect(() => {
    async function load() {
      const data = await PetApi.getPets(numberOfCards);
      setPets(data);
    }
    load();
  }, [numberOfCards]);

  return (
    <Container horizontalPadding={horizontalPadding}>
        <BackgroundStrip horizontalPadding={horizontalPadding} />
        <CardRow>
            {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} cardWidth={cardWidth} />
            ))}
        </CardRow>
    </Container>
  );
}
