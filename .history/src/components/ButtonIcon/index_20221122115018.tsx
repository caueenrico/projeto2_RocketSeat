import { TouchableOpacityProps } from "react-native";
import { ButtonIconStylesProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type: ButtonIconStylesProps
}

export function ButtonIcon({}: Props){
  return (
    <Container>
      <Icon 
        name='hom'
      />
    </Container>
  )
}