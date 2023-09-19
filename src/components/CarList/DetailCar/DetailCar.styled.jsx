import { MdOutlineCancel } from "react-icons/md";
import styled from "styled-components";

const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
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
const CategoryTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 24px;
`;
const Close = styled(MdOutlineCancel)`
  position: absolute;
  top: 16px;
  right: 16px;
`;
const Description = styled.p`
  font-family: "Raleway", sans-serif;
`;
const CardContainer = styled.div`
  width: 540px;
  height: auto;
  position: relative;
  background-color: white;
  padding: 40px;
  border-radius: 24px;
  img {
    width: 100%;
    border-radius: 16px;
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
  margin-top: 14px;
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
export {
  ConditionList,
  CategoryTitle,
  Close,
  CardHead,
  Container,
  CardContainer,
  Description,
};
