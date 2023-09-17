import styled from "styled-components";
import Filters from "../../components/Filters/Filters";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 80px;
`;

const CatalogPage = () => {
  return (
    <Container>
      <Filters />
    </Container>
  );
};

export default CatalogPage;
