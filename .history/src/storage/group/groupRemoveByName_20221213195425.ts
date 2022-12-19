import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string){

  try {
    const storedGroup = await groupsGetAll()
    const groups = storedGroup.filter(group => group !)

  } catch (error) {
    
  }

}