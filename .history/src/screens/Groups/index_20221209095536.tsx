import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';



export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup (){
    navigation.navigate('new')
    console.log('foi')
  }

  async function fetchGroups(){
    try{
      const data = await groupsGetAll()
      setGroups(data)
    }catch(error){
      console.log(error)
    }
  }

  useFocusEffect(useCallback(()=>{
    
  },[]))
  // useEffect(() => {
  //   fetchGroups()
  // },[])

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma'/>

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem= {({item}) => (
          <GroupCard 
          title={item}
        />)}
        contentContainerStyle = {groups.length === 0 && {flex:1}}
        ListEmptyComponent={() => <ListEmpty message='Que tal Cadastrar a primeira turma ?'/>}
      />
      
      <Button 
        title='Criar nova turma' 
        onPress={handleNewGroup}
      />
    </Container>
  );
}


