import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUserAdvertsThunk } from "../../store/cars/carsThunk";
import { userAdvertsSelector } from "../../store/cars/carSelectors";
import CarList from "../../components/CarList/CarList";
import AccountTools from "../../components/AccountTools/AccountTools";
import CarForm from "../../components/CarForm/CarForm";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAdvertsThunk());
  }, [dispatch]);
  const cars = useSelector(userAdvertsSelector);
  return (
    <Container>
      <AccountTools onClick={() => setIsOpen(true)} />
      <CarList cars={cars} />
      {isOpen && <CarForm handleClose={() => setIsOpen(false)} />}
    </Container>
  );
};

export default AccountPage;
