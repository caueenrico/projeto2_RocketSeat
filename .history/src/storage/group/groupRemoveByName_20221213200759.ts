import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLETION } from "@storage/storageConfig";
import { Alert } from "react-native";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string){

  try {
    const storedGroup = await groupsGetAll()
    const groups = storedGroup.filter(group => group !== groupDeleted)

    await AsyncStorage.setItem(GROUP_COLLETION, JSON.stringify(groups))

  } catch (error) {
    throw error
    
  }

}