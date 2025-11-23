import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function FormSubmitButton({ title, ...rest }: Props) {
  return (
    <ButtonContainer activeOpacity={0.8} {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
