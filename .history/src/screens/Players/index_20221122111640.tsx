import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";


export function Players(){
  return(
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
      />
    </Container>
  )
}