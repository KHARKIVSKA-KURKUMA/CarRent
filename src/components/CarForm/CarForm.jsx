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

const CarForm = () => {
  const currentDate = dayjs();
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [photo, setPhoto] = useState(
    "https://thumbs.dreamstime.com/b/%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0-%D0%B1%D1%8B%D1%81%D1%82%D1%80%D0%BE%D0%B9-%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%82%D0%B8-%D0%BD%D0%B0-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B5-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B8-%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D1%83%D1%8E-171520208.jpg"
  );
  const [description, setDescription] = useState("");
  const [fuelConsumption, setFuelConsumption] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [accessories, setAccessories] = useState("");
  const [functionalities, setFunctionalities] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [rentalCompany, setRentalCompany] = useState("");
  const [address, setAddress] = useState("");
  const [mileage, setMileage] = useState("");
  const [rentalConditions, setRentalConditions] = useState("");

  const isFormValid =
    year !== "" &&
    make.trim() !== "" &&
    model.trim() !== "" &&
    type.trim() !== "" &&
    description.trim() !== "" &&
    fuelConsumption.trim() !== "" &&
    engineSize.trim() !== "" &&
    accessories.trim() !== "" &&
    rentalPrice.trim() !== "" &&
    functionalities.trim() !== "" &&
    rentalCompany.trim() !== "" &&
    address.trim() !== "" &&
    mileage.trim() !== "" &&
    rentalConditions.trim() !== "";
  // const handlePhotoChange = (e) => {
  //   const file = e.target.files[0];
  //   setPhoto(file);
  // };
  // console.log("photo :>> ", photo);

  const formatInput = (str) => {
    const stringWithoutPeriods = str.replace(/\./g, "");
    const arrayOfElements = stringWithoutPeriods.split(", ");
    return arrayOfElements;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = {
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
      address,
      rentalConditions: `Minimum age:${rentalConditions}\nValid driver's license\nHigh security deposit required\nProof of insurance required`,
      mileage,
    };
    console.log(newCar);
  };

  return (
    <Backdrop>
      <StyledFormWrap>
        <Close size="30" color="#4e4e4e" />
        <StyledForm onSubmit={handleSubmit}>
          <FormControl id="year" component="div" sx={{ m: 1, width: 200 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                views={["year"]}
                label="Issue date"
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
          {/* <FormControl id="photo" component="div" sx={{ m: 1, width: 140 }}>
          <InputLabel id="photo-helper-label">Photo</InputLabel>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
            id="photo-upload"
          />
          <label htmlFor="photo-upload">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value=""
              disabled
            />
            <FormHelperText>Upload car photo</FormHelperText>
          </label>
        </FormControl> */}
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
            Add car
          </Button>
        </StyledForm>
      </StyledFormWrap>
    </Backdrop>
  );
};

export default CarForm;
