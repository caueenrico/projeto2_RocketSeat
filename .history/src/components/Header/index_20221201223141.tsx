import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from '@assets/logo.png';

type Props = {  
  showBackButton?: boolean;
};


export function Header( { showBackButton = false }: Props ) {

  return (
    <Container>
     { showBackButton &&
        <BackButton
          onPress={handleGroups}
        > 
          <BackIcon />
        </BackButton>
     }
      <Logo source={logoImg}/>
    </Container>
  )
}