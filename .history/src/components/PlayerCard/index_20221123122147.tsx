import { Container, Icon, Name } from "./styles";

type Props = {
  name: string;
}

export function PlayerCarrda({name}: Props) {
  return(
    <Container>
      <Icon 
        name='person'
      />
      <Name>
        {name}
      </Name>
    </Container>
  )
}