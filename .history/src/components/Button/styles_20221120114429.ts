import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<>/