import styled from "styled-components";
import Img from "../../img/empty-favorites.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 15px 30px;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 400px;
`;

const Heading = styled.h2`
  font-size: 34px;
  font-weight: 700;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  margin-top: 10px;
  text-align: center;
  @media screen and (min-width: 1200px) {
    text-align: start;
  }
`;

const SLink = styled(Link)`
  font-size: 20px;
  margin-top: 30px;
  color: #fff;
  cursor: pointer;
  background-color: #3470ff;
  padding: 15px 40px;
  border-radius: 16px;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

const EmptyFavorites = () => {
  return (
    <Container>
      <Image src={Img} alt="EmptyIcon" />
      <Heading>No Favorites</Heading>
      <Paragraph>
        You can add an item to your favorites by clicking the Catalog or
      </Paragraph>
      <SLink to={"/catalog"}>Go Back</SLink>
    </Container>
  );
};

export default EmptyFavorites;
