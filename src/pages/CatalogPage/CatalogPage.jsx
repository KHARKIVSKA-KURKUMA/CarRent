import styled from "styled-components";
import Filters from "../../components/Filters/Filters";
import CarList from "../../components/CarList/CarList";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 80px;
`;

const CatalogPage = () => {
  return (
    <Container>
      <Filters />
      <CarList />
    </Container>
  );
};

export default CatalogPage;
