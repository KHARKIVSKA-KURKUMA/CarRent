import styled from "styled-components";
import Filters from "../../components/Filters/Filters";
import CarList from "../../components/CarList/CarList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarsThunk } from "../../store/cars/carsThunk";
import {
  carSelector,
  filteredSelector,
  isFilteredSelector,
} from "../../store/cars/carSelectors";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 80px 60px;
  min-height: calc(100vh - 82px);
`;

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);
  const cars = useSelector(carSelector);
  const filteredArr = useSelector(filteredSelector);
  const isFiltered = useSelector(isFilteredSelector);
  return (
    <Container>
      <Filters />
      {isFiltered ? <CarList cars={filteredArr} /> : <CarList cars={cars} />}
    </Container>
  );
};

export default CatalogPage;
