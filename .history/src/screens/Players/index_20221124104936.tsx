import { FlatList } from "react-native";
import { useState } from "react";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";

export function Players() {
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState(['caue', 'larissa', 'lucas', 'maria', 'yuri']);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do jogador" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["time a", "time b", "time c"]}
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

      <B
    </Container>
  );
}
