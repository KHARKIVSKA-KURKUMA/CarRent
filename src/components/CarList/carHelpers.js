export const reduceFunctionalitiesArr = (functionalities) => {
  if (Array.isArray(functionalities) && functionalities.length > 0) {
    let firstFunctionality = functionalities[0];
    if (firstFunctionality.length > 9) {
      firstFunctionality = firstFunctionality.slice(0, 9) + "...";
    }
    return firstFunctionality;
  } else {
    return null;
  }
};

export function createAddressObject(addressString) {
  const addressArray = addressString.split(",").map((item) => item.trim());
  if (addressArray.length >= 3) {
    const [street, city, country] = addressArray;
    return {
      street,
      city,
      country,
    };
  } else {
    return null;
  }
}
