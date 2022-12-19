import AsyncStorage from "@react-native-async-storage/async-storage"

import { GROUP_COLLETION } from "@storage/storageConfig"
import { AppError } from "@utils/AppError"
import { groupsGetAll } from "./groupsGetAll"

export async function groupCreate(newGroup: string){
  try {
    const storedGroups = await groupsGetAll()
    const groupAlreadyExists = storedGroups.includes(newGroup)

    if(groupAlreadyExists){
      throw new AppError('já existe um grupo cadastrado com esse nome')
    }

    const storage = JSON.stringify([...storedGroups, newGroup])
    await AsyncStorage.setItem(GROUP_COLLETION, storage )

  } catch(error){
    throw error
  }
}