import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { createUser } from "../../api/user";
import { SHA256 } from "crypto-js";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleCreateUser = async () => {
    setErrorMessage("");
    const key = {
      salt: import.meta.env.PASSWORD_KEY,
    };
    const passwordHash = SHA256(password, key).toString();
    // try {
    const data = await createUser(id, passwordHash, email);
    // } catch (error) {
    // if (isAxiosError(error)) {
    // setErrorMessage(error.response?.data);
    // }
    // }
    if (data.status == 200) {
      navigate("/");
    }
  };

  return (
    <>
      <TextField
        id="id"
        label="Id"
        value={id}
        onChange={(e) => {
          setId(e.currentTarget.value);
        }}
      ></TextField>
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.currentTarget.value);
        }}
      ></TextField>
      <TextField
        id="email"
        label="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      ></TextField>
      <Typography>{errorMessage}</Typography>
      <Button variant="contained" onClick={handleCreateUser}>
        Create
      </Button>
    </>
  );
};

export default RegisterPage;
