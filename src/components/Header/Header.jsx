import {
  Container,
  HeaderContainer,
  LogoContainer,
  StyledBtn,
  Logo,
  LogoImgContainer,
  NavContainer,
  SNavLink,
  Catalog,
  Favorite,
} from "./Header.styled";
import Logotype from "../../img/rent.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import { StyleSheetManager } from "styled-components";

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
    <StyleSheetManager shouldForwardProp={(prop) => !["path"].includes(prop)}>
      <Container path={pathname}>
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
            <NavContainer>
              <SNavLink to={"/catalog"}>
                <Catalog size={24} />
                Catalog
              </SNavLink>
              <SNavLink to={"/favorite"}>
                <Favorite size={24} />
                Favorite
              </SNavLink>
            </NavContainer>
          )}
        </HeaderContainer>
        {isOpen && <ContactForm handleClose={handleClose} />}
      </Container>
    </StyleSheetManager>
  );
};

export default Header;
