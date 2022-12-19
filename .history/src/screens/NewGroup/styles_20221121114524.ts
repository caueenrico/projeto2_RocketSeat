import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding: 24px;
  padding-top: 52px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`
export const Icon = styled(UsersThree).attrs(({theme}) => ({
  color: theme.COLORS.GRAY_400,
  size: 56
}))`

`