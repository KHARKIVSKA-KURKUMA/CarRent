import DialogContent from "@mui/material/DialogContent";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px 20px 20px 0;
`;

const Title = styled.h1`
  font-size: 82px;
  max-width: 650px;
  margin-bottom: 20px;
  font-family: "Black Ops One", cursive;
`;

const Paragraph = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  max-width: 500px;
  font-family: "Raleway", sans-serif;
`;
const Content = styled(DialogContent)`
  margin-top: 20px;
  color: #464646;
  font-family: "Raleway", sans-serif;
  h2 {
    font-size: 20px;
    margin-top: 20px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  ol {
    list-style-type: decimal;
    margin-left: 20px;
  }

  li {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Button = styled(Link)`
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background-color: #3470ff;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

const LearnMoreButton = styled(Button)`
  background-color: transparent;
  color: #3470ff;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: transparent;
    color: #0b44cd;
  }
`;

const ImageWrap = styled.div`
  position: absolute;
  transform: translateX(600px);
`;
export {
  LearnMoreButton,
  ImageWrap,
  Paragraph,
  Button,
  Title,
  Container,
  Content,
  TextContainer,
};
