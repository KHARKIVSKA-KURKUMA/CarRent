import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { useState } from "react";
import { BoxS, Container, Label, Button } from "./Filters.styled";
import { FcSearch } from "react-icons/fc";

const Filters = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <Container>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label">Car Brand</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={brand}
          label="Car Brand"
          onChange={(e) => setBrand(e.target.value)}
        >
          <MenuItem value="">
            <em>Chose Car Brand</em>
          </MenuItem>
          <MenuItem value={"Volvo"}>Volvo</MenuItem>
          <MenuItem value={"Buick"}>Buick</MenuItem>
          <MenuItem value={"Hummer"}>Hummer</MenuItem>
          <MenuItem value={"Subaru"}>Subaru</MenuItem>
          <MenuItem value={"Mitsubishi"}>Mitsubishi</MenuItem>
          <MenuItem value={"Tesla"}>Tesla</MenuItem>
          <MenuItem value={"Nissan"}>Nissan</MenuItem>
          <MenuItem value={"Lincoln"}>Lincoln</MenuItem>
          <MenuItem value={"GMC"}>GMC</MenuItem>
          <MenuItem value={"Hyundai"}>Hyundai</MenuItem>
          <MenuItem value={"Toyota"}>Toyota</MenuItem>
          <MenuItem value={"Bugatti"}>Bugatti</MenuItem>
          <MenuItem value={"Lamborghini"}>Lamborghini</MenuItem>
        </Select>
        <FormHelperText>Chose car brand</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
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
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={70}>70</MenuItem>
          <MenuItem value={80}>80</MenuItem>
        </Select>
        <FormHelperText>Chose price per 1 hour in $</FormHelperText>
      </FormControl>
      <BoxS component="form" noValidate autoComplete="off">
        <TextField
          sx={{
            width: 150,
          }}
          id="outlined-basic"
          label="From"
          variant="outlined"
        />
        <TextField
          sx={{
            width: 150,
          }}
          id="outlined-basic"
          label="To"
          variant="outlined"
        />
        <Label>Сar mileage / km</Label>
      </BoxS>
      <Button type="submit">
        <FcSearch />
        Search
      </Button>
    </Container>
  );
};

export default Filters;
