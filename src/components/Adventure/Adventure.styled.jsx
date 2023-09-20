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
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    margin: 40px auto;
    flex-wrap: nowrap;
    gap: 50px;
    justify-content: flex-start;
  }
`;
const StyledLi = styled.li`
  width: 240px;
  p {
    font-size: 40px;
    display: flex;
    font-family: "Playfair Display", serif;
    gap: 10px;
    font-weight: 700;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 18px;
      font-weight: 400;
      font-family: "Raleway", sans-serif;
      max-width: 150px;
    }
  }
  @media screen and (min-width: 768px) {
    p {
      justify-content: flex-start;
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
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h2 {
    text-align: center;
    font-size: 28px;
    font-family: "Black Ops One", cursive;
  }
  .descWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
    }
  }
  button {
    background-color: #3470ff;
    color: #fff;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    display: none;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 20px;
    align-items: center;
    gap: 4px;
    transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
    @media screen and (min-width: 768px) {
      display: inline-flex;
    }
  }
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 0;
    h2 {
      font-size: 40px;
      max-width: 500px;
      text-align: start;
    }
    .descWrap {
      max-width: 600px;
      display: block;
      p {
        text-align: start;
      }
    }
  }
`;
export { Container, StyledUl, StyledLi, Desc, ContentWrap };
