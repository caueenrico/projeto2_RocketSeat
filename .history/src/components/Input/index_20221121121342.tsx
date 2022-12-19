import { Container } from "./styles";

import { TextInputProps } from "react-native";


export function Input({...rest}: TextInputProps){
  const {}

  return(
    <Container 
      placeholderTextColor='${}'
      {...rest}

    />
  )
}