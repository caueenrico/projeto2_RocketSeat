import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLETION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(newPlayer:PlayerStorageDTO, group: string ){
  try{
    const storedPlayers = await pla

    await AsyncStorage.setItem(`${PLAYER_COLLETION}-${group}`, '')

  } catch(error) {
    throw (error) 
  }
}