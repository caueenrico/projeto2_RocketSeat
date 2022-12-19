import { Container, Logo } from "./styles";
import {} from 'pho'
import logoImg from '@assets/logo.png';

export function Header() {
  
  return (
    <Container>
      
      <Logo source={logoImg}/>
    </Container>
  )
}