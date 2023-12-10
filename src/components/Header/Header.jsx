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
  Account,
} from "./Header.styled";
import Logotype from "../../img/rent.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import { StyleSheetManager } from "styled-components";
import { Menu, MenuItem, useMediaQuery } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderMenu from "./HeaderMenu";

import { useSelector } from "react-redux";
import { getUserName } from "../../store/auth/authSelectors";
import CloseDialog from "./CloseDialog";

const Header = () => {
  const { pathname } = useLocation();
  const userName = useSelector(getUserName);
  /* -------------------------------------------------------------------------- */
  const [isOpen, setIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpen] = useState(false);
  /* -------------------------------------------------------------------------- */
  const isMobile = useMediaQuery("(min-width: 768px)");
  const open = Boolean(anchorEl);
  /* -------------------------------------------------------------------------- */
  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleMenuClose = () => {
    setMenuIsOpen(false);
    document.body.style.overflow = "auto";
    const root = document.getElementById("root");
    root.style.overflow = "auto";
  };
  const handleMenuOpen = () => {
    setMenuIsOpen(true);
    document.body.style.overflow = "hidden";
    const root = document.getElementById("root");
    root.style.overflow = "hidden";
  };
  const handleCloseModal = () => setOpen(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClickLogout = () => {
    setAnchorEl(null);
    setOpen(true);
  };
  /* -------------------------------------------------------------------------- */

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
          ) : isMobile ? (
            <NavContainer>
              <SNavLink to={"/catalog"}>
                <Catalog size={26} />
                Catalog
              </SNavLink>
              <SNavLink to={"/favorite"}>
                <Favorite size={28} />
                Favorite
              </SNavLink>
              {pathname !== "/account" ? (
                <SNavLink to={"/login"}>
                  <Account size={28} />
                  Account
                </SNavLink>
              ) : (
                <>
                  <SNavLink
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <Account size={28} />
                    Account
                  </SNavLink>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseMenu}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem>Welcome, {userName}</MenuItem>
                    <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
                  </Menu>
                </>
              )}
              <CloseDialog open={openModal} onClose={handleCloseModal} />
            </NavContainer>
          ) : (
            <>
              <AiOutlineMenu onClick={handleMenuOpen} size={30} />
            </>
          )}
        </HeaderContainer>
        {isOpen && <ContactForm handleClose={handleClose} />}
        {menuIsOpen && <HeaderMenu handleClose={handleMenuClose} />}
      </Container>
    </StyleSheetManager>
  );
};

export default Header;
