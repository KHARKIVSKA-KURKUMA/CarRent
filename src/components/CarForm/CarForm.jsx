import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import carBrands from "../../data/brands.json";
import carTypes from "../../data/types.json";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";

const CarForm = () => {
  const currentDate = dayjs();
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };
  console.log("photo :>> ", photo);
  return (
    <div>
      <form>
        <FormControl id="year" component="div" sx={{ m: 1, width: 140 }}>
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
        <FormControl id="make" component="div" sx={{ m: 1, width: 140 }}>
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
        <FormControl id="model" component="div" sx={{ m: 1, width: 140 }}>
          <TextField
            id="outlined-basic"
            label="Model"
            value={model}
            variant="outlined"
            onChange={(e) => setModel(e.target.value)}
          />
          <FormHelperText>Chose car model</FormHelperText>
        </FormControl>
        <FormControl id="type" component="div" sx={{ m: 1, width: 140 }}>
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
          <FormHelperText>Chose car type</FormHelperText>
        </FormControl>
        <FormControl id="photo" component="div" sx={{ m: 1, width: 140 }}>
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
        </FormControl>
      </form>
    </div>
  );
};

export default CarForm;
