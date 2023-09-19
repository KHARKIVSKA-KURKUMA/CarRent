import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { useState } from "react";
import { BoxS, Container, Label, Button, Form, Reset } from "./Filters.styled";
import { FcSearch } from "react-icons/fc";
import carBrands from "../../data/brands.json";
import carPrices from "../../data/prices.json";
import { useDispatch } from "react-redux";
import { changeFilteredCars, resetArr } from "../../store/cars/carsSlice";
import { toast } from "react-toastify";

const Filters = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const dispatch = useDispatch();
  const cleanFields = () => {
    setBrand("");
    setPrice("");
    setFrom("");
    setTo("");
  };

  const handleReset = () => {
    dispatch(resetArr());
    cleanFields();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchCriteria = {};
    if (brand) {
      searchCriteria.brand = brand;
    }
    if (price) {
      searchCriteria.price = price;
    }
    if (from !== "" || to !== "") {
      if (from !== "" && to !== "" && parseInt(from) > parseInt(to)) {
        toast.error("From value cannot be greater than To value");
        return;
      }
    }
    if (from || to) {
      searchCriteria.mileage = {
        from: from || 0,
        to: to || Infinity,
      };
    }

    dispatch(changeFilteredCars(searchCriteria));
    cleanFields();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormControl id="brand" component="div" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="brand-helper-label">Car Brand</InputLabel>
          <Select
            labelId="brand-helper-label"
            value={brand}
            name="brand"
            label="Car Brand"
            onChange={(e) => setBrand(e.target.value)}
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
        <FormControl component="div" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Price/1hour
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={price}
            label="Price/1hour"
            onChange={(e) => setPrice(e.target.value)}
          >
            <MenuItem value="">
              <em>To $</em>
            </MenuItem>
            {carPrices.map((price) => (
              <MenuItem key={price} value={price}>
                {price}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Chose price per 1 hour in $</FormHelperText>
        </FormControl>
        <BoxS component="div" noValidate autoComplete="off">
          <TextField
            sx={{
              width: 150,
            }}
            id="outlined-basic"
            label="From"
            variant="outlined"
            value={from}
            onChange={(e) => {
              if (/^[0-9]*$/.test(e.target.value)) {
                setFrom(e.target.value);
              }
            }}
          />

          <TextField
            sx={{
              width: 150,
            }}
            id="outlined-basic"
            label="To"
            variant="outlined"
            value={to}
            onChange={(e) => {
              if (/^[0-9]*$/.test(e.target.value)) {
                setTo(e.target.value);
              }
            }}
          />
          <Label>Сar mileage / km</Label>
        </BoxS>
        <Button type="submit">
          <FcSearch />
          Search
        </Button>
        <Button type="button" onClick={handleReset}>
          <Reset />
          Reset
        </Button>
      </Form>
    </Container>
  );
};

export default Filters;
