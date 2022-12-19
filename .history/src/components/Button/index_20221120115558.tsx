import { TouchableOpacity } from "react-native"
import { ButtonTypeStyleProps } from "./styles"

type Props = TouchableOpacity & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({title, type = 'PRIMARY', ...rest}: Props){
  return(
    
  )
}