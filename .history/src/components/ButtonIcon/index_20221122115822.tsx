import { TouchableOpacityProps } from "react-native";
import { ButtonIconStylesProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof 
}

export function ButtonIcon({}: Props){
  return (
    <Container>
      <Icon 
        name='home'
        
      />
    </Container>
  )
}