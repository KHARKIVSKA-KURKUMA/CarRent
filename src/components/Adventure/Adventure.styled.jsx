import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  img {
    border-radius: 20px;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  margin: 40px auto;
  gap: 50px;
`;
const StyledLi = styled.li`
  p {
    font-size: 40px;
    display: flex;
    font-family: "Playfair Display", serif;
    gap: 10px;
    font-weight: 700;
    align-items: center;
    span {
      font-size: 18px;
      font-weight: 400;
      font-family: "Raleway", sans-serif;
      max-width: 150px;
    }
  }
`;
const Desc = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  margin-bottom: 20px;
  font-family: "Raleway", sans-serif;
`;
const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 40px;
    max-width: 500px;
    font-family: "Black Ops One", cursive;
  }
  .descWrap {
    max-width: 600px;
  }
  button {
    background-color: #2c59ec;
    color: #fff;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  margin-bottom: 40px;
`;
export { Container, StyledUl, StyledLi, Desc, ContentWrap };
