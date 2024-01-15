import { Grid, TextField } from "@mui/material";

const Login = () => {
  return (
    <>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={10} justifyItems="center">
          <TextField id="id" label="Id" variant="outlined" sx={{ my: 3 }} />
          <TextField id="password" label="Password" variant="outlined" />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </>
  );
};

export default Login;
