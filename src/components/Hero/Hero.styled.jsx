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
  font-size: 84px;
  max-width: 650px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  max-width: 500px;
`;
const Content = styled(DialogContent)`
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.6);
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
  background-color: #2c59ec;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const LearnMoreButton = styled(Button)`
  background-color: transparent;
  color: #2c59ec;
`;

const ImageWrap = styled.div`
  /* max-width: 600px; */
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