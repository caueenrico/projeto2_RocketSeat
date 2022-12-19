import { Container, Logo } from "./styles";
import {} from 'phosphor-react-native'
import logoImg from '@assets/logo.png';

export function Header() {
  
  return (
    <Container>
      
      <Logo source={logoImg}/>
    </Container>
  )
}