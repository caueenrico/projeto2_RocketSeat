import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup(){
  const [groupState , setGroupState ] = useState('')

  const navigation = useNavigation()

  async function handleNew(){
    await groupCreate(groupState)
    navigation.navigate('players', {group: groupState})
  }

  async function fetchGroups()

  console.log(groupState)

  return(
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight
          title='Nova Turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Input 
          placeholder='Nome da turma'
          onChangeText={setGroupState}
        />

        <Button 
          title="Criar"
          style={{marginTop: 20}}
          onPress={handleNew}
        />

      </Content>
      
    </Container>
  )
}