import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.COLORS['GRAY_600']};
  justify-content: center;
  align-items: center;
`;

export const Loading = 