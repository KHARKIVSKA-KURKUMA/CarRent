import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrap = styled.div`
  min-height: calc(100vh - 300px);
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 40px;
    font-family: "Black Ops One", cursive;
  }
`;

const LoaderForThunk = () => {
  return (
    <LoaderWrap>
      <Oval
        height={80}
        width={80}
        color="#3470ff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#0b44cd"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <p> Loading...</p>
    </LoaderWrap>
  );
};

export default LoaderForThunk;
