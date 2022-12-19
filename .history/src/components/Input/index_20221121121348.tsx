import { Container } from "./styles";

import { TextInputProps } from "react-native";


export function Input({...rest}: TextInputProps){
  const {} = use

  return(
    <Container 
      placeholderTextColor='${}'
      {...rest}

    />
  )
}