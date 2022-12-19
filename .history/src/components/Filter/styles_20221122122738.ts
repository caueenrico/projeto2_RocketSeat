import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type FilterStylesProps = {
  isActived: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStylesProps>`

`
