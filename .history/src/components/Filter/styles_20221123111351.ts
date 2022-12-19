import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type FilterStylesProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStylesProps>`
  ${({theme, isActive}) => isActive && `
    border: 1px solid ${theme.COLORS.GREEN_700};
  `}

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;

`
export const Title = styled.