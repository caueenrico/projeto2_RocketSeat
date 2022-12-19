import { Alert, FlatList } from "react-native";
import { useState } from "react";
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

type RouteParams ={
  group: string 
}

export function Players() {
  const [newPlayerName, setnewplayerName] = useState('')
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState([]);

  const route = useRoute()

  const {group} = route.params as RouteParams // aqui estou pegando dados de uma outra screen atraves dos parametros das rotas

  async function handlAddPlayer(){
    if(newPlayerName.trim().length === 0 ){
      return Alert.alert('Nova pessoa', 'informe o nome da pessoa para adicionar' )
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try{

    }catch (error){
      if(error instanceof AppError){
        Alert.alert('Nova pessoa' , error.message)
      }else{
        console.log(error)
        Alert
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input 
          onChangeText={setnewplayerName}
          placeholder="Nome do jogador" 
          autoCorrect={false} />

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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item}
            onRemove={() => console.log(`removido ${item}`)}
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
