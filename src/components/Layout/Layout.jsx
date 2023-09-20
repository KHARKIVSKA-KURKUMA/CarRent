import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";
import { Triangle } from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrap = styled.div`
  min-height: calc(100vh - 82px);
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
const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <LoaderWrap>
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
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
