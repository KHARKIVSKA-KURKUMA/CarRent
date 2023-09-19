import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import CarCard from "./CarCard";
import { CardList } from "./CarList.styled";
import { StyleSheetManager } from "styled-components";
import NoDataFound from "../Notification/NoDataFound";
import { useSelector } from "react-redux";
import { isFilteredSelector } from "../../store/cars/carSelectors";

const CarList = ({ cars }) => {
  const { pathname } = useLocation();
  const isFiltered = useSelector(isFilteredSelector);
  return (
    <StyleSheetManager shouldForwardProp={(prop) => !["path"].includes(prop)}>
      <CardList path={pathname}>
        {cars.length > 0
          ? cars.map((car) => <CarCard key={car.id} data={car} />)
          : isFiltered && <NoDataFound />}
      </CardList>
    </StyleSheetManager>
  );
};
CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
