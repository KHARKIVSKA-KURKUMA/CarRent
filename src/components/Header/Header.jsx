import {
  Container,
  HeaderContainer,
  LogoContainer,
  StyledBtn,
  Logo,
  LogoImgContainer,
} from "./Header.styled";
import Logotype from "../../img/rent.png";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <LogoContainer to="/">
          <LogoImgContainer>
            <img src={Logotype} alt="Logotype" />
          </LogoImgContainer>
          <Logo>DriveOn</Logo>
        </LogoContainer>

        <StyledBtn type="button">Contact Us</StyledBtn>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
