import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type FilterStylesProps = {
  isActived: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStylesProps>`
  ${({theme, isActived}) => isActived && `
    border: 1px solid ${theme.COLORS.GREEN_700};
  `}

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;

  `
