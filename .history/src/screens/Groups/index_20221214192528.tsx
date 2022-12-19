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
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup (){
    navigation.navigate('new')
    console.log('foi')
  }

  async function fetchGroups(){
    try{
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)
    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(true)
    }
  }

  useFocusEffect(useCallback(()=>{
    console.log('useFocusEffect executou')
    fetchGroups()
  },[]))

  // useEffect(() => {
  //   fetchGroups()
  // },[])

  function handleOpenGroup(group:string){
    navigation.navigate('players',{group} )
  }

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
          onPress={() => handleOpenGroup(item)}
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


