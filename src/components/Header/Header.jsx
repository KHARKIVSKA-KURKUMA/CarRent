import {
  Container,
  HeaderContainer,
  LogoContainer,
  StyledBtn,
  Logo,
  LogoImgContainer,
} from "./Header.styled";
import Logotype from "../../img/rent.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";

const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <Container>
      <HeaderContainer>
        <LogoContainer to="/">
          <LogoImgContainer>
            <img src={Logotype} alt="Logotype" />
          </LogoImgContainer>
          <Logo>DriveOn</Logo>
        </LogoContainer>
        {pathname === "/" ? (
          <StyledBtn type="button" onClick={handleOpen}>
            Contact Us
          </StyledBtn>
        ) : (
          <div>Not Home</div>
        )}
      </HeaderContainer>
      {isOpen && <ContactForm handleClose={handleClose} />}
    </Container>
  );
};

export default Header;
