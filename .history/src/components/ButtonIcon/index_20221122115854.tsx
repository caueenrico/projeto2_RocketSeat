import { TouchableOpacityProps } from "react-native";
import { ButtonIconStylesProps, Container, Icon } from "./styles";
import {}

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
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