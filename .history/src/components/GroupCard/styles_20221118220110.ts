import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: ;
`