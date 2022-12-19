import { TouchableOpacityProps } from "react-native";
import { ButtonIconStylesProps, Container } from "./styles";

type Props = TouchableOpacityProps & {
  type: ButtonIconStylesProps
}

export function ButtonIcon({}: Props){
  return (
    <Container>
      
    </Container>
  )
}