import Adventure from "../../components/Adventure/Adventure";
import Benefits from "../../components/Benefits/Benefits";
import { Container } from "../../components/Header/Header.styled";
import Hero from "../../components/Hero/Hero";

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
