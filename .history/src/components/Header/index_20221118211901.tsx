import { Container, Logo } from "./styles";
import {Carretleft } from 'phosphor-react-native'
import logoImg from '@assets/logo.png';

export function Header() {
  
  return (
    <Container>
      
      <Logo source={logoImg}/>
    </Container>
  )
}