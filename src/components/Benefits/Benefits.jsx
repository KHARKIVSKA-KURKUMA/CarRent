import {
  Container,
  StyledUl,
  CarContainer,
  ChosenCarWrap,
  CarName,
  SLink,
  Box,
  PriceBlockWrap,
} from "./Benefits.styled";
import { SiBugatti, SiLamborghini, SiTesla, SiToyota } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import { SelectedCar, SelectedCarHash } from "./cars";
import { FaDollarSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Benefits = () => {
  const [chosenCar, setChosenCar] = useState({
    id: "toyota",
    value: "Toyota Supra",
  });
  const [selectedCarId, setSelectedCarId] = useState("toyota");
  const handleClick = (e) => {
    if (e.target.tagName === "svg" || e.target.tagName === "path") {
      const button = e.target.closest("li").querySelector("button");
      const id = button.id;
      const value = button.innerText;
      setChosenCar({ id, value });
      setSelectedCarId(id);
    } else {
      const id = e.target.id;
      const value = e.target.innerText;
      setChosenCar({ id, value });
      setSelectedCarId(id);
    }
  };

  return (
    <Container>
      <div>
        <StyledUl>
          <li>
            <button
              id="toyota"
              type="button"
              onClick={handleClick}
              className={selectedCarId === "toyota" ? "selected" : ""}
            >
              <SiToyota size={20} id="toyota" />
              Toyota Supra
            </button>
          </li>
          <li>
            <button
              id="bugatti"
              type="button"
              onClick={handleClick}
              className={selectedCarId === "bugatti" ? "selected" : ""}
            >
              <SiBugatti size={20} id="bugatti" />
              Bugatti Chiron
            </button>
          </li>
          <li>
            <button
              id="lamborghini"
              type="button"
              onClick={handleClick}
              className={selectedCarId === "lamborghini" ? "selected" : ""}
            >
              <SiLamborghini size={20} id="lamborghini" />
              Lamborghini Veneno Roadster
            </button>
          </li>
          <li>
            <button
              id="tesla"
              type="button"
              onClick={handleClick}
              className={selectedCarId === "tesla" ? "selected" : ""}
            >
              <SiTesla size={20} id="tesla" />
              Tesla Roadster
            </button>
          </li>
        </StyledUl>
      </div>
      <ChosenCarWrap>
        <div>
          <p>#{SelectedCarHash(chosenCar.id)}</p>
          <SLink to={"/catalog"}>
            <BsArrowUpRight size={25} color="#fff" />
          </SLink>
        </div>
        <CarName>{chosenCar.value}</CarName>
        <CarContainer id={selectedCarId}>
          {SelectedCar(selectedCarId)}
        </CarContainer>
      </ChosenCarWrap>
      <PriceBlockWrap>
        <p className="title">Explore our new car</p>
        <Box>
          <div className="price">
            <p className="from">from</p>
            <FaDollarSign />
            <p>45</p>
          </div>
          <div className="rate">
            <AiFillStar color="#ffd500" />
            <p>4.5</p>
          </div>
          <p className="feedback">I love this cars. This cars are amazing!</p>
        </Box>
      </PriceBlockWrap>
    </Container>
  );
};

export default Benefits;
