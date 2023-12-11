import { Button } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  button {
    background-color: #3470ff;
    transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }
`;

const AccountTools = ({ onClick }) => {
  return (
    <Container>
      <Button variant="contained" onClick={onClick}>
        Add Advert
      </Button>
    </Container>
  );
};

export default AccountTools;
