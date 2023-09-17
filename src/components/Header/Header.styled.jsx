import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #cacacd;
`;
const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 180px;
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
  font-family: "Fuggles", cursive;
  font-size: 40px;
`;
export {
  Container,
  LogoContainer,
  StyledBtn,
  HeaderContainer,
  Logo,
  LogoImgContainer,
};
