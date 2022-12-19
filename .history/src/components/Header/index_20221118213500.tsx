import { Container, Logo } from "./styles";
import logoImg from '@assets/logo.png';

export function Header() {
  
  return (
    <Container>
      <CaretLeft size={32} color="#fff" />
      <Logo source={logoImg}/>
    </Container>
  )
}