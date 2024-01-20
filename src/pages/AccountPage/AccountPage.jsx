import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUserAdvertsThunk } from "../../store/cars/carsThunk";
import {
  isLoadingCarSelector,
  userAdvertsSelector,
} from "../../store/cars/carSelectors";
import CarList from "../../components/CarList/CarList";
import AccountTools from "../../components/AccountTools/AccountTools";
import CarForm from "../../components/CarForm/CarForm";
import Loader from "../../components/Loader/Loader";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 20px 60px;
  min-height: calc(100vh - 82px);
  @media screen and (min-width: 768px) {
    padding: 0px 80px 60px;
  }
`;

const AccountPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAdvertsThunk());
  }, [dispatch]);
  const cars = useSelector(userAdvertsSelector);
  const isLoading = useSelector(isLoadingCarSelector);
  return (
    <Container>
      <AccountTools onClick={() => setIsOpen(true)} />
      {isLoading ? <Loader path={pathname} /> : <CarList cars={cars} />}
      {isOpen && <CarForm handleClose={() => setIsOpen(false)} />}
    </Container>
  );
};

export default AccountPage;
