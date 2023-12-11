import { TextField } from "@mui/material";
import {
  Container,
  Form,
  InputWrapper,
  SubmitButton,
  SignInWrap,
  Title,
  Decr,
  SignUpWrap,
  SignUpLink,
  SignUpDecr,
} from "./SignIn.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/auth/authThunks";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };
  /* -------------------------------------------------------------------------- */
  return (
    <Container>
      <SignInWrap>
        <Title>Drive on Login</Title>
        <Decr>Hey, enter your details to get sign in to your account</Decr>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <TextField
              id="Usermail"
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
            <TextField
              id="UserPassword"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
          </InputWrapper>
          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
        <SignUpWrap>
          <SignUpDecr> Don't have an account?</SignUpDecr>
          <SignUpLink to="/register">Sign Up</SignUpLink>
        </SignUpWrap>
      </SignInWrap>
    </Container>
  );
};

export default SignIn;
