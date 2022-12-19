import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLETION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playersGetByGroup(group:string) {
  try{

    const storage = await AsyncStorage.getItem(`${PLAYER_COLLETION}-${group}`)

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) ; []

  } catch (error) {
    throw (error)
  }
}