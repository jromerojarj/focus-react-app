// Dependencies
import React, { Component } from "react";

// Components
import { TemplateUI } from "../../components/";

// Material UI
import { Container, Typography } from "@material-ui/core";

class VMBoxes extends Component {
  render() {
    return (
      <TemplateUI title="VM Boxes">
        <Container>
          <Typography variant="h4">VM Boxes List</Typography>
        </Container>
      </TemplateUI>
    );
  }
}

export default VMBoxes;
