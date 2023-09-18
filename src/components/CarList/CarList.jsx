import CarCard from "./CarCard";

import { CardList } from "./CarList.styled";

const CarList = ({ cars }) => {
  return (
    <CardList>
      {cars.map((car) => (
        <CarCard key={car.id} data={car} />
      ))}
    </CardList>
  );
};

export default CarList;
