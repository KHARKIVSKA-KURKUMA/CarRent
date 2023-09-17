import styled from "styled-components";
import Adventure from "../../components/Adventure/Adventure";
import Benefits from "../../components/Benefits/Benefits";
import Hero from "../../components/Hero/Hero";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 180px;
`;

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <Benefits />
      <Adventure />
    </Container>
  );
};

export default HomePage;
