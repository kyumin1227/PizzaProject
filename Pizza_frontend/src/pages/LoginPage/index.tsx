import { Button, Grid, TextField } from "@mui/material";

const Login = () => {
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
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            sx={{ mb: 2 }}
            fullWidth
          />
          <Button variant="contained" fullWidth>
            Login
          </Button>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </>
  );
};

export default Login;
