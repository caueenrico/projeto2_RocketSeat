import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from '@assets/logo.png';

type Props = {  
  showBackButton?: boolean;
};


export function Header() {
  
  return (
    <Container>
     <BackButton> 
      <BackIcon />
     </BackButton>
      <Logo source={logoImg}/>
    </Container>
  )
}