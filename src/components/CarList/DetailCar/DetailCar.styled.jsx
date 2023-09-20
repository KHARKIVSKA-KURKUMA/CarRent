import { MdOutlineCancel } from "react-icons/md";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 10px;
  .condition-value {
    color: #3470ff;
    font-weight: 600;
  }
  gap: 8px;
  li {
    padding: 10px 14px;
    background-color: #f9f9f9;
    border-radius: 35px;
  }
`;
const UnFav = styled(AiOutlineHeart)`
  position: absolute;
  right: 50px;
  cursor: pointer;
  top: 45px;
  transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: #0b44cd;
`;
const Fav = styled(AiFillHeart)`
  position: absolute;
  right: 50px;
  top: 45px;
  cursor: pointer;
  fill: #3470ff;
`;
const CategoryTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 24px;
`;
const Close = styled(MdOutlineCancel)`
  position: absolute;
  top: 16px;
  cursor: pointer;
  right: 16px;
`;
const Description = styled.p`
  font-family: "Raleway", sans-serif;
`;
const CardContainer = styled.div`
  max-width: 540px;
  position: relative;
  background-color: white;
  padding: 40px;
  border-radius: 24px;
  img {
    width: 100%;
    border-radius: 16px;
    /* max-height: 250px; */
  }
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const CardHead = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  .model {
    color: #3470ff;
    margin-left: 3px;
  }
  .year {
    margin-left: 3px;
  }
`;

const InfoDiv = styled.div`
  max-height: 150px;
  overflow-y: scroll;
  margin-top: 14px;
  @media screen and (min-width: 1200px) {
    max-height: 180px;
  }
`;
const RentalButton = styled.a`
  padding: 13px 50px;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: #3470ff;
  margin-top: 24px;
  display: inline-block;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
export {
  ConditionList,
  CategoryTitle,
  Close,
  CardHead,
  Container,
  CardContainer,
  InfoDiv,
  Description,
  RentalButton,
  UnFav,
  Fav,
};
