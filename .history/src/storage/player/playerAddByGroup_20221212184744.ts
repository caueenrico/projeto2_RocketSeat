import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLETION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer:PlayerStorageDTO, group: string ){
  try{
    const storedPlayers = await playersGetByGroup(group)

    const playerAready

    await AsyncStorage.setItem(`${PLAYER_COLLETION}-${group}`, '')

  } catch(error) {
    throw (error) 
  }
}