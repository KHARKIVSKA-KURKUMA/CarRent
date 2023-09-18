import styled from "styled-components";
import Filters from "../../components/Filters/Filters";
import CarList from "../../components/CarList/CarList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarsThunk } from "../../store/cars/carsThunk";
import { carSelector } from "../../store/cars/carSelectors";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 80px;
`;

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);
  const cars = useSelector(carSelector);
  return (
    <Container>
      <Filters />
      <CarList cars={cars} />
    </Container>
  );
};

export default CatalogPage;
