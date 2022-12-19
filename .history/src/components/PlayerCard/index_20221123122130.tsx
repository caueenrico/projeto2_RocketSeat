import { Container, Name } from "./styles";

type Props = {
  name: string;
}

export function PlayerCarrda({name}: Props) {
  return(
    <Container>
      <Icon
      <Name>
        {name}
      </Name>
    </Container>
  )
}