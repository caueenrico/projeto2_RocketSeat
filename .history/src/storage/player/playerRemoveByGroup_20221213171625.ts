import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLETION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string){
  try{
    const storage = await playersGetByGroup(group)

    

  }catch(error){
    throw error
  }
}