import { playersGetByGroup } from "./playersGetByGroup";

export async function playerGetByGroupAndTeam(group: string , team: string){
  try{
    const storage = await playersGetByGroup(group)

    const players = storage

  }catch(error){
    throw error
  }
}