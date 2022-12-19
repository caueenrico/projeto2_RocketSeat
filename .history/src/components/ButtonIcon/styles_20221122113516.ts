import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export type ButtonIconStylesProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonIconStylesProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  
`