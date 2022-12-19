import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export function Groups() {
  return (
    <Conya>
      <Text>text</Text>
      <StatusBar style="auto" />
    </Conya>
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
