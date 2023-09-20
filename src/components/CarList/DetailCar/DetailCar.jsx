import PropTypes from "prop-types";
import {
  accessoriesAndFunctionalities,
  createAddressObject,
  rentalConditionsArr,
} from "../carHelpers";
import {
  ConditionList,
  CategoryTitle,
  Close,
  CardHead,
  Container,
  CardContainer,
  Description,
  RentalButton,
  UnFav,
  Fav,
  InfoDiv,
} from "./DetailCar.styled";
import { SList } from "../CarList.styled";
import { useEffect, useRef } from "react";

const DetailCar = ({ data, handleClose, isFavorite, handleClick }) => {
  const phoneNumber = "+380730000000";
  const containerRef = useRef(null);
  const {
    img,
    type,
    make,
    model,
    year,
    rentalPrice,
    id,
    photoLink,
    rentalConditions,
    functionalities,
    fuelConsumption,
    engineSize,
    address,
    accessories,
    description,
    mileage,
  } = data;
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const handleCloseOnBackdropClick = (e) => {
      if (containerRef.current && e.target === containerRef.current) {
        handleClose();
      }
    };

    const handleEscapeKeyPress = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (containerRef.current) {
      containerRef.current.addEventListener(
        "click",
        handleCloseOnBackdropClick
      );
      document.addEventListener("keydown", handleEscapeKeyPress);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "click",
          handleCloseOnBackdropClick
        );
      }
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [handleClose]);
  /* -------------------------------------------------------------------------- */

  const accessoriesAndFunctionalitiesArr = accessoriesAndFunctionalities(
    functionalities,
    accessories
  );

  const rentalConditionsVariable = rentalConditionsArr(
    rentalConditions,
    rentalPrice,
    mileage
  );

  const { city, country } = createAddressObject(address);
  return (
    <Container ref={containerRef}>
      <CardContainer>
        <Close size={24} onClick={handleClose} />
        {img ? (
          <img src={img} alt={make} />
        ) : (
          <img src={photoLink} alt={make} />
        )}
        {!isFavorite ? (
          <UnFav id="unFav" size={30} onClick={handleClick} />
        ) : (
          <Fav id="fav" size={30} onClick={handleClick} />
        )}
        <InfoDiv>
          <CardHead>
            <p className="make">{make}</p>
            <p className="model"> {model && model}</p>
            <p>,</p>
            <p className="year">{year}</p>
          </CardHead>
          <SList style={{ maxWidth: "280px", marginBottom: "14px" }}>
            <li>{city}</li>
            <li>{country}</li>
            <li>
              <span>Id:</span>
              {id}
            </li>
            <li>
              <span>Year:</span>
              {year}
            </li>
            <li>
              <span>Type:</span>
              {type}
            </li>
            <li>
              <span>Fuel Consumption</span>
              {fuelConsumption}
            </li>
            <li>
              <span>Engine Size</span>
              {engineSize}
            </li>
          </SList>
          <Description>{description}</Description>
          <CategoryTitle>Accessories and functionalities:</CategoryTitle>
          <SList
            style={{
              marginBottom: "0",
            }}
          >
            {accessoriesAndFunctionalitiesArr.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </SList>
          <CategoryTitle>Rental Conditions: </CategoryTitle>
          <ConditionList>
            {rentalConditionsVariable.map((condition, index) => {
              return <li key={index}>{condition}</li>;
            })}
          </ConditionList>
        </InfoDiv>
        <RentalButton href={`tel:${phoneNumber}`}>Rental car</RentalButton>
      </CardContainer>
    </Container>
  );
};

DetailCar.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    type: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    rentalPrice: PropTypes.string,
    id: PropTypes.number,
    photoLink: PropTypes.string,
    rentalConditions: PropTypes.string,
    functionalities: PropTypes.arrayOf(PropTypes.string),
    fuelConsumption: PropTypes.string,
    engineSize: PropTypes.string,
    address: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    mileage: PropTypes.number,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
export default DetailCar;
