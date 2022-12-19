import {Container,Icon,Title } from './styles';

type Props = {
  title: string;
}

export function GroupCard({title}: Props){
  return(
    <Container>
      <Icon name="users"/>
      <Title>{title}</Title>
    </Container>
  )
}