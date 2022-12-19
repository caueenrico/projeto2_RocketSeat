import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Form } from "./styles";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";


export function Players(){
  return(
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
      <Input 
        placeholder="Nome do jogador"
        autoCorrect={false}
      />

      <ButtonIcon 
        icon='add'
      
      />
      </Form>

      <FlatList
        data
      />

      <Filter
        title='time a'
        isActive
      />
    </Container>
  )
}