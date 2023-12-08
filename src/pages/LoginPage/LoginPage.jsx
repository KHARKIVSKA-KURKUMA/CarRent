import styled from "styled-components";
import CarForm from "../../components/CarForm/CarForm";
import SignIn from "../../components/SignIn/SignIn";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 0px 50px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0px 180px;
  }
`;

const LoginPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default LoginPage;
