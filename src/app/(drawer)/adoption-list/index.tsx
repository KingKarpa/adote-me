import { AdoptionPetCard } from "@/components/adoption-pet-card";
import { Header } from "@/components/header";
import { Footer } from "@/components/navigation-footer";
import { makeListPets } from "@/services/factories/ListPetsFactory";
import { Title } from "@/styles/typography";
import { Pet } from "@domain/entities/Pet";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import styled from "styled-components/native";

type AnimalFilter = "dog" | "cat" | "other" | null;

export default function AdoptionList() {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState<AnimalFilter>(null);
    const limit = 10;

    const listPets = useMemo(() => makeListPets(), []);

    const loadPets = useCallback(async (reset = false, currentOffsetOverride?: number) => {
        if (loading) return;

        setLoading(true);
        const currentOffset = currentOffsetOverride !== undefined ? currentOffsetOverride : (reset ? 0 : offset);

        try {
            const newPets = await listPets.execute({
                offset: currentOffset,
                limit,
                animalType: selectedFilter || undefined,
            });

            if (reset) {
                setPets(newPets);
                setOffset(newPets.length);
            } else {
                setPets((prev) => [...prev, ...newPets]);
                setOffset((prev) => prev + newPets.length);
            }

            setHasMore(newPets.length === limit);
        } catch (error) {
            console.error("Erro ao carregar pets:", error);
        } finally {
            setLoading(false);
        }
    }, [offset, selectedFilter, loading, listPets, limit]);

    useEffect(() => {
        setOffset(0);
        setHasMore(true);
        loadPets(true, 0);
    }, [selectedFilter]);

    const handleEndReached = useCallback(() => {
        if (!loading && hasMore) {
            loadPets(false);
        }
    }, [loading, hasMore, loadPets]);

    const handleFilterPress = (filter: AnimalFilter) => {
        setSelectedFilter(filter === selectedFilter ? null : filter);
    };

    return (
        <Container>
            <Header />
            <ContentContainer>
                <TitleContainer>
                    <Title style={{ fontSize: 24, textAlign: "center" }}>
                        Animais para Adoção
                    </Title>
                </TitleContainer>

                <FiltersContainer>
                    <FilterButton
                        active={selectedFilter === "dog"}
                        onPress={() => handleFilterPress("dog")}
                    >
                        <FilterButtonText active={selectedFilter === "dog"}>
                            + Cães
                        </FilterButtonText>
                    </FilterButton>
                    <FilterButton
                        active={selectedFilter === "cat"}
                        onPress={() => handleFilterPress("cat")}
                    >
                        <FilterButtonText active={selectedFilter === "cat"}>
                            + Gatos
                        </FilterButtonText>
                    </FilterButton>
                    <FilterButton
                        active={selectedFilter === "other"}
                        onPress={() => handleFilterPress("other")}
                    >
                        <FilterButtonText active={selectedFilter === "other"}>
                            + Outros
                        </FilterButtonText>
                    </FilterButton>
                </FiltersContainer>

                <DividerLine />

                <FlatList
                    data={pets}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <AdoptionPetCard pet={item} />}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={
                        loading ? (
                            <LoadingContainer>
                                <ActivityIndicator size="large" color="#009700" />
                            </LoadingContainer>
                        ) : null
                    }
                    contentContainerStyle={{ paddingBottom: 100 }}
                    showsVerticalScrollIndicator={false}
                />
            </ContentContainer>
            <Footer />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: { theme: { colors: { background: string } } }) => theme.colors.background};
`;

const ContentContainer = styled.View`
    flex: 1;
`;

const TitleContainer = styled.View`
    padding: 20px 16px;
    align-items: center;
`;

const FiltersContainer = styled.View`
    flex-direction: row;
    padding: 16px;
    gap: 12px;
    margin: 0 16px 16px 16px;
`;

type FilterButtonProps = {
    active: boolean;
    theme: {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            background: string;
            text: string;
        };
    };
};

const FilterButton = styled.TouchableOpacity<{ active: boolean }>`
    flex: 1;
    background-color: ${({ active, theme }: FilterButtonProps) => 
        active ? theme.colors.primary : theme.colors.background};
    padding: 10px 16px;
    border-radius: 6px;
    align-items: center;
    border: 1px solid ${({ theme }: FilterButtonProps) => theme.colors.secondary};
`;

const FilterButtonText = styled.Text<{ active: boolean }>`
    color: ${({ theme }: FilterButtonProps) => theme.colors.secondary};
    font-weight: ${({ active }: { active: boolean }) => (active ? "600" : "400")};
    font-size: 14px;
`;

const DividerLine = styled.View`
    width: 90%;
    height: 1px;
    background-color: ${({ theme }: { theme: { colors: { secondary: string } } }) => theme.colors.secondary};
    margin-top: 8px;
    margin-bottom: 8px;
    align-self: center;
`;

const LoadingContainer = styled.View`
    padding: 20px;
    align-items: center;
`;

