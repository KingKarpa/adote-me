import { TextInputProps } from "react-native";
import { Container, Input, InputContainer, Label, LabelWrapper } from "./styles";

type Props = TextInputProps & {
  label: string;
};

export function FormInput({ label, ...rest }: Props) {
  return (
    <Container>
      <LabelWrapper>
        <Label>{label}</Label>
      </LabelWrapper>

      <InputContainer>
        <Input {...rest} placeholderTextColor="#9E9E9E" />
      </InputContainer>
    </Container>
  );
}
