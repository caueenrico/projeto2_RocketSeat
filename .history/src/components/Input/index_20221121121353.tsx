import { Container } from "./styles";

import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";


export function Input({...rest}: TextInputProps){
  const {} = useTheme(/)

  return(
    <Container 
      placeholderTextColor='${}'
      {...rest}

    />
  )
}