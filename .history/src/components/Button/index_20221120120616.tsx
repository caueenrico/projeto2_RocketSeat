import { TouchableOpacity } from "react-native"
import { ButtonTypeStyleProps, Container, Title } from "./styles"

type Props = TouchableOpacityP & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({title, type = 'PRIMARY', ...rest}: Props){
  return(
    <Container 
      type={type}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}