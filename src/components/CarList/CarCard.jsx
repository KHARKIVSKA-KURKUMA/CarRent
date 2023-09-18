import PropTypes from "prop-types";
import { createAddressObject, reduceFunctionalitiesArr } from "./carHelpers";
import { CarListItem, CardHead, DescBox, SList } from "./CarList.styled";

const CarCard = ({ data }) => {
  const {
    img,
    type,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    id,
    photoLink,
    functionalities,
    address,
  } = data;
  const { city, country } = createAddressObject(address);

  return (
    <CarListItem>
      {img ? <img src={img} alt={make} /> : <img src={photoLink} alt={make} />}
      <DescBox>
        <CardHead>
          <div>
            <p className="make">{make}</p>
            <p className="model"> {model && model}</p>
            <p>,</p>
            <p className="year">{year}</p>
          </div>
          <p>{rentalPrice}</p>
        </CardHead>
        <SList>
          <li>{city}</li>
          <li>{country}</li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{reduceFunctionalitiesArr(functionalities)}</li>
        </SList>
        <button>Learn more</button>
      </DescBox>
    </CarListItem>
  );
};

CarCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    photoLink: PropTypes.string,
    type: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    id: PropTypes.number,
    functionalities: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
  }).isRequired,
};

export default CarCard;
