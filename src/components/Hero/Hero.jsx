import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import {
  LearnMoreButton,
  ImageWrap,
  Paragraph,
  Button,
  Title,
  Container,
  TextContainer,
  Content,
} from "./Hero.styled";
import Dialog from "@mui/material/Dialog";
import Car from "../../img/car.png";

import { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <TextContainer>
        <Title>Rent Your Dream Car</Title>
        <Paragraph>
          If you're ready to take your UI Motion Design skills to the next level
          and join a dynamic and growing team
        </Paragraph>
        <Button to="/catalog">
          Rent Now <BsArrowUpRight />
        </Button>
        <LearnMoreButton onClick={handleClickOpen}>
          Learn More <BsArrowRight />
        </LearnMoreButton>
      </TextContainer>
      <ImageWrap>
        <img src={Car} alt="Car" />
      </ImageWrap>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Content>
          <p>
            Whether you need a car for a weekend getaway or a long-term rental,
            we've got you covered. Our fleet includes everything from
            fuel-efficient compact cars to spacious SUVs and luxury vehicles.
            With our transparent pricing and exceptional customer service, your
            car rental experience will be hassle-free and enjoyable.
          </p>
          <h2>How to Rent a Car</h2>
          <ol>
            <li>Click on the "Rent Now" button above.</li>
            <li>Select your desired pickup and drop-off locations.</li>
            <li>Choose the car that suits your needs and budget.</li>
            <li>Complete the online reservation form.</li>
            <li>Confirm your booking and make a secure payment.</li>
          </ol>
          <p>
            Once your reservation is confirmed, you'll receive all the details
            you need for your rental. Our team is ready to assist you with any
            questions or special requests you may have. We look forward to
            helping you get behind the wheel of your dream car!
          </p>
        </Content>
      </Dialog>
    </Container>
  );
};

export default Hero;
