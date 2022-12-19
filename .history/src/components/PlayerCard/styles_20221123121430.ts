import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`

export const Name = styled.Text`
  flex: 1;

  ${({theme}) => css`
    font-size: ;
  `}
`