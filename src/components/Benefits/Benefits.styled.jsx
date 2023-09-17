import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  padding-bottom: 60px;
`;
const ChosenCarWrap = styled.div`
  background-color: rgba(44, 89, 236, 0.1);
  position: relative;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  div {
    display: flex;
    p {
      display: block;
      background: rgba(44, 89, 236, 0.6);
      padding: 7px 15px;
      border-radius: 30px;
      position: relative;
      color: #fff;
      margin-bottom: 35px;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #9c9b9b;
        bottom: 0;
        left: 0;
        transform: translateY(20px);
      }
    }
  }
`;
const CarContainer = styled.div`
  position: absolute;
  max-width: 500px;
  transform: translateX(-80px);
  ${(props) =>
    props.id === "bugatti" &&
    `
    width: 330px;
    bottom: -15px;
  `}

  ${(props) =>
    props.id === "lamborghini" &&
    `
    width: 300px;
  `}

  ${(props) =>
    props.id === "tesla" &&
    `
  bottom: 5px;
  width: 330px;
  `}
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  button {
    background-color: transparent;
    border: 1px solid #b8b5b5;
    border-radius: 20px;
    padding: 15px 30px;
    display: flex;
    font-size: 18px;
    gap: 10px;
    &.selected {
      background-color: #2c59ec;
      color: #fff;
    }
  }
`;
const CarName = styled.p`
  font-size: 24px;
`;
const SLink = styled(Link)`
  position: absolute;
  right: 20px;
  background-color: black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PriceBlockWrap = styled.div`
  padding: 0 20px;
  width: 300px;

  height: 300px;
  .title {
    color: black;
    margin-left: 60px;
    max-width: 120px;
    font-size: 20px;
    position: relative;
    margin-bottom: 20px;
    &::after {
      content: "";
      background-color: #9c9b9b;
      position: absolute;
      width: 45px;
      height: 2px;
      left: 0;
      transform: translateX(-60px);
    }
  }
`;
const Box = styled.div`
  padding: 20px;
  box-shadow: 10px 10px #2c59ec;
  background-color: rgba(44, 89, 236, 0.8);
  border-radius: 10px;
  color: #fff;
  .feedback {
    font-size: 25px;
    font-family: "Caveat", cursive;
  }
  .price {
    display: flex;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 15px;

    .from {
      display: flex;
      font-size: 18px;
      font-weight: 500;
      align-items: center;
    }
  }
  .rate {
    display: flex;
    font-size: 24px;
    gap: 5px;
    position: relative;
    margin-bottom: 30px;
    p {
      &::after {
        content: "";
        background-color: #fdfdfd;
        position: absolute;
        width: 65%;
        height: 1px;
        transform: translateY(12px);
        right: 0;
      }
    }
  }
`;
export {
  Container,
  StyledUl,
  CarContainer,
  ChosenCarWrap,
  SLink,
  CarName,
  PriceBlockWrap,
  Box,
};
