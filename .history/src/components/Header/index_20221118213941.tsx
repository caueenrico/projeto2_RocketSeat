import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from '@assets/logo.png';

export function Header() {
  
  return (
    <Container>
     <BackButton>>
      <BackIcon />
      <Logo source={logoImg}/>
    </Container>
  )
}