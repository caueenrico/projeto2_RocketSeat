
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useState } from 'react';
import { Container } from './styles';



export function Groups() {
  const [groups, setGroups] = useState(['Galera da rocketseat'])

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma'/>

      {groups}
      <GroupCard title='galera' />
    </Container>
  );
}


