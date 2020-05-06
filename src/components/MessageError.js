// Dependencies
import React from "react";

// MaterialUI
import { Grid, Box, Typography } from "@material-ui/core";

// Image
import ErrorImage from "../assets/images/error.png";

const MessageError = (props) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={3}
  >
    <Box>
      <Box>
        <img src={ErrorImage} width={300} alt={"error"} />
      </Box>
      <Typography variant="h6" align="center">
        {props.text}
      </Typography>
    </Box>
  </Grid>
);

export default MessageError;
