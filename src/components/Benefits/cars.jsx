import Tesla from "../../img/tesla.png";
import Bugatti from "../../img/bugatti.png";
import Toyota from "../../img/toyota.png";
import Lamborghini from "../../img/lamborghini.png";

export const SelectedCar = (id) => {
  if (id === "toyota") {
    return <img src={Toyota} alt="Toyota" />;
  } else if (id === "bugatti") {
    return <img src={Bugatti} alt="Bugatti" />;
  } else if (id === "tesla") {
    return <img src={Tesla} alt="Tesla" />;
  } else if (id === "lamborghini") {
    return <img src={Lamborghini} alt="Lamborghini" />;
  }
};

export const SelectedCarHash = (id) => {
  if (id === "toyota") {
    return "Toyota";
  } else if (id === "bugatti") {
    return "Bugatti";
  } else if (id === "tesla") {
    return "Tesla";
  } else if (id === "lamborghini") {
    return "Lamborghini";
  }
};
