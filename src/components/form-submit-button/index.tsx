import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    variant?: "default" | "accent";
};

export function FormSubmitButton({
    title,
    variant = "default",
    ...rest
}: Props) {
    return (
        <ButtonContainer activeOpacity={0.8} variant={variant} {...rest}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
}
