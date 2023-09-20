import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { BoxS, Container, Label, Button, Form, Reset } from "./Filters.styled";
import { FcSearch } from "react-icons/fc";
import carBrands from "../../data/brands.json";
import carPrices from "../../data/prices.json";
import { useDispatch, useSelector } from "react-redux";
import { changeFilteredCars, resetArr } from "../../store/cars/carsSlice";
import { toast } from "react-toastify";
import {
  brandSelector,
  fromSelector,
  priceSelector,
  styledPriceSelector,
  toSelector,
} from "../../store/filter/filterSelector";
import {
  resetFilter,
  setBrand,
  setFrom,
  setPrice,
  setStyledPrice,
  setTo,
} from "../../store/filter/filterSlice";

const Filters = () => {
  const brand = useSelector(brandSelector);
  const price = useSelector(priceSelector);
  const styledPrice = useSelector(styledPriceSelector);
  const from = useSelector(fromSelector);
  const to = useSelector(toSelector);
  const dispatch = useDispatch();

  function format(value, category) {
    if (category === "to") {
      if (value === "") {
        return "To";
      }
      return `To ${new Intl.NumberFormat("en-US").format(value)}`;
    } else if (category === "from") {
      if (value === "") {
        return "From";
      }
      return `From ${new Intl.NumberFormat("en-US").format(value)}`;
    } else if (category === "price") {
      return `To $${value}`;
    }
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.id === "To") {
      dispatch(setTo(inputValue));
    } else {
      dispatch(setFrom(inputValue));
    }
  };
  const handleSwitchChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    dispatch(setStyledPrice(`To $${inputValue}`));
    dispatch(setPrice(inputValue));
  };
  const handleReset = () => {
    dispatch(resetArr());
    dispatch(resetFilter());
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
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="carsBox">
          <FormControl id="brand" component="div" sx={{ m: 1, width: 140 }}>
            <InputLabel id="brand-helper-label">Car Brand</InputLabel>
            <Select
              labelId="brand-helper-label"
              value={brand}
              name="brand"
              label="Car Brand"
              onChange={(e) => dispatch(setBrand(e.target.value))}
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
          <FormControl component="div" sx={{ m: 1, width: 140 }}>
            <InputLabel id="price-helper-label">Price/1hour</InputLabel>
            <Select
              labelId="price-helper-label"
              name="price"
              value={styledPrice}
              label="Price/1hour"
              onChange={handleSwitchChange}
            >
              <MenuItem selected value="To $">
                To $
              </MenuItem>
              {carPrices.map((price) => (
                <MenuItem key={price} value={`To $${price}`}>
                  <span className="isHidden">{`To $`}</span>
                  {price}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Chose price per 1h</FormHelperText>
          </FormControl>
        </div>
        <BoxS
          component="div"
          className="mileageBox"
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              width: 150,
            }}
            id="From"
            label="From"
            variant="outlined"
            value={format(from, "from")}
            onChange={handleInputChange}
          />

          <TextField
            sx={{
              width: 150,
            }}
            label="To"
            variant="outlined"
            id="To"
            value={format(to, "to")}
            onChange={handleInputChange}
          />
          <Label>Сar mileage / km</Label>
        </BoxS>
        <ul className="btnWraps">
          <li>
            {" "}
            <Button type="submit">
              <FcSearch />
              Search
            </Button>
          </li>
          <li>
            {" "}
            <Button type="button" onClick={handleReset}>
              <Reset />
              Reset
            </Button>
          </li>
        </ul>
      </Form>
    </Container>
  );
};

export default Filters;
