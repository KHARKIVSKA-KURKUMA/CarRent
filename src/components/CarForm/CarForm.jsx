import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import MenuItem from "@mui/material/MenuItem";
import carBrands from "../../data/brands.json";
import carTypes from "../../data/types.json";

import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import { Close, StyledForm, StyledFormWrap, Backdrop } from "./CarForm.styled";
import { useDispatch } from "react-redux";
import { postAdvertsThunk, putAdvertsThunk } from "../../store/cars/carsThunk";

const CarForm = ({ data, handleClose }) => {
  const isEdited = data !== undefined;
  // console.log("isEdited :>> ", isEdited);
  const currentDate = dayjs();
  const dispatch = useDispatch();
  const price = parseFloat(data.rentalPrice.replace("$", ""));
  const minimumAge = parseInt(
    data.rentalConditions.match(/Minimum age: (\d+)/)[1],
    10
  );
  const [year, setYear] = useState(data.year || "");
  const [make, setMake] = useState(data.make || "");
  const [model, setModel] = useState(data.model || "");
  const [type, setType] = useState(data.type || "");
  const [photo, setPhoto] = useState(data.img || "");
  const [description, setDescription] = useState(data.description || "");
  const [fuelConsumption, setFuelConsumption] = useState(
    data.fuelConsumption || ""
  );
  const [engineSize, setEngineSize] = useState(data.engineSize || "");
  const [accessories, setAccessories] = useState(data.accessories || "");
  const [functionalities, setFunctionalities] = useState(
    data.functionalities || ""
  );
  const [rentalPrice, setRentalPrice] = useState(price || "");
  const [rentalCompany, setRentalCompany] = useState(data.rentalCompany || "");
  const [address, setAddress] = useState(data.address || "");
  const [mileage, setMileage] = useState(data.mileage || "");
  const [rentalConditions, setRentalConditions] = useState(minimumAge || "");
  const isFormValid =
    year !== "" &&
    make.trim() !== "" &&
    model.trim() !== "" &&
    type.trim() !== "" &&
    description.trim() !== "" &&
    fuelConsumption.trim() !== "" &&
    engineSize.trim() !== "" &&
    accessories !== "" &&
    rentalPrice !== "" &&
    photo.trim() !== "" &&
    functionalities !== "" &&
    rentalCompany.trim() !== "" &&
    address.trim() !== "" &&
    mileage !== "" &&
    rentalConditions !== "";

  const formatInput = (str) => {
    if (Array.isArray(str)) {
      return str;
    }
    const stringWithoutPeriods = str.replace(/\./g, "");
    const arrayOfElements = stringWithoutPeriods.split(", ");
    return arrayOfElements;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAdvert = {
      year,
      make,
      model,
      type,
      img: photo,
      description,
      fuelConsumption,
      engineSize,
      accessories: formatInput(accessories),
      functionalities: formatInput(functionalities),
      rentalPrice: `$${rentalPrice}`,
      rentalCompany,
      address,
      rentalConditions: `Minimum age: ${rentalConditions}\nValid driver's license\nHigh security deposit required\nProof of insurance required`,
      mileage,
    };
    if (isEdited) {
      dispatch(putAdvertsThunk({ id: data._id, newAdvert }));
    } else {
      dispatch(postAdvertsThunk(newAdvert));
    }

    handleClose();
  };

  return (
    <Backdrop>
      <StyledFormWrap>
        <Close size="30" color="#4e4e4e" onClick={handleClose} />
        <StyledForm onSubmit={handleSubmit}>
          <FormControl id="year" component="div" sx={{ m: 1, width: 200 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                views={["year"]}
                label="Issue date"
                value={dayjs(`${year}-01-01`)}
                maxDate={currentDate}
                onChange={(e) => setYear(e.$y)}
              />
            </LocalizationProvider>
            <FormHelperText>Chose car issue date</FormHelperText>
          </FormControl>
          <FormControl id="make" component="div" sx={{ m: 1, width: 200 }}>
            <InputLabel id="make-helper-label">Brand</InputLabel>
            <Select
              labelId="make-helper-label"
              value={make}
              name="make"
              label="Brand"
              onChange={(e) => setMake(e.target.value)}
            >
              <MenuItem value="">
                <em>Chose Car Brand</em>
              </MenuItem>
              {carBrands.map((carBrand) => (
                <MenuItem key={carBrand} value={carBrand}>
                  {carBrand}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Chose car brand</FormHelperText>
          </FormControl>
          <FormControl id="model" component="div" sx={{ m: 1, width: 200 }}>
            <TextField
              id="outlined-basic"
              label="Model"
              value={model}
              placeholder="Supra"
              variant="outlined"
              onChange={(e) => setModel(e.target.value)}
            />
            <FormHelperText>Chose car model</FormHelperText>
          </FormControl>
          <FormControl id="type" component="div" sx={{ m: 1, width: 200 }}>
            <InputLabel id="type-helper-label">Type</InputLabel>
            <Select
              labelId="type-helper-label"
              value={type}
              name="type"
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="">
                <em>Chose Car Type</em>
              </MenuItem>
              {carTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Add car type</FormHelperText>
          </FormControl>
          <FormControl id="photo" component="div" sx={{ m: 1, width: 425 }}>
            <TextField
              id="outlined-basic"
              label="Photo"
              value={photo}
              placeholder="https://storage.googleapis.com/pod_public/1300/173320.jpg"
              variant="outlined"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <FormHelperText>Add car photo(as a link)</FormHelperText>
          </FormControl>
          <FormControl
            id="description"
            component="div"
            sx={{ m: 1, width: 425 }}
          >
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormHelperText>Add car description</FormHelperText>
          </FormControl>
          <FormControl
            id="fuelConsumption"
            component="div"
            sx={{ m: 1, width: 200 }}
          >
            <TextField
              value={fuelConsumption}
              name="fuelConsumption"
              label="Fuel consumption"
              placeholder="15.6"
              onChange={(e) => setFuelConsumption(e.target.value)}
            />
            <FormHelperText>Add car fuel consumption</FormHelperText>
          </FormControl>
          <FormControl
            id="engineSize"
            component="div"
            sx={{ m: 1, width: 200 }}
          >
            <TextField
              value={engineSize}
              name="engineSize"
              label="Engine Size"
              placeholder="3.0L Inline-6"
              onChange={(e) => setEngineSize(e.target.value)}
            />
            <FormHelperText>Add car engine size</FormHelperText>
          </FormControl>
          <FormControl
            id="accessories"
            component="div"
            sx={{ m: 1, width: 425 }}
          >
            <TextField
              id="outlined-multiline-static"
              label="Accessories"
              multiline
              rows={4}
              placeholder="Leather seats, Premium sound system, Diamond-cut wheels"
              value={accessories}
              onChange={(e) => setAccessories(e.target.value)}
            />
            <FormHelperText>
              Add car accessories(use a comma between accessorize)
            </FormHelperText>
          </FormControl>
          <FormControl
            id="functionalities"
            component="div"
            sx={{ m: 1, width: 425 }}
          >
            <TextField
              id="outlined-multiline-static"
              label="Functionalities"
              multiline
              rows={4}
              placeholder="Launch control, Advanced aerodynamics, Top speed mode"
              value={functionalities}
              onChange={(e) => setFunctionalities(e.target.value)}
            />
            <FormHelperText>
              Add car functionalities(use a comma between functionality)
            </FormHelperText>
          </FormControl>
          <FormControl
            id="rentalPrice"
            component="div"
            sx={{ m: 1, width: 200 }}
          >
            <TextField
              id="outlined-basic"
              label="Rental price"
              value={rentalPrice}
              placeholder="100"
              variant="outlined"
              onChange={(e) => setRentalPrice(e.target.value)}
            />
            <FormHelperText>Chose car rental price</FormHelperText>
          </FormControl>
          <FormControl
            id="rentalCompany"
            component="div"
            sx={{ m: 1, width: 200 }}
          >
            <TextField
              id="outlined-basic"
              label="Rental company"
              value={rentalCompany}
              placeholder="Sports Car Rentals"
              variant="outlined"
              onChange={(e) => setRentalCompany(e.target.value)}
            />
            <FormHelperText>Chose car rental company</FormHelperText>
          </FormControl>
          <FormControl id="address" component="div" sx={{ m: 1, width: 425 }}>
            <TextField
              id="outlined-basic"
              label="Address"
              value={address}
              placeholder="Shevchenko street, Kyiv, Ukraine"
              variant="outlined"
              onChange={(e) => setAddress(e.target.value)}
            />
            <FormHelperText>
              Chose car address ((street, city, country) use a comma)
            </FormHelperText>
          </FormControl>
          <FormControl
            id="rentalConditions"
            component="div"
            sx={{ m: 1, width: 200 }}
          >
            <TextField
              id="outlined-basic"
              label="Minimum age"
              value={rentalConditions}
              placeholder="20"
              variant="outlined"
              onChange={(e) => setRentalConditions(e.target.value)}
            />
            <FormHelperText>Chose car rental conditions</FormHelperText>
          </FormControl>
          <FormControl id="mileage" component="div" sx={{ m: 1, width: 200 }}>
            <TextField
              id="outlined-basic"
              label="Mileage"
              value={mileage}
              placeholder="1000"
              variant="outlined"
              onChange={(e) => setMileage(e.target.value)}
            />
            <FormHelperText>Chose car mileage</FormHelperText>
          </FormControl>
          <Button disabled={!isFormValid} type="submit" variant="contained">
            {isEdited ? <span>Edit Advert</span> : <span>Add Advert</span>}
          </Button>
        </StyledForm>
      </StyledFormWrap>
    </Backdrop>
  );
};

export default CarForm;
