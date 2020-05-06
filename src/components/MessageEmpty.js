// Dependencies
import React from "react";

// MaterialUI
import { Grid, CardMedia, Box, Typography } from "@material-ui/core";

// Image
import EmptyImage from "../assets/images/empty.png";

const MessageEmpty = (props) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={3}
  >
    <Box>
      <Box align="center">
        <img src={EmptyImage} width={200} />
      </Box>
      <Typography variant="h6" align="center">
        {props.text}
      </Typography>
    </Box>
  </Grid>
);

export default MessageEmpty;
