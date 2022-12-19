import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.COLORS['GRAY_600']};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 32px;
  
`;