import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Container, Form, Close } from "./ContactForm.styled";
import PropTypes from "prop-types";

function ContactForm({ handleClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");
  /* ---------------------------------- CLEAN --------------------------------- */
  const cleanField = () => {
    setName("");
    setEmail("");
    setMess("");
  };
  /* --------------------------------- SUBMIT --------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    // const UserMessage = {
    //   name,
    //   email,
    //   message: mess,
    // };
    handleClose();
    cleanField();
  };

  return (
    <Container>
      <Close onClick={handleClose} size={25} color="#ed1313" />
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name:"
          variant="outlined"
          value={name}
          pattern="/^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/"
          onChange={(e) => setName(e.currentTarget.value)}
          required
        />
        <TextField
          id="outlined-basic"
          label="Email:"
          variant="outlined"
          value={email}
          pattern="/\A[^@]+@([^@\.]+\.)+[^@\.]+\z/"
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Message:"
          multiline
          value={mess}
          pattern="/^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/"
          onChange={(e) => setMess(e.currentTarget.value)}
          maxRows={4}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

ContactForm.propTypes = {
  handleClose: PropTypes.func,
};
export default ContactForm;
