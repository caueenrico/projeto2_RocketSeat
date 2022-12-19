import { Container, Icon, Name } from "./styles";

type Props = {
  name: string;
}

export function PlayerCarrda({name}: Props) {
  return(
    <Container>
      <Icon 
        name
      />
      <Name>
        {name}
      </Name>
    </Container>
  )
}