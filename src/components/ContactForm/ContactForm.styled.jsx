import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #ccc;
  z-index: 1000000;
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  h2 {
    font-family: "Playfair Display", serif;
    text-align: center;
    margin-bottom: 25px;
  }
`;

const Close = styled(AiFillCloseCircle)`
  position: absolute;
  right: 20px;
  top: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: #3470ff;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
export { Button, Container, Form, Close };
