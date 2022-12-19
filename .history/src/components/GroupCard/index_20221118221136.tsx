import {Container,Icon,Title } from './styles';

type Props = TouchableOp{
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