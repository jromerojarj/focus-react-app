// Dependencies
import React from "react";

// Components
import { TemplateUI, MessageError } from "../../components/";
import { withRouter, Link } from "react-router-dom";

// Material UI
import { Container } from "@material-ui/core";

const NotFound = () => (
  <TemplateUI title="Not Found">
    <Container>
      <MessageError text="Not Found" />
      <div style={{ width: "100%", textAlign: "center", padding: 50 }}>
        <Link to="/">Go home</Link>
      </div>
    </Container>
  </TemplateUI>
);

export default withRouter(NotFound);
