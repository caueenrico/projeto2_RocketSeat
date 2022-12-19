import { Container } from "./styles";

import { TextInputProps, TextInput } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({...rest}: Props){
  const {COLORS} = useTheme()

  return(
    <Container 
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}