import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './styles';


export function Groups() {
  return (
    <Container>
      <Text>text</Text>
      <StatusBar style="auto" />
    </Contain>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
