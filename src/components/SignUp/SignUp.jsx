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
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
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
  const isValid =
    Boolean(passwordError) !== true &&
    Boolean(error) !== true &&
    Boolean(userNameError) !== true &&
    email !== "" &&
    password !== "" &&
    username !== "";
  /* -------------------------------------------------------------------------- */
  const handleEmailChange = (e) => {
    const newEmail = e.currentTarget.value;
    setEmail(newEmail);
    if (newEmail === "" || emailRegExp.test(newEmail)) {
      setError("");
    } else {
      setError("Invalid e-mail format");
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.currentTarget.value;
    setPassword(newPassword);
    if (newPassword === "" || newPassword.length >= 6) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 6 characters long");
    }
  };
  const handleUserNameChange = (e) => {
    const newUserName = e.currentTarget.value;
    setUsername(newUserName);
    if (newUserName === "" || newUserName.length >= 3) {
      setUserNameError("");
    } else {
      setUserNameError("Username must be at least 3 characters long");
    }
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
              onChange={handleUserNameChange}
              error={!!userNameError}
              helperText={userNameError}
              required
            />
            <TextField
              id="Email"
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              error={!!error}
              helperText={error}
              required
            />
            <TextField
              id="Password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}
              required
            />
          </InputWrapper>
          <SubmitButton disabled={!isValid} type="submit">
            Sign Up
          </SubmitButton>
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
