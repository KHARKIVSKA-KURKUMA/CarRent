import { useSelector } from "react-redux";
import CarList from "../../components/CarList/CarList";
import { favoriteSelector } from "../../store/cars/carSelectors";
import styled from "styled-components";
import EmptyFavorites from "../../components/Favorites/EmptyFavorites";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 80px;
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
