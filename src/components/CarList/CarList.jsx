import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import CarCard from "./CarCard";
import { Button, CardList } from "./CarList.styled";
import { StyleSheetManager } from "styled-components";
import NoDataFound from "../Notification/NoDataFound";
import { useDispatch, useSelector } from "react-redux";
import {
  currentItemsSelector,
  isFilteredSelector,
} from "../../store/cars/carSelectors";
import { changePage } from "../../store/cars/carsSlice";
import UserCarCard from "./UserCarCard/UserCarCard";

const CarList = ({ cars }) => {
  const { pathname } = useLocation();
  const isFiltered = useSelector(isFilteredSelector);
  const currentItems = useSelector(currentItemsSelector);
  const dispatch = useDispatch();

  return (
    <StyleSheetManager shouldForwardProp={(prop) => !["path"].includes(prop)}>
      {pathname === "/account" ? (
        <CardList path={pathname}>
          {cars.length > 0
            ? cars.map((car) => <UserCarCard key={car._id} data={car} />)
            : isFiltered && <NoDataFound />}
        </CardList>
      ) : (
        <CardList path={pathname}>
          {cars.length > 0
            ? cars
                .slice(0, currentItems)
                .map((car) => <CarCard key={car._id} data={car} />)
            : isFiltered && <NoDataFound />}
        </CardList>
      )}
      {cars.length > currentItems && (
        <Button type="button" onClick={() => dispatch(changePage())}>
          Load more
        </Button>
      )}
    </StyleSheetManager>
  );
};
CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
