// Dependencies
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Components
import { TemplateUI } from "../../components/";

// Material UI
import { Container, Typography } from "@material-ui/core";

class Calls extends Component {
  render() {
    return (
      <TemplateUI title="Calls" back={false}>
        <Container>
          <Typography variant="h4">Calls List</Typography>
        </Container>
      </TemplateUI>
    );
  }
}

export default withRouter(Calls);
