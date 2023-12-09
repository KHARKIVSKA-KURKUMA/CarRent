import { TextField } from "@mui/material";
import {
  Container,
  Form,
  InputWrapper,
  SubmitButton,
  SignUpWrap,
  Title,
  Decr,
  SignInWrap,
  SignInLink,
  SignInDecr,
} from "./SignUp.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/auth/authThunks";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name: username,
        email,
        password,
      })
    );
    setEmail("");
    setPassword("");
    setUsername("");
  };
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Container>
      <SignUpWrap>
        <Title>Register</Title>
        <Decr>Hey, enter your details to create your account</Decr>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <TextField
              id="Username"
              label="Username"
              variant="outlined"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
              required
            />
            <TextField
              id="Email"
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
            <TextField
              id="Password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
          </InputWrapper>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </Form>
        <SignInWrap>
          <SignInDecr> Already registered?</SignInDecr>
          <SignInLink to="/login">Sign In</SignInLink>
        </SignInWrap>
      </SignUpWrap>
    </Container>
  );
};

export default SignUp;
