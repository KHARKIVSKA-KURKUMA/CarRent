import { useSelector } from "react-redux";
import CarList from "../../components/CarList/CarList";
import { favoriteSelector } from "../../store/cars/carSelectors";
import styled from "styled-components";
import EmptyFavorites from "../../components/Favorites/EmptyFavorites";

const Container = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 10px 80px;
  min-height: calc(100vh - 82px);
`;

const FavoritePage = () => {
  const cars = useSelector(favoriteSelector);

  return (
    <Container>
      {cars.length > 0 ? <CarList cars={cars} /> : <EmptyFavorites />}
    </Container>
  );
};

export default FavoritePage;
