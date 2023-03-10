import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";

export function NewGroup(){
  return(
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight
          title='Nova Turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

      </Content>
      
    </Container>
  )
}