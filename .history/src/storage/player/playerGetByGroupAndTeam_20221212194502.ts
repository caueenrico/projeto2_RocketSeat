import { playersGetByGroup } from "./playersGetByGroup";

export async function playerGetByGroupAndTeam(group: string , team: string){
  try{
    const storage = await playersGetByGroup(group)

    const players = storage.filter(player => player.team )

  }catch(error){
    throw error
  }
}