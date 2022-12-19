import { FlatList } from "react-native";
import { useState } from "react";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Filter } from "@components/Filter";

export function Players() {
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState([]);

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

      
    </Container>
  );
}
