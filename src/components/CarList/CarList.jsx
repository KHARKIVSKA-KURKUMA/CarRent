import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import CarCard from "./CarCard";
import { CardList } from "./CarList.styled";
import { StyleSheetManager } from "styled-components";

const CarList = ({ cars }) => {
  const { pathname } = useLocation();
  return (
    <StyleSheetManager shouldForwardProp={(prop) => !["path"].includes(prop)}>
      <CardList path={pathname}>
        {cars.map((car) => (
          <CarCard key={car.id} data={car} />
        ))}
      </CardList>
    </StyleSheetManager>
  );
};
CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
