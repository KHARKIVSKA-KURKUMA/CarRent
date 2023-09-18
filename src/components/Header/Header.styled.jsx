import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { GrCatalog } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #cacacd;
`;
const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 80px;
  ${(props) =>
    props.path === "/" &&
    `
    padding: 0px 180px;
  `}
`;
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000000;
`;
const LogoImgContainer = styled.div`
  max-width: 60px;
`;
const StyledBtn = styled.button`
  background-color: #2c59ec;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
`;
const Logo = styled.p`
  font-family: "Caveat", cursive;
  font-size: 36px;
  font-weight: 700;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 15px;
  font-family: "Caveat", cursive;
  font-size: 24px;
  text-transform: uppercase;
`;
const SNavLink = styled(NavLink)`
  color: #000;
  &.active {
    position: relative;
    color: #2c59ec;
    svg {
      fill: #2c59ec;
      path {
        stroke: #2c59ec;
      }
    }
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      background-color: #2c59ec;
      bottom: 0;
      left: 0;
      transform: translateY(10px);
    }
  }
`;
const Catalog = styled(GrCatalog)`
  margin-right: 5px;
`;
const Favorite = styled(MdFavorite)`
  margin-right: 5px;
  fill: red;
`;
export {
  Container,
  LogoContainer,
  StyledBtn,
  HeaderContainer,
  Logo,
  Catalog,
  Favorite,
  LogoImgContainer,
  NavContainer,
  SNavLink,
};
