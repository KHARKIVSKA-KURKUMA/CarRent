import { Triangle } from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrap = styled.div`
  height: ${(props) =>
    props.path === "/account" ? "calc(100vh - 300px)" : "calc(100vh - 82px)"};
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

const Loader = ({ path }) => {
  return (
    <LoaderWrap path={path}>
      <Triangle
        height="120"
        width="120"
        color="#3470ff"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName="loaderWrap"
        visible={true}
      />
      <p> Loading...</p>
    </LoaderWrap>
  );
};

export default Loader;
