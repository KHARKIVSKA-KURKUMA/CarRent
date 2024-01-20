import DialogContent from "@mui/material/DialogContent";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 10px 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 50px 0;
  }
  @media screen and (min-width: 1400px) {
    justify-content: center;
    align-items: center;
  }
`;
const Wrap = styled.div`
  @media screen and (min-width: 1400px) {
    display: flex;
  }
`;
const TextContainer = styled.div`
  flex: 1;
  padding: 30px 0;
  .hero-btn {
    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 20px 20px 20px 0;
  }
  @media screen and (min-width: 1400px) {
    margin-right: 450px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
  font-family: "Black Ops One", cursive;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 70px;
    text-align: start;
    max-width: 550px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 82px;
    max-width: 650px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    text-align: start;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    text-align: start;
    max-width: 500px;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #3470ff;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
  @media screen and (min-width: 768px) {
    display: inline-flex;
    justify-content: start;
  }
`;

const LearnMoreButton = styled(Button)`
  background-color: transparent;
  color: #3470ff;
  display: none;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: transparent;
    color: #0b44cd;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const ImageWrap = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    position: absolute;
    display: block;
    top: 100px;
    transform: translateX(500px);
    img {
      max-width: 500px;
    }
  }
  @media screen and (min-width: 1400px) {
    transform: translateX(550px);
    img {
      max-width: 600px;
    }
  }
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
  Wrap,
};
