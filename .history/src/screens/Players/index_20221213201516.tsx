import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

type RouteParams ={
  group: string 
}

export function Players() {
  const [newPlayerName, setnewplayerName] = useState('')
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute()
  const {group} = route.params as RouteParams // aqui estou pegando dados de uma outra screen atraves dos parametros das rotas

  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handlAddPlayer(){
    if(newPlayerName.trim().length === 0 ){
      return Alert.alert('Nova pessoa', 'informe o nome da pessoa para adicionar' )
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try{
      await playerAddByGroup(newPlayer, group)
      
      newPlayerNameInputRef.current?.blur()
      
      setnewplayerName('')
      fetchPlayersByTeam()
      
    }catch (error){
      if(error instanceof AppError){
        Alert.alert('Nova pessoa' , error.message)
      }else{
        console.log(error)
        Alert.alert('Nova pessoa', 'Não foi possivel adicionar ')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try{
      const playersByTeam = await playerGetByGroupAndTeam(group,team)
      setPlayers(playersByTeam)
    }catch(error){
      console.log(error)
      Alert.alert('Pessoas', 'não foi possivel carregar as pessoas ')
    }
  }

  async function handlePlayerRemove(playerName: string){
    try {

      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()
      
    } catch (error) {
      throw error
      Alert.alert('Remover Pessoa', 'não foi possivel remover essa pessoa')
    }
  }

  async function handleRemoveGroup(){
    
  }

  useEffect(() => {
    console.log('useeffect executou')
    fetchPlayersByTeam()
  },[team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input 
          inputRef={newPlayerNameInputRef}
          onChangeText={setnewplayerName}
          value={newPlayerName}
          placeholder="Nome do jogador" 
          autoCorrect={false} 
          onSubmitEditing={handlAddPlayer}
          returnKeyType='done'
          />

        <ButtonIcon 
          icon="add"
          onPress={handlAddPlayer}
         />
      </Form>

      <HeaderList>
        <FlatList
          data={["time a", "time b"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
          />
        )}
        
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhum jogador encontrado" />
        )}

        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1, justifyContent: 'center' }
        ]}
      />

      <Button 
        title="Remover Turma"
        type="SECONDARY"
        

      />
    </Container>
  );
}
