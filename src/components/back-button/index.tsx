import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export function BackButton() {
    const router = useRouter();

    const handlePress = () => {
        router.push("/(drawer)/home" as any);
    };

    return (
        <BackButtonContainer>
            <TouchableOpacity onPress={handlePress}>
                <Ionicons name="arrow-back" size={28} color="#444" />
            </TouchableOpacity>
        </BackButtonContainer>
    );
}

const BackButtonContainer = styled.View`
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 10;
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 32px;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;
`;

