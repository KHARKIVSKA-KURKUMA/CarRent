import styled from "styled-components";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 0px 20px 60px;
  min-height: calc(100vh - 82px);
  @media screen and (min-width: 768px) {
    padding: 0px 80px 60px;
  }
`;

const AccountPage = () => {
  return <Container>Acc</Container>;
};

export default AccountPage;
