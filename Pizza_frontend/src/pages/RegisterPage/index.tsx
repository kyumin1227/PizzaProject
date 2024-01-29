import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createUser } from "../../api/user";

const RegisterPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateUser = async () => {
    await createUser(id, password, email);
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
      <Button variant="contained" onClick={handleCreateUser}>
        Create
      </Button>
    </>
  );
};

export default RegisterPage;
