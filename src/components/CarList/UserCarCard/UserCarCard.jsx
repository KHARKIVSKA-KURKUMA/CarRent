import PropTypes from "prop-types";
import { CarListItem, CardHead, DescBox, SList } from "../CarList.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import Stub from "../../../img/no-img.png";
import { CiEdit } from "react-icons/ci";
import { createAddressObject, reduceFunctionalitiesArr } from "../carHelpers";
import CarForm from "../../CarForm/CarForm";
import styled from "styled-components";
import { deleteAdvertsThunk } from "../../../store/cars/carsThunk";
import DeleteDialog from "./DeleteDialog";
const CarTools = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 5px;
  position: absolute;
  right: 5px;
`;
const SButton = styled.div`
  background-color: #000000;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: white;
  }
`;
const UserCarCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const {
    img,
    type,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    photoLink,
    functionalities,
    _id,
    address,
  } = data;
  const { city, country } = createAddressObject(address);
  const dispatch = useDispatch();

  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };
  const handleClose = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };
  const handleDelete = (id) => {
    dispatch(deleteAdvertsThunk(id));
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CarListItem>
        <CarTools>
          <SButton onClick={handleClickOpen}>
            <MdDelete size={25} />
          </SButton>
          <SButton onClick={() => handleOpen(data)}>
            <CiEdit size={25} color="white" />
          </SButton>
        </CarTools>

        {
          <img
            src={img || photoLink}
            alt={make}
            onError={(e) => {
              e.target.src = Stub;
            }}
          />
        }
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
            <li>{reduceFunctionalitiesArr(functionalities)}</li>
          </SList>
        </DescBox>
      </CarListItem>
      {isOpen && <CarForm data={data} handleClose={handleClose} />}
      <DeleteDialog
        open={open}
        id={_id}
        onClose={handleClickClose}
        onAgree={handleDelete}
      />
    </>
  );
};

UserCarCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    photoLink: PropTypes.string,
    type: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    _id: PropTypes.string,
    functionalities: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
  }).isRequired,
};

export default UserCarCard;
