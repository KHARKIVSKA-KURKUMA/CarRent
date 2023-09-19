import styled from "styled-components";
import Box from "@mui/material/Box";
import { GrPowerReset } from "react-icons/gr";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  padding: 30px 0;
`;
const Reset = styled(GrPowerReset)`
  path {
    stroke: #fff;
  }
`;
const Label = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: center;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;
const BoxS = styled(Box)`
  position: relative;
`;
const Button = styled.button`
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
  margin-left: 15px;
  transform: translateY(-10px);
  background-color: #3470ff;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
export { Container, Label, BoxS, Button, Form, Reset };
