import {
  Container,
  HeaderContainer,
  LogoContainer,
  StyledBtn,
  Logo,
  LogoImgContainer,
} from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <LogoContainer to="/">
          <LogoImgContainer>
            <img src="./src/img/rent.png" alt="Logo" />
          </LogoImgContainer>
          <Logo>DriveOn</Logo>
        </LogoContainer>

        <StyledBtn type="button">Contact Us</StyledBtn>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
