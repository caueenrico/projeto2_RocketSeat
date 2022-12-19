import { Container } from "./styles";

import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type TextInputProps = TextInputProps & {
  inputRef?: React.RefObject<Text>
}

export function Input({...rest}: TextInputProps){
  const {COLORS} = useTheme()

  return(
    <Container 
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}