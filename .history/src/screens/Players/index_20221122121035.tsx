import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container } from "./styles";


export function Players(){
  return(
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Input 
      
      />

      <ButtonIcon 
        icon='home'
        type='SECONDARY'
      />
    </Container>
  )
}