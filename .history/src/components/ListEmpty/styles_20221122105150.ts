import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  ${({theme}) => css`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_300};
  `}


  text-align: center;

  
`