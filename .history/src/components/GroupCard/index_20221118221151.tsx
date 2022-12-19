import {Container,Icon,Title } from './styles';
import {}

type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({title}: Props){
  return(
    <Container>
      <Icon/>

      <Title>
        {title}
      </Title>
    </Container>
  )
}