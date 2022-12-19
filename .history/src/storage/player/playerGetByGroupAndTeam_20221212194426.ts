import { playersGetByGroup } from "./playersGetByGroup";

export async function playerGetByGroupAndTeam(group: string , team: string){
  try{
    const storage = await playersGetByGroup(group)

    

  }catch(error){
    throw error
  }
}