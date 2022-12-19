import AsyncStorage from "@react-native-async-storage/async-storage"

import { GROUP_COLLETION } from "@storage/storageConfig"
import { groupsGetAll } from "./groupsGetAll"

export async function groupCreate(newGroup: string){
  try {
    const storedGroups = await groupsGetAll()


    

    await AsyncStorage.setItem(GROUP_COLLETION, [...stored, newGroup])
  } catch(error){
    throw error
  }
}