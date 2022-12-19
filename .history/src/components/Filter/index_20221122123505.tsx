import { TouchableOpacityProps } from "react-native";
import { Container, FilterStylesProps } from "./styles";

type Props = TouchableOpacityProps & FilterStylesProps & {
  title: string;
}

export function Filter({title, isActive = false, ...rest}: Props){
  return(
    <Container
      isActive={isActive}
      {...rest}
    >
      ficou faltando estilizar o tilte
    </Container>
  )
}