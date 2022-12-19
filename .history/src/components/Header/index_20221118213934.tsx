import { BackIcon, Container, Logo } from "./styles";
import logoImg from '@assets/logo.png';

export function Header() {
  
  return (
    <Container>
     <Back
      <BackIcon />
      <Logo source={logoImg}/>
    </Container>
  )
}