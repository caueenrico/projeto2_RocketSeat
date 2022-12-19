import { TouchableOpacity } from "react-native"
import { ButtonTypeStyleProps, Container, Title } from "./styles"

type Props = TouchableOpacity & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({title, type = 'PRIMARY', ...rest}: Props){
  return(
    <Container {...}>
      <Title>

      </Title>
    </Container>
  )
}