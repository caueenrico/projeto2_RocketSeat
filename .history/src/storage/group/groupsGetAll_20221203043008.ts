
import AsyncStorage from "@react-native-async-storage/async-storage"

import { GROUP_COLLETION } from "@storage/storageConfig"

export async function grupsGetAll(){
  try{
    const storage = await AsyncStorage.getItem()
  }
  catch(error){
    throw error
  }
}