import styled from "styled-components";
import NoData from "../../img/no-data-notif.png";
import { useSelector } from "react-redux";
import { getUserName } from "../../store/auth/authSelectors";

const Container = styled.div`
  display: flex;
  padding: 20px 30px 50px;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 350px;
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

const NoAdvertsFound = () => {
  const user = useSelector(getUserName);
  return (
    <Container>
      <Image src={NoData} alt="No Data Poster" />
      <Heading> Hey {user}!</Heading>
      <Paragraph>
        It looks like your garage is feeling a bit lonely. Why not give it some
        company by adding a new advert? Share the love for your vehicles and
        connect with fellow enthusiasts! Tap here to add a new advert and let
        the community discover your wheels.
      </Paragraph>
    </Container>
  );
};

export default NoAdvertsFound;
