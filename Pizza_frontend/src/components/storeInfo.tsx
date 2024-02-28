import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const storeInfo = (props) => {
  const url = `/store/${props.url}/order`;
  return (
    <Grid container>
      <Grid item xs={4}>
        <Link to={url}>{props.name}</Link>
      </Grid>
      <Grid item xs={8}>
        <p>
          lat : {props.latitude} lon: {props.longitude}
        </p>
      </Grid>
    </Grid>
  );
};

export default storeInfo;
