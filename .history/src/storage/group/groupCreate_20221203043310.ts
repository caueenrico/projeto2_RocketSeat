import AsyncStorage from "@react-native-async-storage/async-storage"

import { GROUP_COLLETION } from "@storage/storageConfig"
import { groupsGetAll } from "./groupsGetAll"

export async function groupCreate(newGroup: string){
  try {
    const stored = groupsGetAll()


    await AsyncStorage.setItem(GROUP_COLLETION, newGroup{})
  } catch(error){
    throw error
  }
}