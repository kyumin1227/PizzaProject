import { Box, Grid } from "@mui/material";

const storeInfo = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        {props.name}
      </Grid>
      <Grid item xs={8}>
        {props.latitude}
        {props.longitude}
      </Grid>
    </Grid>
  );
};

export default storeInfo;
