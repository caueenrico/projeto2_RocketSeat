import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string){

  try {
    const storedGroup = await groupsGetAll()
    const groups = storedGroup.filter(group => group !== groupDeleted)

    const listGroup = JSON.stringify(filtered)

  } catch (error) {
    throw error
    
  }

}