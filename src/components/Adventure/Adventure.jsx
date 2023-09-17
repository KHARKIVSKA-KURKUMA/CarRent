import { BsArrowUpRight } from "react-icons/bs";
import Car from "../../img/car-adventure.jpg";
import {
  Container,
  StyledLi,
  StyledUl,
  Desc,
  ContentWrap,
} from "./Adventure.styled";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Content } from "../Hero/Hero.styled";

const Adventure = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <ContentWrap>
        <h2>Drive into Adventure: Rent Your Dream Car Today!</h2>
        <div className="descWrap">
          <Desc>
            Are you looking for a hassle-free way to get around town or embark
            on an exciting road trip? Look no further than our car service!
          </Desc>
          <button type="button" onClick={handleClickOpen}>
            Learn More <BsArrowUpRight />
          </button>
        </div>
      </ContentWrap>
      <img src={Car} alt="Volkswagen Arteon" />
      <StyledUl>
        <StyledLi>
          <p>
            67K <span>User Ratings</span>
          </p>
        </StyledLi>
        <StyledLi>
          <p>
            100K <span>Successful Vehicles Rented</span>
          </p>
        </StyledLi>
        <StyledLi>
          <p>
            2K <span>Satisfied And Happy Clients </span>
          </p>
        </StyledLi>
      </StyledUl>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Content>
          <p>
            Our car service offers a wide range of vehicles, from luxurious
            sedans to adventurous SUVs. Whether you need a car for a day or a
            week, we have the perfect vehicle for your needs.
          </p>
          <p>
            Our rental process is simple and convenient. Just choose your car,
            pick it up at our location, and you're ready to hit the road. We
            offer competitive prices and excellent customer service to ensure
            your journey is smooth and enjoyable.
          </p>
          <p>
            Don't miss out on the opportunity to explore new places and create
            unforgettable memories. Rent your dream car today and start your
            adventure!
          </p>
        </Content>
      </Dialog>
    </Container>
  );
};

export default Adventure;
