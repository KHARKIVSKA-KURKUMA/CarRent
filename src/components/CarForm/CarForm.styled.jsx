import styled from "styled-components";
import { CgCloseO } from "react-icons/cg";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const StyledFormWrap = styled.div`
  width: 520px;
  overflow-y: scroll;
  max-height: 75vh;
  margin: 0 auto;
  position: relative;
  padding: 50px 20px 20px;
  background-color: #ffffff;
`;
const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;
const Close = styled(CgCloseO)`
  position: absolute;
  right: 15px;
  top: 15px;
`;
export { Close, StyledForm, StyledFormWrap, Backdrop };
