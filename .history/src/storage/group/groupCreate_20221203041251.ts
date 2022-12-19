import AsyncStorage from "@react-native-async-storage/async-storage"

export async function groupCreate(newGroup: string){
  try {
    await AsyncStorage.setItem('key', newGroup)
  } catch(error){
    throw error
  }
}