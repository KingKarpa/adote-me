import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useSegments } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export function Footer() {
    const segments = useSegments();
    const navigation = useNavigation();
    
    // Verifica se está dentro do grupo (drawer)
    const isInDrawer = segments.includes('(drawer)' as never);
    
    const handleOpenDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <FooterContainer>
            <SafeAreaView edges={['bottom']} style={{ width: '100%' }}>
                <FooterContent>
                    {isInDrawer && (
                        <MenuButton onPress={handleOpenDrawer}>
                            <Ionicons name="menu" size={24} color="#333" />
                        </MenuButton>
                    )}
                </FooterContent>
            </SafeAreaView>
        </FooterContainer>
    );
}

const FooterContainer = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba(210, 180, 140, 0.8);
    z-index: 10;
`;

const FooterContent = styled.View`
    padding: 8px 16px;
    min-height: 30px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const MenuButton = styled.TouchableOpacity`
    padding: 8px;
`;

