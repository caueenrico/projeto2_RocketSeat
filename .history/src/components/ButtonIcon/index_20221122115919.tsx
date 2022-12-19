import { TouchableOpacityProps } from "react-native";
import { ButtonIconStylesProps, Container, Icon } from "./styles";
import {MaterialIcons} from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: Button
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