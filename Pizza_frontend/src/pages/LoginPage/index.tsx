import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { postLogin } from "../../api/login";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleOnClickLogin = async () => {
    if (id == "" || password == "") {
      setErrorMessage("id 또는 password를 입력해주세요");
      return;
    }
    const res = await postLogin(id, password);
    const { status } = res;

    console.log(status);

    if (status == 200) {
      navigate("/");
    } else if (status == 400) {
      setErrorMessage("id 또는 password가 올바르지 않습니다.");
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs></Grid>
        <Grid container xs={8} justifyContent="center">
          <TextField
            id="id"
            label="Id"
            variant="outlined"
            sx={{ my: 2 }}
            fullWidth
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <FormControl sx={{ mb: 2 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button variant="contained" fullWidth onClick={handleOnClickLogin}>
            Login
          </Button>
          <ErrorBox>{errorMessage}</ErrorBox>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </>
  );
};

export default Login;

const ErrorBox = styled.p`
  margin-top: 10px;
`;
