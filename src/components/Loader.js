// Dependencies
import React from "react";

// MaterialUI
import { Grid, CircularProgress } from "@material-ui/core";

const Loader = (props) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={3}
  >
    <CircularProgress />
  </Grid>
);

export default Loader;
