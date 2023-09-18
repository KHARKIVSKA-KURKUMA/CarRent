import { useEffect } from "react";
import CarCard from "./CarCard";
import { getCarsThunk } from "../../store/cars/carsThunk";
import { useDispatch, useSelector } from "react-redux";
import { carSelector } from "../../store/cars/carSelectors";
import { CardList } from "./CarList.styled";

const CarList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);
  const cars = useSelector(carSelector);

  return (
    <CardList>
      {cars.map((car) => (
        <CarCard key={car.id} data={car} />
      ))}
    </CardList>
  );
};

export default CarList;
