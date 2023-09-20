import styled from "styled-components";
import NoData from "../../img/no-data.png";
import { useDispatch } from "react-redux";
import { resetArr } from "../../store/cars/carsSlice";
import { resetFilter } from "../../store/filter/filterSlice";

const Container = styled.div`
  display: flex;
  padding: 20px 30px 50px;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
`;

const Heading = styled.h2`
  font-size: 34px;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  margin-top: 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

const SLink = styled.button`
  font-size: 20px;
  margin-top: 30px;
  color: #fff;
  cursor: pointer;
  background-color: #3470ff;
  padding: 15px 40px;
  border-radius: 16px;
  border: none;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

const NoDataFound = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetArr());
    dispatch(resetFilter());
  };
  return (
    <Container>
      <Image src={NoData} alt="No Data Poster" />
      <Heading>No Matching Cars Found</Heading>
      <Paragraph>We couldn't find any cars that match your filters.</Paragraph>
      <SLink type="button" onClick={handleClick}>
        Reset
      </SLink>
    </Container>
  );
};

export default NoDataFound;
